import React from 'react'
import useQuizStore from '../contexts/zustStore'
import BoardBox from '../components/BoardBox';
import { decode } from 'html-entities';
import { Link } from 'react-router-dom';

import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
} from '@mui/material';
import { DeleteIcon, Check, Close } from '@mui/icons-material';


import ZenLogo from "../images/logo.png"

import {

} from '@mui/material';
export default function Result() {

    const resultAnswers = useQuizStore((state) => state.yourAnswer);
    const quizzes = useQuizStore((state) => state.quizzes);
    const score = useQuizStore((state) => state.score);
    const questionCount = useQuizStore((state) => state.questionCount);

    console.log(resultAnswers)

    return (
        <BoardBox theStyle={{ height: "550px" }}>
            <Box component="div" sx={{ position: "relative", padding: "10px", borderBottom: "2px solid #cece" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                        component="img"
                        sx={{
                            height: 57,
                            width: 50,
                            maxHeight: { xs: 23, md: 167 },
                            maxWidth: { xs: 30, md: 150 },
                            marginRight: ".75rem",
                            position: "absolute",
                            left: 0
                        }}
                        alt="The house from the offer."
                        src={ZenLogo}
                    />
                </Box>
                <Typography align='center' sx={{ fontWeight: "800", fontSize: "1rem" }}> Final Results </Typography>
            </Box>

            <Box component="div" paddingY={3}>
                <Typography align="center" sx={{ fontWeight: "800", fontSize: "2rem" }}> {score}/{questionCount} </Typography>
                <Typography align="center" sx={{ fontWeight: "600", fontSize: "1rem" }}> Your Score </Typography>
            </Box>

            <List
                sx={{
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                }}
            >
                {quizzes?.map(({ question, correct_answer }, idx) =>
                    <ListItem
                        key={idx}
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                {correct_answer === resultAnswers[idx] ? <Check /> : <Close />}
                            </IconButton>
                        }
                    >
                        <ListItemText
                            primary={decode(question)}
                            secondary={`The correct answer is ${correct_answer}. You Answered ${resultAnswers[idx]}`}
                        />
                    </ListItem>
                )}
            </List>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "14px" }}>
                <Typography align='center' alignItems="center" sx={{ fontSize: "1.5rem", fontWeight: "600" }}>
                    <Link to="/quiz" style={{ textDecoration: "none", }}>
                        Play Again
                    </Link>
                </Typography>
            </Box>
        </BoardBox >
    )
}
