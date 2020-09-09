import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  skills: any = { top: [], industry: [], tool: [] };
  workExp: any = [];
  educations: any = [];

  constructor() { }

  ngOnInit() {
    //I assumed the following method call api and return data from database.
    this.getProfileData();
  }

  getProfileData() {
    this.skills = JSON.parse(localStorage.getItem("skills"));
    this.workExp = JSON.parse(localStorage.getItem("workExp"));
    this.educations = JSON.parse(localStorage.getItem("educations"));
  }
}
