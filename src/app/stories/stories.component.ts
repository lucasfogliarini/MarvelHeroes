import { Component, OnInit } from '@angular/core';
import { IStory } from '../istory';
import { MarvelService } from '../marvel.service';
import { Observable } from 'rxjs/Observable';
import { ICharacter } from '../icharacter';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  public story: IStory;
  public storyCharacters: ICharacter[];

  constructor(private _productService: MarvelService, private _route: ActivatedRoute) { }

  ngOnInit() {
   const self = this;
   let characterId: string;
   this._route.queryParamMap.subscribe(m => characterId = m.get('characterId'));
   // toggleLoader(true);
   this._productService.getRandomStory(characterId).subscribe(function(story) {
      self.story = story;
      self._productService.getStoryCharacters(story.id).subscribe(function (storyCharacters) {
        self.storyCharacters = storyCharacters;
        // toggleLoader(false);
      });
   });
  }
}
