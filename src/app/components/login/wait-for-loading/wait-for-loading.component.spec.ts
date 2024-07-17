import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitForLoadingComponent } from './wait-for-loading.component';

describe('WaitForLoadingComponent', () => {
  let component: WaitForLoadingComponent;
  let fixture: ComponentFixture<WaitForLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaitForLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaitForLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
