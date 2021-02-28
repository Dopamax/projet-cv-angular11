import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotopersonnelComponent } from './photopersonnel.component';

describe('PhotopersonnelComponent', () => {
  let component: PhotopersonnelComponent;
  let fixture: ComponentFixture<PhotopersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotopersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotopersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
