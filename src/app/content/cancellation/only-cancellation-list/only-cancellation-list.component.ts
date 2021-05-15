import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SaleService } from 'src/app/_api/sale/sale.service';
import { Product } from 'src/app/_models/product2';
import { ConfirmationDialogService } from 'src/app/_services/confirmation-dialog.service';
import { NotificationService } from 'src/app/_services/notificacion.service';

@Component({
  selector: 'app-only-cancellation-list',
  templateUrl: './only-cancellation-list.component.html',
  styleUrls: ['./only-cancellation-list.component.css']
})
export class OnlyCancellationListComponent implements OnInit {

  @BlockUI('cancellationTable') blockUIcancellationTable: NgBlockUI;
  public breadcrumb: any;
  private currentUser: any;
  private PRODUCT: Product[];
  public collectionSize: any;
  public pipe: any;
  public productSearch: Observable<Product[]>;
  public filter = new FormControl('');
  public productSortable: any;
  public page = 1;
  public pageSize = 4;
  public from = new Date('December 25, 1995 13:30:00');;
  public to = new Date();

  public headElements = ['#', 'Producto', 'Cantidad', 'Precio total', 'Fecha venta', 'Fecha anulación', 'Cancelado por'];
  public options = {
    close: false,
    expand: true,
    minimize: true,
    reload: true
  };


  constructor(
    private saleService: SaleService,
    private confirmationDialogService: ConfirmationDialogService,
    private notifyService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.breadcrumb = {
      'mainlabel': 'Anulaciones',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/ecommerce'
        },
        {
          'name': 'Lista de anulaciones',
          'isLink': false,
          'link': ''
        }
      ]
    };

    this.getUserLogged();
    this.getAllSales();
  }

  getAllSales(): void {
    this.blockUIcancellationTable.start('Cargando...');
    this.saleService.getCancellationSale(this.currentUser.uid).subscribe(data => {
      console.log("Data", data);
      this.PRODUCT = data;
      this.collectionSize = this.PRODUCT.length;
      this.searchData(this.pipe);
      this.productSortable = this.PRODUCT;
      this.blockUIcancellationTable.stop();
    });
  }

  /**
  *
  * '@param' pipe
  */
  searchData(pipe: DecimalPipe) {
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
        || response.cancellatedby.toLowerCase().includes(term)
    });
  }

  getUserLogged(): void {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  reloadReportTable(): void {
    this.blockUIcancellationTable.start('Cargando...');

    setTimeout(() => {
      this.blockUIcancellationTable.stop();
    }, 2500);
  }

}
