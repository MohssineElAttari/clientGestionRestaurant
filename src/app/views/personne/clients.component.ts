import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../shared/Client';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientService } from '../../service/client.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'clients.component.html'

})
export class ClientsComponent implements OnInit {
  clients: Client[];
  clientForm: FormGroup;
  operation: string = 'add';
  selectedClient: Client;
  @ViewChild('dangerModal')
  public dangerModal: ModalDirective;

  constructor(private clientService: ClientService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initClients();
    this.loadClients();
  }
  createForm() {
    this.clientForm = this.fb.group({
      nom: '',
      prenom: '',
      dateNais: '',
      ville: '',
      adress: '',
      numCarteFildelite: '',
      login: '',
      password: ''
    });
  }

  addClient() {
    console.log('nom  ' + this.selectedClient.nom);
    const c = this.clientForm.value;
    this.clientService.addClient(c).subscribe(
      res => {
        this.initClients();
        this.loadClients();

      }

    );
  }
  loadClients() {
    this.clientService.getClients().subscribe(
      data => { this.clients = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des clients est terminé ' + this.clients[this.clients.length-1].nom) }
    );

  }
  updateClient() {

    this.clientService.updateClient(this.selectedClient).subscribe(
      res => {
        this.initClients();
        this.loadClients();
        this.operation = "add";
      }
    );
  }

  deleteClient() {
    this.clientService.deleteClient(this.selectedClient.id).subscribe(
      res => {
        this.selectedClient = new Client();
        this.loadClients();
      }
    );
  }
  initClients() {
    this.selectedClient = new Client();
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
