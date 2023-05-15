import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpInfoModalComponent } from './exp-info-modal.component';

describe('ExpInfoModalComponent', () => {
  let component: ExpInfoModalComponent;
  let fixture: ComponentFixture<ExpInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpInfoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
