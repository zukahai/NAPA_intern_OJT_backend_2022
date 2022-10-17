setTimeout(() => {
    console.log('hello event loop');
}, 0);

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

sleep(5000)