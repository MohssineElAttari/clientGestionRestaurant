import { Component, OnInit, ViewChild } from '@angular/core';
import { ServeurService } from '../../service/serveur.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Serveur } from '../../shared/Serveur';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ValidationService } from '../../service/validation.service';

@Component({
  templateUrl: 'serveur.component.html'

})
export class ServeurComponent implements OnInit {
  serveurs: Serveur[];
  selectedServeur: Serveur;
  serveurForm: FormGroup;
  operation: string = 'add';
  @ViewChild('dangerModal')
  public dangerModal: ModalDirective;
  constructor(private serveurService: ServeurService, private fb: FormBuilder) {

    this.serveurForm = this.fb.group({
      'nom': ['', Validators.required],
      'login': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  saveUser() {
    if (this.serveurForm.dirty && this.serveurForm.valid) {
      alert(`Name: ${this.serveurForm.value.name} Email: ${this.serveurForm.value.email}`);
    }
  }
  ngOnInit(): void {
    this.initServeurs();
    this.loadServeurs();
  }

  createForm() {
    this.serveurForm = this.fb.group({
      matricule: '',
      nom: '',
      prenom: '',
      dateNais: '',
      ville: '',
      adress: '',
      login: '',
      password: ''
    });
  }

  addServeur() {
    console.log("nom" + this.selectedServeur.nom);
    const c = this.serveurForm.value;
    this.serveurService.addServeur(c).subscribe(
      res => {
        this.initServeurs();
        this.loadServeurs();
      }
    );

  }

  loadServeurs() {
    this.serveurService.getServeurs().subscribe(
      data => { this.serveurs = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des Serveurs est terminé ' + this.serveurs[this.serveurs.length - 1].nom + ' ' + this.serveurs[this.serveurs.length - 1].prenom) }
    )
  }
  updateServeur() {

    this.serveurService.updateServeur(this.selectedServeur).subscribe(
      res => {
        this.initServeurs();
        this.loadServeurs();
        this.operation = "add";
      }
    );
  }

  deleteServeur() {
    this.serveurService.deleteServeur(this.selectedServeur.id).subscribe(
      res => {
        this.selectedServeur = new Serveur();
        this.loadServeurs();
      }
    );
  }
  initServeurs() {
    this.selectedServeur = new Serveur();
    this.createForm();
  }
}
