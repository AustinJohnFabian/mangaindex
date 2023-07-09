import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any;

  constructor() {}

  setUser(user: any) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  clearUser() {
    this.user = null;
    // Perform any other necessary cleanup or logout logic
  }
}
