import { Component, OnInit, ViewChild } from '@angular/core';
import { Image } from '../../shared/Image';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ImageService } from '../../service/image.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'image.component.html'
})

export class ImageComponent implements OnInit {
  images: Image[];
  ImageForm: FormGroup;
  operation: string = 'add';
  selectedImage: Image;
  public userFile: any = File;
  @ViewChild('dangerModal')
  public dangerModal: ModalDirective;

  constructor(private imageService: ImageService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initImages();
    this.loadImages();
  }
  createForm() {
    this.ImageForm = this.fb.group({
      nom: '',
    });
  }

  addImage() {
    console.log('nom  ' + this.userFile);
    const c = this.ImageForm.value;
    const formData = new FormData();
    formData.append('file',this.userFile);
    this.imageService.addImage(formData).subscribe(
      res => {
        this.initImages();
        this.loadImages();

      }

    );
  }

  // Check for changes in files inputs via a DOMString reprsenting the name of an event
  fileChange(event) {
    const file = event.target.files[0];
    this.userFile = file;
    console.log(file);

    // this.selectedImage.nom = files.item(0);
    // const formData: FormData = new FormData();

    // formData.append('imageFile', this.selectedImage.nom);
    //  console.log("chof hada " + this.selectedImage.nom);
    // console.log("ou hada " + this.selectedImage);

    // console.log("hahowa " + files.target.files);
    // console.log("hahowaaaaaaaaaaaaa " + files.target.files[0]);

    // Instantiate an object to read the file content
    // let reader = new FileReader();
    // when the load event is fired and the file not empty
    // if(event.target.files && event.target.files.length > 0) {
    //   // Fill file variable with the file content
    //   this.file = event.target.files[0];
    // }
  }

  loadImages() {
    this.imageService.getImages().subscribe(
      data => { this.images = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des Images est terminé ' + this.images[this.images.length - 1].nom) }
    );

  }
  updateImage() {

    this.imageService.updateImage(this.selectedImage).subscribe(
      res => {
        this.initImages();
        // this.loadImages();
        this.operation = "add";
      }
    );
  }

  deleteImage() {
    this.imageService.deleteImage(this.selectedImage.id).subscribe(
      res => {
        this.selectedImage = new Image();
        // this.loadImages();
      }
    );
  }
  initImages() {
    this.selectedImage = new Image();
    this.createForm();
  }
  // isCollapsed: boolean = false;
  // iconCollapse: string = 'icon-arrow-up';

  // collapsed(event: any): void {
  //   // console.log(event);
  // }

  // expanded(event: any): void {
  //   // console.log(event);
  // }

  // toggleCollapse(): void {
  //   this.isCollapsed = !this.isCollapsed;
  //   this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  // }

}