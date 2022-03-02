import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-feed',
  templateUrl: './tagFeed.component.html',
  styleUrls: ['./tagFeed.component.scss'],
})
export class TagFeedComponent implements OnInit {
  public apiUrl: string = '/articles';
  constructor() {}

  ngOnInit(): void {}
}
