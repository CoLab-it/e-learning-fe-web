import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../components/common/header/header.component';
import { FooterComponent } from '../../../components/common/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { ButtonComponent } from '../../../components/common/button/button.component';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ButtonComponent],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}
  courseId: any;
  courseDetails:any;
  ngOnInit(): void {
    this.route.params.subscribe({
      next: (res) => {
        this.courseId = res['id'];
        if(this.courseId){
          this.getCourseDetails()
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getCourseDetails() {
    this.userService.getSingleCourseDetail(this.courseId).subscribe({
      next: (res) => {
        this.courseDetails=res.course;
        console.log(this.courseDetails);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
