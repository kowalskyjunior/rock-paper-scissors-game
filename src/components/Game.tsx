import './Game.css'
import './Modal.css'
import Header from './Header'
import paperIcon from '../assets/icon-paper.svg'
import scissorsIcon from '../assets/icon-scissors.svg'
import Rules from '../assets/image-rules.svg'
import Close from '../assets/icon-close.svg'
import rockIcon from '../assets/icon-rock.svg'
import { useState, useEffect } from 'react'

const Game = () => {

    const Choices: string[] = ['paperIcon', 'scissorsIcon', 'rockIcon']

    const [userChoice, setUserChoice] = useState('')
    const [computerChoice, setComputerChoice] = useState('')
    const [result, setResult] = useState('');
    const [resultModal, setResultModal] = useState(false)
    const [score, setScore] = useState<number>(0)

    const handleCloseResult = () => {
        setResultModal(false)
    }

    const handlePaper = () => {
        setUserChoice('paperIcon')
        const randomIndex = Math.floor(Math.random() * Choices.length)
        const newComputerChoice = Choices[randomIndex]
        setComputerChoice(newComputerChoice)

            if (userChoice == 'paperIcon' && newComputerChoice == 'scissorsIcon') {
                setResult('YOU LOSE')
                setResultModal(true)
            }
            if (
                userChoice == 'paperIcon' && newComputerChoice == 'rockIcon') {
                setScore(score + 1)
                setResult('YOU WIN')
                setResultModal(true)
            }
            if (userChoice == 'paperIcon' && newComputerChoice == 'paperIcon') {
                setResult('DRAW')
                setResultModal(true)
            }   
    }

    useEffect(() => {
            const randomIndex = Math.floor(Math.random() * Choices.length);
            const newComputerChoice = Choices[randomIndex];
            setComputerChoice(newComputerChoice);

            if (userChoice === 'paperIcon' && newComputerChoice === 'scissorsIcon') {
                setResult('YOU LOSE');
                setResultModal(true);
            } if (userChoice === 'paperIcon' && newComputerChoice === 'rockIcon') {
                setScore(score + 1);
                setResult('YOU WIN');
                setResultModal(true);
            } if (userChoice === 'paperIcon' && newComputerChoice === 'paperIcon') {
                setResult('DRAW');
                setResultModal(true);
            }
    }, [userChoice]);

    const handleRock = () => {
        setUserChoice('rockIcon')
        const randomIndex = Math.floor(Math.random() * Choices.length)
        const newComputerChoice = Choices[randomIndex]
        setComputerChoice(newComputerChoice)

        if (userChoice == 'rockIcon' && newComputerChoice == 'scissorsIcon') {
            setResult('YOU WIN')
            setScore(score + 1)
            setResultModal(true)
        }
        if (
            userChoice == 'rockIcon' && newComputerChoice == 'rockIcon') {
            setResult('DRAW')
            setResultModal(true)
        }
        if (userChoice == 'rockIcon' && newComputerChoice == 'paperIcon') {
            setResult('YOU LOSE')
            setResultModal(true)
        }
    }
    useEffect(() => {
            const randomIndex = Math.floor(Math.random() * Choices.length);
            const newComputerChoice = Choices[randomIndex];
            setComputerChoice(newComputerChoice);

            if (userChoice === 'rockIcon' && newComputerChoice === 'scissorsIcon') {
                setScore(score + 1);
                setResult('YOU WIN');
                setResultModal(true);
            } if (userChoice === 'rockIcon' && newComputerChoice === 'rockIcon') {
                setResult('DRAW');
                setResultModal(true);
            } if (userChoice === 'rockIcon' && newComputerChoice === 'paperIcon') {
                setResult('YOU LOSE');
                setResultModal(true);
            }
    }, [userChoice]);

    const handleScissors = () => {
        setUserChoice('scissorsIcon')
        const randomIndex = Math.floor(Math.random() * Choices.length)
        const newComputerChoice = Choices[randomIndex]
        setComputerChoice(newComputerChoice)

        if (userChoice == 'scissorsIcon' && newComputerChoice == 'scissorsIcon') {
            setResult('DRAW')
            setResultModal(true)
        }
        if (
            userChoice == 'scissorsIcon' && newComputerChoice == 'rockIcon') {
            setResult('YOU LOSE')
            setResultModal(true)
        }
        if (userChoice == 'scissorsIcon' && newComputerChoice == 'paperIcon') {
            setScore(score + 1)
            setResult('YOU WIN')
            setResultModal(true)
        }
    }

    useEffect(() => {
            const randomIndex = Math.floor(Math.random() * Choices.length);
            const newComputerChoice = Choices[randomIndex];
            setComputerChoice(newComputerChoice);

            if (userChoice === 'scissorsIcon' && newComputerChoice === 'scissorsIcon') {
                setResult('DRAW');
                setResultModal(true);
            } if (userChoice === 'scissorsIcon' && newComputerChoice === 'rockIcon') {
                setResult('YOU LOSE');
                setResultModal(true);
            } if (userChoice === 'scissorsIcon' && newComputerChoice === 'paperIcon') {
                setScore(score + 1);
                setResult('YOU WIN');
                setResultModal(true);
            
        }
    }, [userChoice]);

    const [modalOpen, setModalOpen] = useState(false)

    const handleOpenModal = () => {
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
    }

    return (

        <div>
            <Header score={score} />
            <div className="content-game">
                {modalOpen && (
                    <div className="">
                        <div onClick={handleCloseModal} className="overlay">
                        </div>
                        <div className='modal'>
                            <div className="header-modal">
                                <div className="modal-title">
                                    RULES
                                </div>
                                <div className="modal-close">
                                    <img src={Close} onClick={handleCloseModal} />
                                </div>
                            </div>
                            <div className="modal-img">
                                <img src={Rules} />
                            </div>
                        </div>
                    </div>
                )}
                <div className="options-wrapper">
                    <div className="options-single">
                        <div className="paper paper-icon"
                            onClick={handlePaper}>
                            <img src={paperIcon} alt="" />
                        </div>
                    </div>
                    <div className="options-single">
                        <div className="rock rock-icon" onClick={handleRock}>
                            <img src={rockIcon} alt="" />
                        </div>
                    </div>
                    <div className="options-single">
                        <div className="scissors scissors-icon" onClick={handleScissors}>
                            <img src={scissorsIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-rules">
                <button onClick={handleOpenModal}>RULES</button>
            </div>
            {resultModal && result && (
                <div className="result">
                    <div className="overlay-result">
                        <div className="result-content">

                            <div className="result-wrapper">
                                <div className="result-single">
                                    <h2 className='user-text'>You Picked</h2>
                                    <div className={userChoice}>
                                        {userChoice === 'paperIcon' && <img src={paperIcon} alt="" />}
                                        {userChoice === 'scissorsIcon' && <img src={scissorsIcon} alt="" />}
                                        {userChoice === 'rockIcon' && <img src={rockIcon} alt="" />}
                                    </div>
                                </div>
                                <div className="result-single">
                                    <div className='result-data'>{result}</div>
                                    <button className='result-btn' onClick={handleCloseResult}>Play Again</button>
                                </div>
                                <div className="result-single">
                                    <h2 className='home-text'>The House Picked</h2>
                                    <div className={computerChoice}>
                                        {computerChoice === 'paperIcon' && <img src={paperIcon} alt="" />}
                                        {computerChoice === 'scissorsIcon' && <img src={scissorsIcon} alt="" />}
                                        {computerChoice === 'rockIcon' && <img src={rockIcon} alt="" />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Game