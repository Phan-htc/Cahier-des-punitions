import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerPunitionComponent } from './lister-punition.component';

describe('ListerPunitionComponent', () => {
  let component: ListerPunitionComponent;
  let fixture: ComponentFixture<ListerPunitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerPunitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerPunitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
