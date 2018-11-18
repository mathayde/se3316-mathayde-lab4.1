import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})


export class AuthorsComponent implements OnInit {

  title = "Title of the authors page!"
  authors=['Author1','Author2','Author3'];
  constructor() {}

  ngOnInit() {
  }

}
