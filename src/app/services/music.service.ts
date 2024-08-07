import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMusic } from '../components/models/Music';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private musics$ = new BehaviorSubject<IMusic[]>([]);

  constructor(private httpClient: HttpClient) {}

  getMusicsObservable() {
    return this.musics$.asObservable();
  }

  getMusics() {
    return this.httpClient.get<IMusic[]>('http://localhost:3000/musics');
  }

  createMusic(newMusic: IMusic) {
    return this.httpClient.post<IMusic>(
      'http://localhost:3000/musics',
      newMusic
    );
  }

  updateMusic(updatedMusic: IMusic) {
    return this.httpClient.put<IMusic>(
      'http://localhost:3000/musics/' + updatedMusic.id,
      updatedMusic
    );
  }

  deleteMusic(musicId: number) {
    return this.httpClient.delete<void>(
      'http://localhost:3000/musics/' + musicId
    );
  }
}
