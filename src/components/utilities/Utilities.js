let total = 0;
const addHenlar = (time) =>{
   total = total + time;
}
// console.log(total)


const addToDb = id => {
   let addIconCart = getIconCart();
   
   const quantity = addIconCart[id];
   if (!quantity) {
      addIconCart[id] = 1;
   }
   else {
      const newQuantity = quantity + 1;
      addIconCart[id] = newQuantity;
   }
   localStorage.setItem('container-cart', JSON.stringify(addIconCart));
}
const getIconCart = () => {
   let containerCart = {};

   //get the shopping cart from local storage
   const storedCart = localStorage.getItem('container-cart');
   if (storedCart) {
      containerCart = JSON.parse(storedCart);
   }
   return containerCart;
}

export {
   addToDb,
   getIconCart,
   addHenlar,
}