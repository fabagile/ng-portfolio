import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onLogout() {
    console.log('déconnecté')
    this.router.navigateByUrl('')
  }
  onGotoSignupPage() {
    console.log('inscrivez-vous')
    this.router.navigateByUrl('/subscribers/sign-up')
  }

}
