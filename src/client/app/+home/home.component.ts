import { Component } from '@angular/core';
import { PreviewComponent } from '../shared/preview/index';

@Component({
  moduleId: module.id,
  selector: 'md-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [PreviewComponent]
})
export class HomeComponent {
}
