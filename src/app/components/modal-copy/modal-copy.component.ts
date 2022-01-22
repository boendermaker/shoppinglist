import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-copy',
  templateUrl: './modal-copy.component.html',
  styleUrls: ['./modal-copy.component.less']
})
export class ModalCopyComponent implements OnInit {

    @Input() payload_copy;
    @Output() oncopy: EventEmitter<any> = new EventEmitter<any>();
    @Output() onclose: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    emitOnCopy() {
        this.oncopy.emit(this.payload_copy);
    }

    emitOnClose() {
        this.onclose.emit();
    }

}
