import {effect, Injectable, signal} from '@angular/core';
import {Theme} from '../models/theme.model';
import {themes} from '../utils/theme-options';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme = signal<Theme>(themes[0]);

  getThemes(): Theme[] {
    return themes;
  }

  setTheme(themeId: string): void {

    const theme = themes.find((t) => t.id === themeId);
    if (theme) {
      this.currentTheme.set(theme);
    }
  }

  updateThemeClass = effect(() => {
    const theme = this.currentTheme();
    document.body.classList.remove(...themes.map((t) => `${t.id}-theme`));
    document.body.classList.add(`${theme.id}-theme`);
  });
}
