import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ClientService } from 'src/app/_api/client/client.service';
import { Client } from 'src/app/_models/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  @BlockUI('clientTable') blockUIClientTable: NgBlockUI;
  public breadcrumb: any;
  private currentUser: any;
  private CLIENT: Client[];
  public clientSearch: Observable<Client[]>;
  public filter = new FormControl('');
  public pipe: any;
  public clientSortable: any;

  //Atributos tabla

  public collectionSize: any;
  public page = 1;
  public pageSize = 4;

  ///
  public options = {
    close: false,
    expand: true,
    minimize: true,
    reload: true
  };

  public headElements = ['#', 'Rut', 'Nombre', 'Apellido', 'Descuento(%)'];


  constructor(
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
    this.breadcrumb = {
      'mainlabel': 'Usuarios',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/ecommerce'
        },
        {
          'name': 'Lista de clientes',
          'isLink': false,
          'link': ''
        }
      ]
    };

    this.getUserLogged();
    this.getAllClients();

  }

  onAddClient(): void {
    console.log("Se presionó");
  }

  getAllClients(): void {
    this.blockUIClientTable.start('Cargando...');
    console.log("this.currentUser.uidCLIENTE", this.currentUser.uid);
    this.clientService.getFullInfoClient(this.currentUser.uid).subscribe(data => {
      console.log(data);
      this.CLIENT = data;
      this.collectionSize = this.CLIENT.length;
      this.searchData(this.pipe);
      this.clientSortable = this.CLIENT;
      this.blockUIClientTable.stop();
    });
  }

  getUserLogged(): void {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  /**
  *
  * '@param' pipe
  */
  searchData(pipe: DecimalPipe) {
    this.clientSearch = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, pipe))
    );
  }

  /**
   * Search table
   * '@param' text
   * '@param' pipe
   */
  search(text: string, pipe: PipeTransform) {
    return this.CLIENT.filter(response => {
      const term = text.toLowerCase();
      return response.name.toLowerCase().includes(term)
        || response.rut.toLowerCase().includes(term)
        || response.lastName.toLowerCase().includes(term)
        || response.percent.toLowerCase().includes(term)
    });
  }

  reloadReportTable() {
    this.blockUIClientTable.start('Loading..');

    setTimeout(() => {
      this.blockUIClientTable.stop();
    }, 2500);
  }

}
