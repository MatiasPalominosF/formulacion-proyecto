import { ConfirmationDialogModule } from './../../../_core/confirmation-dialog.module';
import { ConfirmationDialogService } from './../../../_services/confirmation-dialog.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { BlockUIModule } from 'ng-block-ui';
import { CardModule } from '../../partials/general/card/card.module';
import { environment } from 'src/environments/environment';
import { Angular2PhotoswipeModule } from 'angular2_photoswipe';
// Imports from wizard 
import { ArchwizardModule } from 'angular-archwizard';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { WorkerModalComponent } from './worker-modal/worker-modal.component';


@NgModule({
  declarations: [UserCardsComponent, UserProfileComponent, UserListComponent, WorkerModalComponent],
  imports: [
    ConfirmationDialogModule,
    CommonModule,
    CardModule,
    NgxEchartsModule,
    ReactiveFormsModule,
    ChartsModule,
    ArchwizardModule, // Wizards
    NgbDatepickerModule, // datePicker
    NgbModule,
    FormsModule,
    NgbModalModule,
    BreadcrumbModule,
    Angular2PhotoswipeModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey,
      libraries: ['places']
    }),
    RouterModule.forChild([
      {
        path: 'user-profile',
        component: UserProfileComponent
      },
      {
        path: 'user-cards',
        component: UserCardsComponent
      },
      {
        path: 'user-list',
        component: UserListComponent
      },
      {
        path: 'worker-modal',
        component: WorkerModalComponent
      },
    ]),
  ],
  providers: [AngularFirestore, ConfirmationDialogService]
})
export class UserModule { }
