import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logCommand!:string
  logBtnColor = "info"
   active=false

  constructor(private router:Router
    ) { }

  ngOnInit(): void {
    this.logCommand = "connexion"
  }
  handleLogStatus(){
    if (this.logCommand != "connexion") {
      this.router.navigateByUrl("/")
      this.logCommand = "connexion"
      this.logBtnColor = "secondary"
    }
    else {
      this.router.navigateByUrl("/subscribers/log-in")
      this.logCommand = "déconnexion"
      this.logBtnColor = "info"
    }
  }

}
