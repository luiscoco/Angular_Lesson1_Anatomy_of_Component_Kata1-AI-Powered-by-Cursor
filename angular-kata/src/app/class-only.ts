/**
 * Kata 1 - Artifact 1: A class with no template
 * 
 * This is a plain TypeScript class - NOT an Angular component.
 * It has no @Component decorator, no template, and no selector.
 * 
 * REFLECTION: Why can't Angular use this as a component?
 * Angular requires the @Component decorator to identify a class as a component.
 * Without it, Angular has no metadata about how to render it, what selector to use,
 * or how to integrate it into the component tree.
 */
export class ClassOnly {
  message = 'This is just a plain class';
  
  getMessage(): string {
    return this.message;
  }
}
