import { Component, Input, OnInit } from '@angular/core';
import { Sizes, ImageTypes } from './../../enums';

interface Size {
  width: number;
  height: number;
}

@Component({
  selector: 'steam-image',
  styleUrls: ['./image.component.scss'],
  template: `
    <img [class]="imageClass"
      [src]="imageSource" alt="image"
      [height]="imageHeight"
      [width]="imageWidth">
  `
})
export class ImageComponent implements OnInit {

  @Input() imageSource: string;

  @Input() imageClass?: string;
  @Input() size?: Sizes = Sizes.md;
  @Input() type?: ImageTypes = ImageTypes.squared;

  @Input() width?: number;
  @Input() height?: number;

  public imageHeight: number;
  public imageWidth: number;


  public iconParameters: { size: Size };
  private sizes = {
    [Sizes.sm]: {
      height: 100,
      width: 100
    },
    [Sizes.md]: {
      height: 150,
      width: 150
    },
    [Sizes.lg]: {
      height: 200,
      width: 200
    }
  };

  ngOnInit() {
    const { width, height } = this.getSize();
    this.imageHeight = height;
    this.imageWidth = width;
  }

  private getSize(): Size {

    try {
      if (this.type === ImageTypes.custom) {
        return {
          width: this.width,
          height: this.height
        };
      }
    } catch (e) {
      throw new Error('set width and height of custom type');
    }

     return this.sizes[this.size];
  }

}
