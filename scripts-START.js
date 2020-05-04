let countdown = 

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    //Time left
    countdown = setInterval(() => {
        const timeLeft = Math.round((then - Date.now())) / 1000;
    //Stop the countdown at 0.
    if(timeLeft < 0)
        clearInterval(countdown)
    }, 1000)
}

