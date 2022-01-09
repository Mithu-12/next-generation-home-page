import React, { useEffect, useRef, useState } from 'react';
import './Offer.css'

const Offer = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinute, setTimerMinute] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')
    let interval = useRef();
    const setTimer = () => {
        const countdownDate = new Date('oct 5, 2022 11:50:00').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
             let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (distance < 0) {
                clearInterval(interval)
            }
            else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinute(minutes);
                setTimerSeconds(seconds)
            }
        }, 1000);
    }
    useEffect(() => {
        setTimer()
        return() => {
            clearInterval(interval)
        }
    },[])
    
    return (
        <div className='time text-white'>
                <section className='timer-counter'>
                    <section className='timer'>
                    <div>
                    <h2 className='text-warning font-bold'>NEXT WINTTER OFFER</h2>
                    <h1 className=''>Available Now</h1>                  
                                        
                    </div>
                    <div className='timeSet'>
                            <section>
                                <p>{timerDays}</p>
                                <p><small>Days</small></p>
                            </section>
                                <span>:</span>
                                <section>
                                <p>{timerHours}</p>
                                <p><small>Hours</small></p>
                            </section>
                                <span>:</span>
                                <section>
                                <p>{timerMinute}</p>
                                <p><small>Minute</small></p>
                            </section>
                                <span>:</span>
                                <section>
                                <p>{timerSeconds}</p>
                                <p><small>Seconds</small></p>
                            </section>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Offer;