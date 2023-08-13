import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgxArrayService {
  constructor() { }

  /**
   * _min: Returns the minimum value in the array
   * @param arr: Array of values of any type[].
   */
  public _min(arr: Array<any>): any {
    try {
      if (!Array.isArray(arr)) {
        throw new Error(
          '_min - Invalid Arguments: Array / Item should be valid'
        );
      }
      return Math.min.apply(null, arr);
    } catch (error: any) {
      console.trace(error)

    }
  }
  /**
   * _max: Returns the maximum value in the array
   * @param arr: Array of values of any type[].
   */
  public _max(arr: Array<any>): any {
    try {
      if (!Array.isArray(arr)) {
        throw new Error(
          '_max - Invalid Arguments: Array / Item should be valid'
        );
      }
      return Math.max.apply(null, arr);
    } catch (error: any) {
      console.trace(error)

    }
  }
  /**
   * _sortNumbers: method sorts the elements of an numbers array in place and returns the sorted array. The default sort order is ascending
   ** Use only array of numbers (or) strings for better result
   * @param arr: Array of values of any type[].
   * @param mode: 1 for ascending , -1 for descending - Default 1
   */
  public _sortNumbers(arr: Array<any>, mode: number | any = 1): Array<any> | any {
    try {
      if (!Array.isArray(arr)) {
        throw new Error(
          '_sortNumbers - Invalid Arguments: Array / Item should be valid'
        );
      }
      return mode === 1 ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
    } catch (error: any) {
      console.trace(error)

    }
  }
  /**
   * _sort: method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending
   ** Use only array of numbers (or) strings for better result
   * @param arr: Array of values of any type[].
   */
  public _sort(arr: Array<any>): Array<any> | any {
    try {
      if (!Array.isArray(arr)) {
        throw new Error(
          '_sort - Invalid Arguments: Array / Item should be valid'
        );
      }
      return arr.sort();
    } catch (error: any) {
      console.trace(error)

    }
  }

  /**
   * _reverse: Returns the reverse ordered array
   * @param arr: Array of values of any type[].
   */
  public _reverse(arr: Array<any>): Array<any> | any {
    try {
      if (!Array.isArray(arr)) {
        throw new Error(
          '_reverse - Invalid Arguments: Array / Item should be valid'
        );
      }
      return arr.reverse();
    } catch (error: any) {
      console.trace(error)

    }
  }

  /**
   * _join: New string by concatenating all of the elements in an array
   * @param arr: Array of values of any type[].
   * @param joinBy: Concatenate by the string example = (-). Default is ''
   */
  public _join(arr: Array<any>, joinBy: string | any = ''): string | any {
    try {
      if (!Array.isArray(arr)) {
        throw new Error(
          '_join - Invalid Arguments: Array / Item should be valid'
        );
      }
      return arr.join(joinBy);
    } catch (error: any) {
      console.trace(error)

    }
  }
  /**
   * _isValidArray: Checks whether the passed item is array or not
   * * return true if valid
   * * return false if not valid
   * @param arr: Array of values of any type[].
   */
  public _isValidArray(arr: any): boolean | any {
    try {
      return Array.isArray(arr);
    } catch (error: any) {
      console.trace(error)

    }
  }

  /**
   * _indexOfFrom: Returns the index of item from given array from starting at particular index
   * * return index of exists
   * * return -1 if not exists
   * @param arr: Array of values of any type[].
   * @param item: Searchable item in array of any type
   * @param start: Starting index
   */
  public _indexOfFrom(arr: Array<any>, item: any, start: number | any): number | any {
    try {
      if (!item || !Array.isArray(arr)) {
        throw new Error(
          '_indexOfFrom - Invalid Arguments: Array / Item should be valid'
        );
      }
      return arr.indexOf(item, start);
    } catch (error: any) {
      console.trace(error)

    }
  }

  /**
   * _indexOf: Returns the index of item from given array
   * * return index of exists
   * * return -1 if not exists
   * @param arr: Array of values of any type[].
   * @param item: Searchable item in array of any type
   */
  public _indexOf(arr: Array<any>, item: any): number | any {
    try {
      if (!item || !Array.isArray(arr)) {
        throw new Error(
          '_indexOf - Invalid Arguments: Array / Item should be valid'
        );
      }
      return arr.indexOf(item);
    } catch (error: any) {
      console.trace(error)

    }
  }
  /**
   * _hasAt: Checks whether the array contains the item at particular given index
   * * return true if exists
   * * return false if not exists
   * @param arr: Array of values of any type[].
   * @param item: Searchable item in array of any type
   * @param positionIndex: Starting index
   */
  public _hasAt(arr: Array<any>, item: any, positionIndex: number | any): boolean | any {
    try {
      if (!item || !Array.isArray(arr)) {
        throw new Error(
          '_hasAt - Invalid Arguments: Array / Item should be valid'
        );
      }
      return arr.includes(item, positionIndex);
    } catch (error: any) {
      console.trace(error)

    }
  }

  /**
   * _has: Checks whether the array contains the item
   * * return true if exists
   * * return false if not exists
   * @param arr: Array of values of any type[].
   * @param item: Searchable item in array of any type
   */
  public _has(arr: Array<any>, item: any): boolean | any {
    try {
      if (!item || !Array.isArray(arr)) {
        throw new Error(
          '_has - Invalid Arguments: Array / Item should be valid'
        );
      }
      return arr.includes(item);
    } catch (error: any) {
      console.trace(error)

    }
  }

  /**
   * _filterNumbersArray: Filters integer array for an given condition and returns a new array.
   * * return filtered new array
   * @param arr: Array of values of any type [].
   * @param condition: Possible conditions  ('>' , '<' , '>=', '<=' , '!==')
   * @param expected: Resulted value should be in
   */
  public _filterNumbersArray(
    arr: Array<number>,
    condition: any,
    expected: number | any
  ): any {
    try {
      if (!Array.isArray(arr)) {
        throw new Error(
          '_filterNumbersArray - Invalid Arguments: Invalid length of Array'
        );
      }

      switch (condition) {
        case '>':
          return arr.filter((value) => value > expected);
        case '<':
          return arr.filter((value) => value < expected);

        case '<=':
          return arr.filter((value) => value <= expected);

        case '>=':
          return arr.filter((value) => value >= expected);

        case '!=':
          return arr.filter((value) => value !== expected);
        default:
          throw new Error(
            "Invalid condition: Invalid type of condition passed use ('>' , '<' , '>=', '<=' , '!==' )"
          );
      }
    } catch (error: any) {
      console.trace(error)

    }
  }

  /**
   * _fill: method shallow copies part of an array to another location in the same array and returns it without modifying its length method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
   * * Returns new array
   * @param arr: Array of values of any type [].
   * @param value: value to be filled in array
   * @param from: Start from this position
   * @param to: End at this position
   */
  public _fill(
    arr: Array<any>,
    value: any,
    from: number | any,
    to: number | any
  ): Array<any> | any {
    try {
      if (!from || !Array.isArray(arr)) {
        throw new Error(
          '_fill - Invalid Arguments: Array / Item should be valid'
        );
      } else if (from > arr.length - 1 || to > arr.length - 1) {
        throw new Error(
          '_fill - Invalid index: Start / End index out of range'
        );
      }
      return arr.fill(value, from, to);
    } catch (error: any) {
      console.trace(error)

    }
  }

  /**
   * _copyWithin: method shallow copies part of an array to another location in the same array and returns it without modifying its length
   * return new array
   * @param arr: Array of values of any type [].
   * @param from: Start from this position
   * @param to: End at this position

   */
  public _copyWithin(arr: Array<any>, from: number | any, to: number | any): Array<any> | any {
    try {
      if (!from || !Array.isArray(arr)) {
        throw new Error(
          '_copyWithin - Invalid Arguments: Array / Item should be valid'
        );
      } else if (from > arr.length - 1 || to > arr.length - 1) {
        throw new Error(
          '_copyWithin - Invalid index: Start / End index out of range'
        );
      }
      return arr.copyWithin(from, to);
    } catch (error: any) {
      console.trace(error)

    }
  }

  /**
   * _concat: method is used to merge two or more arrays.
   * This method does not change the existing arrays, but instead returns a new array.
   * * return new concatenated array
   * @param args: Multiple Array of values at any length .
   */
  public _concat(...args: Array<any>): any {
    try {
      let concatArray: Array<any> | any = [];
      args.forEach((element) => {
        if (element.length === -1) {
          throw new Error('_concat - Invalid Arguments: Invalid Array');
        } else {
          for (const iterator of element) {
            concatArray.push(iterator);
          }
        }
      });
      return concatArray;
    } catch (error: any) {
      console.trace(error)

    }
  }

  /**
   * _length: Returns the length of the given array
   * * return length of the array
   * @param arr: Array of values of any type [].
   */
  public _length(arr: Array<any>): number | any {
    try {
      if (!Array.isArray(arr)) {
        throw new Error('_length - Invalid Arguments: Invalid length of Array');
      }
      return arr.length || 0;
    } catch (error: any) {
      console.trace(error)

    }
  }

  /**
   * _copy: Duplicates an array
   * * returns same array as result
   * @param arr: Array of values of any type [].
   */
  public _copy(arr: Array<any>): Array<any> | any {
    return [...arr];
  }

  /**
   * _slice: returns a shallow copy of a portion of an array into a new array object selected from start to end
   * * return removed array
   * @param arr: Array of values of any type [].
   * @param start: Start from this position
   * @param end: End at this position , Default is length of the array
   */
  public _slice(
    arr: Array<any>,
    start: number | any,
    end: number | any = arr.length - 1
  ): Array<any> | any {
    try {
      if (!start || !Array.isArray(arr)) {
        throw new Error(
          '_slice - Invalid Arguments: Array / Item should be valid'
        );
      } else if (start > arr.length - 1 || end > arr.length - 1) {
        throw new Error(
          '_slice - Invalid index: Start / End index out of range'
        );
      }
      return arr.slice(start, end);
    } catch (error: any) {
      console.trace(error)

    }
  }

  /**
   * _splice: Cut of / Splice of an items at particular valid index
   * * return removed array
   * @param arr: Array of values of any type [].
   * @param start: Start from this position
   * @param end: End at this position , Default is 1
   */
  public _splice(arr: Array<any>, start: number | any, end: number | any = 1): Array<any> | any {
    try {
      if (!start || !Array.isArray(arr)) {
        throw new Error(
          '_splice - Invalid Arguments: Array / Item should be valid'
        );
      } else if (start > arr.length - 1 || end > arr.length - 1) {
        throw new Error(
          '_splice - Invalid index: Start / End index out of range'
        );
      }
      return arr.splice(start, end);
    } catch (error: any) {
      console.trace(error)

    }
  }

  /**
   *  _shift: It will remove the array item at beginning & return item
   * * return the item if removed from array at beginning
   * @param arr: Array of values of any type [].
   */
  public _shift(arr: Array<any>): any {
    try {
      if (!Array.isArray(arr)) {
        throw new Error('_shift - Invalid Arguments: Array should be valid');
      }
      return arr.shift();
    } catch (error: any) {
      console.trace(error)

    }
  }

  /**
   *  _shift: method adds one or more elements to the beginning of an array and returns the new length of the array.
   ** Use spread operator while passing array [...arr]
   * @param arr: Array of values of any type []. use spread operator [...arr]
   * @param args: Any length of values seperated by comma to unshift in array example _unshift(array,1,2,3,4,5...)
   */
  public _unshift(arr: Array<any>, ...args: any[]): any {
    try {
      if (!Array.isArray(arr)) {
        throw new Error('_unshift - Invalid Arguments: Array should be valid');
      }
      arr.unshift(args);
      return arr.reduce((acc, val) => acc.concat(val), []);
    } catch (error: any) {
      console.trace(error)

    }
  }
  /**
   * _pop: It will remove the array item at end & return item
   * * return the item if removed from array at end
   * @param arr: Array of values of any type [].
   */
  public _pop(arr: Array<any>): any {
    try {
      if (!Array.isArray(arr)) {
        throw new Error('_pop - Invalid Arguments: Array should be valid');
      }
      return arr.pop();
    } catch (error: any) {
      console.trace(error)

    }
  }

  /**
   * _push: It will add / push new item to the array at end & return new array
   * * return the new array.
   * @param arr: Array of values of any type [].
   * @param item: item to be pushed of any type
   */
  public _push(arr: Array<any>, item: any): Array<any> | any {
    try {
      if (!item) {
        throw new Error('_push - Invalid Arguments: Item should be valid');
      }
      return [...arr, item];
    } catch (error: any) {
      console.trace(error)

    }
  }
}
