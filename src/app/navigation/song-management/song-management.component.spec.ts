import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongManagementComponent } from './song-management.component';

describe('SongManagementComponent', () => {
  let component: SongManagementComponent;
  let fixture: ComponentFixture<SongManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SongManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SongManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
