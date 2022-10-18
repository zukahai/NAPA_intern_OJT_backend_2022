const controller = (req, res) => {
    const array = Array.from((Array(100).keys()))
    array.forEach(item => {
        console.log(item)
    })
    res.status(200).end();
}