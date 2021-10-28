import React, { useState } from 'react';
import Steps from 'rc-steps';
import { QUESTIONS, BUTTONS } from '../../constants';

export const SkinTest = () => {
  const [currentStep, setCount] = useState(0);
  const [currentResult, setResult] = useState([]);
  const [currentObj, setObj] = useState({});

  const nextStep = () => {
    if (currentStep !== (QUESTIONS.length - 1)) {
      setCount(currentStep + 1);
    }
    const newArr = [...currentResult, currentObj];
    setResult(newArr);
    setObj({});
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
    setObj((old) => ({
      ...old,
      resId: event.target.id,
      resValue: Number(event.target.value),
    }));
  };
  return (
    <div className="test-container">
      <Steps current={currentStep} className="stepper">
        {QUESTIONS.map((item) => (
          <Steps.Step key={item.key} className="step" />
        ))}
      </Steps>
      <div className="test-question-parent">
        <div key={QUESTIONS.key} className="test-question">{question}</div>
        <div className="test-answers">
          {answers.map((item) => (
            <div key={item.id} className="test-answer">
              <input type="checkbox" className="checkbox" id={item.id} value={item.value} onChange={onChange} checked={currentObj.resId === item.id} />
              {item.title}
            </div>
          ))}
        </div>
        <div className="test-buttons">
          <button className="test-button" type="button" onClick={previousStep}>Previous step</button>
          <button className="test-button" type="submit" onClick={nextStep}>{buttonTitle}</button>
        </div>
      </div>
    </div>
  );
};
