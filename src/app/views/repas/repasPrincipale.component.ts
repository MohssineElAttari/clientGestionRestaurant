import { Component, OnInit, ViewChild } from '@angular/core';
import { RepasPrincipale } from '../../shared/RepasPrincipale';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RepasPrincipaleService } from '../../service/repasPrincipale.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'repasPrincipale.component.html'
})

export class RepasPrincipaleComponent implements OnInit {
  repasPrincipales: RepasPrincipale[];
  RepasPrincipaleForm: FormGroup;
  operation: string = 'add';
  selectedRepasPrincipale: RepasPrincipale;
  public entreeFile: any = File;
  @ViewChild('dangerModal')
  public dangerModal: ModalDirective;

  constructor(private repasPrincipaleService: RepasPrincipaleService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initRepasPrincipales();
    this.loadRepasPrincipales();
  }
  createForm() {
    this.RepasPrincipaleForm = this.fb.group({
      compossition: '',
      info: '',
      prix: '',
      durreCuisson: '',
      photo: '',
    });
  }
  fileChange(event) {
    const file = event.target.files[0];
    this.entreeFile = file;
    console.log(file);
  }
  addRepasPrincipale() {
    const entree = this.selectedRepasPrincipale;
    const fromData = new FormData();
    fromData.append('repasPrincipale', JSON.stringify(entree));
    fromData.append('file', this.entreeFile);
    this.repasPrincipaleService.addRepasPrincipale(fromData).subscribe(
      res => {
        this.initRepasPrincipales();
        this.loadRepasPrincipales();

      }

    );
  }
  loadRepasPrincipales() {
    this.repasPrincipaleService.getRepasPrincipale().subscribe(
      data => { this.repasPrincipales = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des RepasPrincipales est terminé ') }
    );

  }
  updateRepasPrincipale() {

    this.repasPrincipaleService.updateRepasPrincipale(this.selectedRepasPrincipale).subscribe(
      res => {
        this.initRepasPrincipales();
        this.loadRepasPrincipales();
        this.operation = "add";
      }
    );
  }

  deleteRepasPrincipale() {
    this.repasPrincipaleService.deleteRepasPrincipale(this.selectedRepasPrincipale.id).subscribe(
      res => {
        this.selectedRepasPrincipale = new RepasPrincipale();
        this.loadRepasPrincipales();
      }
    );
  }
  initRepasPrincipales() {
    this.selectedRepasPrincipale = new RepasPrincipale();
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