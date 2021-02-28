import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsPersonnelComponent } from './informationspersonnel.component';

describe('InformationspersonnelComponent', () => {
  let component: InformationsPersonnelComponent;
  let fixture: ComponentFixture<InformationsPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationsPersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
