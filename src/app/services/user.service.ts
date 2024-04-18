import { Injectable } from "@angular/core";
import { environment } from "../../environment/environment.prod";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class UserService{
    
    api = environment.userapi;
    constructor(private http: HttpClient){}

    getCourses():Observable<any>{
        return this.http.get(`${this.api}/getCourses`);
    }

    getSingleCourseDetail(courseId:any):Observable<any>{
        return this.http.get(`${this.api}/getSingleCourse/${courseId}`)
    }
}