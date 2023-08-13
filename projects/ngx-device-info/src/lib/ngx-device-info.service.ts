import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgxDeviceInfoService {
  private permissionsNames = [
    'geolocation',
    'notifications',
    'push',
    'midi',
    'camera',
    'microphone',
    'speaker',
    'device-info',
    'background-fetch',
    'background-sync',
    'bluetooth',
    'persistent-storage',
    'ambient-light-sensor',
    'accelerometer',
    'gyroscope',
    'magnetometer',
    'clipboard',
    'display-capture',
    'nfc',
  ];
  constructor() { }

  public async getDeviceInfo() {
    let deviceName = '';
    var isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      Datalogic: function () {
        return navigator.userAgent.match(/DL-AXIS/i);
      },
      Bluebird: function () {
        return navigator.userAgent.match(/EF500/i);
      },
      Honeywell: function () {
        return navigator.userAgent.match(/CT50/i);
      },
      Zebra: function () {
        return navigator.userAgent.match(/TC70|TC55/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          isMobile.Datalogic() ||
          isMobile.Bluebird() ||
          isMobile.Honeywell() ||
          isMobile.Zebra() ||
          isMobile.BlackBerry() ||
          isMobile.Android() ||
          isMobile.iOS() ||
          isMobile.Windows()
        );
      },
    };

    if (isMobile.Datalogic()) deviceName = 'Datalogic';
    else if (isMobile.Bluebird()) deviceName = 'Bluebird';
    else if (isMobile.Honeywell()) deviceName = 'Honeywell';
    else if (isMobile.Zebra()) deviceName = 'Zebra';
    else if (isMobile.BlackBerry()) deviceName = 'BlackBerry';
    else if (isMobile.iOS()) deviceName = 'iOS';
    else if (deviceName == '' && isMobile.Android()) deviceName = 'Android';
    else if (deviceName == '' && isMobile.Windows()) deviceName = 'Windows';

    // if (deviceName) {
    //   console.log('Devices information deviceName = ' + deviceName);
    //   console.log('Devices information any = ' + isMobile.any());
    //   console.log('navigator.userAgent = ' + navigator.userAgent);
    // }
    let deviceData: any = {
      deviceName: deviceName,
      orientation: this.getOrientation(),
      deviceType: this.getDeviceType(),
      userAgent: navigator.userAgent,
      isMobile: this.isMobile(),
      isDesktop: this.isDesktop(),
      isTablet: this.isTablet(),
      language: window.navigator.language,
      isOnline: window.navigator.onLine,
      cookieEnabled: window.navigator.cookieEnabled,
      vendor: window.navigator.vendor,
      clientHeight: document.body.clientHeight,
      clientWidth: document.body.clientWidth,
      height: screen.height,
      width: screen.width,
      availHeight: screen.availHeight,
      availWidth: screen.availWidth,
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
      href: window.location.href,
      protocal: window.location.protocol,
      host: window.location.host,
      hostname: window.location.hostname,
      port: window.location.port,
      pathname: window.location.pathname,
      search: window.location.search,
      hash: window.location.hash,
      origin: window.location.origin,
      timeZoneOffSet: new Date().getTimezoneOffset(),
      utcString: new Date().toUTCString(),
      time: new Date().getTime(),
      date: new Date().getDate(),
      day: new Date().getDay(),
      month: new Date().getMonth(),
      hour: new Date().getHours(),
      year: new Date().getFullYear(),
      seconds: new Date().getSeconds,
      milliseconds: new Date().getMilliseconds(),
      utcdate: new Date().getUTCDate(),
      utcday: new Date().getUTCDay(),
      utcmonth: new Date().getUTCMonth(),
      utcyear: new Date().getUTCFullYear(),
    };
    await this.getAllPermissions().then((data) => {
      data.forEach((element: any) => {
        deviceData[element['permissionName']] = element['state'];
      });
    });
    return deviceData;
  }

  public getDeviceName() {
    var sBrowser,
      sUsrAg = navigator.userAgent;

    // The order matters here, and this may report false positives for unlisted browsers.

    if (sUsrAg.indexOf('Firefox') > -1) {
      sBrowser = 'Mozilla Firefox';
      // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
    } else if (sUsrAg.indexOf('SamsungBrowser') > -1) {
      sBrowser = 'Samsung Internet';
      // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
    } else if (sUsrAg.indexOf('Opera') > -1 || sUsrAg.indexOf('OPR') > -1) {
      sBrowser = 'Opera';
      // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
    } else if (sUsrAg.indexOf('Trident') > -1) {
      sBrowser = 'Microsoft Internet Explorer';
      // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
    } else if (sUsrAg.indexOf('Edge') > -1) {
      sBrowser = 'Microsoft Edge (Legacy)';
      // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    } else if (sUsrAg.indexOf('Edg') > -1) {
      sBrowser = 'Microsoft Edge (Chromium)';
      // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64
    } else if (sUsrAg.indexOf('Chrome') > -1) {
      sBrowser = 'Google Chrome or Chromium';
      // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
    } else if (sUsrAg.indexOf('Safari') > -1) {
      sBrowser = 'Apple Safari';
      // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
    } else {
      sBrowser = 'unknown';
    }
    return sBrowser;
  }

  public getDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return 'tablet';
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return 'mobile';
    }
    return 'desktop';
  }

  public isMobile() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return false;
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return true;
    }
    return false;
  }

  public isTablet() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return true;
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return false;
    }
    return false;
  }

  public isDesktop() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return false;
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return false;
    }
    return true;
  }

  public getOrientation() {
    if (window.matchMedia('(orientation: portrait)').matches) {
      return 'portrait';
    }
    if (window.matchMedia('(orientation: landscape)').matches) {
      return 'landscape';
    }
    return "";
  }

  public getAllPermissions = async () => {
    const allPermissions: any = [];
    // We use Promise.all to wait until all the permission queries are resolved
    await Promise.all(
      this.permissionsNames.map(async (permissionName: any) => {
        try {
          let permission;
          switch (permissionName) {
            case 'push':
              // Not necessary but right now Chrome only supports push messages with  notifications
              permission = await navigator.permissions.query({
                name: permissionName,
              });
              break;
            default:
              permission = await navigator.permissions.query({
                name: permissionName,
              });
          }
          allPermissions.push({ permissionName, state: permission.state });
        } catch (e: any) {
          allPermissions.push({
            permissionName,
            state: 'error',
            errorMessage: e.toString(),
          });
        }
      })
    );
    return allPermissions;
  };
}
