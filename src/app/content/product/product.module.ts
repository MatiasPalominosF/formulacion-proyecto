import { ConfirmationDialogModule } from './../../_core/confirmation-dialog.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { ConfirmationDialogService } from './../../_services/confirmation-dialog.service';
import { environment } from './../../../environments/environment.prod';
import { AgmCoreModule } from '@agm/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { CardModule } from './../partials/general/card/card.module';
import { BlockTemplateComponent } from './../../_layout/blockui/block-template.component';
import { BlockUIModule } from 'ng-block-ui';
import { BreadcrumbModule } from './../../_layout/breadcrumb/breadcrumb.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { ProductIngredientComponent } from './product-ingredient/product-ingredient.component';
import { FilterPipeModule } from 'src/app/_pipe/filter-pipe.module';
import { IngredientModalComponent } from './ingredient-modal/ingredient-modal.component';



@NgModule({
  declarations: [ProductListComponent, ProductModalComponent, ProductIngredientComponent, IngredientModalComponent],
  imports: [
    ConfirmationDialogModule,
    CommonModule,
    BreadcrumbModule,
    NgxEchartsModule,
    CardModule,
    NgbModule,
    FilterPipeModule,
    NgbModalModule,
    ReactiveFormsModule,
    FormsModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey,
      libraries: ['places']
    }),
    RouterModule.forChild([
      {
        path: 'product-list',
        component: ProductListComponent
      },
      {
        path: 'product-modal',
        component: ProductModalComponent
      },
      {
        path: 'product-ingredient',
        component: ProductIngredientComponent
      },
      {
        path: 'ingredient-modal',
        component: IngredientModalComponent
      }
    ]),
  ], providers: [ConfirmationDialogService, AngularFirestore]
})
export class ProductModule { }
