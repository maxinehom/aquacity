import React from 'react';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import CartTable from './CartTable';
import PageHeader from "@iso/components/utility/pageHeader";
import IntlMessages from "@iso/components/utility/intlMessages";

export default function() {
  return (
    <LayoutWrapper>
       <PageHeader>
      <IntlMessages id="Shopping Cart" />
      </PageHeader>
      <CartTable className="bordered" />
    </LayoutWrapper>
  );
}
