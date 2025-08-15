import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'; // Import MatIconRegistry
import { MatListModule } from '@angular/material/list';
import { DomSanitizer } from '@angular/platform-browser'; // For sanitizing SVG icons

// Import your local portfolio data
import { PORTFOLIO_DATA } from '../portfolio-data'; // Adjust path if portfolio-data.ts is in a different location

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInRight', [ // Animation for the wrapper card
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.8s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class Contact implements OnInit {
  contact = PORTFOLIO_DATA.contact; // Use the main contact object, not coverPage.contact

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    // Register custom SVG icons for social media
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg')
    );
    // Add other social icons as needed
  }

  ngOnInit(): void {
    // Optional initialization logic
  }

}
