import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Input() menu: { path: string, name: string }[] = [];

  appName = 'Task Manager';
}
