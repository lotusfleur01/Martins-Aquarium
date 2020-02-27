/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Bart",
        species:"Orange Clownfish",
        location:"Caribbean",
        length:"3",
        food: ["Algae, crustaceans"],
        image:"https://petco.scene7.com/is/image/PETCO/151203-center-1?$ProductDetail-large$"
    },

    {
        name: "Betty",
        species:"Longtooth Barracuda",
        location:"Cumberland River",
        length:"2 ft",
        food: ["Squid"],
        image:"https://vignette.wikia.nocookie.net/endlessocean/images/c/c2/Great_barracuda_swi.jpg/revision/latest/top-crop/width/150/height/150?cb=20190305102946"
    },

    {
        name: "Nemo",
        species:"Clownfish",
        location:"Great Barrier Reef",
        length:"2 in",
        food: ["Plankton"],
        image:"https://cdn.mos.cms.futurecdn.net/4UdEs7tTKwLJbxZPUYR3hF-320-80.jpg"
    },

    {
        name: "Dory",
        species:"Blue Tang",
        location:"New Zealand Sea",
        length:"4 in",
        food: ["Clownfish"],
        image:"https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/MA_00987051_spxk9a.jpg"
    },
]

export const useFish = () => {
    return fishCollection.slice()
}