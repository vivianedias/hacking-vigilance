import * as React from "react";

const QuizContext = React.createContext();

const initialState = {
  answers: [],
  score: 0,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "setAnswer": {
      const newAnswer = action.payload;
      const removeOldAnswer = state.answers.filter(
        (a) => a.questionId !== newAnswer.questionId
      );
      return {
        ...state,
        answers: [...removeOldAnswer, newAnswer],
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function QuizProvider({ children, resources }) {
  const [state, dispatch] = React.useReducer(quizReducer, initialState);
  const value = { state, dispatch };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

function useQuiz() {
  const context = React.useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}

export { QuizProvider, useQuiz };
