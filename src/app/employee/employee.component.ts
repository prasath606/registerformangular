import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  name: string=" ";
 address: string=" ";
 mobile: Number =0;

  constructor(private http: HttpClient)
  {

  }

  register()
  {
  
    let bodyData = {
      "name" : this.name,
      "address": this.address,
      "mobile": this.mobile
       
    }; 
    this.http.post("http://localhost:8080/api/save",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully")
        
        this.name = '';
        this.address = ' ';
        this.mobile = 0;
         
    });
  }
save()
  {
        this.register();
  }

}
