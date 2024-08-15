import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
@Component({
  selector: 'app-card-music',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './card-music.component.html',
  styleUrl: './card-music.component.scss',
})
export class CardMusicComponent {
  @Input({ required: true }) id: string = '';
  @Input({ required: true }) author: string = '';
  @Input({ required: true }) music: string = '';

  @Output() onEventRemoveMusic = new EventEmitter();
  @Output() onEventEditMusic = new EventEmitter();

  editMusic() {
    this.onEventEditMusic.emit();
  }

  removeMusic() {
    this.onEventRemoveMusic.emit();
  }
}
