import { ConfirmationDialogService } from './../../../../_services/confirmation-dialog.service';
import { WorkersInterface } from './../../../../_models/workers';
import { NotificationService } from './../../../../_services/notificacion.service';
import { WorkerModalComponent } from './../worker-modal/worker-modal.component';
import { map, startWith } from 'rxjs/operators';
import { DecimalPipe } from '@angular/common';
import { WorkersService } from './../../../../_api/workers/workers.service';
import { FormControl } from '@angular/forms';
import { UserInterface } from './../../../../_models/user';
import { SortEvent, NgbdSortableHeader } from './../../../../_directives/sortable.directive';
import { Component, Directive, EventEmitter, Input, OnInit, Output, ViewChildren, QueryList, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { worker } from 'cluster';


// Parameters for table.
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': '', '': 'asc' };
export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})

export class NgbSortable {

  @Input() sortable: string;
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  closeResult = '';
  public breadcrumb: any;
  public currentUser: any;
  private PERSON: WorkersInterface[];
  TableData: any;
  pipe: any;
  page = 1;
  pageSize = 4;
  collectionSize: any;
  public loading = false;
  column: any;
  employeeSearch: Observable<WorkersInterface[]>;
  filter = new FormControl('');
  employeeSortable: any;
  total$: Observable<number>;
  @ViewChildren(NgbdSortableHeader) headers1: QueryList<NgbdSortableHeader>;
  @ViewChildren(NgbSortable) headers: QueryList<NgbSortable>;

  constructor(
    private workersService: WorkersService,
    private modalService: NgbModal,
    private notifyService: NotificationService,
    private confirmationDialogService: ConfirmationDialogService
  ) { }

  ngOnInit(): void {
    this.breadcrumb = {
      'mainlabel': 'Lista de usuarios',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/ecommerce'
        },
        {
          'name': 'Usuarios',
          'isLink': false,
          'link': ''
        }
      ]
    };

    this.getUserLogged();
    this.getInfoEmployees();
  }

  onAddWorker(): void {
    this.workersService.selectedWorker = Object.assign({}, {});
    const modalRef = this.modalService.open(WorkerModalComponent, { windowClass: 'animated fadeInDown' });
    modalRef.componentInstance.opc = false;
    modalRef.result.then((result) => {
      console.log("resultado del modal: ", result);
      if (result) {
        this.notifyService.showSuccess("Agregar", "¡El nuevo personal se agregó correctamente!");
      }

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
    });
  }

  onDeleteWorker(idWorker: string): void {
    console.log("Delete Work: ", idWorker);
    console.log("Delete Work Boss: ", this.currentUser.uid);
    this.confirmationDialogService.confirm('Confirmación', '¿Estás seguro de eliminar el personal?')
      .then(confirmed => {
        if (!confirmed) {
        } else {
          this.workersService.deleteWorker(idWorker, this.currentUser.uid);
          this.notifyService.showSuccess("Eliminar", "¡El personal se eliminó correctamente!");
        }
      }).catch(() => {
        console.log("Not ok");
      });
    //
  }

  onPreUpdateWorker(worker: WorkersInterface) {
    console.log("WORKER: ", worker);
    this.workersService.selectedWorker = Object.assign({}, worker);
    const modalRef = this.modalService.open(WorkerModalComponent, { windowClass: 'animated fadeInDown' });
    modalRef.componentInstance.opc = true;
    modalRef.result.then((result) => {
      if (!result) {
        this.notifyService.showSuccess("Agregar", "¡El personal se editó correctamente!");
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
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

  getUserLogged(): void {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  getInfoEmployees() {
    this.loading = true;
    this.workersService.getFullInfoEmployees(this.currentUser.uid).subscribe(
      workers => {
        this.PERSON = workers;
        this.collectionSize = this.PERSON.length;
        this.searchData(this.pipe);
        this.employeeSortable = this.PERSON;
        this.loading = false;
      }
    );

  }

  /**
  *
  * '@param' pipe
  */
  searchData(pipe: DecimalPipe) {
    console.log("employeeSearch:", this.employeeSearch);
    this.employeeSearch = this.filter.valueChanges.pipe(
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
    return this.PERSON.filter(response => {
      const term = text.toLowerCase();
      return response.name.toLowerCase().includes(term)
        || response.lastname.toLowerCase().includes(term)
        || response.id.toLowerCase().includes(term)
        || response.phone.toLowerCase().includes(term);
    });
  }

  /**
  * Pagination table
  */
  get PaginationData() {
    if (this.PERSON) {
      return this.PERSON.map((person, i) => ({ id: i + 1, ...person }))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
  }
}
