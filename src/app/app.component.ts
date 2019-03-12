import { Component ,OnInit} from '@angular/core';
import { FormControl,FormGroup ,ReactiveFormsModule,Validators,NgForm} from  '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  
  employeeForm:FormGroup;

  
  ngOnInit(){
    this.employeeForm= new FormGroup({
     Name: new FormControl('',[Validators.required, Validators.minLength(3)]),
     Email: new FormControl('',[Validators.required, Validators.email]),
     PhNo: new FormControl('',[Validators.required, Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
     country_code:new FormControl("+91"),
     ID: new FormControl('',Validators.required), 

     ADD: new FormGroup({
     LINE1: new FormControl('',Validators.required),
     LINE2: new FormControl('',Validators.required),
     DIST: new FormControl('',Validators.required),
     STATE: new FormControl('',Validators.required),
     PIN: new FormControl('',[Validators.required, Validators.maxLength(6)])
                        })

     })

  }
}
