import { Component, Input, OnInit } from '@angular/core';

import { PopularTagType } from '../../../../types/popularTag,type';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tagList.component.html',
})
export class TagListComponent implements OnInit {
  @Input('tags') tagsProps: PopularTagType[];
  constructor() {}

  ngOnInit(): void {}
}
