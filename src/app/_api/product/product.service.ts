import { ProductInterface } from './../../_models/product';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Observable<ProductInterface[]>;
  private productDoc: AngularFirestoreDocument<ProductInterface>;
  constructor(
    public afs: AngularFirestore
  ) { }

  getFullInfoProduct(uidBoss) {
    return this.products = this.afs.collection('product').doc(`${uidBoss}`).collection<ProductInterface>('productInfo')
      .snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ProductInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  deleteProduct(idProduct: string, idBoss: string): void {
    this.productDoc = this.afs.collection('product').doc(`${idBoss}`).collection<ProductInterface>('productInfo').doc(`${idProduct}`);
    this.productDoc.delete();
  }
}
