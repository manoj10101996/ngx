import { Injectable } from '@angular/core';
import { COLOROBJECT } from '../public-api';

@Injectable({
  providedIn: 'root',
})
export class NgxColorConverterService {
  public values = '';
  public red: number;
  public green: number;
  public blue: number;
  public opacity: number;
  public hue: number;
  public whiteness: number;
  public blackness: number;
  public sat: number;
  public lightness: number;
  public cyan: number;
  public magenta: number;
  public yellow: number;
  public black: number;
  public ncol: number;
  public valid: any;
  public view: any;
  constructor() { }

  ngOnInit(): void { }

  public toRgbString = (red: number, green: number, blue: number) => {
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  };

  public toRgbaString = (
    red: number,
    green: number,
    blue: number,
    alpha: number
  ) => {
    return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
  };

  public toHwbString = (hue: number, whiteness: number, blackness: number) => {
    return (
      'hwb(' +
      hue +
      ', ' +
      Math.round(whiteness * 100) +
      '%, ' +
      Math.round(blackness * 100) +
      '%)'
    );
  };

  public toHwbStringDecimal = (
    hue: number,
    whiteness: number,
    blackness: number
  ) => {
    return 'hwb(' + hue + ', ' + whiteness + ', ' + blackness + ')';
  };

  public toHwbaString = (
    hue: number,
    whiteness: number,
    blackness: number,
    alpha: number
  ) => {
    return (
      'hwba(' +
      hue +
      ', ' +
      Math.round(whiteness * 100) +
      '%, ' +
      Math.round(blackness * 100) +
      '%, ' +
      alpha +
      ')'
    );
  };

  public toHslString = (hue: number, sat: number, lightness: number) => {
    return (
      'hsl(' +
      hue +
      ', ' +
      Math.round(sat * 100) +
      '%, ' +
      Math.round(lightness * 100) +
      '%)'
    );
  };

  public toHslStringDecimal = (hue: number, sat: number, lightness: number) => {
    return 'hsl(' + hue + ', ' + sat + ', ' + lightness + ')';
  };

  public toHslaString = (
    hue: number,
    sat: number,
    lightness: number,
    alpha: number
  ) => {
    return (
      'hsla(' +
      hue +
      ', ' +
      Math.round(sat * 100) +
      '%, ' +
      Math.round(lightness * 100) +
      '%, ' +
      alpha +
      ')'
    );
  };

  public toCmykString = (
    cyan: number,
    magenta: number,
    yellow: number,
    black: number
  ) => {
    return (
      'cmyk(' +
      Math.round(cyan * 100) +
      '%, ' +
      Math.round(magenta * 100) +
      '%, ' +
      Math.round(yellow * 100) +
      '%, ' +
      Math.round(black * 100) +
      '%)'
    );
  };

  public toCmykStringDecimal = (
    cyan: number,
    magenta: number,
    yellow: number,
    black: number
  ) => {
    return 'cmyk(' + cyan + ', ' + magenta + ', ' + yellow + ', ' + black + ')';
  };

  public toNcolString = (
    ncol: number,
    whiteness: number,
    blackness: number
  ) => {
    return (
      ncol +
      ', ' +
      Math.round(whiteness * 100) +
      '%, ' +
      Math.round(blackness * 100) +
      '%'
    );
  };

  public toNcolStringDecimal = (
    ncol: number,
    whiteness: number,
    blackness: number
  ) => {
    return ncol + ', ' + whiteness + ', ' + blackness;
  };

  public toNcolaString = (
    ncol: number,
    whiteness: number,
    blackness: number,
    alpha: number
  ) => {
    return (
      ncol +
      ', ' +
      Math.round(whiteness * 100) +
      '%, ' +
      Math.round(blackness * 100) +
      '%, ' +
      alpha
    );
  };

  public toName = () => {
    let r,
      g,
      b,
      colorhexs = this.getColorArr('hexs');
    for (let i = 0; i < colorhexs.length; i++) {
      r = parseInt(colorhexs[i].substr(0, 2), 16);
      g = parseInt(colorhexs[i].substr(2, 2), 16);
      b = parseInt(colorhexs[i].substr(4, 2), 16);
      if (this.red == r && this.green == g && this.blue == b) {
        return this.getColorArr('names')[i];
      }
    }
    return '';
  };

  public toHexString = (red: number, green: number, blue: number) => {
    let r = this.toHex(red);
    let g = this.toHex(green);
    let b = this.toHex(blue);
    return '#' + r + g + b;
  };

  public toRgb = (red: number, green: number, blue: number, alpha: number) => {
    return { r: red, g: green, b: blue, a: alpha };
  };

