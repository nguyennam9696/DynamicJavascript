$(document).ready(function() {
  bindEvents();
});


function bindEvents() {
  $('form').bind('submit', addTodo);
}

function buildTodo(todoName) {
  // gets todoTemplate stored in DOM.
  var todoTemplate = $.trim($('#todo_template').html());
  // Creates an jQueryDOMElement from the todoTemplate.
  var $todo = $(todoTemplate);
  // Modifies it's text to use the passed in todoName.
  $todo.find('h2').text(todoName);
  // Returns the jQueryDOMElement to be used elsewhere.
  return $todo;
}

//Create functions to add, remove and complete todos
var addTodo = function(e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "/add_todo",
    data: $(this).serialize(),
    dataType: "json"
  })
  .done(function(data){
    $('.todo_list').append('<ul><li>'+data.todo_content+'</li><ul>')
    console.log(data.todo_content)
    debugger
  });
}
var removeTodo = function(e) {

}
var completeTodo = function(e) {

}
