import React from 'react';
import { useDispatch } from 'react-redux';
import { Hits, Pagination, SortBy, Stats } from 'react-instantsearch/dom';
import Hit from './Hit';
import {
  ContentWrapper,
  TopbarWrapper,
  PaginationStyleWrapper,
} from '@iso/components/Shop/ShopComponent.style';

export default function ({ ecommerceView, changeView, ...props }) {
  const dispatch = useDispatch();

  return (
    <ContentWrapper className="isoShopContentWrapper">
      <TopbarWrapper className="isoShopTopBar">
        <Stats />
        <SortBy
          defaultRefinement="default_search"
          items={[
            { value: 'default_search', label: 'Default' },
            { value: 'price_asc', label: 'Lowest Price' },
            { value: 'price_desc', label: 'Highest Price' },
          ]}
        />
        <div className="isoViewChanger">
          <button
            type="button"
            className={
              ecommerceView === 'gridView'
                ? 'isoGridView active'
                : 'isoGridView'
            }
            onClick={() => dispatch(changeView('gridView'))}
          >
            <i className="ion-grid" />
          </button>
          <button
            type="button"
            className={
              ecommerceView === 'gridView'
                ? 'isoListView'
                : 'isoListView active'
            }
            onClick={() => dispatch(changeView('listView'))}
          >
            <i className="ion-navicon-round" />
          </button>
        </div>
      </TopbarWrapper>
      <Hits hitComponent={Hit} {...props} />

      <PaginationStyleWrapper className="isoShopPagination">
        <Pagination showLast />
      </PaginationStyleWrapper>
    </ContentWrapper>
  );
}
