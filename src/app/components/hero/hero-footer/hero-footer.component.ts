import { Component } from '@angular/core';
import { ExploreButtonComponent } from '../../shared/explore-button/explore-button.component';

@Component({
  selector: 'app-hero-footer',
  standalone: true,
  imports: [ExploreButtonComponent],
  templateUrl: './hero-footer.component.html',
  styleUrl: './hero-footer.component.scss'
})
export class HeroFooterComponent {
  
}
