import { Component, OnInit } from '@angular/core';
import {Band} from '../../model/band';
import {AlbumService} from '../../service/album.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-band-edit',
  templateUrl: './band-edit.component.html',
  styleUrls: ['./band-edit.component.css']
})
export class BandEditComponent implements OnInit {
  band: Band;

  constructor(private service: AlbumService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id == null) {
      this.band = new Band();
    } else {
      this.service.findBand(Number(id)).subscribe(band => this.band = band);
    }
  }

  save() {
    this.service.saveBand(this.band).subscribe(() => this.router.navigateByUrl('/bands'));
  }

}
