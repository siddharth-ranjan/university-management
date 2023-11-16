import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentssService } from './studentss.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StudentComponent, StudentDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UniversityDB';

  
}
