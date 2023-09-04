import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    active(element1: HTMLElement, element2: HTMLElement, flag: number) {
        if(flag == 1){
            element1.classList.add('active');
            element2.classList.remove('active');
        }else{
            element1.classList.remove('active');
            element2.classList.remove('active');
        }
    }

}