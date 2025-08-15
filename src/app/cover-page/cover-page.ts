import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations'; // Import animation functions
import { CommonModule } from '@angular/common'; // Important for standalone components that use common directives like ngFor, ngIf

// Angular Material Imports
import { MatCardModule } from '@angular/material/card'; // For <mat-card>
import { MatButtonModule } from '@angular/material/button'; // For <a mat-button>
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'; // For <mat-icon> and registry
import { DomSanitizer } from '@angular/platform-browser'; // For SVG icon registration


// Import your local portfolio data
import { PORTFOLIO_DATA } from '../portfolio-data'; // Adjust path if portfolio-data.ts is in a different location


@Component({
  selector: 'app-cover-page',
  standalone: true, // Mark the component as standalone
  imports: [
    CommonModule, // Required for ngFor, ngIf, etc. if used in the template
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './cover-page.html', // Point to the HTML file
  styleUrl: './cover-page.css', // Point to the CSS file
  animations: [ // Define the animations for the component
    trigger('fadeIn', [
      transition(':enter', [ // Animation for when the element enters the DOM
        style({ opacity: 0 }), // Initial state: invisible
        animate('1s ease-in', style({ opacity: 1 })) // Animate to fully visible over 1 second
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }), // Initial state: off-screen left, invisible
        animate('0.8s ease-out', style({ transform: 'translateX(0)', opacity: 1 })) // Animate to original position, fade in
      ])
    ]),
    trigger('zoomIn', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }), // Initial state: half size, invisible
        animate('0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)', style({ transform: 'scale(1)', opacity: 1 })) // Animate to full size with a bouncy effect
      ])
    ])
  ]
})
export class CoverPage {
  // Bind data properties directly from PORTFOLIO_DATA
  name = PORTFOLIO_DATA.coverPage.name;
  title = PORTFOLIO_DATA.coverPage.title;
  tagline = PORTFOLIO_DATA.coverPage.tagline;
  contact = PORTFOLIO_DATA.coverPage.contact;
  profilePictureUrl = PORTFOLIO_DATA.coverPage.profilePictureUrl;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'scaler',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/scaler.svg')
    );
  }

  // Optional: Add methods if needed
  downloadResume() {
    // Implement resume download logic here
  }
}
