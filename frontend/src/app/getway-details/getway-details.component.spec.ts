import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetwayDetailsComponent } from './getway-details.component';

describe('GetwayDetailsComponent', () => {
  let component: GetwayDetailsComponent;
  let fixture: ComponentFixture<GetwayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetwayDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetwayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
