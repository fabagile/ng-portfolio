import { Component, OnInit } from '@angular/core';
import { SKILLS } from './skills';

@Component({
  selector: 'page-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = SKILLS

  constructor() { }

  ngOnInit(): void {
  }

}
