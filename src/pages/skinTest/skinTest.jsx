import React, { useState } from 'react';
import Steps from 'rc-steps';
import '../../../node_modules/rc-steps/assets/index.css';
import { QUESTIONS, BUTTONS } from '../../constants/skinTest';

export const Test = () => {
  const [curentStep, setCount] = useState(0);
  const [curentButton, setButton] = useState(0);

  const results = () => {
    setButton(1);
  };
  const nextStep = () => {
    if (curentStep === (QUESTIONS.length - 1)) {
      results();
    } else {
      setCount(curentStep + 1);
    }
  };
  const previousStep = () => {
    if (curentStep === 0) {
      setCount(3);
    } else {
      setCount(curentStep - 1);
    }
  };
  const { question, answers } = QUESTIONS.find((curQuestion) => curQuestion.step === curentStep);

  return (
    <div className="test-container">
      <Steps current={curentStep} className="stepper">
        {QUESTIONS.map((item) => (
          <Steps.Step key={item.key} title={item.steptitle} className="step" />
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
          <button className="test-button" type="button" onClick={nextStep}>{BUTTONS[curentButton]}</button>
        </div>
      </div>
    </div>
  );
};
