import { Injectable } from '@angular/core';

import { Picture } from './picture';
import { GALLERY } from './mock-gallery';

@Injectable()
export class GalleryService {
  
  getGallery(): Promise<Picture[]> {
    return Promise.resolve(GALLERY);
  }

  getGallerySlowly(): Promise<Picture[]> {
    return new Promise(resolve => {
     
      setTimeout(() => resolve(this.getGallery()), 2000);
    });
  }
}