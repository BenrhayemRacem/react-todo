

const getLocalStorage =(item) => {
    let list = localStorage.getItem(item) ;
    if (list) {
        return  JSON.parse(list);
    }
    return []
} ;

export default getLocalStorage;