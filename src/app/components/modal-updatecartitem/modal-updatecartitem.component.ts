import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Helper } from 'src/app/shared/helper.static.class';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'modal-updatecartitem',
  templateUrl: './modal-updatecartitem.component.html',
  styleUrls: ['./modal-updatecartitem.component.less']
})
export class ModalUpdateCartItemComponent implements OnInit {
    
    @Input() payload_update;
    @Output() onupdate: EventEmitter<any> = new EventEmitter<any>();
    @Output() onclose: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild("imagefileinput")
    public imagefileinput: ElementRef;

    @ViewChild("itemimage")
    public itemimage: ElementRef;
   
    private imageData: any = null;

    constructor(private apiService: ApiService,
                private store: StoreService) {
    }

    ngOnInit() {
        //hack to fix changedetection error
        setTimeout(() => {
            this.loadCartItemImage({id: this.payload_update.id});
        },0)
    }

    emitOnUpdate(payload_form) {
        payload_form.id = this.payload_update.id;
        payload_form.itemimage = this.imageData;
        this.onupdate.emit(payload_form);
    }

    emitOnClose() {
        this.onclose.emit();
    }

    loadCartItemImage(payload) {
        this.store.add('loading', true);
        this.apiService.getCartItemImage(payload).subscribe((res) => {
            this.imageData = res[0].itemimage;
            this.itemimage.nativeElement.src = this.imageData; 
            this.store.add('loading', false);
        });
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
