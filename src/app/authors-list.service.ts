import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsListService {

  constructor() { }

  getAuthorsList(){
    return ['Author - 1','Author - 2','Author - 3'];
  }

}
