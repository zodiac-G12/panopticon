import React from 'react';
import ClockView from '../atoms/ClockView';
import ClockPretty from '../atoms/ClockPretty';

const Clock = (props) => {
    let tArr = props.time.split(" ")[1].split("");
    if (tArr.length === 7) tArr = ["0"].concat(tArr);
    return (
        <ClockView>
            {tArr.map((v,i) => {
                return <ClockPretty key={i}>{v}</ClockPretty>;
            })}
        </ClockView>
    );
}

export default Clock;
