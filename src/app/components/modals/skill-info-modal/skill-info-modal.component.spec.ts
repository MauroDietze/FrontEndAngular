import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillInfoModalComponent } from './skill-info-modal.component';

describe('SkillInfoModalComponent', () => {
  let component: SkillInfoModalComponent;
  let fixture: ComponentFixture<SkillInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillInfoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
