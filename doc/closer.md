# Closer
Allows to close temporary elements like popups or alerts. There is an example for alerts.

## Creating alerts
The `close-btn` class will turn them into close buttons.
```html
<div id="info" class="alert">
      <span class="close-btn">&times;</span>
      <h3>INFORMATION</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quis.
      </p>
    </div>
    <div id="success" class="alert">
      <span class="close-btn">&times;</span>
      <h3>SUCCESS</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quis.
      </p>
    </div>
    <div id="warning" class="alert">
      <span class="close-btn">&times;</span>
      <h3>WARNING</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quis.
      </p>
    </div>
    <div id="error" class="alert">
      <span class="close-btn">&times;</span>
      <h3>ERROR</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quis.
      </p>
    </div>
```

## Applying some styles

```css
.alert {
    margin: 1rem;
    padding: 1rem;
    border: 2.5px solid;
    border-radius: 1rem;
    font-size: large;
}

.alert p {
    width: 90%;
}

#info {
    background-color: rgba(0, 0, 255, 0.5);
    border-color: rgb(0, 0, 255);
}

#success {
    background-color: rgba(0, 128, 0, 0.5);
    border-color: rgb(0, 128, 0);
}

#warning {
    background-color: rgba(255, 255, 0, 0.5);
    border-color: rgb(255, 255, 0);
}

#error {
    background-color: rgba(255, 0, 0, 0.5);
    border-color: rgb(255, 0, 0, 0.5);
}

.close-btn {
    float: right;
    font-size: xx-large;
    cursor: pointer;
}

.close-btn:hover {
    color: #fff;
}
```
Now it will start functioning.

![Closer Example](https://github.com/ImperialStranger/project-hypercss/vid/closer.mkv)