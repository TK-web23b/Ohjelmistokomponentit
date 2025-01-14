const opiskelija = {
    nimi: "Matti Meikäläinen",
    ikä: 22,
    kurssi: "python",
    tulostatiedot:function () {
        console.log(`Opiskelija: ${this.nimi} ikä: ${this.ika}, kurssi:${this.kurssi}`)
    }
};

opiskelija.tulostatiedot();

