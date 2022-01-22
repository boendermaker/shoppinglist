import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';
import { Router } from '@angular/router';
import { Helper } from '../../shared/helper.static.class';

@Component({
  selector: 'cart-listing',
  templateUrl: './cart-listing.component.html',
  styleUrls: ['./cart-listing.component.less']
})
export class CartListingComponent implements OnInit {

    @Output() onmodalupdate: EventEmitter<any> = new EventEmitter<any>();
    @Output() onmodaldelete: EventEmitter<any> = new EventEmitter<any>();
    @Output() onmodalcopy: EventEmitter<any> = new EventEmitter<any>();

    subscriptions$ = [];
    listcarts_all = [];
    listcarts_grid = [];

    constructor(private apiService: ApiService,
                private store: StoreService,
                private router: Router) { }

    ngOnInit() {
        this.subscriptions$.push(this.store.stream('listcarts_all').subscribe((res) => {
            this.listcarts_all = res;
            this.listcarts_grid = Helper.createGridArray(res, 3);
        }));
    }

    ngOnDestroy() {
        this.subscriptions$.forEach((subscription) => subscription.unsubscribe());
    }

    goToCartItems(payload) {
        this.router.navigate(['/', 'cartitems', payload]);
    }

    emitOpenModalUpdate($event) {
        this.onmodalupdate.emit($event);
    }

    emitOpenModalDelete($event) {
        this.onmodaldelete.emit($event);
    }

    emitOpenModalCopy($event) {
        this.onmodalcopy.emit($event);
    }

}
