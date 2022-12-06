import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-footer-cgu',
  templateUrl: './cgu.component.html',
  styleUrls: ['./cgu.component.css']
})
export class CguComponent implements OnInit {
  author = "fabagile"
  email = "fabagile@outlook.fr"
  webSite = "fabagile-portfolio.vercel.app"

  hostSiteName = "Charleston Road Registry Inc."
  hostSiteAdress = "1600 Amphitheatre Parkway Mountain View, CA 94043"
  hostSiteAdminPhone = "+1 404 978 8419"
  hostSiteTechPhone = "+1 404 978 8419"

  constructor() { }

  ngOnInit(): void {
  }

}
