import { Component, OnInit } from '@angular/core';
import { MangasService } from 'src/app/manga collections/mangas.service';
import { Comic } from 'src/app/models/comic.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  types: string[] = [];
  slides: any[] = [];
  currentIndex = 0;

  comicsByType: { type: string; comics: any[] }[] = [];

  constructor(private mangasService: MangasService) {}

  ngOnInit() {
    // Get the unique genres from the comics
    this.types = this.mangasService.getUniqueTypes();

    // Get the first four comics for each genre
    this.comicsByType = this.types.map(type => ({
      type: type,
      comics: this.mangasService.getComicsByType(type).slice(0, 6)
    }));

    this.slides = this.mangasService.getComicsByType('New-Arrivals');

    this.startSlideshow();
  }

  startSlideshow() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 4000); // Change slide every 2 seconds
  }
}
