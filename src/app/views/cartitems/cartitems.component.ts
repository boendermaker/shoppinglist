import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'cartitems',
    templateUrl: './cartitems.component.html',
    styleUrls: ['./cartitems.component.less']
})

export class CartItemsComponent implements OnInit {

    loading = false;
    $urlParamSubject = null;
    CurrencyFormatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
    });
    
    cartid = null;
    cart = null;
    payload_delete = 0;
    payload_create = null;
    payload_update = null;
    modal = {
        delete: false,
        create: null,
        update: null
    };

    constructor(private apiService: ApiService,
                private store: StoreService,
                private route: ActivatedRoute) { 

        this.$urlParamSubject = this.route.params.subscribe(params => {
            this.cartid = +params['cartid'];
        });

    }

    ngOnInit() {
        this.store.stream('loading').subscribe(res => this.loading = res);
        this.store.stream('currentcart').subscribe(res => this.cart = res[0]);
        this.loadCart();
        this.loadCartItemListing();
    }

    ngOnDestroy() {
        this.$urlParamSubject.unsubscribe();
    }

    loadCart() {
        this.store.add('loading', true);
        const payload = {"cartid": this.cartid};
        this.apiService.getCart(payload).subscribe((res) => {
            this.store.add('currentcart', res);
            this.store.add('loading', false);
        });
    }

    loadCartItemListing() {
        this.store.add('loading', true);
        const payload = {"cartid": this.cartid};
        this.apiService.getAllCartItems(payload).subscribe((res) => {
            this.store.add('listcartitems_all', res);
            this.store.add('loading', false);
        });
    }

    toggleCartItem($event) {
        const id = +$event.id;
        const done = +$event.done === 0 ? 1 : 0
        const payload = {id: id, done: done};
        this.store.add('loading', true);
        this.apiService.toggleCartItem(payload).subscribe((res) => {
            this.store.add('loading', false);
            this.loadCartItemListing();
        },
        (err) => { 
            this.store.add('loading', false);
        });
    }

    deleteCartItem($event) {
        this.store.add('loading', true);
        this.apiService.deleteCartItem($event).subscribe((res) => {
            this.store.add('loading', false);
            this.loadCartItemListing();
            this.closeModalDelete();
        },
        (err) => { 
            this.store.add('loading', false);
            this.closeModalDelete();
        });
    }

    createCartItem($event) {
        this.store.add('loading', true);
        $event.cartid = this.cartid;
        this.apiService.createCartItem($event).subscribe((res) => {
            this.store.add('loading', false);
            this.loadCartItemListing();
            this.closeModalCreate();
        },
        (err) => { 
            console.log(err)
            this.store.add('loading', false);
            this.closeModalCreate();
        });
    }

    updateCartItem($event) {
        this.store.add('loading', true);
        this.apiService.updateCartItem($event).subscribe((res) => {
            this.store.add('loading', false);
            this.loadCartItemListing();
            this.closeModalUpdate();
        },
        (err) => { 
            console.log(err);
            this.store.add('loading', false);
            this.loadCartItemListing();
            this.closeModalUpdate();
        });
    }

    ctrlModal(name, todo) {
        this.modal[name] = todo;
    }

    openModalCreate() {
        this.ctrlModal('create', true);
    }

    closeModalCreate() {
        this.ctrlModal('create', false);
    }

    openModalUpdate($event) {
        this.payload_update = $event;
        this.ctrlModal('update', true);
    }

    closeModalUpdate() {
        this.ctrlModal('update', false);
    }

    openModalDelete($event) {
        this.payload_delete = $event;
        this.ctrlModal('delete', true);
        console.log(this.modal)
    }

    closeModalDelete() {
        this.ctrlModal('delete', false);
    }

}
