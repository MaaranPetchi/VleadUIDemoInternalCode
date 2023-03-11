import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/Services/Logout/logout.service';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent  implements OnInit{
  constructor(private logoutService: LogoutService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.logoutService.logout().subscribe(
      response => {
        // do something with the response if needed
        this.router.navigate(['/login']);
      },
      error => {
        // handle the error if needed
      }
    );
  }
}
export class DashboardModule {}