import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Album} from '../model/album';
import {Band} from '../model/band';

@Injectable()
export class AlbumService {

  constructor(private http: HttpClient) {
  }

  findAllAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`http://localhost:8080/music-store-rest-1.0-SNAPSHOT/api/albums`);
  }

  findAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`http://localhost:8080/music-store-rest-1.0-SNAPSHOT/api/albums/${id}`);
  }

  removeAlbum(album: Album): Observable<any> {
    return this.http.delete(`http://localhost:8080/music-store-rest-1.0-SNAPSHOT/api/albums/${album.id}`);
  }

  saveAlbum(album: Album): Observable<any> {
    if (album.id) {
      return this.http.put(`http://localhost:8080/music-store-rest-1.0-SNAPSHOT/api/albums/${album.id}`, album);
    } else {
      return this.http.post(`http://localhost:8080/music-store-rest-1.0-SNAPSHOT/api/albums/`, album);
    }
  }

  findAllBands(): Observable<Band[]> {
    return this.http.get<Band[]>(`http://localhost:8080/music-store-rest-1.0-SNAPSHOT/api/bands`);
  }

  findBand(id: number): Observable<Band> {
    return this.http.get<Band>(`http://localhost:8080/music-store-rest-1.0-SNAPSHOT/api/bands/${id}`);
  }

  removeBand(band: Band): Observable<any> {
    return this.http.delete(`http://localhost:8080/music-store-rest-1.0-SNAPSHOT/api/bands/${band.id}`);
  }

  saveBand(band: Band): Observable<any> {
    if (band.id) {
      return this.http.put(`http://localhost:8080/music-store-rest-1.0-SNAPSHOT/api/bands/${band.id}`, band);
    } else {
      return this.http.post(`http://localhost:8080/music-store-rest-1.0-SNAPSHOT/api/bands/`, band);
    }
  }
}
