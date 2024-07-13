import { Component } from '@angular/core';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { HeroIntroComponent } from './hero-intro/hero-intro.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroBannerComponent, HeroIntroComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
