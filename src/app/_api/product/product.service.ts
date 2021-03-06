import { ProductInterface } from './../../_models/product';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { Product } from 'src/app/_models/product2';
import { Ingredient } from 'src/app/_models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private workerCollection: AngularFirestoreCollection<ProductInterface>;
  private products: Observable<ProductInterface[]>;
  private productDoc: AngularFirestoreDocument<ProductInterface>;
  private product: Observable<ProductInterface>;
  public selectedProduct: ProductInterface = {};
  public productListSelected: Array<Product> = [];
  public ingredientsSelected: Ingredient[] = [];
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
    return this.products = this.afs.collection('product').doc(`${uidBoss}`).collection<ProductInterface>('productInfo', ref => ref.where('ismaterial', '==', true)).snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ProductInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getProductById(uidBoss: string, idProduct: string) {
    this.productDoc = this.afs.doc<ProductInterface>(`product/${uidBoss}/productInfo/${idProduct}`);
    return this.product = this.productDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as ProductInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  getProductById2(uidBoss: string, idProduct: string) {
    return this.afs.firestore.collection('product').doc(`${uidBoss}`).collection('productInfo').where("id", "==", idProduct).get();

    //return this.afs.collection('product').doc(`${uidBoss}`).collection<ProductInterface>('productInfo', ref => ref.where('id', '==', idProduct)).get();
  }

  addProduct(producto: ProductInterface, idBoss: string): void {
    var tempId = this.afs.createId();
    producto.id = tempId;
    console.log("Producto en service: ", producto.id);
    this.afs.collection('product').doc(`${idBoss}`).collection('productInfo').doc(tempId).set(producto); //SE SETEA CON UN ID ESPECÍFICO
    //this.afs.collection('product').doc(`${idBoss}`).collection('productInfo').add(producto); //SE SETEA CON UN ID ALEATORIO QUE DA FIREBASE
  }

  updateProduct(producto: ProductInterface, idProduct: string, idBoss: string) {
    //console.log(producto);
    console.log("IDPRODUCT:", idProduct);
    this.productDoc = this.afs.collection('product').doc(`${idBoss}`).collection<ProductInterface>('productInfo').doc(`${idProduct}`);
    this.productDoc.update(producto);
  }

  updateFieldOnProduct(idProduct: string, idBoss: string, value: string) {
    this.afs.collection('product').doc(`${idBoss}`).collection('productInfo').doc(`${idProduct}`).update({ "stock": value });
  }

  deleteProduct(idProduct: string, idBoss: string): void {
    this.productDoc = this.afs.collection('product').doc(`${idBoss}`).collection<ProductInterface>('productInfo').doc(`${idProduct}`);
    this.productDoc.delete();
  }




}
