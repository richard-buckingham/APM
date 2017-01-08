import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log('in ngOnInit');
  }

  ngOnChanges(): void{
    console.log('in ngOnChanges');
    console.log('this.rating = ' + this.rating);
    this.starWidth = this.rating * (86 / 5);
    console.log('this.starwidth = ' + this.starWidth);
  }

  onClick(): void {
    this.ratingClicked.emit('The rating ' + this.rating + ' was clicked');
  }

}
