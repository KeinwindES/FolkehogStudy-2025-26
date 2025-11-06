  let letter = 'A';

  const buttons = document.querySelectorAll('#button1, #button2, #button3, #button4');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // update the letter
      letter = String.fromCharCode(letter.charCodeAt(0) + 1);

      // update the text content of the clicked button
      button.textContent = letter;
    });
  });
