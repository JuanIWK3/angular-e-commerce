import { AuthService } from 'src/app/shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user: User = JSON.parse(localStorage.getItem('user')!);

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logout(): void {
    this.authService.logout();
  }
}
