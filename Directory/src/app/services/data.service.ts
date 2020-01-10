import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private studentData: Student[] =
  [
    {fName:'Jon',lName:'Stewart',sName:'JonSte',nName:'JSte',hobbies:'Games'},
    {fName:'Bisola',lName:'Awujoola',sName:'BisolaAwujoola',nName:'bisolaj',hobbies:'Chess'},
    {fName:'Sarah',lName:'Bruce',sName:'SarahBruce',nName:'SBruce',hobbies:'Programming'},
    {fName:'Zach',lName:'Davies',sName:'ZachDavies',nName:'ZachDavies',hobbies:'Games'}
  ];
  constructor() { }

  getStudent(): Student[] {
      return this.studentData;
  }

  

}
