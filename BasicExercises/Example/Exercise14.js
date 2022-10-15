const Person = {
    ho: 'Phan',
    ten: 'Hai',
    ghepHoTen: function() {
        console.log('Họ và tên', this.ho + " " + this.ten);
    }
}
Person.ghepHoTen();



function longerSummary(genre, year) {
    console.log(
        `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
    )
}

longerSummary.call(book, 'dystopian', 1932); //"Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932."
longerSummary.apply(book, 'dystopian', 1932); //Uncaught TypeError: CreateListFromArrayLike called on non-object at <anonymous>:1:15


const braveNewWorldSummary = summary.bind(book)

braveNewWorldSummary() //"Brave New World was written by Aldous Huxley"