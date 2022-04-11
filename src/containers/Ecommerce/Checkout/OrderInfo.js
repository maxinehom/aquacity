import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@iso/components/uielements/button';
import SingleOrderInfo from './SingleOrder';
import { OrderTable } from './Checkout.styles';

let totalPrice;

export default function OrderInfo() {
  const { productQuantity, products } = useSelector(state => state.Ecommerce);
  function renderProducts() {
    totalPrice = 0;
    return productQuantity.map(product => {
      totalPrice += product.quantity * products[product.objectID].price;
      return (
        <SingleOrderInfo
          key={product.objectID}
          quantity={product.quantity}
          {...products[product.objectID]}
        />
      );
    });
  }

  return (
    <OrderTable className="isoOrderInfo">
      <div className="isoOrderTable">
        <div className="isoOrderTableHead">
          <span className="tableHead">Product</span>
          <span className="tableHead">Total</span>
        </div>

        <div className="isoOrderTableBody">{renderProducts()}</div>
        <div className="isoOrderTableFooter">
          <span>Sub Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="isoOrderTableFooter">
          <span>Shipping Fees</span>
          <span>$20.00</span>
        </div>
        <div className="isoOrderTableFooter">
          <span>SST</span>
          <span>$00.00</span>
        </div>
        <div className="isoOrderTableFooter">
          <span>Total Amount</span>
          <span>$249.88</span>
        </div>
        <Button type="primary">
          Place Order
        </Button>
      </div>
    </OrderTable>
  );
}
