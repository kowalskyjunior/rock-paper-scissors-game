import './Header.css'

function Header({score}:any) {
  return (
    <div className='header'>
        <header>
            <div className="text-header">
                <h2>ROCK</h2>
                <h2>PAPER</h2>
                <h2>SCISSORS</h2>
            </div>
            <div className="pontuation-header">
                <h2 className='score-text'>SCORE</h2>
                <h2 className='score-number'>{score}</h2>
            </div>
        </header>
    </div>
  )
}

export default Header