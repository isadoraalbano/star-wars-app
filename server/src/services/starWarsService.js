import { globalData } from "../globalData.js";
import { History } from "../model/History.js";

export const findAndOrderByName = (prop) => {
    let results = globalData[prop];
    results.sort((a, b)=> {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    })
    return results;
}

export const findAndOrderByDiameter = () => {
    let results = globalData.planets;
    results.sort((a, b) => { 
        return b.diameter - a.diameter
    })
    return results;
}

export const findFilms = (title) => {
    const results = globalData.films
    
    if(title){
        return findByTitle(results, title)
    }else{
        return orderByDate(results)
    }
}

const orderByDate = (films) => {
    films.sort((a, b)=> {
        return new Date(a.release_date) - new Date(b.release_date);
    })
    const results = films;
    return results;

}

const findByTitle = (films, title) => {
    const regex = new RegExp(title, 'i');
    let result = [];
    films.forEach((film) => {
        if(regex.test(film.title)){
            result.push(film)
        }
    })
    return result;
}

export const saveSearchTitle = async (title)=> {
    try {
       await History.create({search : title})
    } catch(error) {
        throw error;
    }
}
