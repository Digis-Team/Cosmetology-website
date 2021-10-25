import React, { useState } from 'react';
import Steps from 'rc-steps';
import '../../../node_modules/rc-steps/assets/index.css';
import { QUESTIONS, BUTTONS } from '../../constants/skinTest';

export const Test = () => {
  const [currentStep, setCount] = useState(0);
  const currentResult = [];

  const nextStep = () => {
    if (currentStep !== (QUESTIONS.length - 1)) {
      setCount(currentStep + 1);
    }
  };
  const previousStep = () => {
    if (currentStep === 0) {
      setCount(QUESTIONS.length - 1);
    } else {
      setCount(currentStep - 1);
    }
  };
  const { question, answers } = QUESTIONS.find((curQuestion) => curQuestion.step === currentStep);
  const buttonTitle = currentStep === QUESTIONS.length - 1 ? BUTTONS[1] : BUTTONS[0];

  const onChange = (event) => {
    // answers[event.target.value].checked = event.target.checked;
    // console.log(answers[event.target.value].checked);
    // answers.forEach(() => {
    //   if (answers.checked) {
    //     console.log('checked');
    //   } else {
    //     console.log('not checked');
    //   }
    // });
    currentResult.push(event.target.value);
    // console.log(event.target.checked);
    console.log(currentResult);
  };

  return (
    <div className="test-container">
      <Steps current={currentStep} className="stepper">
        {QUESTIONS.map((item) => (
          <Steps.Step key={item.key} className="step" />
        ))}
      </Steps>
      <form className="test-question-parent">
        <div className="test-question">{question}</div>
        <div className="test-answers">
          {answers.map((item) => (
            <div className="test-answer">
              <input type="checkbox" value={item.value} onClick={onChange} />
              {item.title}
            </div>
          ))}
        </div>
        <div className="test-buttons">
          <button className="test-button" type="button" onClick={previousStep}>Previous step</button>
          <button className="test-button" type="button" onClick={nextStep}>{buttonTitle}</button>
        </div>
      </form>
    </div>
  );
};
