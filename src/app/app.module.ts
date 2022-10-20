import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { PruebaServiceFirebaseComponent } from './shared/components/prueba-service-firebase.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaServiceFirebaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    PruebaServiceFirebaseComponent
  ]
})
export class AppModule { }
