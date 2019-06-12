import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from '../../shared/Table';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TableService } from '../../service/table.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit {
  tables: Table[];
  TableForm: FormGroup;
  operation: string = 'add';
  selectedTable: Table;
  @ViewChild('dangerModal')
  public dangerModal: ModalDirective;

  constructor(private tableService: TableService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initTables();
    this.loadTables();
  }
  createForm() {
    this.TableForm = this.fb.group({
      code: '',
    });
  }

  addTable() {
    console.log('code  ' + this.selectedTable.code);
    console.log('id  ' + this.selectedTable.id);
    const c = this.TableForm.value;
    this.tableService.addTable(this.selectedTable).subscribe(
      res => {
        this.initTables();
        this.loadTables();

      }

    );
  }
  loadTables() {
    this.tableService.getTable().subscribe(
      data => { this.tables = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des Tables est terminé ' + this.tables[this.tables.length - 1].code) }
    );

  }
  updateTable() {

    this.tableService.updateTable(this.selectedTable).subscribe(
      res => {
        this.initTables();
        this.loadTables();
        this.operation = "add";
      }
    );
  }

  deleteTable() {
    this.tableService.deleteTable(this.selectedTable.id).subscribe(
      res => {
        this.selectedTable = new Table();
        this.loadTables();
      }
    );
  }
  initTables() {
    this.selectedTable = new Table();
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