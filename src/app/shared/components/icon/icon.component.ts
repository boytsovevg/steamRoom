import { Component, Input, OnInit, AfterContentInit } from '@angular/core';
import { IconTypes, Sizes } from '../../enums';
import { Size } from '../../models';

@Component({
    selector: 'steam-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})
export class IconComponent implements AfterContentInit {

    @Input() name: string;
    @Input() type?: IconTypes = IconTypes.action;
    @Input() size?: Sizes = Sizes.sm;

    public iconHeight: number;
    public iconWidth: number;
    public iconPath: string;

    private iconsPath = '../../../../assets/svg/icons';

    private iconSizes = {
        [Sizes.sm]: {
            height: 10,
            width: 10
        }
    };

    ngAfterContentInit() {
        const { height, width } = this.getSize();
        this.iconHeight = height;
        this.iconWidth = width;

        this.iconPath = this.getIconPath();
    }

    private getIconPath(): string {
        return `${this.iconsPath}/${this.name}.svg`;
    }

    private getSize(): Size {
        return this.iconSizes[this.size];
    }
}
