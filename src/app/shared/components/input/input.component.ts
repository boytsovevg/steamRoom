import { Component, Input } from '@angular/core';

@Component({
    selector: 'steam-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent {

    @Input() id: string;
    @Input() placeholder: string;

    public inputText: string;

    public clearQuery(): void {
        this.inputText = null;
    }
}
