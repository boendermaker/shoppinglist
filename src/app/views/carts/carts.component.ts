import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'carts',
    templateUrl: './carts.component.html',
    styleUrls: ['./carts.component.less']
})

export class CartsComponent implements OnInit {

    subscriptions$ = [];
    loading = false;
    payload_delete = 0;
    payload_create = null;
    payload_update = null;
    modal = {
        delete: false,
        create: null,
        update: null
    };

    constructor(private apiService: ApiService,
                private store: StoreService) { }

    ngOnInit() {
        this.subscriptions$.push(this.store.stream('loading').subscribe(res => this.loading = res));
        this.loadCartListing();
    }

    ngOnDestroy() {
        this.subscriptions$.forEach((subscription) => subscription.unsubscribe());
    }

    loadCartListing() {
        this.store.add('loading', true);
        this.subscriptions$.push(this.apiService.getAllCarts().pipe(map((res) => {

            Object.entries(res).forEach((v) => {
                let cartItem = v[1];
                const payload = {"cartid": cartItem.id};
                this.apiService.getCartItemInfo(payload).subscribe((x) => {
                    cartItem.info = {
                        itemcount: x[0].itemcount,
                        itemsdone: x[1].itemsdone
                    }
                });
            });
            
            return res;

        })).subscribe((res) => {
            this.store.add('listcarts_all', res);
            this.store.add('loading', false);
        }));
    }

    

    toggleCart($event) {
        const id = +$event.id;
        const done = +$event.done === 0 ? 1 : 0
        const payload = {id: id, done: done};
        
        this.store.add('loading', true);
        this.subscriptions$.push(this.apiService.toggleCart(payload).subscribe((res) => {
            this.store.add('loading', false);
            this.loadCartListing();
        },
        (err) => { 
            this.store.add('loading', false);
        }));
    }

    deleteCart($event) {
        this.store.add('loading', true);
        this.subscriptions$.push(this.apiService.deleteCart($event).subscribe((res) => {
            this.store.add('loading', false);
            this.loadCartListing();
            this.closeModalDelete();
        },
        (err) => { 
            this.store.add('loading', false);
            this.closeModalDelete();
        }));
    }

    createCart($event) {
        this.store.add('loading', true);
        this.subscriptions$.push(this.apiService.createCart($event).subscribe((res) => {
            this.store.add('loading', false);
            this.loadCartListing();
            this.closeModalCreate();
        },
        (err) => { 
            console.log(err)
            this.store.add('loading', false);
            this.closeModalCreate();
        }));
    }

    updateCart($event) {
        console.log($event)
        this.store.add('loading', true);
        this.subscriptions$.push(this.apiService.updateCart($event).subscribe((res) => {
            this.store.add('loading', false);
            this.loadCartListing();
            this.closeModalUpdate();
        },
        (err) => { 
            console.log(err);
            this.store.add('loading', false);
            this.loadCartListing();
            this.closeModalUpdate();
        }));
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
    }

    closeModalDelete() {
        this.ctrlModal('delete', false);
    }

}
