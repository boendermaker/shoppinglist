import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-updatecart',
  templateUrl: './modal-updatecart.component.html',
  styleUrls: ['./modal-updatecart.component.less']
})
export class ModalUpdateCartComponent implements OnInit {
    
    @Input() payload_update;
    @Output() onupdate: EventEmitter<any> = new EventEmitter<any>();
    @Output() onclose: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    emitOnUpdate(payload_form) {
        payload_form.id = this.payload_update.id;
        this.onupdate.emit(payload_form);
    }

    emitOnClose() {
        this.onclose.emit();
    }

}
