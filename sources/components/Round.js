import 'css!./Round.css';

import React from 'react';

export class Round extends React.PureComponent {

    static propTypes = {

        movie: React.PropTypes.any.isRequired,
        actor: React.PropTypes.any.isRequired,

        onSelect: React.PropTypes.func

    };

    static defaultProps = {

        onSelect: () => {}

    };

    render() {

        return <div className={`Round`}>

            <div className={`Round-movie`}>
                <div className={`Round-movie-pad`}>
                    <div className={`Round-movie-inner`}>
                        {/*this.props.movie*/}
                    </div>
                </div>
            </div>

            <div className={`Round-controls u-pdl--m u-pdr--m`}>
                <div className={`u-mgb--m`}>
                    Has {this.props.actor.name} played in {this.props.movie.title}?
                </div>
                <div>
                    <button className={`Btn Btn--validate`} onClick={() => this.props.onSelect(true)}>Yes</button>
                    <button className={`Btn Btn--error`} onClick={() => this.props.onSelect(false)}>No</button>
                </div>
            </div>

            <div className={`Round-actor`}>
                <div className={`Round-movie-pad`}>
                    <div className={`Round-movie-inner`}>
                        {/*this.props.actor*/}
                    </div>
                </div>
            </div>

        </div>;

    }

}
