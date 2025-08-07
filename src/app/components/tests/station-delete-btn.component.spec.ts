import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationDeleteBtnComponent } from '../station-delete-btn/station-delete-btn.component';

describe('StationDeleteBtnComponent', () => {
  let component: StationDeleteBtnComponent;
  let fixture: ComponentFixture<StationDeleteBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationDeleteBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationDeleteBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
