import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeQuizComponent } from './before-quiz.component';

describe('BeforeQuizComponent', () => {
  let component: BeforeQuizComponent;
  let fixture: ComponentFixture<BeforeQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeforeQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeforeQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
