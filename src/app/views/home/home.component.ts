import { Component, OnInit } from '@angular/core';
import { Boisson } from '../../shared/Boisson';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal/public_api';
import { BoissonService } from '../../service/boisson.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // boisson
  // 
  boissons: Boisson[];
  public boissonFile: any = File;
  // 

  // entree
  //

  //
  constructor(private boissonService: BoissonService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loadBoissons();
  }
  
  loadBoissons() {
    this.boissonService.getBoisson().subscribe(
      data => { this.boissons = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des Boissons est terminé ' + this.boissons) }
    );

  }
}
