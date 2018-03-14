import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ICharacter } from './icharacter';
import 'rxjs/add/operator/map';

@Injectable()
export class MarvelService {
  private readonly _apiUrl = 'https://gateway.marvel.com/v1/public/';

  constructor(private _http: HttpClient) { }

  getStoryCharacters(storyId: string): Observable<ICharacter[]> {
    const charactersData = this.httpGet(`stories/${storyId}/characters?`);
    return charactersData.map(response => this.parseCharacters(response));
  }

  getCharacters(): Observable<ICharacter[]> {
    const charactersData = this.httpGet('characters?');
    return charactersData.map(response => this.parseCharacters(response));
  }

  private parseCharacters(response: any): ICharacter[] {
    const characters: ICharacter[] = [];
    response.data.results.forEach(function (char) {
      characters.push({
        id: char.id,
        name: char.name,
        // https://developer.marvel.com/documentation/images
        thumbnail: char.thumbnail.path + '/standard_xlarge.' + char.thumbnail.extension
      });
    });
    return characters;
  }

  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * (max - 1)) + 1;
  }

  private httpGet(resourcePath: string) {
    const keyParams = this.getKeyParams();
    return this._http.get(`${this._apiUrl}${resourcePath}${keyParams}`);
  }

  private getKeyParams(): string {
    const publicKey = '014a3e43d9360b51181807971ceac85e';
    const hash = 'ec01fdc8cdbbb03b29f880d0f99fc52b'; // for 1
    return `apikey=${publicKey}&hash=${hash}&ts=1`;
  }
}
