import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentssService } from '../studentss.service';
import { students } from '../../students';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  students: students[] = this.studs.getStudents();

  constructor(private studs:StudentssService){}
}
