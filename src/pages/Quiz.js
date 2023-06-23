import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, CircularProgress, Image } from '@mui/material';
import { decode } from 'html-entities';
import useAxios from '../utils/useAxios';
import { useNavigate } from 'react-router-dom';

import BoardBox from '../components/BoardBox';
import { QUIZ_URL } from '../constants/quizURL';
import useQuizStore from '../contexts/zustStore';
import ZenLogo from "../images/logo.png"

const getRandomQuestion = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}

const chooseBool = [
    {
        options: "True"
    },
    {
        options: "False"
    }]

export default function Quiz() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const { response, isLoading, error } = useAxios({ url: QUIZ_URL })

    const navigate = useNavigate();
    const quizzes = response?.results;
    const quizItem = quizzes && quizzes[getRandomQuestion(30)] // get random question


    const setQuiz = useQuizStore((state) => state.setQuizArr)
    const setAnswers = useQuizStore((state) => state.setYourAnswerArr)
    const quizLength = useQuizStore((state) => state.questionCount)
    const setScore = useQuizStore((state) => state.setScore)
    const score = useQuizStore((state) => state.score)


    const quizArr = useQuizStore((state) => state.quizzes)
    const answersArr = useQuizStore((state) => state.yourAnswer)


    useEffect(() => {
    }, [response, questionIndex])

    const clickAnswerHandler = (e) => {
        if (e.target.textContent === quizItem?.correct_answer) {
            setScore()
        }

        if (questionIndex + 1 < quizLength) {
            setQuestionIndex(questionIndex + 1)
            setQuiz(quizItem)
            setAnswers(e.target.textContent)
        } else {
            navigate("/result")
        }
    }

    if (isLoading) return
    < Box >
        <CircularProgress />
    </Box >

    return (
        <BoardBox>

            <Box component="div" sx={{ display: "flex", justifyContent: "space-between", padding: "10px", borderBottom: "2px solid #cece" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                        component="img"
                        sx={{
                            height: 57,
                            width: 50,
                            maxHeight: { xs: 23, md: 167 },
                            maxWidth: { xs: 30, md: 150 },
                            marginRight: ".75rem"
                        }}
                        alt="The house from the offer."
                        src={ZenLogo}
                    />
                    <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}> Category: {quizItem?.category}</Typography>
                </Box>
                <Typography> {questionIndex + 1} of {quizLength} </Typography>
            </Box>
            <Box className="board-body" mt={2}>
                <Typography>{decode(quizItem?.question)}</Typography>
            </Box>
            <Box component="div" className="board-control" mt={2} sx={{ display: "flex", justifyContent: "justify-evenly" }}>
                {chooseBool.map((choices, idx) =>
                    <Button
                        variant='contained'
                        color={choices.options === "True" ? "success" : "error"}
                        onClick={clickAnswerHandler}
                        key={idx}
                        sx={{ marginRight: "10px" }}
                    >
                        {choices.options}
                    </Button>
                )}
            </Box>
        </BoardBox>

    )
}
