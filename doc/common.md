# The `CommonStyle` feature
It applies same set of styles to multiple elements.

## Implementing common styles
The CSS file must be minifed. Rulesheets should be placed up to down. Properties needs to placed in the same line. First type `#CommonStyle-` and type the desired style name. There should be no gap between `#CommonStyle-syleName` and properties. These all helps the detection of common styles.
```css
#CommonStyle-syle1{background-color: teal;}
#CommonStyle-aristocrat{background-color: cyan; text-transform: uppercase; color: red;}
```

## Applying common styles
`hyper.js` is needed to be inserted to webpage. Another javascript file is needed to be inserted to webpage before `hyper.js` with this line.
```javascript
const commonStyleURL = '<url to css file>';
// NOTE: The CSS file must be minified
```
In the webpage, insert `useCommonStyle` attribute to desired element(s). The element(s) will be loaded for applying common styles.
```html
<div useCommonStyle>The quick brown fox jumps over a lazy dog</div>
```
Then set `applyCommonStyle` attribute with the desired common style name.
```html
<div useCommonStyle applyCommonStyle='myStyle'>The quick brown fox jumps over a lazy dog</div>
```
Finally the element(s) will appear with desired common style.


## Applying common styles with class sets
For this a variable named `HStyleObject` is needed to be defined.
```javascript
var HStyleObject = {
    myStyleSet: ['fs-1', 'text-upper']
}
```
`myStyleSet` is your desired set name of style classes. Then Same as before. The `useCommonStyle` attribute for detection. After that, set `cscSetName` attribute with your desired set name. Done.
