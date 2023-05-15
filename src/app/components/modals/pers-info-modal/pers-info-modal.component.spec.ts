import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersInfoModalComponent } from './pers-info-modal.component';

describe('PersInfoModalComponent', () => {
  let component: PersInfoModalComponent;
  let fixture: ComponentFixture<PersInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersInfoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