  public toHsl = (
    hue: number,
    sat: number,
    lightness: number,
    alpha: number
  ) => {
    return { h: hue, s: sat, l: lightness, a: alpha };
  };

  public toHwb = (
    hue: number,
    whiteness: number,
    blackness: number,
    alpha: number
  ) => {
    return {
      h: hue,
      w: whiteness,
      b: blackness,
      a: alpha,
    };
  };

  public toCmyk = (
    cyan: number,
    magenta: number,
    yellow: number,
    black: number,
    alpha: number
  ) => {
    return {
      c: cyan,
      m: magenta,
      y: yellow,
      k: black,
      a: alpha,
    };
  };

  public toNcol = (
    ncol: number,
    whiteness: number,
    blackness: number,
    alpha: number
  ) => {
    return {
      ncol: ncol,
      w: whiteness,
      b: blackness,
      a: alpha,
    };
  };

  public isDark = (n: any) => {
    let m = n || 128;
    return (+this.red * 299 + +this.green * 587 + +this.blue * 114) / 1000 < m;
  };

  public saturate = (n: any) => {
    let x, rgb, color;
    x = n / 100 || 0.1;
    this.sat += x;
    if (this.sat > 1) {
      this.sat = 1;
    }
    rgb = this.hslToRgb(this.hue, this.sat, this.lightness);
    color = this.colorObject(rgb, this.opacity, this.hue, this.sat);
    this.attachValues(color);
  };

  public desaturate = (n: any) => {
    let x, rgb, color;
    x = n / 100 || 0.1;
    this.sat -= x;
    if (this.sat < 0) {
      this.sat = 0;
    }
    rgb = this.hslToRgb(this.hue, this.sat, this.lightness);
    color = this.colorObject(rgb, this.opacity, this.hue, this.sat);
    this.attachValues(color);
  };

  public lighter = (n: any) => {
    let x, rgb, color;
    x = n / 100 || 0.1;
    this.lightness += x;
    if (this.lightness > 1) {
      this.lightness = 1;
    }
    rgb = this.hslToRgb(this.hue, this.sat, this.lightness);
    color = this.colorObject(rgb, this.opacity, this.hue, this.sat);
    this.attachValues(color);
  };

  public darker = (n: any) => {
    let x, rgb, color;
    x = n / 100 || 0.1;
    this.lightness -= x;
    if (this.lightness < 0) {
      this.lightness = 0;
    }
    rgb = this.hslToRgb(this.hue, this.sat, this.lightness);
    color = this.colorObject(rgb, this.opacity, this.hue, this.sat);
    this.attachValues(color);
  };

  public attachValues = (color: any) => {
    this.red = color.red;
    this.green = color.green;
    this.blue = color.blue;
    this.hue = color.hue;
    this.sat = color.sat;
    this.lightness = color.lightness;
    this.whiteness = color.whiteness;
    this.blackness = color.blackness;
    this.cyan = color.cyan;
    this.magenta = color.magenta;
    this.yellow = color.yellow;
    this.black = color.black;
    this.ncol = color.ncol;
    this.opacity = color.opacity;
    this.valid = color.valid;
  };

