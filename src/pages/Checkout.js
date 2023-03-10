import React from 'react'
import { useSelector } from 'react-redux';

const Checkout = () => {
    const { cartItems } = useSelector((state) => state.cart);
    console.log(cartItems)

    const totalPrice = cartItems.reduce((acc, item)=>acc + item.quantity*item.price,0);


  return (
    <div class="container checkout">
<div class="d-flex">
  <form action="" method="">
    <label>
      <span class="fname">First Name <span class="required">*</span></span>
      <input type="text" name="fname"/>
    </label>
    <label>
      <span class="lname">Last Name <span class="required">*</span></span>
      <input type="text" name="lname"/>
    </label>
    <label>
      <span>Company Name (Optional)</span>
      <input type="text" name="cn"/>
    </label>
    <label>
      <span>Street Address <span class="required">*</span></span>
      <input type="text" name="houseadd" required/>
    </label>
    <label>
      <span>Town / City <span class="required">*</span></span>
      <input type="text" name="city"/> 
    </label>
    <label>
      <span>State / County <span class="required">*</span></span>
      <input type="text" name="city"/> 
    </label>
    <label>
      <span>Postcode / ZIP <span class="required">*</span></span>
      <input type="text" name="city"/> 
    </label>
    <label>
      <span>Phone <span class="required">*</span></span>
      <input type="tel" name="city"/> 
    </label>
    <label>
      <span>Email Address <span class="required">*</span></span>
      <input type="email" name="city"/> 
    </label>
  </form>
  <div class="Yorder">
    <table>
      <tr>
        <th colspan="2">Your order</th>
      </tr>
      <tr>
        {
            cartItems?.map((item)=>(
                <div>
                <td>{item.title} x {item.quantity}(Qty)</td>
                <td>₹ {item.quantity*item.price}</td>
                </div>
            ))
        }
      </tr>
      <tr>
        <td>Subtotal</td>
        <td>₹ {totalPrice}</td>
      </tr>
      <tr>
        <td>Shipping</td>
        <td>Free shipping</td>
      </tr>
    </table><br/>
    <div>
      <input type="radio" name="dbt" value="dbt" checked/> Direct Bank Transfer
    </div>
    <p>
        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
    </p>
    <div>
      <input type="radio" name="dbt" value="cd"/> Cash on Delivery
    </div>
    <div>
      <input type="radio" name="dbt" value="cd"/> Paypal <span>
      <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50"/>
      </span>
    </div>
    <button type="button">Place Order</button>
  </div>
 </div>
</div>

  )
}

export default Checkout