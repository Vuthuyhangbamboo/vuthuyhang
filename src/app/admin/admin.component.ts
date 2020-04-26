import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  faBell = faBell;
  faEnvelope = faEnvelope;
  faSearch = faSearch;
  faBars = faBars;
  faThLarge = faThLarge;
  faTachometerAlt =faTachometerAlt;
  faUser = faUser;
  faChartPie = faChartPie;
  constructor() { }

  ngOnInit() {
  }

}