  public toColorObject(color: any) {
    let x,
      y,
      typ,
      arr = [],
      arrlength,
      i,
      opacity,
      match,
      a,
      hue,
      sat,
      rgb,
      colornames = [],
      colorhexs = [];
    let c = color;
    c = this.ngxColorTrim(c.toLowerCase());
    x = c.substr(0, 1).toUpperCase();
    y = c.substr(1);
    a = 1;
    if (
      (x == 'R' ||
        x == 'Y' ||
        x == 'G' ||
        x == 'C' ||
        x == 'B' ||
        x == 'M' ||
        x == 'W') &&
      !isNaN(y)
    ) {
      if (c.length == 6 && c.indexOf(',') == -1) {
      } else {
        c = 'ncol(' + c + ')';
      }
    }
    if (c.length != 3 && c.length != 6 && !isNaN(c)) {
      c = 'ncol(' + c + ')';
    }
    if (c.indexOf(',') > 0 && c.indexOf('(') == -1) {
      c = 'ncol(' + c + ')';
    }
    if (
      c.substr(0, 3) == 'rgb' ||
      c.substr(0, 3) == 'hsl' ||
      c.substr(0, 3) == 'hwb' ||
      c.substr(0, 4) == 'ncol' ||
      c.substr(0, 4) == 'cmyk'
    ) {
      if (c.substr(0, 4) == 'ncol') {
        if (c.split(',').length == 4 && c.indexOf('ncola') == -1) {
          c = c.replace('ncol', 'ncola');
        }
        typ = 'ncol';
        c = c.substr(4);
      } else if (c.substr(0, 4) == 'cmyk') {
        typ = 'cmyk';
        c = c.substr(4);
      } else {
        typ = c.substr(0, 3);
        c = c.substr(3);
      }
      arrlength = 3;
      opacity = false;
      if (c.substr(0, 1).toLowerCase() == 'a') {
        arrlength = 4;
        opacity = true;
        c = c.substr(1);
      } else if (typ == 'cmyk') {
        arrlength = 4;
        if (c.split(',').length == 5) {
          arrlength = 5;
          opacity = true;
        }
      }
      c = c.replace('(', '');
      c = c.replace(')', '');
      arr = c.split(',');
      if (typ == 'rgb') {
        if (arr.length != arrlength) {
          return this.emptyObject();
        }
        for (i = 0; i < arrlength; i++) {
          if (arr[i] == '' || arr[i] == ' ') {
            arr[i] = '0';
          }
          if (arr[i].indexOf('%') > -1) {
            arr[i] = arr[i].replace('%', '');
            arr[i] = Number(arr[i] / 100);
            if (i < 3) {
              arr[i] = Math.round(arr[i] * 255);
            }
          }
          if (isNaN(arr[i])) {
            return this.emptyObject();
          }
          if (parseInt(arr[i]) > 255) {
            arr[i] = 255;
          }
          if (i < 3) {
            arr[i] = parseInt(arr[i]);
          }
          if (i == 3 && Number(arr[i]) > 1) {
            arr[i] = 1;
          }
        }
        rgb = { r: arr[0], g: arr[1], b: arr[2] };
        if (opacity == true) {
          a = Number(arr[3]);
        }
      }
      if (typ == 'hsl' || typ == 'hwb' || typ == 'ncol') {
        while (arr.length < arrlength) {
          arr.push('0');
        }
        if (typ == 'hsl' || typ == 'hwb') {
          if (parseInt(arr[0]) >= 360) {
            arr[0] = 0;
          }
        }
        for (i = 1; i < arrlength; i++) {
          if (arr[i].indexOf('%') > -1) {
            arr[i] = arr[i].replace('%', '');
            arr[i] = Number(arr[i]);
            if (isNaN(arr[i])) {
              return this.emptyObject();
            }
            arr[i] = arr[i] / 100;
          } else {
            arr[i] = Number(arr[i]);
          }
          if (Number(arr[i]) > 1) {
            arr[i] = 1;
          }
          if (Number(arr[i]) < 0) {
            arr[i] = 0;
          }
        }
        if (typ == 'hsl') {
          rgb = this.hslToRgb(arr[0], arr[1], arr[2]);
          hue = Number(arr[0]);
          sat = Number(arr[1]);
        }
        if (typ == 'hwb') {
          rgb = this.hwbToRgb(arr[0], arr[1], arr[2]);
        }
        if (typ == 'ncol') {
          rgb = this.ncolToRgb(arr[0], arr[1], arr[2]);
        }
        if (opacity == true) {
          a = Number(arr[3]);
        }
      }
      if (typ == 'cmyk') {
        while (arr.length < arrlength) {
          arr.push('0');
        }
        for (i = 0; i < arrlength; i++) {
          if (arr[i].indexOf('%') > -1) {
            arr[i] = arr[i].replace('%', '');
            arr[i] = Number(arr[i]);
            if (isNaN(arr[i])) {
              return this.emptyObject();
            }
            arr[i] = arr[i] / 100;
          } else {
            arr[i] = Number(arr[i]);
          }
          if (Number(arr[i]) > 1) {
            arr[i] = 1;
          }
          if (Number(arr[i]) < 0) {
            arr[i] = 0;
          }
        }
        rgb = this.cmykToRgb(arr[0], arr[1], arr[2], arr[3]);
        if (opacity == true) {
          a = Number(arr[4]);
        }
      }
    } else if (c.substr(0, 3) == 'ncs') {
      rgb = this.ncsToRgb(c);
    } else {
      match = false;
      colornames = this.getColorArr('names');
      for (i = 0; i < colornames.length; i++) {
        if (c.toLowerCase() == colornames[i].toLowerCase()) {
          colorhexs = this.getColorArr('hexs');
          match = true;
          rgb = {
            r: parseInt(colorhexs[i].substr(0, 2), 16),
            g: parseInt(colorhexs[i].substr(2, 2), 16),
            b: parseInt(colorhexs[i].substr(4, 2), 16),
          };
          break;
        }
      }
      if (match == false) {
        c = c.replace('#', '');
        if (c.length == 3) {
          c =
            c.substr(0, 1) +
            c.substr(0, 1) +
            c.substr(1, 1) +
            c.substr(1, 1) +
            c.substr(2, 1) +
            c.substr(2, 1);
        }
        for (i = 0; i < c.length; i++) {
          if (!this.isHex(c.substr(i, 1))) {
            return this.emptyObject();
          }
        }
        arr[0] = parseInt(c.substr(0, 2), 16);
        arr[1] = parseInt(c.substr(2, 2), 16);
        arr[2] = parseInt(c.substr(4, 2), 16);
        for (i = 0; i < 3; i++) {
          if (isNaN(arr[i])) {
            return this.emptyObject();
          }
        }
        rgb = {
          r: arr[0],
          g: arr[1],
          b: arr[2],
        };
      }
    }
    this.view = this.colorObject(rgb, a, hue, sat);
    return this.colorObject(rgb, a, hue, sat);
  }

