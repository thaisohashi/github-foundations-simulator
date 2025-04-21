import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  questionsCount = 75;

  constructor(private router: Router) {}

  startQuiz() {
    // A lógica de navegação para o quiz pode ser ajustada depois
    this.router.navigate(['/quiz'], { queryParams: { total: this.questionsCount } });
  }
}
