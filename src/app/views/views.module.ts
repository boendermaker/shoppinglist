import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './carts/carts.component';
import { CartItemsComponent } from './cartitems/cartitems.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    CartsComponent,
    CartItemsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    CartsComponent,
    CartItemsComponent
  ]
})
export class ViewsModule { }
