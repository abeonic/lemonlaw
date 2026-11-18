'use strict';

const questions = [
  {
    prompt: 'Did you report the defect within 24 months of getting your vehicle?',
    options: ['Yes', 'No', 'I’m not sure']
  },
  {
    prompt: 'How many times did the dealer try to fix the same defect?',
    options: ['Three or more times', 'Fewer than three times', 'I’m not sure']
  },
  {
    prompt: 'How many total days was your vehicle out of service for repairs?',
    options: ['15 days or more', 'Fewer than 15 days', 'I’m not sure']
  }
];

const quiz = document.querySelector('#quiz');
const answers = [];

function showStep(moveFocus = true) {
  const question = questions[answers.length];
  if (question) {
    quiz.innerHTML = `
      <p class="kicker">Question ${answers.length + 1} of ${questions.length}</p>
      <h3 tabindex="-1">${question.prompt}</h3>
      <div class="quiz-options">
        ${question.options.map((option, index) => `<button type="button" data-answer="${index}">${option}</button>`).join('')}
      </div>`;
  } else {
    const reportedInTime = answers[0] === 0;
    const repairMilestone = answers[1] === 0 || answers[2] === 0;
    const meetsInitialMilestones = reportedInTime && repairMilestone;
    quiz.innerHTML = `
      <p class="kicker">Your result</p>
      <h3 tabindex="-1">${meetsInitialMilestones ? 'Your repair history meets some initial milestones.' : 'Your repair history needs a closer look.'}</h3>
      <p>${meetsInitialMilestones
        ? 'Your answers point to a timely report and a repair milestone. Written notice, the nature of the defect, and other requirements still affect eligibility.'
        : 'Your answers leave one or more initial milestones unmet or unclear. Review your repair orders and report dates before discussing your options.'}</p>
      <a class="button" href="tel:+15614448370">Call for a Case Review</a>
      <button class="restart" type="button" data-restart>Start over</button>`;
  }
  if (moveFocus) quiz.querySelector('h3').focus();
}

quiz.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.hasAttribute('data-restart')) {
    answers.length = 0;
  } else {
    answers.push(Number(button.dataset.answer));
  }
  showStep();
});

showStep(false);
