import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTileComponent } from './one-tile.component';

describe('OneTileComponent', () => {
  let component: OneTileComponent;
  let fixture: ComponentFixture<OneTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneTileComponent]
    });
    fixture = TestBed.createComponent(OneTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
