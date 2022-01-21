import { useState, useEffect } from 'react';

const Showoff = () => {
    const [color, setColor] = useState(false);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const asyncMessage = setTimeout(() => {
            alert("I'm async");

            const changingColor = setInterval(() => {
                setColor((prevState) => {
                    return !prevState;
                });
            }, 1000);

            return () => {
                clearInterval(changingColor);
            };
        }, 5000);

        return () => {
            clearTimeout(asyncMessage);
        };
    }, []);

    useEffect(() => {
        const loginTimer = setInterval(() => {
            // if (timer === 10) {
            //   console.log('timer stgo do 10 ')
            // }
            setTimer((prevTimer) => {
                if (prevTimer === 10) confirm('Are you asleep?');
                return prevTimer + 1;
            });
        }, 1000);

        return () => {
            clearInterval(loginTimer);
        };
    }, []);

    return (
        <div>
            <h1 style={{ color: color ? 'white' : 'black' }}>Heading</h1>
            <p>You are on this page for {timer} seconds</p>
        </div>
    );
};

export default Showoff;
