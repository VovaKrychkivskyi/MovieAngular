import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  // storedTheme: string = localStorage.getItem('theme-color');
  storedTheme: { background: string, color: string };
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }
  // setTheme(): void {
  //   if (this.storedTheme === 'theme-dark') {
  //     localStorage.setItem('theme-color', 'theme-light');
  //     this.storedTheme = localStorage.getItem('theme-color');
  //   }
  //   else {
  //     localStorage.setItem('theme-color', 'theme-dark');
  //     this.storedTheme = localStorage.getItem('theme-color');
  //   }
  // }

  setTheme(): void {
    if (this.storedTheme.background === '#222') {
      localStorage.setItem('theme-color', JSON.stringify({background: '#fff', color: '#222'}));
    } else {
      localStorage.setItem('theme-color', JSON.stringify({background: '#222', color: '#fff'}));
    }
    this.storedTheme = JSON.parse(localStorage.getItem('theme-color'));
    this.elementRef.nativeElement.querySelector('.content').style.backgroundColor = this.storedTheme.background;
    this.elementRef.nativeElement.querySelector('.content').style.color = this.storedTheme.color;
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.storedTheme.background;
    this.elementRef.nativeElement.ownerDocument.body.style.color = this.storedTheme.color;
  }
  ngAfterViewInit(): void {
    this.storedTheme = JSON.parse(localStorage.getItem('theme-color')) || {background: '#fff', color: '#222'};
    console.log(this.storedTheme);
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.storedTheme.background;
    this.elementRef.nativeElement.ownerDocument.body.style.color = this.storedTheme.color;
    this.elementRef.nativeElement.querySelector('.content').style.backgroundColor = this.storedTheme.background;
    this.elementRef.nativeElement.querySelector('.content').style.color = this.storedTheme.color;
  }
}
