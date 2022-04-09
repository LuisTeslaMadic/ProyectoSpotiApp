import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas:any[] = [];
  loading:boolean = false;

  constructor(private spotifyService:SpotifyService) { 
    
  }

  ngOnInit(): void {
  }

  buscar(termino:string){
   console.log(termino);
   this.loading = true;
   if(termino.length > 0){
    this.spotifyService.getArtistas(termino).subscribe(data=>{
      // console.log(data.artists.items);
      this.artistas = data;
      this.loading = false;
    })
   }else{
    this.loading = false;
    this.artistas = [];
   }
  }

}
