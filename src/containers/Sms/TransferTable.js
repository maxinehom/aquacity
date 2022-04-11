import { Transfer, Switch, Table, Tag, Button } from 'antd';
import difference from 'lodash/difference';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import WidgetsWrapper, { ContentWrapper } from "./sms.styles";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import React, { useState } from "react";

var result = 0;
// Customize Table Transfer
const TableTransfer = ({leftColumns, rightColumns, ...restProps}) => (

  <Transfer {...restProps}>
    {({
      direction,
      filteredItems,
      onItemSelectAll,
      onItemSelect,
      selectedKeys: listSelectedKeys,
      disabled: listDisabled,
    }) => {
      const columns = direction === 'left' ? leftColumns : rightColumns;
      const rowSelection = {
        getCheckboxProps: item => ({ disabled: listDisabled || item.disabled }),
        onSelectAll(selected, selectedRows) {
          const treeSelectedKeys = selectedRows
            .filter(item => !item.disabled)
            .map(({ key }) => key);
          const diffKeys = selected
            ? difference(treeSelectedKeys, listSelectedKeys)
            : difference(listSelectedKeys, treeSelectedKeys);
          onItemSelectAll(diffKeys, selected);
        },
       
        onSelect({ key }, selected) {
          onItemSelect(key, selected);
        },
        selectedRowKeys: listSelectedKeys,
      };

      return (
        <>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={filteredItems}
          size="small"
          style={{ pointerEvents: listDisabled ? 'none' : null }}
          onRow={({ key, disabled: itemDisabled }) => ({
            onClick: () => {
              if (itemDisabled || listDisabled) return;
              onItemSelect(key, !listSelectedKeys.includes(key));
            },
          })}
        />
        </>
      );
    }}
  </Transfer>
);



// const mockData1 = [];
// for (let i = 0; i < 20; i++) {
//   mockData1.push({
//     key: i.toString(),
//     title: `content${i + 1}`,
//     description: `description of content${i + 1}`,
//     disabled: i % 4 === 0,

//   });
// }


const mockData = [
  {
    key: '1',
    list_num: '1',
    // Imagem: <img style={{ width: '90px', borderRadius: '8px' }} src={product2} />,
    d_id: '016189',
    d_name: 'ACHONG',
    mobile_no: '60124203733',
    country: 'Malaysia',
    state: 'Kedah',
    ranking: 'Dealer',
    join_date: '26 Feb 2022',
    status: 'InActive',
  },
  {
    key: '2',
    list_num: '2',
    // Imagem: <img style={{ width: '90px', borderRadius: '8px' }} src={product2} />,
    d_id: '032476',
    d_name: 'CHONG AH MOY',
    mobile_no: '60166989131',
    country: 'Malaysia',
    state: 'Selangor',
    ranking: 'Master Dealer',
    join_date: '27 Nov 2021',
    status: 'Active',

  },
  {
    key: '3',
    list_num: '3',
    // Imagem: <img style={{ width: '90px', borderRadius: '8px' }} src={product2} />,
    d_id: '017377',
    d_name: 'GRACE TAN SHU TING',
    mobile_no: '60192607367',
    country: 'Malaysia',
    state: 'Malacca',
    ranking: 'Customer',
    join_date: '30 Sep 2021',
    status: 'Active',

  },
];
const originTargetKeys = mockData.filter(item => +item.key % 2 > 1).map(item => item.key);

const leftTableColumns = [
  {
    title: 'No.',
    width: '3%',
    dataIndex: 'list_num',
    key: 'list_num',
  },
  // {
  //     title: 'Product Image',
  //     width: '5%',
  //     dataIndex: 'Imagem',
  //     key: 'Imagem',
  // },
  { 
    title: 'Distributor ID',
    dataIndex: 'd_id',
    key: 'd_id',
    width: '15%',
  },
  {
    title: 'Name',
    dataIndex: 'd_name',
    key: 'd_name',
    width: '20%',
  },
  {
    title: 'Mobile No',
    dataIndex: 'mobile_no',
    key: 'mobile_no',
    width: '15%',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    width: '10%',
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
    width: '10%',
  },
  {
    title: 'Ranking',
    dataIndex: 'ranking',
    key: 'ranking',
    width: '10%',
  },
  {
    title: 'Join Date',
    dataIndex: 'join_date',
    key: 'join_date',
    width: '40%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: '15%',
  },
];
const rightTableColumns = [
  {
    title: 'No.',
    width: '3%',
    dataIndex: 'list_num',
    key: 'list_num',
  },
  // {
  //     title: 'Product Image',
  //     width: '5%',
  //     dataIndex: 'Imagem',
  //     key: 'Imagem',
  // },
  {
    title: 'Distributor ID',
    dataIndex: 'd_id',
    key: 'd_id',
    width: '15%',
  },
  {
    title: 'Name',
    dataIndex: 'd_name',
    key: 'd_name',
    width: '20%',
  },
  {
    title: 'Mobile No',
    dataIndex: 'mobile_no',
    key: 'mobile_no',
    width: '15%',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    width: '10%',
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
    width: '10%',
  },
  {
    title: 'Ranking',
    dataIndex: 'ranking',
    key: 'ranking',
    width: '10%',
  },
  {
    title: 'Join Date',
    dataIndex: 'join_date',
    key: 'join_date',
    width: '40%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: '15%',
  },
];

class TransferTable extends React.Component {
  // result = rightColumns.length;
  state = {
    targetKeys: originTargetKeys,
    disabled: false,
    showSearch: false,
  };
  onChange = nextTargetKeys => {
    this.setState({ targetKeys: nextTargetKeys });
    result += nextTargetKeys.length;
   // console.log(nextTargetKeys)
    this.props.datalength(nextTargetKeys.length);
  };

  triggerDisable = disabled => {
    this.setState({ disabled });
  };

  triggerShowSearch = showSearch => {
    this.setState({ showSearch });
  };
  render() {
    const {targetKeys, disabled, showSearch } = this.state;
    return (
      <>

        <ContentWrapper>

          <TableTransfer
            dataSource={mockData}
            targetKeys={targetKeys}
            disabled={disabled}
            //showSearch={showSearch}
            onChange={this.onChange}
            titles={['Distributor List', 'Selected Distributor']}
            operations={["Import", 'Remove']}
            leftColumns={leftTableColumns}
            rightColumns={rightTableColumns}
          // filterOption={(inputValue, item) =>
          //   item.title.indexOf(inputValue) !== -1 || item.tag.indexOf(inputValue) !== -1
          // }
          />
         
        </ContentWrapper>

      </>
    );
  }
}

export default TransferTable;
