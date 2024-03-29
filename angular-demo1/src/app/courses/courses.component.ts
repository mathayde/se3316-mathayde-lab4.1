import { Component, OnInit } from '@angular/core';
import{CoursesService} from '../courses.service';
import{AutoGrowDirective} from '../auto-grow.directive'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {
 title = "Title of the courses page!";
 text;
  courses;
  constructor(private coursesService: CoursesService) { 
    this.courses = coursesService.getCourses();
  }
  addCourse(){
    var n = this.text;
    this.text = "";
    this.courses.push(n);
    this.coursesService.saveCourse(n);
  };
  ngOnInit() {
  }

}
