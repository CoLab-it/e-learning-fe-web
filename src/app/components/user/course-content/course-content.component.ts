import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-course-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './course-content.component.html',
  styleUrl: './course-content.component.css',
})
export class CourseContentComponent implements OnInit {
  constructor(private userServ: UserService) {}
  courses: any[] = [];
  ngOnInit(): void {
    this.getCourses();
  }
  getCourses() {
    this.userServ.getCourses().subscribe({
      next: (res) => {
        console.log(res.courses);
        this.courses = res.courses;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getStarArray(rating: number): any[] {
    const roundedRating = Math.floor(rating);
    return Array.from({ length: roundedRating }, (_, index) => index + 1);
  }
}
