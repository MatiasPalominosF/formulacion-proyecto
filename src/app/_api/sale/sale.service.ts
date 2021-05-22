import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/_models/product2';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private saleCollection: AngularFirestoreCollection<Product>;
  private sales: Observable<Product[]>;
  private saleDoc: AngularFirestoreDocument<Product>;

  constructor(public afs: AngularFirestore) {
    this.saleCollection = afs.collection<Product>('product');
    this.sales = this.saleCollection.valueChanges();
  }

  addSaleProduct(sale: Product, idBoss: string): void {
    var tempId = this.afs.createId();
    sale.id = tempId;

    this.afs.collection('sale').doc(`${idBoss}`).collection('saleInfo').doc(tempId).set(sale);
  }

  updateSale(producto: Product, idSale: string, idBoss: string) {
    this.saleDoc = this.afs.collection('sale').doc(`${idBoss}`).collection<Product>('saleInfo').doc(`${idSale}`);
    this.saleDoc.update(producto);
  }

  getFullInfoSaleNotCancelled(uidBoss: string) {
    return this.sales = this.afs.collection('sale').doc(`${uidBoss}`).collection<Product>('saleInfo', ref => ref.where('cancellation', '==', false))
      .snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Product;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getFullInfoSale(uidBoss: string): Observable<Product[]> {
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



  getCancellationSale(uidBoss: string) {
    return this.sales = this.afs.collection('sale').doc(`${uidBoss}`).collection<Product>('saleInfo', ref => ref.where('cancellation', '==', true)).snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Product;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }


}
