import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations'; // Import animation functions
import { CommonModule } from '@angular/common'; // Required for standalone components using common directives like ngFor, ngIf

// Angular Material Imports
import { MatCardModule } from '@angular/material/card'; // For <mat-card>
import { MatButtonModule } from '@angular/material/button'; // For <button mat-raised-button>
import { MatIconModule } from '@angular/material/icon'; // For <mat-icon>
import { MatChipsModule } from '@angular/material/chips'; // For mat-chip-listbox and mat-chip-row

// Import your local portfolio data
import { PORTFOLIO_DATA } from '../portfolio-data'; // Adjust path if portfolio-data.ts is in a different location


@Component({
  selector: 'app-about-me',
  standalone: true, // Mark the component as standalone
  imports: [
    CommonModule, // Required for *ngIf, *ngFor directives in the template
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './about-me.html', // Point to the HTML file
  styleUrl: './about-me.css', // Point to the CSS file
  animations: [ // Define the animations for the component
    trigger('fadeIn', [
      transition(':enter', [ // Animation for when the element enters the DOM
        style({ opacity: 0 }), // Initial state: invisible
        animate('1s ease-in', style({ opacity: 1 })) // Animate to fully visible over 1 second
      ])
    ]),
    trigger('slideInRight', [ // New animation for About Me card
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }), // Initial state: off-screen right, invisible
        animate('0.8s ease-out', style({ transform: 'translateX(0)', opacity: 1 })) // Animate to original position, fade in
      ])
    ])
  ]
})
export class AboutMe { // Renamed from AboutMe for clarity and convention
  // Bind data properties directly from PORTFOLIO_DATA
  aboutMe = PORTFOLIO_DATA.aboutMe;

  constructor() {
    // You can perform additional initialization here if needed
  }

  downloadResume() {
    if (this.aboutMe.resumeLink) {
      // Create a dummy anchor element to trigger download
      const link = document.createElement('a');
      link.href = this.aboutMe.resumeLink;
      link.download = 'Your-Resume.pdf'; // Suggested filename for the downloaded file
      link.target = '_blank'; // Open in a new tab

      // Programmatically click the link to trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Clean up the DOM
    } else {
      console.warn('Resume link not found in portfolio data.');
    }
  }
}
