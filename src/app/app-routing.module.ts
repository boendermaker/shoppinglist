import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartsComponent } from './views/carts/carts.component';
import { CartItemsComponent } from './views/cartitems/cartitems.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CartsComponent
  },
  {
    path: 'cartitems/:cartid',
    component: CartItemsComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
