import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-music',
  standalone: true,
  imports: [],
  templateUrl: './card-music.component.html',
  styleUrl: './card-music.component.scss',
})
export class CardMusicComponent {
  @Input({ required: true }) id: string = '';
  @Input({ required: true }) author: string = '';
  @Input({ required: true }) music: string = '';

  @Output() onEventRemoveMusic = new EventEmitter();

  removeMusic() {
    this.onEventRemoveMusic.emit();
  }
}