  public colorObject(rgb: any, a: any, h: any, s: any): COLOROBJECT {
    let hsl, hwb, cmyk, ncol, color, hue, sat;
    if (!rgb) {
      return this.emptyObject();
    }
    if (a === null) {
      a = 1;
    }
    hsl = this.rgbToHsl(rgb.r, rgb.g, rgb.b);
    hwb = this.rgbToHwb(rgb.r, rgb.g, rgb.b);
    cmyk = this.rgbToCmyk(rgb.r, rgb.g, rgb.b);
    hue = h || hsl.h;
    sat = s || hsl.s;
    ncol = this.hueToNcol(hue);
    color = {
      red: rgb.r,
      green: rgb.g,
      blue: rgb.b,
      hue: hue,
      sat: sat,
      lightness: hsl.l,
      whiteness: hwb.w,
      blackness: hwb.b,
      cyan: cmyk.c,
      magenta: cmyk.m,
      yellow: cmyk.y,
      black: cmyk.k,
      ncol: ncol,
      opacity: a,
      valid: true,
    };
    color = this.roundDecimals(color);
    return color;
  }

  public emptyObject(): COLOROBJECT {
    return {
      red: 0,
      green: 0,
      blue: 0,
      hue: 0,
      sat: 0,
      lightness: 0,
      whiteness: 0,
      blackness: 0,
      cyan: 0,
      magenta: 0,
      yellow: 0,
      black: 0,
      ncol: 'R',
      opacity: 1,
      valid: false,
    };
  }

