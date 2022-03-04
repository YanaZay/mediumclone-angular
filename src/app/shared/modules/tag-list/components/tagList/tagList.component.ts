import { Component, Input, OnInit } from '@angular/core';

import { PopularTagType } from '../../../../types/popular-tag,type';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tagList.component.html',
})
export class TagListComponent {
  @Input('tags') tagsProps: PopularTagType[];
}
