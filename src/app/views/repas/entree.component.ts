import { Component, OnInit, ViewChild } from '@angular/core';
import { Entree } from '../../shared/Entree';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EntreeService } from '../../service/entree.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'entree.component.html'
})

export class EntreeComponent implements OnInit {
  entrees: Entree[];
  entreeForm: FormGroup;
  operation: string = 'add';
  selectedEntree: Entree;
  @ViewChild('dangerModal')
  public dangerModal: ModalDirective;

  constructor(private entreeService: EntreeService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initEntrees();
    this.loadEntrees();
  }
  createForm() {
    this.entreeForm = this.fb.group({
      nom: '',
      type: '',
      info: '',
      prixRepas: '',
      durreCuisson: '',
      photo: '',
    });
  }

  addEntree() {
    console.log('nom  ' + this.selectedEntree.nom);
    const c = this.entreeForm.value;
    this.entreeService.addEntree(c).subscribe(
      res => {
        this.initEntrees();
        this.loadEntrees();

      }

    );
  }
  loadEntrees() {
    this.entreeService.getEntree().subscribe(
      data => { this.entrees = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des Entrees est terminé ' + this.entrees[this.entrees.length - 1].nom) }
    );

  }
  updateEntree() {

    this.entreeService.updateEntree(this.selectedEntree).subscribe(
      res => {
        this.initEntrees();
        this.loadEntrees();
        this.operation = "add";
      }
    );
  }

  deleteEntree() {
    this.entreeService.deleteEntree(this.selectedEntree.id).subscribe(
      res => {
        this.selectedEntree = new Entree();
        this.loadEntrees();
      }
    );
  }
  initEntrees() {
    this.selectedEntree = new Entree();
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
