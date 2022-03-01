import { Injectable, OnInit } from '@angular/core';
import {
  addDoc,
  collection,
  doc,
  Firestore,
  getDoc,
  getDocs,
  query,
  setDoc,
} from '@angular/fire/firestore';
import { IOrder } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  async addOrder(email: string, order: IOrder) {
    await addDoc(collection(this.firestore, 'juaniwk3@gmail.com'), order);
  }

  async getData() {
    let data: IOrder[] = [];
    const q = query(collection(this.firestore, 'juaniwk3@gmail.com'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((snapshot) => {
      data.push(snapshot.data() as IOrder);
    });
    return data;
  }
}
