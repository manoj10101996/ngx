 <img width="256px" src="https://icon.beforepost.com/VQF5LQAJ-W6WFR2Q7-7VTTX8CA.svg"/>

# Welcome to NGX-RANDOM!

Generate strong, random passwords
Passwords are a real security threat. Over 80% of hacking-related breaches are due to weak or stolen passwords, a recent report shows . So if you want to safeguard your personal info and assets, creating secure passwords is a big first step. And that’s where the LastPass Password Generator can help. Impossible-to-crack passwords are complex with multiple types of characters (numbers, letters, and symbols). Making your passwords different for each website or app also helps defend against hacking.

---
[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-random-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-random)
---

## Import

Import the module on your `app.module.ts` file as follow.

> import { NgxRandomModule} from "ngx-random";

### Add to imports

```
imports: [
  ...
  NgxRandomModule
  ...
],
```

## Import the service

```
constructor(private ngxRandom: NgxRandomService) {
  console.log(this.ngxRandom.generatHashString());
}
```

Use reference for logs service in constructor and import it respectively at any component

## Methods

This are the methods available with ngx-random use it as per your requirement:

| Method                                         | Inputs         | Usage                                                                     |
| ---------------------------------------------- | -------------- | ------------------------------------------------------------------------- |
| `generateString(8);`                           | length: number | Generates alphabets string of specified length                            |
| this.ngxRandom.generateString(8);              |
| `generateLowerAlphabetsString(8)`              | length: number | Generates lowercase charaters string of specified length                  |
| this.ngxRandom.generateLowerAlphabetsString(8) |
| `generateUpperAlphabetsString(8)`              | length: number | Generates uppercase charaters string of specified length                  |
| this.ngxRandom.generateUpperAlphabetsString(8) |
| `generateNumber(8)`                            | length: number | Generates numbers of specified length                                     |
| this.ngxRandom.generateNumber(8)               |
| `generatePasswordString(8)`                    | length: number | Generates random password string of specified length                      |
| this.ngxRandom.generatePasswordString(8)       |
| `generateMixedString(8)`                       | length: number | Generates Mixed digits - symbols - charaters - string of specified length |
| this.ngxRandom.generateMixedString(8)          |
| `generatHashString()`                          |                | Generates Hashed string of length - 16                                    |
| this.ngxRandom.generatHashString()             |
| `generatSecuredHashString()`                   |                | Generates secured hashed string of length - 16                            |
| this.ngxRandom.generatSecuredHashString()      |


---
[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-random-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-random)
---
