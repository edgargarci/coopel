import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaServiceFirebaseComponent } from './prueba-service-firebase.component';

describe('PruebaServiceFirebaseComponent', () => {
  let component: PruebaServiceFirebaseComponent;
  let fixture: ComponentFixture<PruebaServiceFirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaServiceFirebaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaServiceFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
