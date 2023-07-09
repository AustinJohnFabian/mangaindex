import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comic } from 'src/app/models/comic.model';
import { MangasService } from 'src/app/manga collections/mangas.service';

@Component({
  selector: 'app-comic-info',
  templateUrl: './comic-info.component.html',
  styleUrls: ['./comic-info.component.scss']
})
export class ComicInfoComponent implements OnInit {
  comic: Comic | null = null;

  constructor(
    private route: ActivatedRoute,
    private mangaService: MangasService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const comicTitle = params['title']; // Assuming the title is passed as a parameter
      this.comic = this.mangaService.getComicByTitle(comicTitle) ?? null;
    });
  }
}
