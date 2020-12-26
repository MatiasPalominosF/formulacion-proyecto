import { ProductModalComponent } from './../product-modal/product-modal.component';
import { NotificationService } from './../../../_services/notificacion.service';
import { ConfirmationDialogService } from './../../../_services/confirmation-dialog.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { SortEvent, NgbdSortableHeader } from './../../../_directives/sortable.directive';
import { ProductInterface } from './../../../_models/product';
import { Observable } from 'rxjs';
import { ProductService } from './../../../_api/product/product.service';
import { Component, OnInit, Directive, Input, Output, EventEmitter, PipeTransform, ViewChildren, QueryList } from '@angular/core';
import { map, startWith } from 'rxjs/operators';


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

// End parameter for table.



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  closeResult = '';
  public breadcrumb: any;
  public loading = false;
  public currentUser: any;
  productSearch: Observable<ProductInterface[]>;
  filter = new FormControl('');
  private PRODUCT: ProductInterface[];
  collectionSize: any;
  pipe: any;
  productSortable: any;
  page = 1;
  pageSize = 4;
  column: any;
  @ViewChildren(NgbdSortableHeader) headers1: QueryList<NgbdSortableHeader>;
  @ViewChildren(NgbSortable) headers: QueryList<NgbSortable>;


  constructor(
    private productService: ProductService,
    private confirmationDialogService: ConfirmationDialogService,
    private modalService: NgbModal,
    private notifyService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.breadcrumb = {
      'mainlabel': 'Lista de productos',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/ecommerce'
        },
        {
          'name': 'Productos',
          'isLink': false,
          'link': ''
        }
      ]
    };

    this.getUserLogged();
    this.getFullInfoProduct();

  }

  
  getFullInfoProduct() {
    this.loading = true;
    this.productService.getFullInfoProduct(this.currentUser.uid).subscribe(product => {
      console.log("DATOS:", product);
      //console.log("ESTA WEA TRAE:", Object.entries(product[0].ingredients).length === 0);
      this.PRODUCT = product;
      this.collectionSize = this.PRODUCT.length;
      this.searchData(this.pipe);
      this.productSortable = this.PRODUCT;
      this.loading = false;
    });
  }

  onAddProduct() {
    const modalRef = this.modalService.open(ProductModalComponent, { windowClass: 'animated fadeInDown', scrollable: true });
    modalRef.componentInstance.opc = false;
    modalRef.result.then((result) => {
      console.log("resultado del modal: ", result);
      if (result) {
        this.notifyService.showSuccess("Agregar", "¡El nuevo producto se agregó correctamente!");
      } else {
        this.notifyService.showSuccess("Actualizar", "¡El nuevo producto se actualizó correctamente!");
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

  onDeleteProduct(idProduct: string): void {
    console.log("Delete Work: ", idProduct);
    console.log("Delete Work Boss: ", this.currentUser.uid);
    this.confirmationDialogService.confirm('Confirmación', '¿Estás seguro de eliminar el producto?')
      .then(confirmed => {
        if (!confirmed) {
        } else {
          this.productService.deleteProduct(idProduct, this.currentUser.uid);
          this.notifyService.showSuccess("Eliminar", "¡El producto se eliminó correctamente!");
        }
      }).catch(() => {
        console.log("Not ok");
      });
    //
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
    console.log("this.productSearch ", this.productSearch);
    this.productSearch = this.filter.valueChanges.pipe(
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
    return this.PRODUCT.filter(response => {
      const term = text.toLowerCase();
      return response.name.toLowerCase().includes(term)
        || response.margen.toLowerCase().includes(term)
        || response.total.toLowerCase().includes(term)
        || response.stock.toLowerCase().includes(term)
        || response.minimun.toLowerCase().includes(term);
    });
  }

  /**
  * Pagination table
  */
  get PaginationData() {
    if (this.PRODUCT) {
      return this.PRODUCT.map((person, i) => ({ id: i + 1, ...person }))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
  }

}
