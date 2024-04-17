import { Component } from '@angular/core';

@Component({
  selector: 'app-course-content',
  standalone: true,
  imports: [],
  templateUrl: './course-content.component.html',
  styleUrl: './course-content.component.css',
})
export class CourseContentComponent {
  fullStars:number=0;
  partialStars:number=0;

  courses: any[] = [
    {
      image:
        "https://imgs.search.brave.com/Ejm3Mtq4R2ImDPDkHaNGkbZSqBaaj17obWMj1D8kHLU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZhL0phdmFTY3Jp/cHQtbG9nby5wbmc",
        name: 'Full JavaScript Course',
        rating: 4.6,
        price: 499
    },
    {
      image:
        "https://imgs.search.brave.com/Ejm3Mtq4R2ImDPDkHaNGkbZSqBaaj17obWMj1D8kHLU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZhL0phdmFTY3Jp/cHQtbG9nby5wbmc",
        name: 'Full JavaScript Course',
        rating: 4.6,
        price: 499
    },
    {
      image:
        "https://imgs.search.brave.com/Ejm3Mtq4R2ImDPDkHaNGkbZSqBaaj17obWMj1D8kHLU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZhL0phdmFTY3Jp/cHQtbG9nby5wbmc",
        name: 'Full JavaScript Course',
        rating: 4.6,
        price: 499
    },
    {
      image:
        "https://imgs.search.brave.com/Ejm3Mtq4R2ImDPDkHaNGkbZSqBaaj17obWMj1D8kHLU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZhL0phdmFTY3Jp/cHQtbG9nby5wbmc",
        name: 'Full JavaScript Course',
        rating: 4.6,
        price: 499
    },
  ];

  getStarArray(rating: number): any[] {
    const roundedRating = Math.round(rating);
    return Array.from({ length: roundedRating }, (_, index) => index + 1);
  }
}
