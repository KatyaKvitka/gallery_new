import { Component, OnInit } from '@angular/core';

import { Picture } from './picture';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GalleryService]
})
export class AppComponent implements OnInit{
	
  gallery: Picture[];
  selectedPicture: Picture;

  onSelect(picture: Picture): void {
    this.selectedPicture = Object.assign({}, picture);
  }

  constructor(private galleryService: GalleryService) {}

  getGallery(): void {
    this.galleryService.getGallery().then(gallery => this.gallery = gallery);
  }

  ngOnInit(): void {
    this.getGallery();
  }

  getStyle(picture){
    return picture.image;
  }

  newFileName : string;
  newFile: Picture;

  addFile(event) {
        let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        
        this.newFileName = "url('\./assets/images/"+files[0].name+"'\)";
       
        this.newFile = {
            "id": this.gallery.length, 
            "messages": [], 
            "like": 0, 
            "dislike": 0, 
            "image": this.newFileName, 
            "addClass": "grid-item"
        }
        this.gallery.push(this.newFile);        
    }

}
