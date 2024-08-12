import { Injectable } from '@angular/core';
import { AlbumListInterface } from './album-list-interface';
import { ALBUM_LISTS } from '../mock-album';

@Injectable({
  providedIn: 'root'
})
export class AlbumlistServiceService {

  constructor() { }
  albums_list:AlbumListInterface[]=ALBUM_LISTS;
  getlist():AlbumListInterface[]{
    return this.albums_list;
  }
}
