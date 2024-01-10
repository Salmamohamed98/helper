import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmanagementComponent } from './acmanagement.component';

describe('AcmanagementComponent', () => {
  let component: AcmanagementComponent;
  let fixture: ComponentFixture<AcmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcmanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
