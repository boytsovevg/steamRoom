import { Component, Input, AfterContentInit } from '@angular/core';
import { Sizes, ImageTypes } from './../../enums';
import { Size } from '../../models';

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
export class ImageComponent implements AfterContentInit {

  @Input() imageSource: string;

  @Input() imageClass = '';
  @Input() size?: Sizes = Sizes.md;
  @Input() type?: ImageTypes | string = ImageTypes.squared;

  @Input() width?: number;
  @Input() height?: number;

  public imageHeight: number;
  public imageWidth: number;

  private sizes = {
    [Sizes.xs]: {
      height: 50,
      width: 50
    },
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

  ngAfterContentInit() {
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
