// quick-filter.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchValue: string = '';
  availableValues: string[] = ['Option 1', 'Option 2', 'Option 3'];
  selectedValues: string[] = [];

  onCheckboxChange(value: string): void {
    if (this.selectedValues.includes(value)) {
      this.selectedValues = this.selectedValues.filter(v => v !== value);
    } else {
      this.selectedValues.push(value);
    }
  }

  saveSelectedValues(): void {
    // Implement save functionality, e.g., send selectedValues to a service or perform an action.
    console.log('Selected values saved:', this.selectedValues);
  }
}
