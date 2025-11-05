// 🧠 Quiz Form Submission
const submitButton = document.getElementById('submitButton');

if (submitButton) {
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const question1Input = document.getElementById('question1Input');
    const question2Input = document.getElementById('question2Input');
    const question3Input = document.getElementById('question3Input');
    const question4Input = document.getElementById('question4Input');

    let score = 0;

    // checks values
    if (question1Input?.value.trim().toLowerCase() === 'kai cenat') {
      score++;
    }
    if (question2Input?.value.trim().toLowerCase() === 'mikal') {
      score++;
    }
    if (question3Input?.value.trim() === '69') {
      score++;
    }
    if (question4Input?.value.trim().toLowerCase() === 'khevin511') {
      score++;
    }

    alert(`Your score is: ${score}/4`);
  });
}