import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  userEmail = '';

  constructor(private router: Router) {
    if (typeof window !== 'undefined') {
      this.userEmail = localStorage.getItem('user') || '';
    }
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
    this.router.navigate(['/auth']);
  }
}
