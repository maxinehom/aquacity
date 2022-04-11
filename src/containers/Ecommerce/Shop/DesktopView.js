import React from 'react';
import { InstantSearch } from 'react-instantsearch/dom';
import { Sidebar } from '@iso/components/Shop/Shop';
import EmptyComponent from '@iso/components/EmptyComponent';
import CustomResults from './Content';
import ShopSearchConfig from '@iso/config/algolia.config';
import { setUrl, getInitData } from '@iso/lib/helpers/url_sync';
import './InstantSearch.css';
import ShopSearchPageWrapper from './Shop.styles';

export default function (props) {
  const [searchState, setSearchState] = React.useState(getInitData());

  // const setVoice = (query) => {
  //   setSearchState({
  //     ...searchState,
  //     page: '1',
  //     query,
  //   });
  //   setUrl(searchState);
  // };
  const searchInfo = {
    ...ShopSearchConfig,
    indexName: 'default_search',
    searchState: searchState,
    urlSync: true,
    onSearchStateChange: (searchState) => {
      setSearchState(searchState);
      setUrl(searchState);
    },
  };
  return (
    <ShopSearchPageWrapper className="isoShopSearchPage">
     
        <InstantSearch {...searchInfo}>
          <div className="isoShopMainWrapper">
            <Sidebar/>
            <CustomResults/>
          </div>
          {/* <Footer /> */}
        </InstantSearch>
    </ShopSearchPageWrapper>
  );
}
