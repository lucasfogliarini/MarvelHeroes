import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public characters = [{
    id: 1,
    name: 'spiderman',
    thumbnail: 'ashdfu'
  }];

  constructor() { }

  ngOnInit() {
  }
}
