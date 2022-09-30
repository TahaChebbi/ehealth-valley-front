import { Validators } from '@angular/forms';
import { MustMatch } from 'src/app/validators/confirmPwd';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-medecin',
  templateUrl: './signup-medecin.component.html',
  styleUrls: ['./signup-medecin.component.css']
})
export class SignupMedecinComponent implements OnInit {
  signUpMedecinForm:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signUpMedecinForm = this.formBuilder.group(
      {
        firstName: ["", [Validators.required, Validators.minLength(4)]],
        lastName: ["", [Validators.required, Validators.minLength(3)]],
        email: ["", [Validators.email, Validators.required]],
        phone: ["", [Validators.required, Validators.minLength(8)]],
        role: ["", [Validators.required]],
        cin: [
          "",
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(8),
          ],
        ],
        region: ["", [Validators.required]],
        adress: ["", [Validators.required]],
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
  signUpMedecin(){
    console.log("here data medecin :",this.signUpMedecinForm.value);
    
  }
}
