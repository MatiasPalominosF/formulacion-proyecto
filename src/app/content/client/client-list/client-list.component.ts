import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ClientService } from 'src/app/_api/client/client.service';
import { Client } from 'src/app/_models/client';
import { ConfirmationDialogService } from 'src/app/_services/confirmation-dialog.service';
import { NotificationService } from 'src/app/_services/notificacion.service';
import { ClientModalComponent } from '../client-modal/client-modal.component';

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
  private closeResult = '';

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

  public headElements = ['#', 'Rut', 'Nombre', 'Apellido', 'Dirección', 'Descuento(%)', 'Acciones'];


  constructor(
    private clientService: ClientService,
    private modalService: NgbModal,
    private notifyService: NotificationService,
    private confirmationDialogService: ConfirmationDialogService
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
    this.clientService.selectedClient = Object.assign({}, {});
    const modalRef = this.modalService.open(ClientModalComponent, { windowClass: 'animated fadeInDown' });
    modalRef.componentInstance.opc = false;
    modalRef.result.then((result) => {
      console.log("resultado del modal: ", result);
      if (result) {
        this.notifyService.showSuccess("Agregar", "¡El nuevo cliente se agregó correctamente!");
      }

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
    });
  }

  onPreUpdateClient(client: Client): void {
    this.clientService.selectedClient = Object.assign({}, client);
    const modalRef = this.modalService.open(ClientModalComponent, { windowClass: 'animated fadeInDown' });
    modalRef.componentInstance.opc = true;
    modalRef.result.then((result) => {
      if (!result) {
        this.notifyService.showSuccess("Actualizar", "¡El cliente se editó correctamente!");
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
    });
  }

  onDeleteClient(idClient: string): void {
    this.confirmationDialogService.confirm('Confirmación', '¿Estás seguro de eliminar el cliente?')
      .then(confirmed => {
        if (!confirmed) {
        } else {
          this.clientService.deleteClient(idClient, this.currentUser.uid);
          this.notifyService.showSuccess("Eliminar", "¡El cliente se eliminó correctamente!");
        }
      }).catch(() => {
        console.log("Not ok");
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
        || response.lastname.toLowerCase().includes(term)
        || response.percent.toLowerCase().includes(term)
        || response.address.toLowerCase().includes(term)
    });
  }

  reloadReportTable() {
    this.blockUIClientTable.start('Loading..');

    setTimeout(() => {
      this.blockUIClientTable.stop();
    }, 2500);
  }

}
