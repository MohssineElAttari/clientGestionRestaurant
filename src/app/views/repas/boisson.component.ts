import { Component, OnInit, ViewChild } from '@angular/core';
import { Boisson } from '../../shared/Boisson';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BoissonService } from '../../service/boisson.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'boisson.component.html'
})

export class BoissonComponent implements OnInit {
  boissons: Boisson[];
  BoissonForm: FormGroup;
  operation: string = 'add';
  selectedBoisson: Boisson;
  @ViewChild('dangerModal')
  public dangerModal: ModalDirective;

  constructor(private boissonService: BoissonService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initBoissons();
    this.loadBoissons();
  }
  createForm() {
    this.BoissonForm = this.fb.group({
      nom: '',
      type: '',
      info: '',
      prixRepas: '',
      durreCuisson: '',
      photo: '',
    });
  }

  addBoisson() {
    console.log('nom  ' + this.selectedBoisson.nom);
    const c = this.BoissonForm.value;
    this.boissonService.addBoisson(c).subscribe(
      res => {
        this.initBoissons();
        this.loadBoissons();

      }

    );
  }
  loadBoissons() {
    this.boissonService.getBoisson().subscribe(
      data => { this.boissons = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des Boissons est terminé ' + this.boissons[this.boissons.length - 1].nom) }
    );

  }
  updateBoisson() {

    this.boissonService.updateBoisson(this.selectedBoisson).subscribe(
      res => {
        this.initBoissons();
        this.loadBoissons();
        this.operation = "add";
      }
    );
  }

  deleteBoisson() {
    this.boissonService.deleteBoisson(this.selectedBoisson.id).subscribe(
      res => {
        this.selectedBoisson = new Boisson();
        this.loadBoissons();
      }
    );
  }
  initBoissons() {
    this.selectedBoisson = new Boisson();
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
