import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/_models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clientCollection: AngularFirestoreCollection<Client>;
  private clientDoc: AngularFirestoreDocument<Client>;
  private clients: Observable<Client[]>;
  public selectedClient: Client = {};


  constructor(public afs: AngularFirestore) {
    this.clientCollection = afs.collection<Client>('clients');
    this.clients = this.clientCollection.valueChanges();
  }

  getFullInfoClient(uidBoss: string) {
    return this.clients = this.afs.collection('clients').doc(`${uidBoss}`).collection<Client>('clientsInfo')
      .snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Client;
          data.rut = action.payload.doc.id;
          return data;
        });
      }));
  }

  addClient(client: Client, idBoss: string): void {
    let idClient = client.rut;
    this.afs.collection('clients').doc(`${idBoss}`).collection<Client>('clientsInfo').doc(`${idClient}`).set(client);
  }

  updateWorker(client: Client, idBoss: string): void {
    let idClient = client.rut;
    this.clientDoc = this.afs.collection('clients').doc(`${idBoss}`).collection<Client>('clientsInfo').doc(`${idClient}`);
    this.clientDoc.update(client);
  }

  deleteClient(idClient: string, idBoss: string): void {
    this.clientDoc = this.afs.collection('clients').doc(`${idBoss}`).collection<Client>('clientsInfo').doc(`${idClient}`);
    this.clientDoc.delete();
  }
}
