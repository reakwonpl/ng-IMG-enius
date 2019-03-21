import { Component, OnInit } from '@angular/core';
import { ImageService } from '../Services/image.service';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;

  handleData(data)
  { 
    this.imagesFound = true;    
    this.images = data.hits;
   
    console.log(data.hits);    
  }

  handleError(error)
  {
    console.log(error);
  }
  constructor(private imgService:ImageService) { }

  searchImages(query:string)
  {
    this.searching = true;
    return this.imgService.getImage(query).subscribe( d=> this.handleData(d),e => this.handleError(e),() => this.searching = false);
  }

  ngOnInit() {
  }

}
