import { Injectable } from '@angular/core';
import { Theme, Light, Dark } from '../themes/_theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private active: Theme = Light;
  private availableThemes: Theme[] = [Light, Dark];

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  isDarkTheme(): boolean {
    return this.active.name === Dark.name;
  }

  setDarkTheme(): void {
    this.setActiveTheme(Dark);
  }

  setLightTheme(): void {
    this.setActiveTheme(Light);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
