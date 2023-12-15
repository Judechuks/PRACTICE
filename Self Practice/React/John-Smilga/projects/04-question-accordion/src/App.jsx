import React, { useState } from "react";
import data from "./components/questions";
import Question from "./components/Question";

export default function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h1>Questions and answers section</h1>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}
