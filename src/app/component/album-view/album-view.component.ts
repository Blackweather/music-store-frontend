import { Component, OnInit } from '@angular/core';
import {Album} from '../../model/album';
import {AlbumService} from '../../service/album.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css']
})
export class AlbumViewComponent implements OnInit {
  album: Album;

  constructor(private service: AlbumService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findAlbum(Number(id)).subscribe(album => this.album = album);
  }

}
