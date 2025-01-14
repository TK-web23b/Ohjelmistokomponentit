const kirjat = [
    { nimi: "Carmilla", kirjailia: "Sheridan Le Fanu", vuosi: 1872 },
    { nimi:"Things we say in the dark", kirjailia: "Kristy Logan", vuosi: 2019},
    { nimi:"Fingersmith", kirjailia: "Sarah Waters", vuosi: 2002},

];

kirjat.forEach(kirja => {
    console.log(`nimi: ${kirja.nimi}, kirjailia: ${kirja.kirjailia}, vuosi: ${kirja.vuosi}`)

});