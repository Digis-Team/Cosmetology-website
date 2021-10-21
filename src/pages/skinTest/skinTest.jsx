import React, { setState, useState } from 'react';
import Steps from 'rc-steps';
import '../../../node_modules/rc-steps/assets/index.css';
import { QUESTIONS, BUTTON } from '../../constants/skintest';

export const Test = () => {
  const [curentStep, setCount] = useState(0);
  const [curentButton, change] = useState(0);

  const results = () => {
    change(1);
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
  const curentQuestion = QUESTIONS.find((curQuestion) => curQuestion.step === curentStep);

  return (
    <div className="test-container">
      <Steps current={curentStep} className="stepper">
        {QUESTIONS.map((item) => (
          <Steps.Step key={item.key} title={item.steptitle} className="step" />
        ))}
      </Steps>
      <div className="test-question-parent">
        <div className="test-question">{curentQuestion.question}</div>
        <div className="test-answers">
          {curentQuestion.answers.map((item) => (
            <div className="test-answer">
              <input type="checkbox" />
              {item}
            </div>
          ))}
        </div>
        <div className="test-buttons">
          <button className="test-button" type="button" onClick={previousStep}>Previous step</button>
          <button className="test-button" type="button" onClick={nextStep}>{BUTTON[curentButton]}</button>
        </div>
      </div>
    </div>
  );
};
