import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { RouterLink } from '@angular/router/src/directives/router_link';
import { ProfileComponent } from '../profile/profile.component';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})

export class HomeComponent implements OnInit {

  //Card Info
  submitBtn: string="Create Card";
  name: string;
  title: string;
  address: string;
  // province: string;
  email: string;
  facebook: string;
  instagram:string;
  personalInfo= [];


  // @ViewChild('gmap') gmapElement: any;
  // map: google.maps.Map;
  // latitude:string;

  constructor(private _data: DataService) { }

  ngOnInit() {
    // this.itemCount = this.goals.length;
    this.personalInfo = [];
    this._data.info.subscribe (res=> this.personalInfo = res);
    // this._data.addInfo(this.personalInfo);

    // var resultsMap = new google.maps.Map(document.getElementById('map'), {
    //   zoom: 12,
    //   center: {lat: 45.4111700, lng: -75.6981200}
    // });

  }

//   createCard(){
// //
//   }

  addItem(){
    this.personalInfo.push(this.name);
    this.personalInfo.push(this.title);
    this.personalInfo.push(this.address);
    // this.personalInfo.push(this.province);
    this.personalInfo.push(this.email);
    this.personalInfo.push(this.facebook);
    this.personalInfo.push(this.instagram);
    this._data.addInfo(this.personalInfo);
  }


}
