import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms"

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.required])]
  })

  goBack(){
    history.back()
  }

  onSubmit(){
    console.log(this.loginForm.value)
  }
}