  public getColorArr(x: any): string[] {
    if (x == 'names') {
      return [
        'AliceBlue',
        'AntiqueWhite',
        'Aqua',
        'Aquamarine',
        'Azure',
        'Beige',
        'Bisque',
        'Black',
        'BlanchedAlmond',
        'Blue',
        'BlueViolet',
        'Brown',
        'BurlyWood',
        'CadetBlue',
        'Chartreuse',
        'Chocolate',
        'Coral',
        'CornflowerBlue',
        'Cornsilk',
        'Crimson',
        'Cyan',
        'DarkBlue',
        'DarkCyan',
        'DarkGoldenRod',
        'DarkGray',
        'DarkGrey',
        'DarkGreen',
        'DarkKhaki',
        'DarkMagenta',
        'DarkOliveGreen',
        'DarkOrange',
        'DarkOrchid',
        'DarkRed',
        'DarkSalmon',
        'DarkSeaGreen',
        'DarkSlateBlue',
        'DarkSlateGray',
        'DarkSlateGrey',
        'DarkTurquoise',
        'DarkViolet',
        'DeepPink',
        'DeepSkyBlue',
        'DimGray',
        'DimGrey',
        'DodgerBlue',
        'FireBrick',
        'FloralWhite',
        'ForestGreen',
        'Fuchsia',
        'Gainsboro',
        'GhostWhite',
        'Gold',
        'GoldenRod',
        'Gray',
        'Grey',
        'Green',
        'GreenYellow',
        'HoneyDew',
        'HotPink',
        'IndianRed',
        'Indigo',
        'Ivory',
        'Khaki',
        'Lavender',
        'LavenderBlush',
        'LawnGreen',
        'LemonChiffon',
        'LightBlue',
        'LightCoral',
        'LightCyan',
        'LightGoldenRodYellow',
        'LightGray',
        'LightGrey',
        'LightGreen',
        'LightPink',
        'LightSalmon',
        'LightSeaGreen',
        'LightSkyBlue',
        'LightSlateGray',
        'LightSlateGrey',
        'LightSteelBlue',
        'LightYellow',
        'Lime',
        'LimeGreen',
        'Linen',
        'Magenta',
        'Maroon',
        'MediumAquaMarine',
        'MediumBlue',
        'MediumOrchid',
        'MediumPurple',
        'MediumSeaGreen',
        'MediumSlateBlue',
        'MediumSpringGreen',
        'MediumTurquoise',
        'MediumVioletRed',
        'MidnightBlue',
        'MintCream',
        'MistyRose',
        'Moccasin',
        'NavajoWhite',
        'Navy',
        'OldLace',
        'Olive',
        'OliveDrab',
        'Orange',
        'OrangeRed',
        'Orchid',
        'PaleGoldenRod',
        'PaleGreen',
        'PaleTurquoise',
        'PaleVioletRed',
        'PapayaWhip',
        'PeachPuff',
        'Peru',
        'Pink',
        'Plum',
        'PowderBlue',
        'Purple',
        'RebeccaPurple',
        'Red',
        'RosyBrown',
        'RoyalBlue',
        'SaddleBrown',
        'Salmon',
        'SandyBrown',
        'SeaGreen',
        'SeaShell',
        'Sienna',
        'Silver',
        'SkyBlue',
        'SlateBlue',
        'SlateGray',
        'SlateGrey',
        'Snow',
        'SpringGreen',
        'SteelBlue',
        'Tan',
        'Teal',
        'Thistle',
        'Tomato',
        'Turquoise',
        'Violet',
        'Wheat',
        'White',
        'WhiteSmoke',
        'Yellow',
        'YellowGreen',
      ];
    }
    if (x == 'hexs') {
      return [
        'f0f8ff',
        'faebd7',
        '00ffff',
        '7fffd4',
        'f0ffff',
        'f5f5dc',
        'ffe4c4',
        '000000',
        'ffebcd',
        '0000ff',
        '8a2be2',
        'a52a2a',
        'deb887',
        '5f9ea0',
        '7fff00',
        'd2691e',
        'ff7f50',
        '6495ed',
        'fff8dc',
        'dc143c',
        '00ffff',
        '00008b',
        '008b8b',
        'b8860b',
        'a9a9a9',
        'a9a9a9',
        '006400',
        'bdb76b',
        '8b008b',
        '556b2f',
        'ff8c00',
        '9932cc',
        '8b0000',
        'e9967a',
        '8fbc8f',
        '483d8b',
        '2f4f4f',
        '2f4f4f',
        '00ced1',
        '9400d3',
        'ff1493',
        '00bfff',
        '696969',
        '696969',
        '1e90ff',
        'b22222',
        'fffaf0',
        '228b22',
        'ff00ff',
        'dcdcdc',
        'f8f8ff',
        'ffd700',
        'daa520',
        '808080',
        '808080',
        '008000',
        'adff2f',
        'f0fff0',
        'ff69b4',
        'cd5c5c',
        '4b0082',
        'fffff0',
        'f0e68c',
        'e6e6fa',
        'fff0f5',
        '7cfc00',
        'fffacd',
        'add8e6',
        'f08080',
        'e0ffff',
        'fafad2',
        'd3d3d3',
        'd3d3d3',
        '90ee90',
        'ffb6c1',
        'ffa07a',
        '20b2aa',
        '87cefa',
        '778899',
        '778899',
        'b0c4de',
        'ffffe0',
        '00ff00',
        '32cd32',
        'faf0e6',
        'ff00ff',
        '800000',
        '66cdaa',
        '0000cd',
        'ba55d3',
        '9370db',
        '3cb371',
        '7b68ee',
        '00fa9a',
        '48d1cc',
        'c71585',
        '191970',
        'f5fffa',
        'ffe4e1',
        'ffe4b5',
        'ffdead',
        '000080',
        'fdf5e6',
        '808000',
        '6b8e23',
        'ffa500',
        'ff4500',
        'da70d6',
        'eee8aa',
        '98fb98',
        'afeeee',
        'db7093',
        'ffefd5',
        'ffdab9',
        'cd853f',
        'ffc0cb',
        'dda0dd',
        'b0e0e6',
        '800080',
        '663399',
        'ff0000',
        'bc8f8f',
        '4169e1',
        '8b4513',
        'fa8072',
        'f4a460',
        '2e8b57',
        'fff5ee',
        'a0522d',
        'c0c0c0',
        '87ceeb',
        '6a5acd',
        '708090',
        '708090',
        'fffafa',
        '00ff7f',
        '4682b4',
        'd2b48c',
        '008080',
        'd8bfd8',
        'ff6347',
        '40e0d0',
        'ee82ee',
        'f5deb3',
        'ffffff',
        'f5f5f5',
        'ffff00',
        '9acd32',
      ];
    }

    return [];
  }

