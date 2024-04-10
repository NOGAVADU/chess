import './App.css'
import BoardC from "./components/BoardC.tsx";
import {useEffect, useState} from "react";
import {Board} from "./models/Board.ts";
import {Player} from "./models/Player.ts";
import {Colors} from "./models/Colors.ts";
import LostFigures from "./components/LostFigures.tsx";


function App() {
    const [board, setBoard] = useState(new Board())
    const [whitePlayer, setWhitePlayеr] = useState(new Player(Colors.WHITE))
    const [blackPlayer, setBlackPlayеr] = useState(new Player(Colors.BLACK))
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

    useEffect(() => {
        restart()
        setCurrentPlayer(whitePlayer)
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures()
        setBoard(newBoard)
    }

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }

    return (
        <>
            <div className='app'>
                <BoardC board={board}
                        setBoard={setBoard}
                        currentPlayer={currentPlayer}
                        swapPlayer={swapPlayer}
                />
                <div className='lost__container'>
                    <LostFigures title='Черные фигуры:' figures={board.lostBlackFigures}/>
                    <LostFigures title='Белые фигуры:' figures={board.lostWhiteFigures}/>
                </div>
            </div>
        </>
    )
}

export default App
