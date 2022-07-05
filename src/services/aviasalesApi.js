export default class AviasalesApiService {
    baseUrl = 'https://front-test.beta.aviasales.ru';


    getDataFromServer = async (url) => {
        try {
            const res = await fetch(url);

            if(!res.ok){
                throw new Error(`error : ${res.status}`)
            }
            console.log(res)
            return await res.json()
        } catch (error) {
            console.error(`fetch error ${error}`);
            return error.message
        }
    };
}