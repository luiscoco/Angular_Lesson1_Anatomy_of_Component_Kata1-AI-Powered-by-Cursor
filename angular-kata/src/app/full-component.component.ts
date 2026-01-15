import { Component } from '@angular/core';

/**
 * Kata 1 - Artifact 3: A full Angular component
 * 
 * This is a complete Angular component with:
 * - @Component decorator (metadata)
 * - selector (how to use it in templates)
 * - template (the view)
 * - class (the logic/state)
 * 
 * REFLECTION: This works because Angular components require BOTH:
 * 1. A class (for logic, state, lifecycle hooks)
 * 2. A template (for rendering)
 * 3. @Component decorator (for Angular metadata/configuration)
 * 4. Selector (for Angular to know how to instantiate it)
 * 
 * Angular's component architecture requires this fusion because:
 * - Templates need classes to bind data and handle events
 * - Classes need templates to render views
 * - The decorator provides the "glue" that makes them work together
 */
@Component({
  selector: 'app-full-component',
  imports: [],
  templateUrl: './full-component.component.html',
  styleUrl: './full-component.component.css'
})
export class FullComponentComponent {
  title = 'Working Component';
  message = 'This component works because it has both class AND template!';
  
  getMessage(): string {
    return this.message;
  }
  
  onButtonClick(): void {
    alert('Component event handling works!');
  }
}
