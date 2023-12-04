const $petElement = $pet.detach();

  // Add a list item with the same class as your pet inside an unordered list
  const $petList = $('<ul></ul>');
  $petList.append($('<li>').addClass('cat').text('Charlie'));

  // Put the pet somewhere else in your HTML
  $('#someOtherLocation').append($petElement);

  // Remove the pet from the DOM again
  $petElement.detach();

  // Put the pet back in its original location
  $petElement.appendTo($container);
});