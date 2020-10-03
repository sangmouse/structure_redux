import food from "../reducers/food";


export const selectFood = (food) => {
    console.log('item name selected is: ' + food.name)
    return {
        type : 'SELECT_FOOD',
        payload : food
    }
}