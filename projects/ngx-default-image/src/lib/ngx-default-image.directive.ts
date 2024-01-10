import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { META } from './META';

@Directive({
    selector: '[NgxDefaultImage]',
    standalone: true
})
export class NgxDefaultImageDirective {

  @Input() imageURL = "";
  private imageElement: HTMLImageElement;
  @Output() imageMetaInfo: EventEmitter<META> = new EventEmitter<META>();

  public imageMeta: META = {
    isValidImage: false,
    aspectRatio: "1",
    x: 0,
    y: 0,
    rwidth: 0,
    rheight: 0,
    renderTime: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    datedOn: {
      loadedOn: 0,
      renderedOn: 0,
      renderTime: 0
    },
    width: 0,
    height: 0,
    src: "",
    esrc: "",
    alt: "",
    crossorigin: ""
  };

  constructor(private el: ElementRef) {
    this.imageElement = this.el.nativeElement as HTMLImageElement;
    let image = new Image();
    this.imageMeta.datedOn = {
      loadedOn: new Date().getTime(),
      renderedOn: new Date().getTime(),
      renderTime: 0
    };
    let canvas = document.createElement("canvas") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    image.onload = (event) => {
      ctx.drawImage(image, 0, 0); // draw in image
      this.imageMeta.datedOn.renderedOn = new Date().getTime();
      this.imageMeta.datedOn.renderTime =
        this.imageMeta.datedOn.renderedOn - this.imageMeta.datedOn.loadedOn;
      this.getImageMeta(event, true);
    };

    image.onerror = (event) => {
      this.getImageMeta(event, false);
      this.imageElement.setAttribute("src", this.imageURL);
    };

    image.src = this.imageElement.getAttribute("src") || "";
  }

  public getImageMeta(event: any, isValidImage: boolean) {
    let boundingRect: DOMRect = this.imageElement.getBoundingClientRect();
    let img: HTMLImageElement = this.imageElement;
    this.imageMeta = {
      isValidImage: isValidImage,
      aspectRatio: (boundingRect.width / boundingRect.height).toPrecision(2),
      x: boundingRect.x,
      y: boundingRect.y,
      rwidth: boundingRect.width,
      rheight: boundingRect.height,
      renderTime: this.imageMeta.datedOn.renderTime,
      top: boundingRect.top,
      right: boundingRect.right,
      bottom: boundingRect.bottom,
      left: boundingRect.left,
      datedOn: this.imageMeta.datedOn,
      width: event.target.width,
      height: event.target.height,
      src: event.target.src,
      esrc: this.imageURL,
      alt: event.target.alt,
      crossorigin: img.getAttribute("crossorigin") || ''
    };
    this.imageMetaInfo.emit(this.imageMeta);
  }

  public calculateAspectRatio(width : number, height: number) {
    return width / height;
  }
}
