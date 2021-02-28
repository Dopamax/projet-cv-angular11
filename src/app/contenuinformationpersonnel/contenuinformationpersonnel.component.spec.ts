import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuinformationpersonnelComponent } from './contenuinformationpersonnel.component';

describe('ContenuinformationpersonnelComponent', () => {
  let component: ContenuinformationpersonnelComponent;
  let fixture: ComponentFixture<ContenuinformationpersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenuinformationpersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenuinformationpersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
