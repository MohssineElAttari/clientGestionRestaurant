import { Component, OnInit, ViewChild } from '@angular/core';
import { Commande } from '../../shared/Commande';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommandeService } from '../../service/commande.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'commande.component.html'
})

export class CommandeComponent implements OnInit {
  commandes: Commande[];
  CommandeForm: FormGroup;
  operation: string = 'add';
  selectedCommande: Commande;
  @ViewChild('dangerModal')
  public dangerModal: ModalDirective;

  constructor(private commandeService: CommandeService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initCommandes();
    this.loadCommandes();
  }
  createForm() {
    this.CommandeForm = this.fb.group({
      nom: '',
      type: '',
      info: '',
      prixRepas: '',
      durreCuisson: '',
      photo: '',
    });
  }

  addCommande() {
    console.log('nom  ' + this.selectedCommande.categorie);
    const c = this.CommandeForm.value;
    this.commandeService.addCommande(c).subscribe(
      res => {
        this.initCommandes();
        this.loadCommandes();

      }

    );
  }
  loadCommandes() {
    this.commandeService.getCommande().subscribe(
      data => { this.commandes = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des Commandes est terminé ' + this.commandes[this.commandes.length - 1].categorie) }
    );

  }
  updateCommande() {

    this.commandeService.updateCommande(this.selectedCommande).subscribe(
      res => {
        this.initCommandes();
        this.loadCommandes();
        this.operation = "add";
      }
    );
  }

  deleteCommande() {
    this.commandeService.deleteCommande(this.selectedCommande.id).subscribe(
      res => {
        this.selectedCommande = new Commande();
        this.loadCommandes();
      }
    );
  }
  initCommandes() {
    this.selectedCommande = new Commande();
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