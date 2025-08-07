import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateToString',
  standalone: true
})
export class StateToStringPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    switch (value) {
      case 0:
        return 'Broken';
      case 1:
        return 'Damaged';
      case 2:
        return 'Decent';
      case 3:
        return 'Good';
      case 4:
        return 'Prime';
      case 5:
        return 'Active';
      case 6:
        return 'Inactive';
      case 7:
        return 'Under Maintenance';
      case 8:
        return 'Out of Service';
      default:
        return 'Unknown State';
    }
  }

}
