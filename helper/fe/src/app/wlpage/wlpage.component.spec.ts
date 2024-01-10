import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlpageComponent } from './wlpage.component';

describe('WlpageComponent', () => {
  let component: WlpageComponent;
  let fixture: ComponentFixture<WlpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WlpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WlpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
