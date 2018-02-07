import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { } from '@types/googlemaps';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { Router } from '@angular/router/src/router';
import { RouterLink } from '@angular/router/src/directives/router_link';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  personalInfo: any;
  map: google.maps.Map;
  address:string;

  @ViewChild('gmap') gmapElement: any;

  constructor(private _data: DataService) { 
  }

  //Initiate the card with a default address and receive the data provided from the form.
  ngOnInit() {
    this._data.info.subscribe (res=> this.personalInfo = res);
    var resultsMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat: 45.4111700, lng: -75.6981200}
    });
  }

  //Update the card based on the correct address.
  geocodeAddress() {
    var resultsMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: {lat: -34.397, lng: 150.644}
    });
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': this.address}, function(results, status) {
      console.log(this.latitude);
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
    });
  }
}
