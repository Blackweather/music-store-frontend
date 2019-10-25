import {Band} from './band';
import {Genre} from './genre.enum';

export class Album {
  id: number;

  title: string;

  releaseDate: Date;

  genre: Genre;

  price: number;

  band: Band;
}
