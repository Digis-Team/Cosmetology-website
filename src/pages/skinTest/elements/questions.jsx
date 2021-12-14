import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Steps from 'rc-steps';
import { api } from '../../../api';
import { BUTTONS, QUESTIONS } from '../../../constants';

export const Questions = ({ setPoints }) => {
  const [currentStep, setCount] = useState(0);
  const [currentResult, setResult] = useState([]);
  const [currentObj, setObj] = useState({});
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    api.getQuestions('')
      .then((result) => setQuestions(result));
  }, []);

  const nextStep = () => {
    const newArr = [...currentResult, currentObj];
    setResult(newArr);
    setObj({});
    if (currentStep !== (questions.length - 1)) {
      setCount(currentStep + 1);
    } else {
      const res = newArr.reduce((sum, curr) => sum + curr.resValue, 0);
      setPoints(res);
    }
  };

  const previousStep = () => {
    if (currentStep !== 0) {
      setCount(currentStep - 1);
      setResult(currentResult.splice(-1));
    }
    setObj({});
  };

  useEffect(() => {
    api.getQuestions(`/?step=${currentStep}`)
      .then((result) => {
        setQuestion(result[0].question);
        setAnswers(result[0].answers);
      });
  }, [currentStep]);

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
          <Steps.Step key={item.id} className="step" />
        ))}
      </Steps>
      <div className="test-question-parent">
        <div className="test-question">{question}</div>
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
          <button className="test-button" type="button" onClick={nextStep}>{buttonTitle}</button>
        </div>
      </div>
    </div>
  );
};
Questions.propTypes = {
  setPoints: propTypes.func.isRequired,
};
