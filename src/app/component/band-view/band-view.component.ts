import { Component, OnInit } from '@angular/core';
import {Band} from '../../model/band';
import {AlbumService} from '../../service/album.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-band-view',
  templateUrl: './band-view.component.html',
  styleUrls: ['./band-view.component.css']
})
export class BandViewComponent implements OnInit {
  band: Band;

  constructor(private service: AlbumService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findBand(Number(id)).subscribe(band => this.band = band);
  }

}
