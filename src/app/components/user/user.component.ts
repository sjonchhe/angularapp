import {Component} from '@angular/core';

@Component({
    selector: 'app-user',
    // template: '<h2> John Doe</h2>'
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']

})

export class UserComponent {

    // properties
    firstName: string = 'Sandesh';
    lastName: string = 'Jonchhe';
    age: number = 23;
    address: string ={
        city: 'Kathmandu',
        area: 'Maharajgunj',
        state: 'Province 3'
    }
    // methods
    constructor()
    {
        this.firstName=5;
        console.log(this.firstName);

    }

    sayHello(){
        console.log('Hello ${this.firstName }');
       // console.log('Hello' + ' ' + this.firstName)
    }
    showAge()
    {
        return this.age;
    }
}
