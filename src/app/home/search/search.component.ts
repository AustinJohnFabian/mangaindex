import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangasService } from 'src/app/manga collections/mangas.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchTerm!: string;
  searchResults: any[] = [];

  constructor(private route: ActivatedRoute, private mangasService: MangasService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['term'] || '';
      this.searchComics();
    });
  }

  searchComics() {
    if (this.searchTerm) {
      this.searchResults = this.mangasService.getComics().filter(comic =>
        comic.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.searchResults = [];
    }
  }

}
