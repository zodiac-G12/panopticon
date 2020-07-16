import React from 'react';
import ClockView from '../atoms/ClockView';
import ClockPretty from '../atoms/ClockPretty';

const Clock = (props) => {
    const tArr = props.time.split(" ")[1].split("");
    return (
        <ClockView>
            {tArr.map((v,i) => {
                return <ClockPretty key={i}>{v}</ClockPretty>;
            })}
        </ClockView>
    );
}

export default Clock;
