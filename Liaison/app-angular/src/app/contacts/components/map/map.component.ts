import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  map: any;
  marker: any;


  private initMap(): void {
    this.map = L.map('map', {
      center: [33.89539, 35.481902],
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    

    this.map.on('click', (event: any) => {
      this.marker && this.map.removeLayer(this.marker);
      var coord = event.latlng;
      var lat = coord.lat;
      var lng = coord.lng;

      this.marker = new L.Marker([lat, lng]).addTo(this.map);
    });
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}