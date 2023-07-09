import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  searchTerm: string = '';

  constructor(private router: Router, public userService: UserService) { }

  search() {
    if (this.searchTerm) {
      this.router.navigate(['/search'], { queryParams: { term: this.searchTerm } });
      this.searchTerm = "";
    }
  }

  logout() {
  
  this.userService.clearUser();
  this.router.navigate(['/login']);
}

}
