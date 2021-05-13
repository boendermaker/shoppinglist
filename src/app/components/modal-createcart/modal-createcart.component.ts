import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-createcart',
  templateUrl: './modal-createcart.component.html',
  styleUrls: ['./modal-createcart.component.less']
})
export class ModalCreateCartComponent implements OnInit {

    @Output() oncreate: EventEmitter<any> = new EventEmitter<any>();
    @Output() onclose: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    emitOnCreate(payload_create) {
        this.oncreate.emit(payload_create);
    }

    emitOnClose() {
        this.onclose.emit();
    }

}
