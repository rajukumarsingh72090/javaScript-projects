const band = {
    bName: "zeppelin",
    bSong: "starway to heaven",
    year: "1968",
    anotherSong: "kashmir"
}
// const bandName = band.bName
// const bandsong = band.bSong
// console.log(bandName, bandsong)

// shortcut method

const {bName, bSong, ...baki} = band
console.log(bName, bSong, baki)
