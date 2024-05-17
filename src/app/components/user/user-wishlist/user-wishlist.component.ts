import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ShortenPipe } from '../../../pipes/shortenSentence.pipe';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-wishlist',
  standalone: true,
  imports: [ShortenPipe, CurrencyPipe],
  templateUrl: './user-wishlist.component.html',
  styleUrl: './user-wishlist.component.css',
})
export class UserWishlistComponent implements OnInit{
  constructor(private userServ: UserService, private router:Router) {}
  courses:any;
  ngOnInit(): void {
    this.getLikedCourses()
  }
  getLikedCourses() {
    this.userServ.getLikedCourses().subscribe({
      next: (res) => {
        this.courses=res.courses[0].courses;
        console.log(this.courses);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  goToCourse(id:any){
    console.log(id);
    this.router.navigate([`/user/courses/${id}`]);
  }
}
