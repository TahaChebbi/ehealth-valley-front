import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder,  Validators } from "@angular/forms";
import { MustMatch } from 'src/app/validators/confirmPwd';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group(
      {
        fullName: ["", [Validators.required, Validators.minLength(3)]],
    
        email: ["", [Validators.email, Validators.required]],
        region: ["", [Validators.required]],
        role: ["", [Validators.required]],
        adress: [
          "",
          [
            Validators.required,
            
          ],
        ],
        category: ["", [Validators.required]],
        type: ["", [Validators.required]],
       
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
  signup() {
    console.log("here data : ",this.signupForm.value);
    
  }
}
