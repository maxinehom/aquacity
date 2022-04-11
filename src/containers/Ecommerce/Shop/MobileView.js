import React from 'react';
import Button from '@iso/components/uielements/button.js';
import EmptyComponent from '@iso/components/EmptyComponent.js';
import { InstantSearch } from 'react-instantsearch/dom';
import { Sidebar } from '@iso/components/Shop/Shop';
import CustomResults from './Content';
import { setUrl, getInitData } from '@iso/lib/helpers/url_sync';
import ShopSearchConfig from '@iso/config/algolia.config';
import './InstantSearch.css';
import ShopSearchPageWrapper from './Shop.styles';

export default function(props) {
  const [state, setState] = React.useState({
    collapsed: true,
    searchState: getInitData(),
  });
  const setVoice = query => {
    const searchState = {
      ...state.searchState,
      page: '1',
      query,
    };
    setState({ ...state, searchState });
    setUrl(searchState);
  };
  const { collapsed } = state;
  const className = collapsed ? '' : 'sidebarOpen';
  const btnText = collapsed ? 'Filter' : 'Hide';
  const searchInfo = {
    ...ShopSearchConfig,
    indexName: 'default_search',
    searchState: state.searchState,
    urlSync: true,
    onSearchStateChange: searchState => {
      setState({ ...state, searchState });
      setUrl(searchState);
    },
  };
  return (
    <ShopSearchPageWrapper className={`${className} isoShopSearchPage`}>
      <Button
        className="ant-btn-primary isoShopSidebarToggle"
        onClick={() => {
          setState({ ...state, collapsed: !state.collapsed });
        }}
      >
        {btnText}
      </Button>
      {ShopSearchConfig.appId ? (
        <InstantSearch {...searchInfo}>
          <div className="isoShopMainWrapper">
            <Sidebar setVoice={setVoice} />
            <CustomResults/>
          </div>
        </InstantSearch>
      ) : (
        <EmptyComponent value="Please include algolia appId" />
      )}
    </ShopSearchPageWrapper>
  );
}
