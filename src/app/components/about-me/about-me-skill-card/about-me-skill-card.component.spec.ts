import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeSkillCardComponent } from './about-me-skill-card.component';

describe('AboutMeSkillCardComponent', () => {
  let component: AboutMeSkillCardComponent;
  let fixture: ComponentFixture<AboutMeSkillCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeSkillCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeSkillCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
