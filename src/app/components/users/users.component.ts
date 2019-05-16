import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  // currentClasses= {};
  // currentStyles= {};

  constructor() { }

  ngOnInit() {

      setTimeout(() =>{
        this.users= [
          {
            firstName: 'Sandesh',
            lastName: 'Jonchhe',
            age: 23,
            address: {
              street: 'Maharajgunj',
              city: 'Kathmandu'
            },
          
            isActive: true,
            hide: true,
            registered: new Date('01/02/2018 08:30:00')
          },
          {
            firstName: 'John',
            lastName: 'Doe',
            age: 50,
            address: {
              street: 'Lazimpat',
              city: 'Kathmandu'
            },
        
            isActive: false,
            hide: true,
            registered: new Date('01/05/2012 08:30:00')

          },
          {
            firstName: 'Jane',
            lastName: 'Doe',
            age: 21,
            address: {
              street: 'Pulchowk',
              city: 'Lalitpur'
            },
           
            isActive: true,
            hide: true,
            registered: new Date('11/02/2019 10:30:00')
          }
         
        ];
        this.loaded = true;

        // this.setCurrentClasses();
        // this.setCurrentStyles();
      },500);  
      
    

    
  }

  // setCurrentClasses()
  // {
  //   this.currentClasses = {
  //     'btn-success': this.enableAdd,
  //     'big-text': this.showExtended
  //   }
  // }

  // setCurrentStyles()
  // {
  //   this.currentStyles = {
  //     'padding-top' : this.showExtended ? '0' : '40px',
  //     'font-size' : this.showExtended ? '' : '40px'
  //   }
  // }
  
  addUser(user:User)
  {
    this.users.push(user);
  }

  // fireEvent(e)
  // {
  //   // console.log('Button Clicked');
  //   console.log(e.typ);
  // }

  toggleHide(user)
  {
    user.hide= !user.hide;
  }
}
