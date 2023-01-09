export async function getProperty(propertyId) {
    const options = {
        headers: {
            'X-RapidAPI-Key': 'eda80376fdmshe418c2472ec16f8p1b3e2ajsndea19df42467',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    }
    try {
        const response = await fetch(`https://bayut.p.rapidapi.com/properties/detail?externalID=${propertyId}`, options)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error.message)
    }
}