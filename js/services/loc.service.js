export const locService = {
    getLocs
}


const locs = [
    { name: 'Greatplace', lat: 32.047104, lng: 34.832384 }, 
    { name: 'Neveragain', lat: 32.047201, lng: 34.832581 }
]

function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}

function creatLocation() {
    return {
        // id: '',
        name: '',
        lat: '',
        lng: '',
        // weather: '',
        // createdAt: '',
        // updatedAt: '',
    }
}


