import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Steps from 'rc-steps';
import { api } from '../../../api';
import { BUTTONS } from '../../../constants';

export const Questions = ({ setPoints }) => {
  const [currentStep, setCount] = useState(0);
  const [currentResult, setResult] = useState([]);
  const [currentObj, setObj] = useState({});
  const [questions, setQuestions] = useState([]);

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

  // useEffect(() => {
  //   api.getQuestions(`/?step=${currentStep}`)
  //     .then((result) => {
  //       setQuestion(result[0].question);
  //       setAnswers(result[0].answers);
  //     });
  // }, [currentStep]);

  // const { question, answers } =
  const currentQuestion = questions.find((curQuestion) => curQuestion.step === currentStep);
  // const { answers } = questions.find((curQuestion) => curQuestion.step === currentStep);
  const buttonTitle = currentStep === questions.length - 1 ? BUTTONS[1] : BUTTONS[0];

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
        {questions.map((item) => (
          <Steps.Step key={item.id} className="step" />
        ))}
      </Steps>
      {currentQuestion
        ? (
          <div className="test-question-parent">
            <div className="test-question">{currentQuestion.question}</div>
            <div className="test-answers">
              {currentQuestion.answers.map((item) => (
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
        )
        : <div>Loading...</div>}
    </div>
  );
};
Questions.propTypes = {
  setPoints: propTypes.func.isRequired,
};
