import pic1 from '../../Pictures/pic1.jpg';
import pic2 from '../../Pictures/pic2.jpg';
import pic3 from '../../Pictures/pic3.jpg';
import pic4 from '../../Pictures/pic4.jpg';
import pic5 from '../../Pictures/pic5.jpg';
import pic6 from '../../Pictures/pic6.jpg';
import pic7 from '../../Pictures/pic7.jpg';
import pic8 from '../../Pictures/pic8.jpg';
import pic9 from '../../Pictures/pic9.jpg';
import pic10 from '../../Pictures/pic10.jpg';

const initialState =  [
        {id: 1, name: "FirstItem", qty: 5, cartQty:0, price: '15', description: 'Beautiful', image: pic1},
        {id: 2, name: "SecondItem", qty: 5, cartQty:0, price: '180', description: 'Amazing', image: pic2},
        {id: 3, name: "ThirdItem", qty: 5, cartQty:0, price: '1', description: 'Perfect', image: pic3},
        {id: 4, name: "FourthItem", qty: 5, cartQty:0, price: '850', description: 'Beautiful', image: pic4},
        {id: 5, name: "FifthItem", qty: 5, cartQty:0, price: '1999', description: 'Beautiful', image: pic5},
        {id: 6, name: "SixthItem", qty: 5, cartQty:0, price: '990', description: 'Beautiful', image: pic6},
        {id: 7, name: "SeventhItem", qty: 5, cartQty:0, price: '1250', description: 'Beautiful', image: pic7},
        {id: 8, name: "EigthItem", qty: 5, cartQty:0, price: '800', description: 'Beautiful', image: pic8},
        {id: 9, name: "NinthItem", qty: 5, cartQty:0, price: '2000', description: 'Beautiful', image: pic9},
        {id: 10, name: "Hachnosas Sefer Torah", qty: 5, cartQty:0, price: '1000', description: 'Beautiful', image: pic10}

    ]
    

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DECREASEQTY":
          const newItem = [...state]
          console.log(action.product.qty)
          console.log(action.product.cartQty)
          state = state.filter(item=>item.id==action.product.id);
          if(state[0].qty >= 1){
            state[0].cartQty +=1
            state[0].qty -= 1
          }
          return newItem;

        case "INCREASEQTY":
          
          console.log(action.product.qty)
          console.log(action.product.cartQty)
            if(action.product.cartQty > 1){
            action.product.cartQty -= 1
            action.product.qty +=1
            }
          return state;
        default:
            return state;
    }
};




