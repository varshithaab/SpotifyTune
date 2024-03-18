import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsongsComponent } from './viewsongs.component';

describe('ViewsongsComponent', () => {
  let component: ViewsongsComponent;
  let fixture: ComponentFixture<ViewsongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewsongsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
