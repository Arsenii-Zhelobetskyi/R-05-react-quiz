function Options({ question, answer, dispatch }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => {
        return (
          <button
            key={option}
            className={`btn btn-option ${
              hasAnswered ? (index === answer ? "answer" : "") : ""
            } ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={hasAnswered}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
