import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {
  @Input() employee: any;
  images: GALLERY_IMAGE;
  conf: GALLERY_CONF;
  icon = 'thumb-up';
  liked = false;
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumb-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/thumb_up.svg'));
    iconRegistry.addSvgIcon(
      'thumb-up_outlined',
      sanitizer.bypassSecurityTrustResourceUrl('assets/thumb_up_outlined.svg'));
  }

  ngOnInit() {
    this.images = this.employee.portofolio;
    this.conf = {
      imageOffset: '0px',
      showDeleteControl: false,
      showImageTitle: false,
    };
  }

  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }

  closeGallery() {
    this.ngxImageGallery.close();
  }

  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }

  nextImage(index: number = 0) {
    this.ngxImageGallery.next();
  }

  prevImage(index: number = 0) {
    this.ngxImageGallery.prev();
  }
}
