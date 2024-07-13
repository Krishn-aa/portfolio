import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-button',
  standalone: true,
  imports: [],
  templateUrl: './explore-button.component.html',
  styleUrl: './explore-button.component.scss'
})
export class ExploreButtonComponent {
  @Input() title='';

}
