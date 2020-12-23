import { Observable } from 'rxjs';
import { UserInterface } from './../_models/user';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataApiService {


  constructor(private afs: AngularFirestore) {
    this.usersCollection = afs.collection<UserInterface>('users');
    this.users = this.usersCollection.valueChanges();
  }
  private usersCollection: AngularFirestoreCollection<UserInterface>;
  private users: Observable<UserInterface[]>;

  getAllUsers() {
    return this.users;
  }
  getUserByUid(uid) {
    this.afs.collection('users').snapshotChanges();
    return this.afs.collection('users'), ref => ref.where("uid", "==", uid).valueChanges();
  }

  getCurrentUser2() {
    
  }
  addUser() { }
  updateUser() { }
  deleteUser() { }
}
