import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { GalleryPopupComponent } from '../gallery-popup/gallery-popup.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
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
  currentImg: string;

  constructor(public dialog: MatDialog) {
    this.currentImg = "";
  }

  openDialog(event: any, enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(GalleryPopupComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
    this.currentImg = event.srcElement.attributes.src.value;
    document.getElementById('dialogImg')?.setAttribute('src', this.currentImg);
  }
}