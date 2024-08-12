import { Injectable } from '@angular/core';
import { AlbumInterface } from './album-interface';
import { ALBUMS } from '../mock-album';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  constructor() { }
  albums:AlbumInterface[]=ALBUMS;
  getalbums():AlbumInterface[]{
    return this.albums;
  }

}
