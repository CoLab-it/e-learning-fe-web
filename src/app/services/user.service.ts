import { Injectable } from "@angular/core";
import { environment } from "../../environment/environment.prod";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class UserService{
    subject = new BehaviorSubject<any>('');
    getImage=this.subject.asObservable();
    
    
    api = environment.userapi;
    constructor(private http: HttpClient){}

    getCourses():Observable<any>{
        return this.http.get(`${this.api}/getCourses`);
    }
    getSingleCourseDetail(courseId:any):Observable<any>{
        return this.http.get(`${this.api}/getSingleCourse/${courseId}`)
    }
    getUserProfile():Observable<any>{
        return this.http.get(`${this.api}/getUserProfile`)
    }
    updateUserProfile(data:any):Observable<any>{
        return this.http.patch(`${this.api}/updateProfile`, data)
    }
}