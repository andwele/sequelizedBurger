$(document).ready(function() {
  // Getting a reference to the input field where user adds a new todo
  var newItemInput = $("input.new-item");
  // Our new todos will go inside the todoContainer
  var todoContainer = $(".todo-container");
  // Adding event listeners for deleting, editing, and adding todos
  $(document).on("click", "button.delete", deleteTodo);
  $(document).on("click", ".todo-item", editTodo);
  $(document).on("keyup", ".todo-item", finishEdit);
  $(document).on("blur", ".todo-item", cancelEdit);
  $(document).on("submit", "#todo-form", insertTodo);

  // Our initial todos array
  var todos = [];

  // Getting todos from database when page loads
  getTodos();

  // This function resets the todos displayed with new todos from the database
  function initializeRows() {
    todoContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < todos.length; i++) {
      rowsToAdd.push(createNewRow(todos[i]));
    }
    todoContainer.prepend(rowsToAdd);
  }

  // This function grabs todos from the database and updates the view
  function getTodos() {
    $.get("/api/todos", function(data) {
      todos = data;
      initializeRows();
    });
  }

  // This function deletes a todo when the user clicks the delete button
  function deleteTodo() {
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/todos/" + id
    }).done(function() {
      getTodos();
    });
  }

  // This function handles showing the input box for a user to edit a todo
  function editTodo() {
    var currentTodo = $(this).data("todo");
    $(this).children().hide();
    $(this).children("input.edit").val(currentTodo.text);
    $(this).children("input.edit").show();
    $(this).children("input.edit").focus();
  }

  // This function starts updating a todo in the database if a user hits the "Enter Key"
  // While in edit mode
  function finishEdit(event) {
    var updatedTodo;
    if (event.key === "Enter") {
      updatedTodo = {
        id: $(this).data("todo").id,
        text: $(this).children("input").val().trim()
      };
      $(this).blur();
      updateTodo(updatedTodo);
    }
  }

  // This function updates a todo in our database
  function updateTodo(todo) {
    $.ajax({
      method: "PUT",
      url: "/api/todos",
      data: todo
    }).done(function() {
      getTodos();
    });
  }

  // This function is called whenever a todo item is in edit mode and loses focus
  // This cancels any edits being made
  function cancelEdit() {
    var currentTodo = $(this).data("todo");
    $(this).children().hide();
    $(this).children("input.edit").val(currentTodo.text);
    $(this).children("span").show();
    $(this).children("button").show();
  }

  // This function constructs a todo-item row
  function createNewRow(todo) {
    var newInputRow = $("<li>");
    newInputRow.addClass("list-group-item todo-item");
    var newTodoSpan = $("<span>");
    newTodoSpan.text(todo.text);
    newInputRow.append(newTodoSpan);
    var newTodoInput = $("<input>");
    newTodoInput.attr("type", "text");
    newTodoInput.addClass("edit");
    newTodoInput.css("display", "none");
    newInputRow.append(newTodoInput);
    var newDeleteBtn = $("<button>");
    newDeleteBtn.addClass("delete btn btn-default");
    newDeleteBtn.text("x");
    newDeleteBtn.data("id", todo.id);
    newInputRow.append(newDeleteBtn);
    newInputRow.data("todo", todo);
    return newInputRow;
  }

  // This function inserts a new todo into our database and then updates the view
  function insertTodo(event) {
    event.preventDefault();
    // if (!newItemInput.val().trim()) {
    //   return;
    // }
    var todo = {
      text: newItemInput.val().trim(),
      complete: false
    };

    $.post("/api/todos", todo, function() {
      getTodos();
    });
    newItemInput.val("");
  }

});
