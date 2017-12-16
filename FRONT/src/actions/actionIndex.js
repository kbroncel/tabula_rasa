export const GET_RANDOM_NUMBER = "GET_RANDOM_NUMBER"

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomNumber(city){
    let number = getRandomInt(0, 100);

    return {
        type: GET_RANDOM_NUMBER,
        payload: number
    }
}

