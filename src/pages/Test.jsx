import React from "react";

const Test = () => {
  // logic

  // view
  return (
    <section className="h-full py-12 flex flex-col justify-between">
      {/* START: Progress 컴포넌트 */}
      <div className="w-full h-6 bg-white border-2 rounded-xl border-mbti-gray relative">
        <div
          className="absolute w-11 top-1/2 transition-all transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: "10%" }}
        >
          <img
            src="./images/progress.png"
            className="block w-full h-auto"
            alt="status 이미지"
          />
        </div>
        <div className="w-full h-full rounded-xl overflow-hidden">
          <span
            className="block h-full bg-mbti-pink transition-all"
            style={{ width: `calc(10% + 5px)` }}
          ></span>{" "}
          {/* status */}
        </div>
      </div>
      {/* END: Progress 컴포넌트 */}
      {/* START: Question 컴포넌트 */}
      <div className="text-center">
        <h3 className="text-4xl font-cafe24surround">Qusetion 1</h3>
        <span className="block pt-10 text-2xl font-cafe24surround">
          선재가 이클립스 공연에 당신을 초대한다면?
        </span>
      </div>
      {/* END: Question 컴포넌트 */}
      {/* START: Answer 컴포넌트 */}
      <div>
        <div className="py-2">
          <button
            type="button"
            className="block w-full p-4 rounded-xl bg-white border-2 border-black"
          >
            꺄아! 당연히 가서 떼창도 하고 다른 팬들이랑 같이 즐겨야지!
          </button>
        </div>
        <div className="py-2">
          <button
            type="button"
            className="block w-full p-4 rounded-xl bg-white border-2 border-black"
          >
            선재가 날 초대해 주다니..오로지 선재에게만 집중하고 싶어
          </button>
        </div>
      </div>
      {/* END: Answer 컴포넌트 */}
    </section>
  );
};

export default Test;
