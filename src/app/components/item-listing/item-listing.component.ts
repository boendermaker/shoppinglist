import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.less']
})
export class ItemListingComponent implements OnInit {

    @Output() ontoggledone: EventEmitter<any> = new EventEmitter<any>();
    @Output() onmodalupdate: EventEmitter<any> = new EventEmitter<any>();
    @Output() onmodaldelete: EventEmitter<any> = new EventEmitter<any>();

    listcartitems_all = [];

    constructor(private apiService: ApiService,
                private store: StoreService) { }

    ngOnInit() {
        this.store.stream('listcartitems_all').subscribe(res => this.listcartitems_all = res);
    }

    emitToggleDone($event) {
        this.ontoggledone.emit($event);
    }

    emitOpenModalUpdate($event) {
        this.onmodalupdate.emit($event);
    }

    emitOpenModalDelete($event) {
        this.onmodaldelete.emit($event);
    }

}
