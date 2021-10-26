import React, { useState } from 'react';
import Steps from 'rc-steps';
import '../../../node_modules/rc-steps/assets/index.css';
import { QUESTIONS, BUTTONS } from '../../constants';

export const SkinTest = () => {
  const [currentStep, setCount] = useState(0);
  const [currentResult, setResult] = useState([]);
  const [currentArr, setArr] = useState([]);

  const nextStep = () => {
    if (currentStep !== (QUESTIONS.length - 1)) {
      setCount(currentStep + 1);
      const newArr = currentResult.concat(currentArr);
      setResult(newArr);
      console.log(currentResult);
    } else {
      const newArr = currentResult.concat(currentArr);
      setResult(newArr);
      console.log(currentResult);
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
    setArr((old) => ({
      ...old,
      resId: event.target.id,
      resValue: parseInt(event.target.value, 10),
    }));
  };
  console.log(currentArr);
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
              <input type="checkbox" id={item.id} value={item.value} onChange={onChange} checked={currentArr.resId === item.id} />
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
