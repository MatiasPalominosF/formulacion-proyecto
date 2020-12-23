import { WorkersInterface } from './../../_models/workers';
import { UserInterface } from './../../_models/user';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private usersCollection: AngularFirestoreCollection<UserInterface>;
  private users: Observable<UserInterface[]>;
  private userDoc: AngularFirestoreDocument<UserInterface>;
  private user: Observable<UserInterface>;

  ref = firebase.firestore().collection('users');

  constructor(private firestore: AngularFirestore) {
    this.usersCollection = firestore.collection<UserInterface>('users');
    this.users = this.usersCollection.valueChanges();
  }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges(); // use only for login.
  }

  getAllUsers() {
    return this.users = this.usersCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as UserInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getCurrentUser(userId) {
    return this.firestore.collection('users', ref => ref.where('uid', '==', userId)).snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as UserInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOneUser(userId: string) {
    this.userDoc = this.firestore.doc<UserInterface>(`users/${userId}`);
    return this.user = this.userDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as UserInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  createUser(user) {
    return firebase.firestore().collection("users").doc(user.uid).set(user);
  }

  updateUser(user, id): boolean {
    var currentUser = firebase.auth().currentUser;
    console.log("usuario:", user);
    if (currentUser != null) {
      var currentUserInLocalStorage = JSON.parse(localStorage.getItem("currentUser"));
      currentUserInLocalStorage.displayName = user.name + " " + user.lastName;

      localStorage.setItem("currentUser", JSON.stringify(currentUserInLocalStorage));
      this.userDoc = this.firestore.doc<UserInterface>(`users/${id}`);
      currentUser.updateProfile({
        displayName: user.name + " " + user.lastName
      });
      if (this.userDoc.update(user)) {
        return true;
      } else {
        return false;
      }
    }
  }

  deleteUser(idUser: String) {
    this.userDoc = this.firestore.doc<UserInterface>(`users/${idUser}`);
    this.userDoc.delete();

  }

}
