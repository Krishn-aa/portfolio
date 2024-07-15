import { Component, Input, input } from '@angular/core';
import { SectionHeadingComponent } from '../shared/section-heading/section-heading.component';
import { SectionSeparatorComponent } from '../shared/section-separator/section-separator.component';
import { ExploreButtonComponent } from "../shared/explore-button/explore-button.component";
import { AboutMeSkillCardComponent } from './about-me-skill-card/about-me-skill-card.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [SectionHeadingComponent, SectionSeparatorComponent, ExploreButtonComponent, AboutMeSkillCardComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  @Input() content=''
}
