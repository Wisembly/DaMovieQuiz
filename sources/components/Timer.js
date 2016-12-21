import React from 'react';

export class Timer extends React.Component {

    static propTypes = {

        progress: React.PropTypes.number

    };

    static defaultProps = {

        progress: 1

    };

    render() {

        return <div className={`Meter Meter--l`}>

            <div className={`Meter-bar Meter-bar--l`} style={{ width: `${this.props.progress * 100}%` }} />

        </div>;

    }

}
