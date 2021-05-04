import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SaleService } from 'src/app/_api/sale/sale.service';
import { Product } from 'src/app/_models/product2';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  @BlockUI('reportTable') blockUIReportTable: NgBlockUI;

  public breadcrumb: any;
  private currentUser: any;
  public pipe: any;
  public page = 1;
  public pageSize = 4;
  public collectionSize: any;
  public productSortable: any;
  public filter = new FormControl('');

  private PRODUCT: Product[];
  public productSearch: Observable<Product[]>;

  public options = {
    close: false,
    expand: true,
    minimize: true,
    reload: true
  };
  public headElements = ['#', 'Producto', 'Cantidad', 'Precio total', 'Fecha', 'Acciones'];
  
  constructor(
    private saleService: SaleService,
  ) { }

  ngOnInit(): void {
    this.breadcrumb = {
      'mainlabel': 'Informes',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/ecommerce'
        },
        {
          'name': 'Informe de ventas',
          'isLink': false,
          'link': ''
        }
      ]
    };

    this.getUserLogged();
    this.getAllSales();
  }

  getUserLogged(): void {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  getAllSales(): void {
    this.blockUIReportTable.start('Loading..');
    this.saleService.getFullInfoSale(this.currentUser.uid).subscribe(data => {
      
      this.PRODUCT = data;
      this.collectionSize = this.PRODUCT.length;
      this.searchData(this.pipe);
      this.productSortable = this.PRODUCT;
      this.blockUIReportTable.stop();
    });
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
    });
  }


  reloadReportTable() {
    this.blockUIReportTable.start('Loading..');

    setTimeout(() => {
      this.blockUIReportTable.stop();
    }, 2500);
  }

}
