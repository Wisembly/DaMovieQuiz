import 'css!./Application.css';

import React    from 'react';

import { Game } from 'es6!components/Game';

export class Application extends React.PureComponent {

    state = {

        game: null

    };

    startGame() {

        this.setState({ game: <Game duration={30000} onEnd={score => this.reportGame(score)} /> });

    }

    reportGame(score) {

        if (score.total > 0) {
            alert(`Game over! You scored ${score.wins} points over ${score.total} rounds! Winrate: ${Math.floor(score.ratio * 100)}%`);
        } else {
            alert(`Try clicking on a button, maybe.`);
        }

        this.setState({ game: null });

    }

    render() {

        return <div className={`Application`}>

            {this.state.game || <div className={`Application-controls`}>

                <button className={`Btn Btn--validate`} onClick={() => this.startGame()}>
                    Start the game!
                </button>

            </div>}

        </div>;

    }

}
