import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Question({ question, info }) {
  const [showInfo, SetShowInfo] = useState(false);

  const toggleInfo = () => {
    SetShowInfo(!showInfo);
  };

  return (
    <article className="question">
      <header>
        <h5>{question}</h5>
        <button className="question-btn" onClick={toggleInfo}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
}
export default Question;
