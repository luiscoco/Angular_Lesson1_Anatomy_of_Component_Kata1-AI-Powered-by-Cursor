import { Component, signal } from '@angular/core';
import { FullComponentComponent } from './full-component.component';
// Attempting to import the class-only (will not work as component)
// import { ClassOnly } from './class-only';

@Component({
  selector: 'app-root',
  imports: [FullComponentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-kata');
  
  // Instance of the plain class (for demonstration - can't be used as component)
  // classOnlyInstance = new ClassOnly();
}
