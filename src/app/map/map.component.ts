import { Component, OnInit } from '@angular/core';
import { Region } from '../_models/region';
import * as regionsData from '../../assets/data/universities.en.json';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  selectedRegion: Region | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  // Method to handle region selection
  selectRegion(regionKey: string) {
    // Fetch the region data directly using the key
    const regionData = (Object.values(regionsData)[0] as any)[regionKey];
    this.selectedRegion = regionData ? { key: regionKey, ...regionData } : null;

    console.log(this.selectedRegion);
  }


}
