import { Component, OnInit } from '@angular/core';
import { TestCollectionsService } from '../services/test-collections.service';

@Component({
  selector: 'app-prueba-service-firebase',
  templateUrl: './prueba-service-firebase.component.html',
  styleUrls: ['./prueba-service-firebase.component.scss']
})
export class PruebaServiceFirebaseComponent implements OnInit {

  constructor(private testCollection: TestCollectionsService) { }

  ngOnInit(): void {

    const employ = {
      name: "Pedrito Fernedez",
      age: "32",
      sueldo: "3000"
    }
    this.testCollection.createEmployee(employ).subscribe(resp => {
      console.log('createEmployee', resp);

    });

    this.testCollection.getEmployees().subscribe(
      resp => {
        console.log(resp);

      }
    )
  }



}
