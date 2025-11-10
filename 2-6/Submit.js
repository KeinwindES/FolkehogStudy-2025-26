// 🧠 Quiz Form Submission
const submitButton = document.getElementById('submitButton');
const form = document.getElementById('quiz-container');

if (submitButton) {
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const question1Input = document.getElementById('question1Input');
    const question2Input = document.getElementById('question2Input');
    const question3Input = document.getElementById('question3Input');
    const question4Input = document.getElementById('question4Input');
    const question5Input = document.getElementById('question5Input');
    const question6Input = document.getElementById('question6Input');
    const question7Input = document.getElementById('question7Input');

    let score = 0;

    // checks values
    if (question1Input?.value.trim().toLowerCase() === '3') {
      score++;
    }
    if (question2Input?.value.trim().toLowerCase() === 'mikal') {
      score++;
    }
    if (question3Input?.value.trim() === '69') {
      score++;
    }
    if (question3Input?.value.trim() === '6 7') {
      score -= 69;
    }
    if (question4Input?.value.trim().toLowerCase() === 'khevin511') {
      score++;
    }
    if (question5Input?.value.trim().toLowerCase() === 'gyat') {
      score++;
    }
    if (question6Input?.value.trim().toLowerCase() === 'skibidi toilet') {
      score++;
    }
    if (question7Input?.value.trim().toLowerCase() === 'b') {
      score++;
    }


    alert(`Your score is: ${score}/7`);
  });
}