import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { PopularTagType } from '../../../types/popularTag,type';
import { IGetPopularTagsResponse } from '../types/getPopularTagsResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  public getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';
    return this.http.get<IGetPopularTagsResponse>(url).pipe(
      map((response: IGetPopularTagsResponse) => {
        return response.tags;
      })
    );
  }
}
