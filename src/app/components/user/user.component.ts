import {Component, OnInit} from '@angular/core';

import {User} from '../../models/User';

@Component({
    selector: 'app-user',
    // template: '<h2> John Doe</h2>'
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']

})

export class UserComponent implements OnInit {

    // properties
user:User;

    // methods
    constructor() {


    }

    ngOnInit()
    {
        this.user = {
            firstName: 'Sandesh',
            lastName: 'Jonchhe',
            age: 23,
            address: {
                street: 'Maharajgunj',
                city: 'Kathmandu'
            }
        }
    }
}


