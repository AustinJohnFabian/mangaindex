import { Component, OnInit } from '@angular/core';
import { MangasService } from 'src/app/manga collections/mangas.service';

@Component({
  selector: 'app-weekly-popular',
  templateUrl: './weekly-popular.component.html',
  styleUrls: ['./weekly-popular.component.scss']
})
export class WeeklyPopularComponent implements OnInit {
  popularComics: any[] = [];

  constructor(private mangasService: MangasService) {}

  ngOnInit() {
    this.fetchPopularComics();
  }

  fetchPopularComics() {
    // Call the appropriate method in the MangasService to get the popular comics
    // For example:
    this.popularComics = this.mangasService.getPopularComics(10);
  }
}