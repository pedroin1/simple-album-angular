import { Component, inject, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { AsyncPipe } from '@angular/common';
import { IMusic } from '../models/Music';
import { FormsModule } from '@angular/forms';
import { CardMusicComponent } from '../card-music/card-music.component';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [AsyncPipe, FormsModule, CardMusicComponent],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.scss',
})
export class MainCardComponent implements OnInit {
  id = 0;
  author = '';
  music = '';

  musicService = inject(MusicService);
  musicList$ = this.musicService.getMusicsObservable();

  clearFields() {
    this.id = 0;
    this.author = '';
    this.music = '';
  }

  completeFieldsToEdit(id: number, author: string, music: string) {
    this.id = id;
    this.author = author;
    this.music = music;
  }

  onCreateMusic() {
    const randomId = Math.floor(Math.random() * 1000);
    const newMusic: IMusic = {
      id: randomId,
      author: this.author,
      music: this.music,
    };

    this.musicService.createMusic(newMusic).subscribe(() => {
      this.musicList$ = this.musicService.getMusics();
    });
  }

  onUpdateMusic() {
    const updatedMusic: IMusic = {
      id: this.id,
      author: this.author,
      music: this.music,
    };

    this.musicService.updateMusic(updatedMusic).subscribe(() => {
      this.musicList$ = this.musicService.getMusics();
    });
  }

  onRemoveMusic(id: number) {
    this.musicService.deleteMusic(id).subscribe(() => {
      this.musicList$ = this.musicService.getMusics();
    });
  }

  ngOnInit(): void {
    this.musicList$ = this.musicService.getMusics();
  }
}
