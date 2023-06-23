import { create } from "zustand";



const useQuizStore = create((set) => ({
    quizzes: [],
    yourAnswer: [],
    score: 0,
    questionCount: 10,
    setQuizArr: (quiz) => set((state) => ({ quizzes: [...state.quizzes, quiz] })),
    setYourAnswerArr: (ans) => set((state) => ({ yourAnswer:  [...state.yourAnswer, ans] })),
    setScore: () => set((state) => ({score: state.score + 1}))
}))

export default useQuizStore;