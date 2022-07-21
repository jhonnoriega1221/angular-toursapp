import { Component, OnInit, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.scss']
})
export class AppearanceComponent implements OnInit {

  public appTheme = localStorage.getItem('app_theme');

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  public changeTheme(theme: string) {

    const setDefaultTheme = (isDark:boolean) => {
      if (isDark) {
        this.renderer.addClass(document.body, 'dark-mode');
      } else {
        this.renderer.removeClass(document.body, 'dark-mode')
      }
    }

    if (theme === 'auto') {
      setDefaultTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else {
      setDefaultTheme(theme === 'dark');
    }
    localStorage.setItem('app_theme', theme);

  }

}
