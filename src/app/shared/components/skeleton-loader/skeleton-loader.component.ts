import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  host: {
    'class': 'pulse'
  },
  template: ``,
  styles: [`
    :host {
      margin-bottom: 12px;
      display:block;
      width: var(--app-skeleton-loader-width);
      height: var(--app-skeleton-loader-height);
      background: #eee no-repeat;
      background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
      background-size: 200% 100%;
      animation: 1.5s shine linear infinite;
      background-size: 200% 100%;
      border-radius: 10px;

    }

    @keyframes shine {
      to {
    background-position-x: -200%;
      }
    }
  `]
})
export class SkeletonLoaderComponent implements OnInit {

  width: string = '';
  height: string = '';
  className: string = '';

  constructor( private host: ElementRef<HTMLElement>) { }

  ngOnInit(): void {

    const host = this.host.nativeElement;

    if(this.className) {
      host.classList.add(this.className);
    }

    host.style.setProperty('--app-skeleton-loader-width', this.width ?? '100%');
    host.style.setProperty('--app-skeleton-loader-height', this.height ?? '20px');  
  }

}
