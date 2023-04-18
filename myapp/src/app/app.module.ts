import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { warningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { NamesComponent } from './names/names.component';
import { ClicklogsComponent } from './clicklogs/clicklogs.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { ProductComponent } from './products/product/product.component';
import { LifecycledemoComponent } from './lifecycledemo/lifecycledemo.component';

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
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
