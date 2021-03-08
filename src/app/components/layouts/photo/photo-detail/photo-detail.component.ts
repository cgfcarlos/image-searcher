import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Photo } from "../../../../core/models/photo";

@Component({
    selector: 'photo-detail',
    templateUrl: './photo-detail.component.html',
    styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements AfterViewInit {

    scale = 1.0;
    scaleMultiplier = 0.5;
    translatePos!: {
        x: number,
        y: number
    };
    startDragOffset!: {
        x: number,
        y: number
    }
    mouseDown = false;

    @ViewChild('imageCanvas', { static: false })
    canvas!: ElementRef<HTMLCanvasElement>;
    public context: CanvasRenderingContext2D | null = null;

    constructor(@Inject(MAT_DIALOG_DATA) public data: { photo: Photo }) {
    }

    ngAfterViewInit(): void {
        this.translatePos = {
            x: this.canvas.nativeElement.width / 2,
            y: this.canvas.nativeElement.height / 2
        };
        this.context = this.canvas.nativeElement.getContext('2d');
        this.draw(this.scale, this.translatePos);
    }

    zoomIn(): void {
        this.scale /= this.scaleMultiplier;
        this.draw(this.scale, this.translatePos);
    }

    zoomOut(): void {
        this.scale *= this.scaleMultiplier;
        this.draw(this.scale, this.translatePos);
    }

    onMouseDown(event: MouseEvent) {
        this.mouseDown = true;
        this.startDragOffset.x = event.clientX - this.translatePos.x;
        this.startDragOffset.y = event.clientY - this.translatePos.y;
    }

    onDragged(event: MouseEvent) {
        this.translatePos.x = event.clientX - this.startDragOffset.x;
        this.translatePos.y = event.clientY - this.startDragOffset.y;
        this.draw(this.scale, this.translatePos);
    }

    private draw(scale: number, translatePos: { x: number, y: number }) {
        const self = this;
        self.context?.setTransform(1, 0, 0, 1, 0, 0);
        // self.context?.translate(translatePos.x, translatePos.y);
        self.context?.clearRect(0, 0, self.canvas?.nativeElement.width, self.canvas?.nativeElement.height);
        self.context?.restore();
        const imageObj = new Image();
        imageObj.onload = () => {
            self.canvas.nativeElement.width = imageObj.width * scale;
            self.canvas.nativeElement.height = imageObj.height * scale;
            self.context?.scale(scale, scale);
            self.context?.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, self.canvas?.nativeElement.width, self.canvas?.nativeElement.height);
        };

        imageObj.src = self.data.photo.urls.full;
    }

}