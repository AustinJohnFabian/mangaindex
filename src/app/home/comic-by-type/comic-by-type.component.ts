import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangasService } from 'src/app/manga collections/mangas.service';

@Component({
  selector: 'app-comic-by-type',
  templateUrl: './comic-by-type.component.html',
  styleUrls: ['./comic-by-type.component.scss']
})
export class ComicByTypeComponent implements OnInit {
  type!: string;
  comics: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private mangasService: MangasService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.comics = this.mangasService.getComicsByType(this.type);
    });
  }
}
