/**
 * Function that should add a TODO HTML block to the DOM using
 * the appropriate data from the form when the form is submitted
 * @param event form submit event
 */
function addToDo(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  var formObject = {};
  formData.forEach(function (value, key) {
    formObject[key] = value;
  });

  /**
   * formObject is now in the following format:
   {
    "title": "your title here",
    "description": "your description here"
   }
   so you can use formObject.title, formObject.description to get the title and description from the form
   */

  /**
   * Put your code below to create a new TODO HTML block,
   * add the appropriate data, and add it to the DOM.
   */
}

/**
 * Method to add a class that marks the TODO as
 * completed, ie greyed out when TODO block is clicked. If
 * block is already completed (ie clicked before), then it
 * should remove the class.
 * @param event the onclick event
 */
function toggleToDo(event) {
  let targetElement = getRootElement(event.originalTarget);

  //Your code here
}

/**
 * Function to remove a TODO block from the HTML when the 'X' button is clicked
 * @param event the onclick event
 */
function removeToDo(event) {
  event.preventDefault();
  event.stopPropagation();
  let todoElement = getRootElement(event.originalTarget);

  //Your code here
}

/**
 * Function that gets the main div of a TODO block, denoted by the 'todo' class
 * Not recommended to change this method.
 * @param element the element to start searching from
 * @returns TODO block element or null
 */
function getRootElement(element) {
  let targetElement = element;
  while (targetElement && !targetElement.classList.contains("todo")) {
    targetElement = targetElement.parent
      ? targetElement.parent
      : targetElement.parentElement;
  }
  return targetElement;
}
