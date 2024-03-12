import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSideComponent } from './home-side.component';

describe('HomeSideComponent', () => {
  let component: HomeSideComponent;
  let fixture: ComponentFixture<HomeSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
