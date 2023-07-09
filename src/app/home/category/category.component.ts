import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MangasService } from 'src/app/manga collections/mangas.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  comics: any[] = [];

  constructor(private mangaService: MangasService, private router: Router) { }

  ngOnInit() {
    this.comics = this.mangaService.getComics();
  }

  selectedGenre: string = 'All';

  get filteredComics() {
    if (this.selectedGenre === 'All') {
      return this.comics;
    }
    return this.comics.filter(comic => comic.genre === this.selectedGenre);
  }

}
