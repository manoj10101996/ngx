import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgxLogsService {
  /**
   * Logs current page info with all require information's (URL, PATH etc.)
   */
  public log(text: string) {
    console.log(this.currentTime() + ': ' + text);
  }
  /**
   * Logs Error message for custom strings as console logs
   */
  public error(text: string) {
    console.error(this.currentTime() + ': ' + text);
  }
  /**
   * Logs Error message for custom strings as console logs
   */
  public warn(text: string) {
    console.warn(this.currentTime() + ': ' + text);
  }
  /**
   * Same as console logs
   */
  public info(text: string) {
    console.info(this.currentTime() + ': ' + text);
  }
  /**
   * Clears the entire console logs
   */
  public clear() {
    console.clear();
  }
  /**
   * Console logs for iterations with index value - Can be used with for , forin, foreach, do..while
   */
  public counter(text: string) {
    console.count(text);
  }
  /**
   * Logs current page info with all require information's (URL, PATH etc.)
   */
  public directory() {
    console.dir(document.location);
  }
  /**
   * Displays array or JSON of array/dictionary input as a table in console
   */
  public table(array: any) {
    console.table(array);
  }
  /**
   * Logs current page info with all require information's (URL, PATH etc.)
   */
  private currentTime(): string {
    return (
      (new Date().getHours() > 12
        ? new Date().getHours() - 12
        : new Date().getHours()) +
      ':' +
      new Date().getMinutes() +
      ':' +
      new Date().getSeconds() +
      ':' +
      new Date().getMilliseconds() +
      's'
    );
  }
}
