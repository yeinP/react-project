import React, { useEffect, useState } from "react";
import Progess from "../components/Progess";
import Question from "../components/Question";
import Answer from "../components/Answer";
import { initialMbtiQuestion } from "../data/initialState";
import { mbtiQuestionList } from "../data/response";


const Test = () => {
  // logic
  
  const [currentStep, setCurrentStep] = useState(1);

  const [mbtiQuestion, setMbtiQuestion] = useState(initialMbtiQuestion);
    //const[변수, 함수]

    //구조분해 할당
    const {step, questionText} = mbtiQuestion
    

  const hanleAnswerClick = () => {
    setCurrentStep(currentStep + 1);

  };

  //1. answer button 클릭 이벤트 잡기

  //2. mbtiQuestion.step 값 변경

  //3.


  //1. 원하는 state 감시
  useEffect(()=>{
    // state 변경 시 실행될 실행문
    const nextQuestion = mbtiQuestionList.find(item =>
      item.step === currentStep
    );
    setMbtiQuestion(nextQuestion);
   }, [currentStep]
  );

  // 2. 진입 시 딱 한번만 실행
  useEffect(()=>{
    //진입 시 실행될 실행문
    },[

    ]
  );

  // 3. 모든 state가 변경될 때 실행
  useEffect(() => {
    //페이지에서 하나의 state라도 변경될 때 실행될 실행문
  }, [])


  /* useEffect(()=>{
    
    }, []);*/



  // view
  return (
    <section className="h-full py-12 flex flex-col justify-between">
      {/* START: Progress 컴포넌트 */}
      <Progess />
      {/* END: Progress 컴포넌트 */}
      {/* START: Question 컴포넌트 */}
      <Question text={questionText} step={step} />
      {/* END: Question 컴포넌트 */}
      {/* START: Answer 컴포넌트 */}
      <Answer onAnswerClick={hanleAnswerClick} />
      {/* END: Answer 컴포넌트 */}
    </section>
  );
};

export default Test;
