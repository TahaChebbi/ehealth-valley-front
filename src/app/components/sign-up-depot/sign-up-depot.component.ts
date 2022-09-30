import { MustMatch } from 'src/app/validators/confirmPwd';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-depot',
  templateUrl: './sign-up-depot.component.html',
  styleUrls: ['./sign-up-depot.component.css']
})
export class SignUpDepotComponent implements OnInit {
  signUpDepotForm:FormGroup
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.signUpDepotForm = this.formbuilder.group(
      {
        firstName: ["", [Validators.required, Validators.minLength(4)]],
    
        phone:["", [Validators.required, Validators.minLength(8),Validators.maxLength(8)]],
        role:["", [Validators.required]],
        region: ["", [Validators.required]],
        adress: [
          "",
          [
            Validators.required,
            
          ],
        ],
      
       
        password: [
          "",
          [
            Validators.required,
            Validators.pattern(
              "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
            ),
          ],
        ],
        confirmPassword: [""],
      },
      {
        validators: MustMatch("password", "confirmPassword"),
      }
    );
  }
  signUpDepot(){
    console.log("here data depot :",this.signUpDepotForm.value);
    
  }
}
