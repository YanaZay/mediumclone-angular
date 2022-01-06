import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularTagsComponent } from './components/popularTags/popularTags.component';
import { PopularTagsService } from './services/popularTags.service';
import { StoreModule } from '@ngrx/store';
import { popularTagsReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { GetPopularTagsEffect } from './store/effects/getPopularTags.effect';

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', popularTagsReducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
  ],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
