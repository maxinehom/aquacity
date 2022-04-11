import React from 'react';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import BillingForm from './BillingForm';
import PageHeader from "@iso/components/utility/pageHeader";
import IntlMessages from "@iso/components/utility/intlMessages";
import { CheckoutContents } from './Checkout.styles';

export default function() {
  return (
    
    <CheckoutContents>
      
      <LayoutWrapper className="isoCheckoutPage">
      <PageHeader>
      <IntlMessages id="Checkout" />
      </PageHeader>
        <BillingForm />     
      </LayoutWrapper>
    </CheckoutContents>
  );
}
