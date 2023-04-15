
// checking file Uploads
const hasFile = (request) => {
  if (!request[0].files[0]) return false;
  return true;
};


// check if a value is empty
const empty = (value) => {
  if (value === "" || value.trim() === "") return true;
  return false;
};


/**
 * @param {*} validated
 * @returns boolean
 * @description Get the Error messages and append it to the DOM,
 * @note specify a span element with data-validation and data-error dataset attributes to work properly
 */
const errorElement = (validated) => {
  // selecting all error boxes
  document.querySelectorAll("[data-validation]").forEach(function (error) {
    error.textContent = null;
    const validationName = error.getAttribute("data-error");
    if (validated.hasOwnProperty(validationName)) {
      const uppercaseName =
        validated[validationName][0].toUpperCase() +
        validated[validationName].substring(1);
      error.textContent = uppercaseName;
    }
  });
};


/**
 * @param {*} values -> object
 * @returns if validation fails ? this finction will return an object with failed vaidations :
 * if validation passes returns a validated object back to the function
 */
const validate = (values) => {
  let errorsArray = {};
  Object.entries(values).map((obj) => {
    if (empty(obj[1])) {
      errorsArray = {
        ...errorsArray,
        [obj[0]]: `${obj[0]} is required!`,
      };
    }
  });

  if (Object.keys(errorsArray).length < 1) return true;
  errorElement(errorsArray);
  return false;
};
