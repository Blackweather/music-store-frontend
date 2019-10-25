import { Component, OnInit } from '@angular/core';
import {Album} from '../../model/album';
import {Band} from '../../model/band';
import {Genre} from '../../model/genre.enum';
import {AlbumService} from '../../service/album.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css']
})
export class AlbumEditComponent implements OnInit {

  album: Album;

  availableBands: Band[];

  availableGenres = Genre;

  genreKeys: string[];

  constructor(private service: AlbumService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id == null) {
      this.album = new Album();
    } else {
      this.service.findAlbum(Number(id)).subscribe(album => this.album = album);
    }

    this.service.findAllBands().subscribe(bands => this.availableBands = bands);

    this.genreKeys = Object.keys(this.availableGenres).filter(k => !isNaN(Number(k)));
  }

  save() {
    this.service.saveAlbum(this.album).subscribe(() => this.router.navigateByUrl('/albums'));
  }

  compareBands(band1: Band, band2: Band): boolean {
    return band1 && band2 ? band1.id === band2.id : band1 === band2;
  }

}
