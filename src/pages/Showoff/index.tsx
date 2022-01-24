import { useState, useEffect, useCallback } from 'react';
import styles from '@pages/Showoff/Showoff.module.css';

const Showoff = () => {
    const [color, setColor] = useState(false);
    // const [modal, setModal] = useState(false);
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
            setTimer((prevTimer) => {
                if (prevTimer === 15) {
                    confirm('Are you asleep?');
                }
                return prevTimer + 1;
            });
        }, 1000);

        return () => {
            clearInterval(loginTimer);
        };
    }, []);

    return (
        <div className={styles['main']}>
            <h1 style={{ color: color ? 'white' : 'black' }}>Heading</h1>
            <p className={styles['text']}>
                You are on this page for {timer} seconds
            </p>
        </div>
    );
};

export default Showoff;
