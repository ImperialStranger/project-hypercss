# Style Class Sets

Allows to apply multiple style classes at a single time. For that, a dictionary named `_HCSS_STYLE_CLASS_SETS` is needed to be defined.

```javascript
HCSS_STYLE_CLASS_SETS = {
  set1: ["text-center", "invisible"], // You can define multiple sets
};
```

Then in HTML, apply styles of the set with `applyStyleClassSet` attribute containing the set name.

```html
<h1 applyStyleClassSet="set1">lorem ipsum</h1>
```
