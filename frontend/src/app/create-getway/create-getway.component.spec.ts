import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGetwayComponent } from './create-getway.component';

describe('CreateGetwayComponent', () => {
  let component: CreateGetwayComponent;
  let fixture: ComponentFixture<CreateGetwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGetwayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGetwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
