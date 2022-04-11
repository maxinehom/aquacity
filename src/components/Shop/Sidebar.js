import React from 'react';
import {
  RefinementList,
  Toggle,
  HierarchicalMenu,
  SearchBox,
  MultiRange,
  ClearAll,
} from 'react-instantsearch/dom';
import { Slider, Checkbox, Rate } from 'antd';
import { SidebarWrapper } from './ShopComponent.style';
function onChange(value) {
  console.log('onChange: ', value);
}

function onAfterChange(value) {
  console.log('onAfterChange: ', value);
}

export default Sidebar => (
  <SidebarWrapper className="isoShopSidebar">
    <SearchBox translations={{ placeholder: 'Search here' }} />
    {/* <VoiceRecognition setVoice={setVoice} /> */}

    <div className="isoShopSidebarItem">
      <h3 className="isoShopSidebarTitle">Choose Price Range</h3>
      <MultiRange
        attributeName="price"
        items={[
          { end: 10, label: '<$10' },
          { start: 10, end: 100, label: '$10-$100' },
          { start: 100, end: 500, label: '$100-$500' },
          { start: 500, label: '>$500' },
        ]}
      />
    </div>
    <div className="isoShopSidebarItem">
      <h3 className="isoShopSidebarTitle">Shop</h3>
      <div>
      <input
          style={{ marginRight : 8}}
          type="checkbox"
          id=""
          name="shoppingmall"
          value="ShoppingMall"
        />
        Shopping Mall
      </div> 
      <div>
      <input
          style={{ marginRight : 8}}
          type="checkbox"
          id=""
          name="Upgrademall"
          value="Upgrademall"
        />
        Upgrade Mall
      </div> 
    </div>
    <div className="isoShopSidebarItem">
      <h3 className="isoShopSidebarTitle" style={{ marginBottom: 10 }}>
        Price Range Slider
      </h3>
      {/* <RangeSlider attributeName="price" /> */}
      <Slider
        min={100}
        max={1000}
        range
        step={50}
        defaultValue={[200, 500]}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
    </div>

    <div className="isoShopSidebarItem">
      <h3 className="isoShopSidebarTitle">Category</h3>
      <Checkbox>Applications (12)</Checkbox>
      <Checkbox style={{ marginLeft: 0 }}>Back-End (8)</Checkbox>
    </div>

    <div className="isoShopSidebarItem">
      <h3 className="isoShopSidebarTitle">Brand</h3>
      <RefinementList attributeName="brand" withSearchBox />
    </div>

    {/* <div className="isoShopSidebarItem">
      <HierarchicalMenu
        attributes={[
          'hierarchicalCategories.lvl0',
          'hierarchicalCategories.lvl1',
          'hierarchicalCategories.lvl2',
        ]}
      />
    </div> */}
    {/* <div className="isoShopSidebarItem">
      <h3 className="isoShopSidebarTitle">Rating</h3>
      <Rate disabled defaultValue={5} />
      <Rate disabled defaultValue={4} />
      <Rate disabled defaultValue={3} />
      <Rate disabled defaultValue={2} />
      <Rate disabled defaultValue={1} />
    </div> */}
    <div className="isoShopSidebarItem isoInline">
      <h3 className="isoShopSidebarTitle">Toggle</h3>
      <Toggle attributeName="free_shipping" label="Free Shipping" />
    </div>

    <ClearAll />
  </SidebarWrapper>
);
