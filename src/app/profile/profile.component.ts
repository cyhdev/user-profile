import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any = {};
  diseas: any = [];
  address: any = "";

  userUpdate: any = {};
  addressUpdate: string = "";

  diseasDropdown: any = [];

  selectedDisea = undefined;

  constructor() { }

  ngOnInit() {
    //I assumed this method call api and return data from database.
    this.getProfileData();
    this.reloadImg();
  }

  openEditProfileModal() {
    this.userUpdate = JSON.parse(localStorage.getItem("user"));
  }

  saveProfile() {
    localStorage.setItem("user", JSON.stringify(this.userUpdate));
    this.getProfileData();
  }

  getProfileData() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.diseas = JSON.parse(localStorage.getItem("diseas"));
    this.address = JSON.parse(localStorage.getItem("address"));

    this.userUpdate = JSON.parse(localStorage.getItem("user"));
    this.addressUpdate = localStorage.getItem("address");

    this.diseasDropdown = JSON.parse(localStorage.getItem("diseas"));
  }

  addDis(disea) {
    if(disea) {
      this.diseas.push(disea);
    }
    this.selectedDisea = "";
  }

  removeDisea(index) {
    this.diseas.splice(index, 1);
  }

  isDisabled(disea): boolean {
    return this.diseas.find(element => element === disea);
  }

  openEditProfileAddressModal() {
    this.addressUpdate = JSON.parse(localStorage.getItem("address"));
  }

  saveProfileAddress() {
    localStorage.setItem("address", JSON.stringify(this.addressUpdate));
    this.getProfileData();
  }

  imageUrl: string = "../../assets/userA.PNG";
  fileToUpload: File = null;

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
      localStorage.setItem("img", this.imageUrl);
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  reloadImg() {
    if(localStorage.getItem("img")) {
      this.imageUrl = localStorage.getItem("img");
    }
  }

}
