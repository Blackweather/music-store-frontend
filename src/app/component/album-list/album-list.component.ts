import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Album} from '../../model/album';
import {AlbumService} from '../../service/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums: Observable<Album[]>;

  constructor(private service: AlbumService) {
  }

  ngOnInit() {
    this.albums = this.service.findAllAlbums();
  }

  remove(album: Album) {
    this.service.removeAlbum(album).subscribe(
      () => this.ngOnInit());
  }

}
