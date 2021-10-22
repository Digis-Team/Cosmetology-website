import React, { useState } from 'react';
import Steps from 'rc-steps';
import '../../../node_modules/rc-steps/assets/index.css';
import { QUESTIONS, BUTTONS } from '../../constants/skinTest';

export const Test = () => {
  const [currentStep, setCount] = useState(0);

  const nextStep = () => {
    if (currentStep !== (QUESTIONS.length - 1)) {
      setCount(currentStep + 1);
    }
  };
  const previousStep = () => {
    if (currentStep === 0) {
      setCount(3);
    } else {
      setCount(currentStep - 1);
    }
  };
  const { question, answers } = QUESTIONS.find((curQuestion) => curQuestion.step === currentStep);
  const buttonTitle = currentStep === (QUESTIONS.length - 1) ? BUTTONS[1] : BUTTONS[0];

  return (
    <div className="test-container">
      <Steps current={currentStep} className="stepper">
        {QUESTIONS.map((item) => (
          <Steps.Step key={item.key} title={item.stepTitle} className="step" />
        ))}
      </Steps>
      <div className="test-question-parent">
        <div className="test-question">{question}</div>
        <div className="test-answers">
          {answers.map((item) => (
            <div className="test-answer">
              <input type="checkbox" />
              {item}
            </div>
          ))}
        </div>
        <div className="test-buttons">
          <button className="test-button" type="button" onClick={previousStep}>Previous step</button>
          <button className="test-button" type="button" onClick={nextStep}>{buttonTitle}</button>
        </div>
      </div>
    </div>
  );
};
