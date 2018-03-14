import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ICharacter } from '../icharacter';
import { MarvelService } from '../marvel.service';

@Component({
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public characters: ICharacter[];

  constructor(private _productService: MarvelService) { }

  ngOnInit() {
   const self = this;
   this._productService.getCharacters().subscribe(function(characters) {
      self.characters = characters;
   });
  }
}
