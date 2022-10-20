import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TestCollectionsService {

  constructor(private firestore: Firestore) { }

  public createEmployee(employ: any) {
    const placeRef = collection(this.firestore, 'employees');
    const promise$ = addDoc(placeRef, employ)

    const observable$ = new Observable((observer) => { promise$.then(value => observer.next(value)) })
    return observable$
  }

  public getEmployees(): Observable<any> {
    const placeRef = collection(this.firestore, 'employees');
    return collectionData(placeRef, { idField: 'id' }) as Observable<any>

  }
}
