import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Helper } from 'src/app/shared/helper.static.class';

@Component({
  selector: 'modal-createcartitem',
  templateUrl: './modal-createcartitem.component.html',
  styleUrls: ['./modal-createcartitem.component.less']
})
export class ModalCreateCartItemComponent implements OnInit {

    @Output() oncreate: EventEmitter<any> = new EventEmitter<any>();
    @Output() onclose: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild("imagefileinput")
    public imagefileinput: ElementRef;

    @ViewChild("itemimage")
    public itemimage: ElementRef;
   
    private imageData: any = null;

    constructor(public domSanitizer: DomSanitizer) { }

    ngOnInit() {
    }

    emitOnCreate(payload_create) {
        payload_create.itemimage = this.imageData;
        this.oncreate.emit(payload_create);
    }

    emitOnClose() {
        this.onclose.emit();
    }

    processImage($event) {
        Helper.getBase64ImageData($event).then((res) => {
            this.imageData = res;
            this.itemimage.nativeElement.src = res;
        })
    }

    deleteImage() {
        this.imageData = null;
        this.itemimage.nativeElement.src = '';
        this.imagefileinput.nativeElement.val = '';
    }

}
