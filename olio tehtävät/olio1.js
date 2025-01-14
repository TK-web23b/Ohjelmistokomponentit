const opiskelija = {
    nimi: "Matti Meikäläinen",
    ikä: 22,
    kurssi: "python",
    tulostatiedot:function () {
        console.log(`Opiskelija: ${this.nimi} ikä: ${this.ikä}, kurssi:${this.kurssi}`)
    }
};

opiskelija.tulostatiedot();

