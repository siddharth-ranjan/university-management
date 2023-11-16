import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentssService } from '../studentss.service';
import { students } from '../../students';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  constructor(private studs: StudentssService){}
  students: students[] = this.studs.getStudents();
}
