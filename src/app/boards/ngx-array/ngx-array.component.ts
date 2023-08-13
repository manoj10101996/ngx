import { Component, OnInit } from '@angular/core';
import { NgxArrayService } from 'projects/ngx-array/src/public-api';

@Component({
  selector: 'app-ngx-array',
  templateUrl: './ngx-array.component.html',
  styleUrls: ['./ngx-array.component.css']
})
export class NgxArrayComponent {

  public array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor(private _ngArray: NgxArrayService) {
    console.log(this._ngArray._push(this.array, 10));
    console.log(this._ngArray._pop(this.array));
    console.log(this._ngArray._shift(this.array));
    console.log(this._ngArray._unshift([...this.array], 1, 2, 3, 4, 5, 6));
    console.log(this._ngArray._splice(this.array, 5, 2));
    console.log(this._ngArray._slice(this.array, 5));
    console.log(this._ngArray._copy(this.array));
    console.log(this._ngArray._length(this.array));
    console.log(this._ngArray._concat(this.array, [10, 11, 12, 13], [1, 2, 3], {}));
    console.log(this._ngArray._copyWithin(this.array, 1, 2));
    console.log(this._ngArray._fill(this.array, 9, 2, 4));
    console.log(this._ngArray._filterNumbersArray(this.array, "<=", 2));
    console.log(this._ngArray._has(this.array, "data"));
    console.log(this._ngArray._hasAt(this.array, 2, 1));
    console.log(this._ngArray._indexOf(this.array, 8));
    console.log(this._ngArray._isValidArray(""));
    console.log(this._ngArray._join(this.array, "."));
    console.log(this._ngArray._reverse(this.array));
    console.log(this._ngArray._sort(["one", "two", "three", "four", "five"]));
    console.log(_ngArray._sortNumbers([9, 6, 3, 2, 5, 8, 7, 4, 1, 2, 5, 8], -1));
    console.log(this._ngArray._min([9, 6, 3, 2, 5, 8, 7, 4, 1, 2, 5, 8]));
    console.log(this._ngArray._max([9, 6, 3, 2, 5, 8, 7, 4, 1, 2, 5, 8]));
    console.trace(this.array);
  }
}
