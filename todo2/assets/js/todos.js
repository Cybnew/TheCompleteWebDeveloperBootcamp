//Check Off Specific Todo's By Clicking

$("ul").on("click", "li", function() {
  $(this).toggleClass("completedTodo");
});

//Click on "X", Delete Task

$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });

  event.stopPropagation();
});
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");

    $("ul").append(
      "<li><span><i class='fas fa-car-crash'></i></span>  " + todoText + "</li>"
    );
  }
});

$("#plus").click(function() {
  $("input[type='text']").fadeToggle();
});
