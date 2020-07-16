import React, {useState, useEffect} from 'react';
import Clock from '../molecules/Clock';

const sleep = (n) => new Promise(resolve => setTimeout(resolve, n));

const langLocation = window.navigator.language;

function App() {
    const [time, setTime] = useState((new Date()).toLocaleString(langLocation));
    useEffect(() => {
        (async () => {
            while (true) {
                await sleep(100);
                setTime((new Date()).toLocaleString("ja"));
            }
        })();
    });
    return <Clock time={time} />;
}

export default App;
