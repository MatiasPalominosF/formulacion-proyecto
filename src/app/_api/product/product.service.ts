import { ProductInterface } from './../../_models/product';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private workerCollection: AngularFirestoreCollection<ProductInterface>;
  private products: Observable<ProductInterface[]>;
  private productDoc: AngularFirestoreDocument<ProductInterface>;
  constructor(
    public afs: AngularFirestore
  ) {
    this.workerCollection = afs.collection<ProductInterface>('product');
    this.products = this.workerCollection.valueChanges();
  }

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

  getMaterial(uidBoss: string) {
    return firebase.firestore().collection('product').doc(`${uidBoss}`).collection('productInfo').where('ismaterial', '==', true);
  }

  getMaterial2(uidBoss: string) {
    return this.products = this.afs.collection('product').doc(`${uidBoss}`).collection<ProductInterface>('productInfo', ref => ref.where('ismaterial', '==', true)).snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ProductInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  addProduct(producto: ProductInterface, idBoss: string): void {
    console.log("Producto en service: ", producto);
    this.afs.collection('product').doc(`${idBoss}`).collection('productInfo').add(producto);
  }

  updateProduct(producto: ProductInterface, idBoss: string) {
    let idProduct = producto.id;
    this.productDoc = this.afs.collection('product').doc(`${idBoss}`).collection<ProductInterface>('productInfo').doc(`${idProduct}`);
    this.productDoc.update(producto);
  }

  deleteProduct(idProduct: string, idBoss: string): void {
    this.productDoc = this.afs.collection('product').doc(`${idBoss}`).collection<ProductInterface>('productInfo').doc(`${idProduct}`);
    this.productDoc.delete();
  }




}
