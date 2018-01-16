import { Component, OnInit } from '@angular/core';
import { AuthorsListService } from '../authors-list.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors;

  constructor(authorsService: AuthorsListService) {
     this.authors = authorsService.getAuthorsList();
   }

  ngOnInit() {
  }

}
