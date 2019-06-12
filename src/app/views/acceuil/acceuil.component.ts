import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommandeService } from '../../service/commande.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  acceuilForm : FormGroup;

  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lineChartLabels = [];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    { data: [], label: 'Nombre' },
  ];

  constructor(private commandeService :CommandeService, private fb:FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.acceuilForm = this.fb.group({
      type: ''
    });
  }

  loadRepasNamesAndCounts(name :any) {
    
    console.log('ggggg  '+name);
    this.commandeService.getRepasNames(name).subscribe(
      data => { this.lineChartLabels = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des services est terminé ') }

    );

    this.commandeService.getRepasCounts(name).subscribe(
      data => { this.lineChartData= data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des services est terminé ') }

    );


  }

}
