import { Component, OnInit, ViewChild } from '@angular/core';
import { Dessert } from '../../shared/Dessert';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DessertService } from '../../service/dessert.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'dessert.component.html'
})

export class DessertComponent implements OnInit {
  desserts: Dessert[];
  dessertForm: FormGroup;
  operation: string = 'add';
  selectedDessert: Dessert;
  @ViewChild('dangerModal')
  public dangerModal: ModalDirective;

  constructor(private dessertService: DessertService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initDesserts();
    this.loadDesserts();
  }
  createForm() {
    this.dessertForm = this.fb.group({
      nom: '',
      type: '',
      info: '',
      prixRepas: '',
      durreCuisson: '',
      photo: '',
    });
  }

  addDessert() {
    //console.log('nom  ' + this.selectedDessert.nom);
    const c = this.dessertForm.value;
    this.dessertService.addDessert(c).subscribe(
      res => {
        this.initDesserts();
        this.loadDesserts();

      }

    );
  }
  loadDesserts() {
    this.dessertService.getDessert().subscribe(
      data => { this.desserts = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des Desserts est terminé ' + this.desserts[this.desserts.length - 1].nom) }
    );

  }
  updateDessert() {

    this.dessertService.updateDessert(this.selectedDessert).subscribe(
      res => {
        this.initDesserts();
        this.loadDesserts();
        this.operation = "add";
      }
    );
  }

  deleteDessert() {
    this.dessertService.deleteDessert(this.selectedDessert.id).subscribe(
      res => {
        this.selectedDessert = new Dessert();
        this.loadDesserts();
      }
    );
  }
  initDesserts() {
    this.selectedDessert = new Dessert();
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
