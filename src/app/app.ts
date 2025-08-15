// src/app/app.component.ts
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; // Import RouterLink and RouterLinkActive
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'; // For the sidenav container and sidenav
import { MatListModule } from '@angular/material/list'; // For the nav list inside the sidenav
// Import your components (no need to import them directly here if using routing)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink, // Add RouterLink for navigation
    RouterLinkActive, // Add RouterLinkActive for styling active links
    MatToolbarModule, // Add MatToolbarModule
    MatButtonModule,  // Add MatButtonModule
    MatIconModule,    // Add MatIconModule
    MatSidenavModule, // Add MatSidenavModule
    MatListModule     // Add MatListModule
    // Remove individual component imports from here as the router will handle loading them
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
