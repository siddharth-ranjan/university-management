import { Injectable } from '@angular/core';
import { students } from '../students';

@Injectable({
  providedIn: 'root'
})
export class StudentssService {
  private students: students[] = [
    {name: 'John Doe', regNo: '12345', mark: 90},
    {name: 'Doe John', regNo: '12365', mark: 40},
    {name: 'Dohn Joe', regNo: '14345', mark: 75}
  ];
  
  getStudents(): students[]{
    return this.students
  }

}
