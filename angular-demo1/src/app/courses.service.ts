import { Injectable } from '@angular/core';
import{Init} from './initCourses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends Init{
  getCourses() : string[] {
    return JSON.parse(localStorage.getItem('courses'));
  };
  constructor() { 
    super();
    this.load();
  };
  saveCourse(n){
    var temp =  JSON.parse(localStorage.getItem('courses'));
    temp.push(n);
    localStorage.setItem('courses',JSON.stringify(temp));
  };
}