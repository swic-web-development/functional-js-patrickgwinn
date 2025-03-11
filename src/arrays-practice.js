const players = [
    { name: 'DoomGuy', frags: 25, deaths: 0 },
    { name: ' Slayer', frags: 25, deaths: 1 },
    { name: 'Marine', frags: 12, deaths: 15 },
    { name: 'Noob', frags: 0, deaths: 25 },
]

const playersWithMoreFragsThanDeaths = players.filter((player) => {
   
   console.log(`We are now looking at this player: ${player.name}`)
    return player.frags > player.deaths
})

console.log(playersWithMoreFragsThanDeaths)

const playersWithMoreDeathsThanFrags = players.filter((player) => player.frags > player.deaths)

const totalFrags = players.reduce((total, player) => total + player.frags, 0)
console.log(totalFrags)

const firstPlayerWithMoreFragsThanDeaths = players.find((player) => player.frags > player.deaths)
console.log(firstPlayerWithMoreFragsThanDeaths)