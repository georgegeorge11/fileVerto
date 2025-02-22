import {Component, inject} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ThemeService} from '../../services/theme.service';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  themeService = inject(ThemeService);
  currentTheme = this.themeService.currentTheme(); // Get the current theme

  toggleTheme() {
    const nextTheme = this.currentTheme.id === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(nextTheme);
    this.currentTheme = this.themeService.currentTheme(); // Update the current theme after switching
  }
}