  public roundDecimals(c: any) {
    c.red = Number(c.red.toFixed(0));
    c.green = Number(c.green.toFixed(0));
    c.blue = Number(c.blue.toFixed(0));
    c.hue = Number(c.hue.toFixed(0));
    c.sat = Number(c.sat.toFixed(2));
    c.lightness = Number(c.lightness.toFixed(2));
    c.whiteness = Number(c.whiteness.toFixed(2));
    c.blackness = Number(c.blackness.toFixed(2));
    c.cyan = Number(c.cyan.toFixed(2));
    c.magenta = Number(c.magenta.toFixed(2));
    c.yellow = Number(c.yellow.toFixed(2));
    c.black = Number(c.black.toFixed(2));
    c.ncol = c.ncol.substr(0, 1) + Math.round(Number(c.ncol.substr(1)));
    c.opacity = Number(c.opacity.toFixed(2));
    return c;
  }

  public hslToRgb(hue: any, sat: any, light: any) {
    let t1, t2, r, g, b;
    hue = hue / 60;
    if (light <= 0.5) {
      t2 = light * (sat + 1);
    } else {
      t2 = light + sat - light * sat;
    }
    t1 = light * 2 - t2;
    r = this.hueToRgb(t1, t2, hue + 2) * 255;
    g = this.hueToRgb(t1, t2, hue) * 255;
    b = this.hueToRgb(t1, t2, hue - 2) * 255;
    return { r: r, g: g, b: b };
  }

  public hueToRgb(t1: any, t2: any, hue: any) {
    if (hue < 0) hue += 6;
    if (hue >= 6) hue -= 6;
    if (hue < 1) return (t2 - t1) * hue + t1;
    else if (hue < 3) return t2;
    else if (hue < 4) return (t2 - t1) * (4 - hue) + t1;
    else return t1;
  }

  public hwbToRgb(hue: any, white: any, black: any) {
    let i,
      rgb,
      rgbArr = [],
      tot;
    rgb = this.hslToRgb(hue, 1, 0.5);
    rgbArr[0] = rgb.r / 255;
    rgbArr[1] = rgb.g / 255;
    rgbArr[2] = rgb.b / 255;
    tot = white + black;
    if (tot > 1) {
      white = Number((white / tot).toFixed(2));
      black = Number((black / tot).toFixed(2));
    }
    for (i = 0; i < 3; i++) {
      rgbArr[i] *= 1 - white - black;
      rgbArr[i] += white;
      rgbArr[i] = Number(rgbArr[i] * 255);
    }
    return { r: rgbArr[0], g: rgbArr[1], b: rgbArr[2] };
  }

  public cmykToRgb(c: any, m: any, y: any, k: any) {
    let r, g, b;
    r = 255 - Math.min(1, c * (1 - k) + k) * 255;
    g = 255 - Math.min(1, m * (1 - k) + k) * 255;
    b = 255 - Math.min(1, y * (1 - k) + k) * 255;
    return { r: r, g: g, b: b };
  }

  public ncolToRgb(ncol: any, white: any, black: any) {
    let letter, percent, h, w, b;
    h = ncol;
    if (isNaN(ncol.substr(0, 1))) {
      letter = ncol.substr(0, 1).toUpperCase();
      percent = ncol.substr(1);
      if (percent == '') {
        percent = 0;
      }
      percent = Number(percent);
      if (isNaN(percent)) {
        return false;
      }
      if (letter == 'R') {
        h = 0 + percent * 0.6;
      }
      if (letter == 'Y') {
        h = 60 + percent * 0.6;
      }
      if (letter == 'G') {
        h = 120 + percent * 0.6;
      }
      if (letter == 'C') {
        h = 180 + percent * 0.6;
      }
      if (letter == 'B') {
        h = 240 + percent * 0.6;
      }
      if (letter == 'M') {
        h = 300 + percent * 0.6;
      }
      if (letter == 'W') {
        h = 0;
        white = 1 - percent / 100;
        black = percent / 100;
      }
    }
    return this.hwbToRgb(h, white, black);
  }

