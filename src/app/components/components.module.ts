import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartListingComponent } from './cart-listing/cart-listing.component';
import { ItemListingComponent } from './item-listing/item-listing.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { ModalCreateCartComponent } from './modal-createcart/modal-createcart.component';
import { ModalUpdateCartComponent } from './modal-updatecart/modal-updatecart.component';
import { ModalCreateCartItemComponent } from './modal-createcartitem/modal-createcartitem.component';
import { ModalUpdateCartItemComponent } from './modal-updatecartitem/modal-updatecartitem.component';
import { CardComponent } from './card/card.component';
import { ActionButtonComponent } from './actionbutton/actionbutton.component';
import { DataRowComponent } from './datarow/datarow.component';


@NgModule({
  declarations: [
    CartListingComponent,
    ItemListingComponent,
    HeaderbarComponent,
    ModalDeleteComponent,
    ModalCreateCartComponent,
    ModalUpdateCartComponent,
    ModalCreateCartItemComponent,
    ModalUpdateCartItemComponent,
    CardComponent,
    ActionButtonComponent,
    DataRowComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CartListingComponent,
    ItemListingComponent,
    HeaderbarComponent,
    ModalDeleteComponent,
    ModalCreateCartComponent,
    ModalUpdateCartComponent,
    ModalCreateCartItemComponent,
    ModalUpdateCartItemComponent,
    CardComponent,
    ActionButtonComponent,
    DataRowComponent
  ],
})
export class ComponentsModule { }
