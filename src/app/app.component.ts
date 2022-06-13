import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  emp = [
    {
      fname: 'Anup',
      lname: 'kumar',
      phone: '0987654321',
    },
    {
      fname: 'kumar',
      lname: 'anup',
      phone: '1234567890',
    },
  ];
  empObj = {
    fname: '',
    lname: '',
    phone: '',
  };
  name = 'Angular';

  validateFrom() {
    if(this.empObj.phone.toString().length == 10 ){
      this.emp.push(this.empObj);
      this.empObj = {
        fname: '',
    lname: '',
    phone: '',
      }
    }else{
      alert("Entter valid values");
    }

  }

  deleteEmployee(indeex){
    this.emp.splice(indeex,1);
    console.log(indeex)
  }
}
