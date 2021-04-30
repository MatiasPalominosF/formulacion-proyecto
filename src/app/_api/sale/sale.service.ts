import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/_models/product2';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private workerCollection: AngularFirestoreCollection<Product>;
  private sales: Observable<Product[]>;

  constructor(public afs: AngularFirestore) {
    this.workerCollection = afs.collection<Product>('product');
    this.sales = this.workerCollection.valueChanges();
  }

  addSaleProduct(sale: Product, idBoss: string): void {
    var tempId = this.afs.createId();
    sale.id = tempId;

    this.afs.collection('sale').doc(`${idBoss}`).collection('saleInfo').doc(tempId).set(sale);
  }

  getFullInfoSale(uidBoss: string) {
    return this.sales = this.afs.collection('sale').doc(`${uidBoss}`).collection<Product>('saleInfo')
      .snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Product;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
}
