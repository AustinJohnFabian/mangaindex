import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MangasService } from 'src/app/manga collections/mangas.service';

@Component({
  selector: 'app-comic-detail-card',
  templateUrl: './comic-detail-card.component.html',
  styleUrls: ['./comic-detail-card.component.scss']
})
export class ComicDetailCardComponent {
  @Input() comic: any;

  constructor(private router: Router) {}

  navigateToComicDetails(comicTitle: string) {
    this.router.navigate(['/comic-info', comicTitle]);
  }
}