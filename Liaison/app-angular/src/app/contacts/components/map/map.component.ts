import { AfterViewInit, Component, Input } from '@angular/core';
import * as L from 'leaflet';
import { IContact } from '../../models/contact';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  map: any;
  marker: any;
  @Input() location: IContact["location"];


  private initMap(): void {
    this.map = L.map('map', {
      center: [this.location.lat, this.location.long],
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.marker = !this.marker && new L.Marker([this.location.lat, this.location.long]).addTo(this.map);

    this.map.on('click', (event: any) => {
      this.map.removeLayer(this.marker);
      var coord = event.latlng;
      var lat = coord.lat;
      var lng = coord.lng;

      this.marker = new L.Marker([lat, lng]).addTo(this.map);
      this.location.lat = lat;
      this.location.long = lng;
    });
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}