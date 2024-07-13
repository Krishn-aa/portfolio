import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreButtonComponent } from './explore-button.component';

describe('ExploreButtonComponent', () => {
  let component: ExploreButtonComponent;
  let fixture: ComponentFixture<ExploreButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
