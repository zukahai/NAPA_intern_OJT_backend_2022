const myPromise = new Promise(function(resolve, reject) {
    // code here
    if (codeIsFine) {
        resolve('fine')
    } else {
        reject('error')
    }
})

myPromise
    .then(function whenOk(response) {
        console.log(response)
        return response
    })
    .catch(function notOk(err) {
        console.error(err)
    })

funA()
    .then(function(tien) {
        return funB(tien)
            .then(function(tien_con_lai) {
                return funC(tien_con_lai)
                    .then(function() {
                        return hue_oi();
                    })
            })
    })

funA()
    .then(funB)
    .then(funC)
    .catch(console.error.bind(console));