  public hueToNcol(hue: any): string {
    while (hue >= 360) {
      hue = hue - 360;
    }
    if (hue < 60) {
      return 'R' + hue / 0.6;
    }
    if (hue < 120) {
      return 'Y' + (hue - 60) / 0.6;
    }
    if (hue < 180) {
      return 'G' + (hue - 120) / 0.6;
    }
    if (hue < 240) {
      return 'C' + (hue - 180) / 0.6;
    }
    if (hue < 300) {
      return 'B' + (hue - 240) / 0.6;
    }
    if (hue < 360) {
      return 'M' + (hue - 300) / 0.6;
    }
    return '';
  }

  public ncsToRgb(ncs: any) {
    let black,
      chroma,
      bc,
      percent,
      black1,
      chroma1,
      factor1,
      blue1,
      red1,
      red2,
      green2,
      blue2,
      max,
      factor2,
      grey,
      r,
      g,
      b,
      green1: any = 0;
    ncs = this.ngxColorTrim(ncs).toUpperCase();
    ncs = ncs.replace('(', '');
    ncs = ncs.replace(')', '');
    ncs = ncs.replace('NCS', 'NCS ');
    ncs = ncs.replace(/  /g, ' ');
    if (ncs.indexOf('NCS') == -1) {
      ncs = 'NCS ' + ncs;
    }
    ncs = ncs.match(
      /^(?:NCS|NCS\sS)\s(\d{2})(\d{2})-(N|[A-Z])(\d{2})?([A-Z])?$/
    );
    if (ncs === null) return false;
    black = parseInt(ncs[1], 10);
    chroma = parseInt(ncs[2], 10);
    bc = ncs[3];
    if (bc != 'N' && bc != 'Y' && bc != 'R' && bc != 'B' && bc != 'G') {
      return false;
    }
    percent = parseInt(ncs[4], 10) || 0;
    if (bc !== 'N') {
      black1 = 1.05 * black - 5.25;
      chroma1 = chroma;
      if (bc === 'Y' && percent <= 60) {
        red1 = 1;
      } else if (
        (bc === 'Y' && percent > 60) ||
        (bc === 'R' && percent <= 80)
      ) {
        if (bc === 'Y') {
          factor1 = percent - 60;
        } else {
          factor1 = percent + 40;
        }
        red1 = (Math.sqrt(14884 - Math.pow(factor1, 2)) - 22) / 100;
      } else if ((bc === 'R' && percent > 80) || bc === 'B') {
        red1 = 0;
      } else if (bc === 'G') {
        factor1 = percent - 170;
        red1 = (Math.sqrt(33800 - Math.pow(factor1, 2)) - 70) / 100;
      }
      if (bc === 'Y' && percent <= 80) {
        blue1 = 0;
      } else if (
        (bc === 'Y' && percent > 80) ||
        (bc === 'R' && percent <= 60)
      ) {
        if (bc === 'Y') {
          factor1 = percent - 80 + 20.5;
        } else {
          factor1 = percent + 20 + 20.5;
        }
        blue1 = (104 - Math.sqrt(11236 - Math.pow(factor1, 2))) / 100;
      } else if (
        (bc === 'R' && percent > 60) ||
        (bc === 'B' && percent <= 80)
      ) {
        if (bc === 'R') {
          factor1 = percent - 60 - 60;
        } else {
          factor1 = percent + 40 - 60;
        }
        blue1 = (Math.sqrt(10000 - Math.pow(factor1, 2)) - 10) / 100;
      } else if (
        (bc === 'B' && percent > 80) ||
        (bc === 'G' && percent <= 40)
      ) {
        if (bc === 'B') {
          factor1 = percent - 80 - 131;
        } else {
          factor1 = percent + 20 - 131;
        }
        blue1 = (122 - Math.sqrt(19881 - Math.pow(factor1, 2))) / 100;
      } else if (bc === 'G' && percent > 40) {
        blue1 = 0;
      }

      if (bc === 'Y') {
        green1 = (85 - (17 / 20) * percent) / 100;
      } else if (bc === 'R' && percent <= 60) {
        green1 = 0;
      } else if (bc === 'R' && percent > 60) {
        factor1 = percent - 60 + 35;
        green1 = (67.5 - Math.sqrt(5776 - Math.pow(factor1, 2))) / 100;
      } else if (bc === 'B' && percent <= 60) {
        factor1 = 1 * percent - 68.5;
        green1 = (6.5 + Math.sqrt(7044.5 - Math.pow(factor1, 2))) / 100;
      } else if (
        (bc === 'B' && percent > 60) ||
        (bc === 'G' && percent <= 60)
      ) {
        green1 = 0.9;
      } else if (bc === 'G' && percent > 60) {
        factor1 = percent - 60;
        let green1 = (90 - (1 / 8) * factor1) / 100;
      }
      factor1 = (red1 + green1 + blue1) / 3;
      red2 = ((factor1 - (red1 || 0)) * (100 - chroma1)) / 100 + (red1 || 0);
      green2 = ((factor1 - green1) * (100 - chroma1)) / 100 + green1;
      blue2 = ((factor1 - (blue1 || 0)) * (100 - chroma1)) / 100 + (blue1 || 0);
      if (red2 > green2 && red2 > blue2) {
        max = red2;
      } else if (green2 > red2 && green2 > blue2) {
        max = green2;
      } else if (blue2 > red2 && blue2 > green2) {
        max = blue2;
      } else {
        max = (red2 + green2 + blue2) / 3;
      }
      factor2 = 1 / max;
      (r = +((red2 * factor2 * (100 - black1)) / 100) * 255), 10;
      (g = +((green2 * factor2 * (100 - black1)) / 100) * 255), 10;
      (b = +((blue2 * factor2 * (100 - black1)) / 100) * 255), 10;
      if (r > 255) {
        r = 255;
      }
      if (g > 255) {
        g = 255;
      }
      if (b > 255) {
        b = 255;
      }
      if (r < 0) {
        r = 0;
      }
      if (g < 0) {
        g = 0;
      }
      if (b < 0) {
        b = 0;
      }
    } else {
      (grey = +(1 - black / 100) * 255), 10;
      if (grey > 255) {
        grey = 255;
      }
      if (grey < 0) {
        grey = 0;
      }
      r = grey;
      g = grey;
      b = grey;
    }
    return {
      r: r,
      g: g,
      b: b,
    };
  }

