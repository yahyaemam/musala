import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGetwaysComponent } from './list-getways.component';

describe('ListGetwaysComponent', () => {
  let component: ListGetwaysComponent;
  let fixture: ComponentFixture<ListGetwaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGetwaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGetwaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
