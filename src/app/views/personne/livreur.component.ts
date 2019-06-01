import { Component, OnInit, ViewChild } from '@angular/core';
import { Livreur } from '../../shared/Livreur';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LivreurService } from '../../service/livreur.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'livreur.component.html'

})
export class LivreurComponent implements OnInit {
  livreurs: Livreur[];
  LivreurForm: FormGroup;
  operation: string = 'add';
  selectedLivreur: Livreur;
  @ViewChild('dangerModal')
  public dangerModal: ModalDirective;

  constructor(private livreurService: LivreurService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initLivreurs();
    this.loadLivreurs();
  }
  createForm() {
    this.LivreurForm = this.fb.group({
      nom: '',
      matricule: '',
      prenom: '',
      dateNais: '',
      ville: '',
      adress: '',
      login: '',
      password: ''
    });
  }

  addLivreur() {
    console.log('nom  ' + this.selectedLivreur.nom);
    const c = this.LivreurForm.value;
    this.livreurService.addLivreur(c).subscribe(
      res => {
        this.initLivreurs();
        this.loadLivreurs();

      }

    );
  }
  loadLivreurs() {
    this.livreurService.getLivreurs().subscribe(
      data => { this.livreurs = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des Livreurs est terminé ' + this.livreurs[this.livreurs.length - 1].nom) }
    );

  }
  updateLivreur() {

    this.livreurService.updateLivreur(this.selectedLivreur).subscribe(
      res => {
        this.initLivreurs();
        this.loadLivreurs();
        this.operation = "add";
      }
    );
  }

  deleteLivreur() {
    this.livreurService.deleteLivreur(this.selectedLivreur.id).subscribe(
      res => {
        this.selectedLivreur = new Livreur();
        this.loadLivreurs();
      }
    );
  }
  initLivreurs() {
    this.selectedLivreur = new Livreur();
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
