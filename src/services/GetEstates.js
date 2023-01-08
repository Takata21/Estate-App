import { API_HOST, API_KEY, BASE_URL } from './config.js'
export async function getEstates(purpose) {
    const options = {
        headers: {
            'X-RapidAPI-Key': 'eda80376fdmshe418c2472ec16f8p1b3e2ajsndea19df42467',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    }
    try {
        const response = await fetch(`https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=${purpose}&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`, options)
        const data = await response.json()
        return data.hits
    } catch (error) {
        console.log(error.message)
    }
}