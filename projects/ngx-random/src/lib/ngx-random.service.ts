import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgxRandomService {
  constructor() {}

  /**
   * Generates alphabets string of specified length
   *
   * Arguments:
   *  - length : number
   *
   *  (_Use as per your requirement_)
   *
   * ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
   */

  public generateString(length: number): string {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /**
   * Generates numbers of specified length
   *
   * Arguments:
   *  - length : number
   *
   *  (_Use as per your requirement_)
   *
   * 0123456789
   */

  public generateNumber(length: number): number {
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return +result;
  }

  /**
   * Generates lowercase charaters string of specified length
   *
   * Arguments:
   *  - length : number
   *
   *  (_Use as per your requirement_)
   *
   * abcdefghijklmnopqrstuvwxyz
   */
  public generateLowerAlphabetsString(length: number): string {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /**
   * Generates uppercase charaters string of specified length
   *
   * Arguments:
   *  - length : number
   *
   *  (_Use as per your requirement_)
   *
   * ABCDEFGHIJKLMNOPQRSTUVWXYZ
   */
  public generateUpperAlphabetsString(length: number): string {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /**
   * Generates Mixed digits | symbols | charaters - string of specified length
   *
   * Arguments:
   *  - length : number
   *
   *  (_Use as per your requirement_)
   *
   * !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
   */
  public generateMixedString(length: number): string {
    var result = '';
    var characters =
      '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /**
   * Generates Hashed string of length - 16
   *
   *
   * ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
   */
  public generatHashString(): string {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 16; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return this.generateChunkString(result, 4);
  }

  /**
   * Generates secured hashed string of length - 16
   *
   *
   * ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789
   */
  public generatSecuredHashString(): string {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 16; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return this.generateChunkString(result, 4);
  }

  private generateChunkString(str: any, len: number): string {
    const size = Math.ceil(str.length / len);
    const r = Array(size);
    let offset = 0;

    for (let i = 0; i < size; i++) {
      r[i] = str.substr(offset, len);
      offset += len;
    }

    return r.join('-');
  }

  /**
* Generates random password string of specified length
*
Arguments:
*  - length : number
*
*  (_Use as per your requirement_)
*
*/

  public generatePasswordString(length: number): string {
    var result = '';
    var characters = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
