import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]
  constructor() { }

  ngOnInit() {
    this.users= [
      {
        firstName: 'Sandesh',
        lastName: 'Jonchhe',
        age: 23,
        address: {
          street: 'Maharajgunj',
          city: 'Kathmandu'
        }
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        address: {
          street: 'Lazimpat',
          city: 'Kathmandu'
        }
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 21,
        address: {
          street: 'Pulchowk',
          city: 'Lalitpur'
        }
      }
    ];
  }

}
