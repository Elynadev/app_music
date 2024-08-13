import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { AlbumServiceService } from '../album-service.service';
import { AlbumInterface } from '../album-interface';
import { AlbumlistServiceService } from '../albumlist-service.service';
import { AlbumListInterface } from '../album-list-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums?:AlbumInterface[];
  lists?:AlbumListInterface[];
  albumsId!:any;
  albumU!:any;
  constructor (private AlbumService:AlbumServiceService,
    private route:ActivatedRoute,
    private albumlistService:AlbumlistServiceService){};
  ngOnInit(): void {
    
    this.albums=this.AlbumService.getalbums();
  }
onSee(id:number){
  console.log('bonjour')
}
id:string="";
// afficherDetail (id:string){
//   console.log(this.albums=this.AlbumService.getalbums());
//   console.log(this.albums.find( ()=>this.albumlistService.getlist()));

//   console.log(this.lists?.find(()=>this.albumlistService.getlist()))
// }

@Output() passValue = new EventEmitter<boolean>();
affiche:boolean=false;
onSave(){
  this.affiche=!this.affiche;
  this.passValue.emit(this.affiche);
  console.log("okki oool");
}

@Input() chanson!:AlbumInterface;

shown(id:string){
  this.albumsId=this.route.snapshot.paramMap.get('id');
 console.log(this.albumsId)
 console.log(id)
  this.albumU = this.AlbumService.getalbum(id);
 console.log(this.albumU);
 return this.albumU;
 

}

}
