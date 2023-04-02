import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Input() searchEntry: String = "";

  onSearch(){
    if (this.searchEntry.toUpperCase() === 'ONE') {
      console.log("ONE");
    } 
    else if (this.searchEntry.toUpperCase() === 'TWO') {
      console.log("TWO");
    }
    else if (this.searchEntry.toUpperCase() === 'THREE'){
      console.log("THREE");
    }
    else {
      console.log("Not found");
    }
  }
}
