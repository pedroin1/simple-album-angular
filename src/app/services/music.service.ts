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

  getMusics(): Observable<IMusic[]> {
    return this.httpClient.get<IMusic[]>('http://localhost:3000/musicas');
  }

  createMusic(mewMusic: IMusic): Observable<IMusic[]> {
    return this.httpClient.post<IMusic[]>(
      'http://localhost:3000/musicas',
      mewMusic
    );
  }

  deleteMusic(musicId: number): Observable<void> {
    return this.httpClient.delete<void>(
      `http://localhost:3000/musicas/${musicId}`
    );
  }
}
