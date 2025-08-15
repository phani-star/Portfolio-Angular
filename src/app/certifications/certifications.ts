import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { CommonModule } from '@angular/common';

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Import your local portfolio data
import { PORTFOLIO_DATA } from '../portfolio-data'; // Adjust path if portfolio-data.ts is in a different location


@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInLeft', [ // Animation for the wrapper card
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.8s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('slideAnimation', [ // Animation for individual slides
      state('inactive', style({
        opacity: 0,
        transform: 'scale(0.9)'
      })),
      state('active', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('0.5s ease-in')),
      transition('active => inactive', animate('0.5s ease-out'))
    ])
  ]
})
export class Certifications implements OnInit { // Using the class name 'Certifications' as requested
  certifications = PORTFOLIO_DATA.certifications; // Bind the certifications data
  currentSlideIndex: number = 0;

  constructor() {
    // Optional: Any initialization logic
  }

  ngOnInit(): void {
    // Optionally start a timer for auto-slide here
  }

  nextSlide() {
    if (this.currentSlideIndex < this.certifications.length - 1) {
      this.currentSlideIndex++;
    }
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }
}
