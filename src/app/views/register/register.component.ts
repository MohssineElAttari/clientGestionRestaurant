import { Component, OnInit } from '@angular/core';
import { Client } from '../../shared/Client';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientService } from '../../service/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  clients: Client[];
  clientForm: FormGroup;
  operation: string = 'add';
  selectedClient: Client;

  ngOnInit(): void {
    this.initClients();
  }

  constructor(private clientService: ClientService, private fb: FormBuilder,private router: Router) { }
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
    this.clientService.addClient(this.selectedClient).subscribe(
      res => {
        this.initClients();
      }

    );
    this.router.navigateByUrl('/personne/clients');
  }
  initClients() {
    this.selectedClient = new Client();
    this.createForm();
  }
}
