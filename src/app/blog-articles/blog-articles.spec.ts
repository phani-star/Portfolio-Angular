import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticles } from './blog-articles';

describe('BlogArticles', () => {
  let component: BlogArticles;
  let fixture: ComponentFixture<BlogArticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogArticles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogArticles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
