import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-me-skill-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me-skill-card.component.html',
  styleUrl: './about-me-skill-card.component.scss',
})
export class AboutMeSkillCardComponent {
  skills = [
    {
      url: 'skills-design.svg',
      title: 'DESIGN',
      description:
        'I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.',
    },
    {
      url: 'skills-development.svg',
      title: 'DEVELOPER',
      description:
        'I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.',
    },
    {
      url: 'skills-maintainance.svg',
      title: 'MAINTENANCE',
      description:
        'I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.',
    },
  ];
}
