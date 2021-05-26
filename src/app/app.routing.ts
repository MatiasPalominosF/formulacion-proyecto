import { ProductModule } from './content/product/product.module';
import { StockModule } from './content/stock/stock.module';
import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './_layout/private-layout/private-layout.component';
import { AuthGuard } from './_guards/auth.guard';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';
import { ChangelogComponent } from './changelog/changelog.component';
import { FullLayoutComponent } from './_layout/full-layout/full-layout.component';
import { PrivacyPolicyComponent } from './login/privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './login/terms-condition/terms-condition.component';
import { RoleGuard } from './_guards/role.guard';

const appRoutes: Routes = [
  { path: 'privacypolicy', component: PrivacyPolicyComponent },
  { path: 'termCondition', component: TermsConditionComponent },
  // Public layout
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: '', component: LoginComponent },

    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'error', loadChildren: () => import('../app/content/full-pages/error/error.module').then(m => m.ErrorModule)
        , canActivate: [AuthGuard]
      },
      {
        path: 'authentication', loadChildren: () => import('../app/content/full-pages/authentication/authentication.module').then(m =>
          m.AuthenticationModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'others', loadChildren: () => import('../app/content/full-pages/others/others.module').then(m => m.OthersModule),
        canActivate: [AuthGuard]
      },
      {
        path: '', loadChildren: () => import('../app/content/view-store/view-store.module').then(m => m.ViewStoreModule),
      }
    ]
  },
  // Private layout
  {
    path: '',
    component: PrivateLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'logout', component: LoginComponent },
      { path: 'changelog', component: ChangelogComponent },
      {
        path: 'dashboard', loadChildren: () => import('../app/content/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [RoleGuard],
        data: { expectedRole1: 'admin', expectedRole2: '' }
      },
      {
        path: 'components', loadChildren: () => import('../app/content/ngbbootstrap/components.module').then(m => m.ComponentsModule),
      },
      {
        path: 'todo-app', loadChildren: () => import('../app/content/applications/todo-app/todo-app.module').then(m => m.TodoAppModule)

      },
      {
        path: 'chats', loadChildren: () => import('../app/content/applications/chat/chats.module').then(m => m.ChatsModule)
      },
      {
        path: 'email', loadChildren: () => import('../app/content/applications/email/email.module').then(m => m.EmailModule)
      },
      {
        path: 'calender', loadChildren: () => import('../app/content/applications/calender/calender.module').then(m => m.CalenderModule)
      },
      {
        path: 'contacts', loadChildren: () => import('../app/content/applications/contacts/contacts.module').then(m => m.ContactsModule)
      },
      {
        path: 'chartjs', loadChildren: () => import('../app/content/charts-maps/chartjs/chartjs.module').then(m => m.ChartjsModule)
      },
      {
        path: 'form-elements', loadChildren: () => import('../app/content/forms/form-elements/form-elements.module').then(m =>
          m.FormElementsModule)
      },
      {
        path: 'form-layouts', loadChildren: () => import('../app/content/forms/form-layouts/form-layouts.module').then(m =>
          m.FormLayoutsModule)
      },
      {
        path: 'form-wizard', loadChildren: () => import('../app/content/forms/form-wizard/form-wizard.module').then(m =>
          m.FormWizardModule)
      },
      {
        path: 'form-repeater', loadChildren: () => import('../app/content/forms/form-repeater/form-repeater.module').then(m =>
          m.FormRepeaterModule)
      },
      {
        path: 'ngchartist', loadChildren: () => import('../app/content/charts-maps/ngchartist/ngchartist.module').then(m =>
          m.NgchartistModule)
      },
      {
        path: 'boostraptables', loadChildren: () => import('../app/content/table/boostraptables/boostraptables.module').then(m =>
          m.BoostraptablesModule)
      },
      {
        path: 'datatables', loadChildren: () => import('../app/content/table/datatables/datatables.module').then(m => m.DatatablesModule)
      },
      {
        path: 'datatablesext', loadChildren: () => import('../app/content/table/datatablesext/datatablesext.module').then(m =>
          m.DatatablesextModule)
      },
      { path: 'icons', loadChildren: () => import('../app/content/icons/icons.module').then(m => m.IconsModule) },
      { path: 'cards', loadChildren: () => import('../app/content/cards/cards.module').then(m => m.CardsModule) },
      { path: 'maps', loadChildren: () => import('../app/content/maps/maps.module').then(m => m.MapsModule) },
      {
        path: 'invoice', loadChildren: () => import('../app/content/pages/invoice/invoice.module').then(m => m.InvoiceModule)

      },
      {
        path: 'timelines', loadChildren: () => import('../app/content/pages/timelines/timelines.module').then(m => m.TimelinesModule)
      },
      {
        path: 'user', loadChildren: () => import('../app/content/pages/user/user.module').then(m => m.UserModule), canActivate: [RoleGuard],
        data: { expectedRole1: 'admin', expectedRole2: '' }

      },
      {
        path: 'client', loadChildren: () => import('./content/client/client.module').then(m => m.ClientModule), canActivate: [RoleGuard],
        data: { expectedRole1: 'admin', expectedRole2: '' }
      },
      {
        path: 'stock', loadChildren: () => import('./content/stock/stock.module').then(m => m.StockModule), canActivate: [RoleGuard],
        data: { expectedRole1: 'admin', expectedRole2: '' }
      },
      {
        path: 'product', loadChildren: () => import('./content/product/product.module').then(m => m.ProductModule), canActivate: [RoleGuard],
        data: { expectedRole1: 'admin', expectedRole2: '' }
      },
      {
        path: 'store', loadChildren: () => import('../app/content/store/store.module').then(m => m.StoreModule), canActivate: [RoleGuard],
        data: { expectedRole1: 'admin', expectedRole2: '' }
      },
      {
        path: 'sale', loadChildren: () => import('../app/content/sale/sale.module').then(m => m.SaleModule), canActivate: [RoleGuard],
        data: { expectedRole1: 'admin', expectedRole2: '' }
      },
      {
        path: 'report', loadChildren: () => import('../app/content/report/report.module').then(m => m.ReportModule), canActivate: [RoleGuard],
        data: { expectedRole1: 'admin', expectedRole2: '' }
      },
      {
        path: 'cancellation', loadChildren: () => import('../app/content/cancellation/cancellation.module').then(m => m.CancellationModule), canActivate: [RoleGuard],
        data: { expectedRole1: 'admin', expectedRole2: '' }
      },
      {
        path: 'gallery', loadChildren: () => import('../app/content/pages/gallery/gallery.module').then(m => m.GalleryModule)
      },
      {
        path: 'news-feed', loadChildren: () => import('../app/content/pages/news-feed/news-feed.module').then(m => m.NewsFeedModule)
      },
      {
        path: 'dropzone', loadChildren: () => import('../app/content/pages/dropzone/dropzone.module').then(m => m.DropzoneModule)
      },
      {
        path: 'social-feed', loadChildren: () => import('../app/content/pages/social-feed/social-feed.module').then(m =>
          m.SocialFeedModule)
      },
      {
        path: 'search', loadChildren: () => import('../app/content/pages/search/search.module').then(m => m.SearchModule)
      },
      {
        path: 'advanceCards', loadChildren: () => import('../app/content/advance-cards/advance-cards.module').then(m =>
          m.AdvanceCardsModule)
      },
      {
        path: 'extraComponents', loadChildren: () => import('../app/content/extra-components/extra-components.module').then(m =>
          m.ExtraComponentsModule)
      },
    ],
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'dashboard' }
];

export const routing = RouterModule.forRoot(appRoutes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' });
