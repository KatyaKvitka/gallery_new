import { Component, Input } from '@angular/core';
import { Picture } from './picture';

import { GalleryService } from './gallery.service';

@Component({
  selector: 'picture-detail',
  styleUrls: ['./app.component.css'],
  providers: [GalleryService],
  templateUrl: './picture-detail.html'
})

export class PictureDetailComponent {
  @Input() picture: Picture;
  
  newMassage: Object;
  newName: string;
  newText: string;
  closePopup(){
    this.picture = null;
  }

  addDislike(dislike){
    this.picture.dislike = dislike+1;
  }

  addLike(like){
    this.picture.like = like+1;
  }

  getStyle(picture){
    return picture.image;

  }

  addMessage(event){
    this.newMassage = {
      "author": this.newName,
      "text": this.newText,
      "data": new Date()  
    }
    this.picture.messages.push(this.newMassage);
    this.newName ="";
    this.newText="";
  }
}
