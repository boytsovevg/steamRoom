import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { Sizes, ImageTypes } from './../../enums';

interface Size {
  width: number;
  height: number;
}

@Component({
  selector: 'steam-image',
  styleUrls: ['./image.component.scss'],
  template: `
    <img [src]="imageSource" alt="image">
  `
})
export class ImageComponent implements OnInit {

  @Input() imageSource: string;

  @Input() size?: Sizes = Sizes.md;
  @Input() type?: ImageTypes = ImageTypes.squared;

  @Input() width?: number;
  @Input() height?: number;

  @HostBinding('img.attr.height') imageHeight;
  @HostBinding('img.attr.width') imageWidth;


  public iconParameters: { size: Size };
  private sizes: {
    [Sizes.sm]: {
      height: 50,
      width: 50
    },
    [Sizes.md]: {
      height: 100,
      width: 100
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

    let size;
    try {
      size = this.sizes[this.size];
    } catch (e) {
      throw new Error('set squared size');
    }

    return size;
  }

}
