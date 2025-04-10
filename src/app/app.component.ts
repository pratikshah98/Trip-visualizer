import { Component } from '@angular/core';
export interface Trip {
  start: string;
  end: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// trip.model.ts


export class AppComponent {
  title = 'trip-visualizer';

  trips: Trip[] = [];
  newTrip: Trip = { start: '', end: '' };

  addTrip() {
    if (this.newTrip.start && this.newTrip.end) {
      this.trips.push({ ...this.newTrip });
      this.newTrip = { start: '', end: '' };
    }
  }

  isConnected(index: number): boolean {
    if (index === 0) return true;
    console.log('this.trips[index - 1].end === this.trips[index].start;',this.trips[index - 1].end === this.trips[index].start)
    console.log(this.trips[index - 1].end)
    console.log(this.trips[index ].start)
    return this.trips[index - 1].end === this.trips[index].start;
  }

  getTripLevel(index: number): number {
    if (
      index > 0 &&
      this.trips[index - 1].start === this.trips[index].start &&
      this.trips[index - 1].end === this.trips[index].end
    ) {
      console.log('insdde 2',index)
      console.log('insdde 2',this.trips[index - 1].start )
      console.log('aa', this.trips[index].start)
      console.log('insdde 2',this.trips[index - 1].end) 
      console.log('dsft',this.trips[index].end)
      
      return 2;
    }
    // console.log('insd 1')
    return 1;
  }



}
