import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  user: any = {};
  diseas: any = [];
  address: string = "";
  skills: any = { top: [], industry: [], tool: [] };
  workExp: any = [];
  educations: any = [];

  imageUrl: string = "../../assets/userA.PNG";

  constructor() { }

  ngOnInit() {
    //I assumed the following method call api and return data from database.
    this.getProfileData();
    this.reloadImg();
  }

  getProfileData() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.diseas = localStorage.getItem("diseas");
    this.address = localStorage.getItem("address");
    this.skills = JSON.parse(localStorage.getItem("skills"));
    this.workExp = JSON.parse(localStorage.getItem("workExp"));
    this.educations = JSON.parse(localStorage.getItem("educations"));

  }

  reloadImg() {
    if(localStorage.getItem("img")) {
      this.imageUrl = localStorage.getItem("img");
    }
  }

}
