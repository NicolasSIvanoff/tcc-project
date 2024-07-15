import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFinalizationComponent } from './quiz-finalization.component';

describe('QuizFinalizationComponent', () => {
  let component: QuizFinalizationComponent;
  let fixture: ComponentFixture<QuizFinalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizFinalizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizFinalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
