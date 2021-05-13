import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'cart';

  constructor(private apiService: ApiService,
    private store: StoreService) { }

  createStores() {
    this.store.create('loading');
    this.store.create('listcarts_all');
    this.store.create('listcartitems_all');
    this.store.create('listcartitem_image');
    this.store.create('currentcart');
  }

  ngOnInit() {
    this.createStores();
  }

}
