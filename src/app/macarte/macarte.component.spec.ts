import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacarteComponent } from './macarte.component';

describe('MacarteComponent', () => {
  let component: MacarteComponent;
  let fixture: ComponentFixture<MacarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacarteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
