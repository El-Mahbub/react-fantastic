/**
 * 
 * - Filtering Objects -
 * Author : El-Mahbub <elmahbub14021993@gmail.com>.
 * 1. filterKeysObjectFromKeys - Filtering keys of object from another keys/array. Return : Array.
 * - Example : 
 *  const obj = {
 *      className: '',
 *      data: []
 *  };
 *  filterKeysObject(obj, ['data']);. Result : ['className'];
 * 
 * 2. filterKeysObjectToObject - Filtering keys of object and then creating a new object from that keys. Return : Object.
 * - Example :
 * const obj = {
 *      className: '',
 *      data: []
 *  };
 * filterKeysObjectToObject(obj, ['data']);. Result : { data: [] };
 * 
 */
export const filterKeysObjectFromKeys = (object=Object, filtered=Array) => {
    if(Array.isArray(filtered)){
        if(Object.entries(object.length > 0)) {
            return Object.keys(object).filter(e => filtered.indexOf(e) === -1 && e)
        }
        else {
            return Object.keys(object);
        }
    }
    return Object.keys(object);
}
export const filterKeysObjectToObject = (object=Object, keys=Array) => {
    if(Array.isArray(keys)){
        return Object.assign({}, Object.entries(object).filter((e,v) => keys.indexOf(e[0]) > -1 && {[e[0]]:e[1]}).reduce((obj, [key, val]) => Object.assign(obj, {[key]: val}), {}));
    }
    else {
        return object;
    }
    return object;
}