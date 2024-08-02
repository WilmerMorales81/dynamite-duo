export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],

// Remove this comment and create some villain objects

    villains: [
        {
            id: 1,
            name: "Lavaboy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Sharkgirl",
            power: "Super speed"
        }
    ]
    
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}