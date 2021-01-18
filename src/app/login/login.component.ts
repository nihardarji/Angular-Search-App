import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginInfo } from 'src/environments/environment';
import { Router } from '@angular/router'
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private router: Router, private _snackBar: MatSnackBar) { 
    this.formGroup = new FormGroup({})
  }

  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  login() {
    if(this.formGroup.valid) {
      if(this.formGroup.value.username === loginInfo.username && this.formGroup.value.password === loginInfo.password){
        this.openSnackBar('Login successful')
        this.router.navigate(['list'])
      } else {
        this.openSnackBar('Invalid Credentials')
      }
    }
  }
  openSnackBar(msg: any) {
    this._snackBar.open(msg, 'Close', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
