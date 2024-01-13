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
    { url: '/assets/angular/assets/img/imageGallery/_SM49300.webp'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49303.webp'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49351.webp'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49366.webp'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49377.webp'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49391.webp'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49399.webp'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49420.webp'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49426.webp'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49441.webp'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49452.webp'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49454.webp'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49460.webp'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49482.webp'},
    { url: '/assets/angular/assets/img/imageGallery/_SM49493.webp'},
    { url: '/assets/angular/assets/img/imageGallery/DSC_2164.webp'},
    { url: '/assets/angular/assets/img/imageGallery/DSC_2204.webp'},
    { url: '/assets/angular/assets/img/imageGallery/DSC_2221.webp'},
    { url: '/assets/angular/assets/img/imageGallery/DSC_2225.webp'},
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
    this.nextImg = this.imageGallery[(this.indexImg + 1 + this.imageGallery.length) % this.imageGallery.length].url;
    this.backImg = this.imageGallery[(this.indexImg - 1 + this.imageGallery.length) % this.imageGallery.length].url;
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
