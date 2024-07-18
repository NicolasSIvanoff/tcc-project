import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourProgressComponent } from './your-progress.component';

describe('YourProgressComponent', () => {
  let component: YourProgressComponent;
  let fixture: ComponentFixture<YourProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YourProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
