import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { warningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServerComponent } from './server/server.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NamesComponent } from './names/names.component';
import { ClicklogsComponent } from './clicklogs/clicklogs.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { ProductComponent } from './products/product/product.component';
import { LifecycledemoComponent } from './lifecycledemo/lifecycledemo.component';
import { BasicHighlightDirective } from './CustomDirectives/BasicHighlightDirective';
import { BetterHighlightDirective } from './CustomDirectives/better-highlight.directive';
import { NewaccountComponent } from './accounts/newaccount/newaccount.component';
import { AccountComponent } from './accounts/account/account.component';
import { AccountsComponent } from './accounts/accounts.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TformsComponent } from './tforms/tforms.component';
import { RformsComponent } from './rforms/rforms.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { ShortenPipe } from './commonpipes/shorten-pipe';
import { FilterPipe } from './commonpipes/filter.pipe';
import { ReversePipe } from './commonpipes/reverse.pipe';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'warningalert', component: warningAlertComponent },
  { path: 'server', component: ServerComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'clicklogs', component: ClicklogsComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'tforms', component: TformsComponent },
  { path: 'rforms', component: RformsComponent },
  { path: 'pdemo', component: PipesdemoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    warningAlertComponent,
    SuccessAlertComponent,
    ServerComponent,
    NamesComponent,
    ClicklogsComponent,
    AddproductComponent,
    ProductComponent,
    LifecycledemoComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    NewaccountComponent,
    AccountComponent,
    AccountsComponent,
    HomeComponent,
    TformsComponent,
    RformsComponent,
    PipesdemoComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
