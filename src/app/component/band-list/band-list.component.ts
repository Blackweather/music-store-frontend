import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Band} from '../../model/band';
import {AlbumService} from '../../service/album.service';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {

  bands: Observable<Band[]>;

  constructor(private service: AlbumService) { }

  ngOnInit() {
    this.bands = this.service.findAllBands();
  }

  remove(band: Band) {
    this.service.removeBand(band).subscribe(() => this.ngOnInit());
  }

}
