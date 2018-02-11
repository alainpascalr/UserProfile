import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service';
import { } from '@types/googlemaps';
// import { ActivatedRoute } from '@angular/router/src/router_state';
// import { Router } from '@angular/router/src/router';
import { RouterLink } from '@angular/router/src/directives/router_link';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  personalInfo: any;
  map: google.maps.Map;
  address:string;
  gender: string='';

  @ViewChild('gmap') gmapElement: any;

  constructor(private _data: DataService) { 

  }

  //Initiate the card with a default address and receive the data provided from the form.
  ngOnInit() {

    this._data.info.subscribe ((response) => {
      this.personalInfo = [
        {
          name: response[0],
          gender: response[1],
          title: response[2],
          address: response[3],
          email: response[4],
          facebook: response[5],
          instagram: response[6]
        }
      ],
      this.address = response[3]
      this.gender = response[1]
    });
    var resultsMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat: 45.4111700, lng: -75.6981200}
    });

    //call the method that will show the location on the map using google map API.
    this.geocodeAddress();
    //Checks wether the profile is for a female or a male.
    if (this.gender == "male"){
      document.getElementsByTagName("img")[0].setAttribute("src", "../../assets/profile/male.jpg");
    }
    else if (this.gender == "female"){
      document.getElementsByTagName("img")[0].setAttribute("src", "../../assets/profile/female.jpg");
    }

  }

  //Update the map on the card based on the address provided.
  geocodeAddress() {
    var resultsMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: {lat: -34.397, lng: 150.644}
    });
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': this.address}, function(results, status) {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
    });
  }
}
