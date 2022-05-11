import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoStagiaireComponent } from './info-stagiaire.component';

describe('InfoStagiaireComponent', () => {
  let component: InfoStagiaireComponent;
  let fixture: ComponentFixture<InfoStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoStagiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