  public rgbToHsl(r: number, g: number, b: number) {
    let min,
      max,
      i,
      l,
      s,
      maxcolor,
      h,
      rgb = [];
    rgb[0] = r / 255;
    rgb[1] = g / 255;
    rgb[2] = b / 255;
    min = rgb[0];
    max = rgb[0];
    maxcolor = 0;
    for (i = 0; i < rgb.length - 1; i++) {
      if (rgb[i + 1] <= min) {
        min = rgb[i + 1];
      }
      if (rgb[i + 1] >= max) {
        max = rgb[i + 1];
        maxcolor = i + 1;
      }
    }
    if (maxcolor == 0) {
      h = (rgb[1] - rgb[2]) / (max - min);
    }
    if (maxcolor == 1) {
      h = 2 + (rgb[2] - rgb[0]) / (max - min);
    }
    if (maxcolor == 2) {
      h = 4 + (rgb[0] - rgb[1]) / (max - min);
    }
    if (isNaN(h || 0)) {
      h = 0;
    }
    h = (h || 0) * 60;
    if (h < 0) {
      h = h + 360;
    }
    l = (min + max) / 2;
    if (min == max) {
      s = 0;
    } else {
      if (l < 0.5) {
        s = (max - min) / (max + min);
      } else {
        s = (max - min) / (2 - max - min);
      }
    }
    s = s;
    return { h: h, s: s, l: l };
  }

  public rgbToHwb(r: number, g: number, b: number) {
    let h, w, bl;
    r = r / 255;
    g = g / 255;
    b = b / 255;
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let chroma = max - min;
    if (chroma == 0) {
      h = 0;
    } else if (r == max) {
      h = (((g - b) / chroma) % 6) * 360;
    } else if (g == max) {
      h = (((b - r) / chroma + 2) % 6) * 360;
    } else {
      h = (((r - g) / chroma + 4) % 6) * 360;
    }
    w = min;
    bl = 1 - max;
    return { h: h, w: w, b: bl };
  }

  public rgbToCmyk(red: number, green: number, blue: number) {
    let c, m, y, k;
    red = red / 255;
    green = green / 255;
    blue = blue / 255;
    let max = Math.max(red, green, blue);
    k = 1 - max;
    if (k == 1) {
      c = 0;
      m = 0;
      y = 0;
    } else {
      c = (1 - red - k) / (1 - k);
      m = (1 - green - k) / (1 - k);
      y = (1 - blue - k) / (1 - k);
    }
    return { c: c, m: m, y: y, k: k };
  }

  public toHex(n: any) {
    let hex = n.toString(16);
    while (hex.length < 2) {
      hex = '0' + hex;
    }
    return hex;
  }

  public cl(x: any) {
    console.log(x);
  }

  public ngxColorTrim(x: any) {
    return x.replace(/^\s+|\s+$/g, '');
  }

  public isHex(x: any) {
    return '0123456789ABCDEFabcdef'.indexOf(x) > -1;
  }
}
