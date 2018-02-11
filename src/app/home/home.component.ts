import { Component, OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { RouterLink } from '@angular/router/src/directives/router_link';
import { ProfileComponent } from '../profile/profile.component';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})

export class HomeComponent implements OnInit {

  //Card Info
  submitBtn: string="Create Card";
  name: string;
  title: string;
  address: string;
  email: string;
  facebook: string;
  twitter:string;
  gender: string='';
  personalInfo= [];


  constructor(private _data: DataService) { }

  ngOnInit() {
    this.personalInfo = [];
    this._data.info.subscribe (res=> this.personalInfo = res);
  }
  

  createCard(){
    this.personalInfo.push(this.name);
    this.personalInfo.push(this.gender);
    this.personalInfo.push(this.title);
    this.personalInfo.push(this.address);
    this.personalInfo.push(this.email);
    this.personalInfo.push(this.facebook);
    this.personalInfo.push(this.twitter);
    this._data.addInfo(this.personalInfo);
  }

}
