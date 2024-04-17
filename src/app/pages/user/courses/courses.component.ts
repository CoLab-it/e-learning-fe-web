import { Component } from '@angular/core';
import { CourseContentComponent } from '../../../components/user/course-content/course-content.component';
import { HeaderComponent } from '../../../components/common/header/header.component';
import { FooterComponent } from '../../../components/common/footer/footer.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseContentComponent,HeaderComponent,FooterComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

}
