import { TableServeur } from '../../shared/TableServeur';
import { OnInit, Component } from '@angular/core';
import { Table } from '../../shared/Table';
import { Serveur } from '../../shared/Serveur';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServeurService } from '../../service/serveur.service';
import { TableServeurService } from '../../service/tableServeur.service';
import { TableService } from '../../service/table.service';

@Component({
  selector: 'app-TableServeur',
  templateUrl: './TableServeur.component.html',
})
export class TableServiceComponent implements OnInit {

  tableServeurs: TableServeur[];
  tables :Table[];
  serveurs: Serveur[];
  tableServeurForm: FormGroup;
  operation: string = 'add';
  selectedTableServeur: TableServeur;

  constructor(private tableServeurService: TableServeurService,private tableService: TableService,
    private serveurService: ServeurService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.initTableServeur();
    this.loadTableServeurs();
    this.loadServeurs();
    this.loadTables();
  }

  createForm() {
    this.tableServeurForm = this.fb.group({
      serveur: '',
      table:'',
      dateDebut: '',
      dateFin: ''
    });
  }

  loadTables() {
    this.tableService.getTable().subscribe(
      data => { this.tables = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des Tables est terminé') }
    );
  }

  loadServeurs() {
    this.serveurService.getServeurs().subscribe(
      data => { this.serveurs = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des Serveurs est terminé') }
    );
  }

  loadTableServeurs() {
    this.tableServeurService.getTableServeur().subscribe(
      data => { this.tableServeurs = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des TableServeurs est terminé') }
    );
  }

  addTableServeur() {
    this.tableServeurService.addTableServeur(this.selectedTableServeur.tablee,this.selectedTableServeur.serveur,this.selectedTableServeur.dateDebut,this.selectedTableServeur.dateFin).subscribe(
      res => {
        this.initTableServeur();
        this.loadTableServeurs();
      }
    );
  }

  updateTableServeur() {
    console.log('ffffff '+this.selectedTableServeur.id)
    this.tableServeurService.updateTableServeur(this.selectedTableServeur.tablee,this.selectedTableServeur.serveur,this.selectedTableServeur.dateDebut,this.selectedTableServeur.dateFin).subscribe(
      res => {
        this.initTableServeur();
        this.loadTableServeurs();
        this.operation = "add";
      }
    );
  }

  deleteTableServeur() {
    this.tableServeurService.deleteTableServeur(this.selectedTableServeur.tablee,this.selectedTableServeur.serveur,this.selectedTableServeur.dateFin).subscribe(
      res => {
        this.selectedTableServeur = new TableServeur();
        this.loadTableServeurs();
      }
    );
  }

  initTableServeur() {
    this.selectedTableServeur = new TableServeur();
    this.createForm();
  }

}