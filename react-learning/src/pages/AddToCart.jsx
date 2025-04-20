import React, { useEffect } from 'react'

export default function AddToCart() {
  const [carts, setCarts]=useState([]);
    const getData=async()=>{
      const res= await fetch("");
      const data = await res.json();

      if(data && data.length){
        const userCart=data.filter((cart)=>cart?.userId === USERID)
        console.log(userCart);
        setCarts(userCart);
      }
    };

    useEffect(()=>{
      getData();
    },[]);

    console.log(carts);
  
  return (
    <div>
    <h1>Cart Page</h1>
    <div>
      <h3>{carts?.length}</h3>
      {carts?.map((cart) => (
        <div key={cart?.id}>
          {cart.products?.map((product) => {
            return <CartProduct cProduct={product} />;
          })}
        </div>
      ))}
    </div>
  </div>
  );
}
