import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';
import { faLevelDownAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faUser = faUser;
  faEye = faEye;
  faShoppingCart = faShoppingCart;
  faCoins = faCoins;
  faCalendar = faCalendar;
  faEnvelope =faEnvelope;
  faBell = faBell;
  faComment = faComment;
  faLevelUpAlt = faLevelUpAlt;
  faLevelDownAlt = faLevelDownAlt;
  constructor() { }

  ngOnInit() {
  }

}