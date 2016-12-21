import 'css!./Game.css';

import React     from 'react';

import { Round } from 'es6!components/Round';
import { Timer } from 'es6!components/Timer';

export class Game extends React.PureComponent {

    static propTypes = {

        onEnd: React.PropTypes.func

    };

    static defaultProps = {

        onEnd: () => {}

    };

    state = {

        wins: 0,
        losses: 0

    };

    componentWillMount() {

        this.setState({ round: this.getNewRound() });

    }

    getNewRound() {

        let movie = { title: `Pirates of the Caribbean` };
        let actor = { name: `Emma Watson` };

        let expectedResult = null;

        let nextRound = result => {

            this.setState(({ wins, losses }) => {

                let round = this.getNewRound();

                if (result === expectedResult) {
                    wins += 1;
                } else {
                    losses += 1;
                }

                return { wins, losses, round };

            });

        };

        return <Round movie={movie} actor={actor} onSelect={nextRound} />;

    }

    getScore() {

        let wins = this.state.wins;
        let losses = this.state.losses;

        let total = wins + losses;
        let ratio = wins / total;

        return { wins, losses, total, ratio };

    }

    render() {

        return <div className={`Game`}>

            <div className={`Game-timer u-pd--m`}>
                <Timer progress={0.5} />
            </div>

            <div className={`Game-round u-pd--m`}>
                {this.state.round}
            </div>

            <div className={`Game-timer u-pd--m`}>
                <Timer progress={0.5} />
            </div>

        </div>;

    }

}
