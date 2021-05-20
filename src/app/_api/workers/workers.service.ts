import { WorkersInterface } from './../../_models/workers';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  private workerCollection: AngularFirestoreCollection<WorkersInterface>;
  private workers: Observable<WorkersInterface[]>;
  private workerDoc: AngularFirestoreDocument<WorkersInterface>;
  private worker: Observable<WorkersInterface>;
  public selectedWorker: WorkersInterface = {}

  constructor(
    public afs: AngularFirestore
  ) {
    this.workerCollection = afs.collection<WorkersInterface>('workers');
    this.workers = this.workerCollection.valueChanges();
  }

  getFullInfoEmployees(uidBoss) {
    return this.workers = this.afs.collection<WorkersInterface>('users', ref => ref.where('uidboss', '==', `${uidBoss}`))
      .snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as WorkersInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOneWorker(idWorker: string, idBoss: string) {
    this.workerDoc = this.afs.collection('workers').doc(`${idBoss}`).collection('workersInfo').doc<WorkersInterface>(`${idWorker}`);
    return this.worker = this.workerDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as WorkersInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addWorker(worker: WorkersInterface, idBoss: string): void {
    let workerId = worker.id;
    this.afs.collection<WorkersInterface>('users').doc(`${workerId}`).set(worker).catch(function (error) {
      // An error happened.
      console.log(error);
    });
    //this.afs.collection('workers').doc(`${idBoss}`).collection<WorkersInterface>('workersInfo').doc(`${workerId}`).set(worker);
  }

  updateWorker(worker: WorkersInterface, idBoss: string): boolean {
    let idWorker = worker.id;
    this.workerDoc = this.afs.collection<WorkersInterface>('users').doc(`${idWorker}`);
    try {
      this.workerDoc.update(worker);
      return true;
    } catch (error) {
      return false;
    }

  }

  deleteWorker(idWorker: string, idBoss: string): void {
    this.workerDoc = this.afs.collection<WorkersInterface>('users').doc(`${idWorker}`);
    this.workerDoc.delete();
  }
}
