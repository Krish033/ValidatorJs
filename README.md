
# ValidatorJs

Simple and Effective Javascript form validator, can be used with any framework that uses javascript, 

also supports Jquery



## Installation


Add this into your project and your good to go

```bash
  https://cdn.jsdelivr.net/gh/Krish033/ValidatorJs/validator.js
```


## Usage/Examples

Add the extra line in your code so validator could send the error message to that line

The validated error is not required to be a ``` span ``` element, feel free to switch the span with the desired tage

The validated error tag must contain ``` data-validation ``` attribute, and ``` data-error ``` attribute to find the specific validated error element

The Validated error message will only be visible if the ```id``` of the ```input``` element matches the ```data-error``` attribute in the validated error 


```HTML
<form onclick="{someFunction}">
    <input type="text" id="someId">
    <!-- Add this line into your form, below the form to show the error message -->
    <!-- This line will be auto filled by validator, should be left empty -->
    <span data-validation data-error="someId"></span>
</form>

```

## Forwarding the data

You need to run the ```validate()``` function to process the data and show the validation message

``` javascript

const validateInputs = {
    someId: document.querySelector('#someId'),
}

// Validate the inputs
validate(validateInputs); // returns a boolean
// if the validation passes, true will be returned and if does not false will be returned

```
If the validation passes, true will be returned and if does not false will be returned

If the validation did not pass the error elements will automatically be updated

You can alse use the
```javascript
// check f validation fails
if(!validate(validateInputs)){
    // do something extra
    return false;
}
```




