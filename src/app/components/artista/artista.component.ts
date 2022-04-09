import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista:any={};
  loadingArtist:boolean;
  topTracks:any[] = [];

  constructor(private activatedRoute:ActivatedRoute,
              private spotifyService:SpotifyService) {
    this.loadingArtist = true;            
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id'];
      this.getArtista(id);
      this.getTopTracks(id);
    });

    
   }

  ngOnInit(): void {
  }

  getArtista(id:string){
    this.loadingArtist = true; 
    this.spotifyService.getArtista(id).subscribe(artista =>{
      // console.log(artista);
       this.artista = artista;
       this.loadingArtist = false;
    });
  }

  getTopTracks(id:string){
    this.spotifyService.getTopTracks(id).subscribe(topTracks =>{
        console.log(topTracks);
        this.topTracks = topTracks;
    });
  }

}
