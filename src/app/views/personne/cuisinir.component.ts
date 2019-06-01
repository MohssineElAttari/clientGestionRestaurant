import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Cuisinir } from '../../shared/Cuisinir';
import { CuisinirService } from '../../service/cuisinir.service';

@Component({
  templateUrl: 'cuisinir.component.html'

})
export class CuisinirComponent implements OnInit {
  cuisinirs: Cuisinir[] = [];
  cuisinirForm: FormGroup;
  operation: string = 'add';
  selectedCuisinir: Cuisinir;
  @ViewChild('dangerModal')
  public dangerModal: ModalDirective;

  constructor(private cuisnirService: CuisinirService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initCuisinirs();
    this.loadCuisinir();
  }
  createForm() {
    this.cuisinirForm = this.fb.group({
      nom: '',
      prenom: '',
      dateNais: '',
      ville: '',
      adress: '',
      diplome: '',
      login: '',
      password: ''
    });
  }

  addCuisinir() {
    const c = this.cuisinirForm.value;
    this.cuisnirService.addCuisinir(c).subscribe(
      res => {
        this.initCuisinirs();
        this.loadCuisinir();
      }

    );
  }
  loadCuisinir() {
    this.cuisnirService.getCuisinirs().subscribe(
      data => { this.cuisinirs = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des Cuisinirs est terminé ') }
    );

  }
  updateCuisinir() {

    this.cuisnirService.updateCuisinir(this.selectedCuisinir).subscribe(
      res => {
        this.initCuisinirs();
        this.loadCuisinir();
        this.operation = "add";
      }
    );
  }

  deleteCuisinir() {
    this.cuisnirService.deleteCuisinir(this.selectedCuisinir.id).subscribe(
      res => {
        this.selectedCuisinir = new Cuisinir();
        this.loadCuisinir();
      }
    );
  }
  initCuisinirs() {
    this.selectedCuisinir = new Cuisinir();
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
