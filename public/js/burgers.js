// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");
   
    var newDevourState ={
      devoured: newDevour
    };

    console.log("ready to PUT" + id + newDevourState);

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.

    console.log("pressed submit");

    event.preventDefault();

    var newBurger = {
      name: $("#burger_name").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim(),
    };

    console.log("new burger is " + newBurger.name+ " and devoured state is: " + newBurger.devoured);


    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
   });
  
  
  
});

