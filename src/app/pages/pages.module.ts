import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ProductsComponent, OrdersComponent, HomeComponent],
  imports: [CommonModule],
  exports: [ProductsComponent, OrdersComponent, HomeComponent],
})
export class PagesModule {}
