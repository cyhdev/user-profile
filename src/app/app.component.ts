import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'UserProfile';

  user: any = { firstName: 'Yuna', lastName: 'Chan', headline: 'Marketing Project Manager', email: 'yuna@gmail.com', gender: 'Female', age: '27', weight: '50', height: '178', eContact: '+6017-3125449' }
  diseas: any = ["Hypertension", "Blood Pressure", "Diabetes", "Headache"];
  address: any = { addressline1: "No 123", addressline2: "Jalan Bandar Utama", city: "Taman Bunga Raya", state: "Selangor", postcode: "47000", country: "Malaysia" };
  skills: any = {
    top: ["Angular", "Bootstrap", "Java", "Asp.Net"],
    industry: ["Web Development", "Computer Networking"],
    tool: ["Visual Studio Code", "PSSQL"]
  };
  workExp: any = [
    { company: "Facebook", title: "Architecture Engineer", from: "Oct 2018", to: "recent", period: "5 mths" },
    { company: "Microsoft", title: "Software Engineer", from: "Jan 2015", to: "Oct 2018", period: "2 yrs" }
  ];
  educations: any = [
    { school: "Tunku Abdul Rahman University College", qualif: "Bachelor's degree", field: "Software System Development", from: "2014", to: "2016" },
    { school: "Tunku Abdul Rahman University College", qualif: "Diploma", field: "Information System Engineering", from: "2012", to: "2014" }
  ];

  diseasDropdown: any = ["Hypertension", "Blood Pressure", "Diabetes", "Headache"];

  ngOnInit() {
    localStorage.setItem("user", JSON.stringify(this.user));
    localStorage.setItem("diseas", JSON.stringify(this.diseas));
    localStorage.setItem("address", JSON.stringify(this.address));
    localStorage.setItem("skills", JSON.stringify(this.skills));
    localStorage.setItem("workExp", JSON.stringify(this.workExp));
    localStorage.setItem("educations", JSON.stringify(this.educations));
    localStorage.setItem("diseasDropdown", JSON.stringify(this.diseasDropdown));
  }
}
