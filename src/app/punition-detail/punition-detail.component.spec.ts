import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunitionDetailComponent } from './punition-detail.component';

describe('PunitionDetailComponent', () => {
  let component: PunitionDetailComponent;
  let fixture: ComponentFixture<PunitionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunitionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PunitionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
