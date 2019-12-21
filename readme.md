# Web Switch is an iOS style switch

## Description 

I ran into issues trying to use another iOS style switch on my blazor application and decided to make my own. 

## Usage
```js
    var checkBoxElement = document.getElementById("myElement");
    new WebSwitch(checkBoxElement);
```

## Custom Options
```js
    var checkBoxElement = document.getElementById("myElement");
    new WebSwitch(checkBoxElement, {size: "small", textPosition: "left"});
```

- `size` : the size of the element, `small`, `medium`, `large`
- `textPosition` : the position of everything inside a when a label is wrapped around your checkbox, `left`, `right`, `default`

## Edit locally

To run and test
`npm start`

To run a build version
`npm run build`