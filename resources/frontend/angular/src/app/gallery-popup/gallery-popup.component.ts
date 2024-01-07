import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-gallery-popup',
  templateUrl: './gallery-popup.component.html',
  styleUrls: ['./gallery-popup.component.scss']
})
export class GalleryPopupComponent {
  imageGallery = [
    { url: '/assets/angular/assets/img/imageGallery/_SM49300.jpg'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49303.jpg'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49351.jpg'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49366.jpg'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49377.jpg'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49391.jpg'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49399.jpg'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49420.jpg'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49426.jpg'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49441.jpg'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49452.jpg'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49454.jpg'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49460.jpg'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49482.jpg'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49493.jpg'},
    { url: '/assets/angular/assets/img/imageGallery/DSC_2164.jpg'},
    { url: '/assets/angular/assets/img/imageGallery/DSC_2204.jpg'},
    { url: '/assets/angular/assets/img/imageGallery/DSC_2221.jpg'},
    { url: '/assets/angular/assets/img/imageGallery/DSC_2225.jpg'},
  ];
  currImg: string | null | undefined;
  nextImg: string;
  backImg: string;
  indexImg: number;

  constructor(public dialogRef: MatDialogRef<GalleryPopupComponent>) {
    this.nextImg = "";
    this.backImg = "";
    this.indexImg = 0;
  }

  defineChangeImg(): void {
    this.currImg = document.getElementById('dialogImg')?.getAttribute('src');
    this.indexImg = this.imageGallery.findIndex((img) => img.url === this.currImg)
    if (this.indexImg === 0) {
      this.backImg = this.imageGallery[this.imageGallery.length - 1].url;
      this.nextImg = this.imageGallery[this.indexImg + 1].url;
    } else if (this.indexImg === (this.imageGallery.length - 1)) {
      this.nextImg = this.imageGallery[0].url;
      this.backImg = this.imageGallery[this.indexImg - 1].url;
    } else {
      this.nextImg = this.imageGallery[this.indexImg + 1].url;
      this.backImg = this.imageGallery[this.indexImg - 1].url;
    }
  }

  forwardImg(): void {
    this.defineChangeImg();
    document.getElementById('dialogImg')?.setAttribute('src', this.nextImg);
  }

  backwardImg(): void {
    this.defineChangeImg();
    document.getElementById('dialogImg')?.setAttribute('src', this.backImg);
  }
}
