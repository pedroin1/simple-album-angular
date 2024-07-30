import { Component } from '@angular/core';
import { MainCardComponent } from './components/main-card/main-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'simple-album-angular';
}
