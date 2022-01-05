import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-feed',
  templateUrl: './globalFeed.component.html',
  styleUrls: ['./globalFeed.component.scss'],
})
export class GlobalFeedComponent implements OnInit {
  public apiUrl: string = '/articles';
  constructor() {}

  ngOnInit(): void {}
}
