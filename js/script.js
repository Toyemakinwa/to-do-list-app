function newItem(){
    //Add a new item to list of items using jquery
    
    //this creates a list element 
    let li = $('<li></li>');
    //creates a new input value
    let inputValue = $('#input').val();
    //appends it as a child to the list
    li.append(inputValue);
    
      
    //create a conditional statement to input text
       if (inputValue === '') {
         alert('You must write something!');
       } else {
           // this returns back the form if  othing is typed
         $('#list').append(li);
       }

    //function for striking out any list item
    function crossOut() {
      li.toggleClass('strike');
    }
    // strikes list item out when clicked
    li.on('dblclick', function crossOut() {
      li.toggleClass('strike');
    });
    
    //creating a crossout button to delete
    let crossOutButton= $('<crossOutButton></crossOutButton>');
    //append the X button
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
    
    //when clicked clear out the list item
    crossOutButton.on('click', deleteListItem);

     function deleteListItem(){
        li.addClass("delete");
     }

    //for sorting the list item when dragged
     $('#list').sortable();
    }