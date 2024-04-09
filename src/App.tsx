import './App.css'
import BoardC from "./components/BoardC.tsx";
import {useEffect, useState} from "react";
import {Board} from "./models/Board.ts";


function App() {
    const [board, setBoard] = useState(new Board())

    useEffect(() => {
        restart()
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures()
        setBoard(newBoard)
    }

    return (
        <>
            <div className='app'>
                <BoardC board={board} setBoard={setBoard}/>
            </div>
        </>
    )
}

export default App
