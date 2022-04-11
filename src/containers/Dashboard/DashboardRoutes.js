import React, { lazy, Suspense } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import Loader from "@iso/components/utility/loader";

const routes = [
  {
    path: "",
    component: lazy(() => import("@iso/containers/Widgets/Widgets")),
    exact: true,
  },

  {
    path: "member",
    component: lazy(() => import("@iso/containers/Member/Member")),
  },
  {
    path: "announcement",
    component: lazy(() => import("@iso/containers/Announcement/AnnouncementList")),
  },
  {
    path: "addAnnouncement",
    component: lazy(() =>
      import("@iso/containers/Announcement/AddAnnouncement")
    ),
  },
  {
    path: "manageAnnouncement",
    component: lazy(() =>
      import("@iso/containers/Announcement/ManageAnnouncement")
    ),
  },
  {
    path: "memberprofile",
    component: lazy(() => import("@iso/containers/Member/Profile")),
  },
  {
    path: "editprofile",
    component: lazy(() => import("@iso/containers/Member/EditProfile")),
  },
  {
    path: "editaddress",
    component: lazy(() => import("@iso/containers/Member/EditAddress")),
  },
  {
    path: "editbank",
    component: lazy(() => import("@iso/containers/Member/EditBank")),
  },
  {
    path: "changepassword",
    component: lazy(() => import("@iso/containers/Member/ChangePassword")),
  },
  {
    path: "memberregistration",
    component: lazy(() => import("@iso/containers/Member/Registration")),
  },
  {
    path: "memberlist",
    component: lazy(() => import("@iso/containers/Member/MemberList")),
  },
  {
    path: "organizationchart",
    component: lazy(() => import("@iso/containers/Member/OrganizationChart")),
  },
  {
    path: "adminpanel",
    component: lazy(() => import("@iso/containers/AdminPanel/AdminPanel")),
  },
  {
    path: "paymentapproval",
    component: lazy(() => import("@iso/containers/AdminPanel/PaymentApproval")),
  },
  {
    path: "salesshipment",
    component: lazy(() => import("@iso/containers/AdminPanel/SalesShipment")),
  },
  {
    path: "stockadjustment",
    component: lazy(() => import("@iso/containers/Inventory/StockAdjustment")),
  },
  {
    path: "productlist",
    component: lazy(() => import("@iso/containers/Product/ProductList")),
  },
  {
    path: "productadd",
    component: lazy(() => import("@iso/containers/Product/AddProduct")),
  },
  {
    path: "editproduct",
    component: lazy(() => import("@iso/containers/Product/UpdateProduct")),
  },
  {
    path: "viewproduct",
    component: lazy(() => import("@iso/containers/Product/ViewProduct")),
  },
  {
    path: "addcourier",
    component: lazy(() => import("@iso/containers/Shipment/AddCourier")),
  },
  {
    path: "courierlist",
    component: lazy(() => import("@iso/containers/Shipment/CourierList")),
  },
  {
    path: "detailsbonusreport",
    component: lazy(() => import("@iso/containers/Report/DetailsBonusReport")),
  },
  {
    path: "groupbonusreport",
    component: lazy(() => import("@iso/containers/Report/GroupBonusReport")),
  },
  {
    path: "personalsalesreport",
    component: lazy(() => import("@iso/containers/Report/PersonalSalesReport")),
  },
  {
    path: "securitysetting",
    component: lazy(() => import("@iso/containers/Setting/SecuritySetting")),
  },
  {
    path: "usersetting",
    component: lazy(() => import("@iso/containers/Setting/UserSetting")),
  },
  {
    path: "voucherlist",
    component: lazy(() => import("@iso/containers/Voucher/VoucherList")),
  },
  {
    path: "newvoucher",
    component: lazy(() => import("@iso/containers/Voucher/AddNewVoucher")),
  },
  {
    path: "smsstatement",
    component: lazy(() => import("@iso/containers/Sms/SMSList")),
  },
  {
    path: "sendsms",
    component: lazy(() => import("@iso/containers/Sms/SendSMS")),
  },
  {
    path: "swiperslider",
    component: lazy(() =>
      import("@iso/containers/UIElements/SwiperSlider/SwiperSlider")
    ),
  },

  {
    path: "table_ant",
    component: lazy(() => import("@iso/containers/Tables/AntTables/AntTables")),
  },
  {
    path: "allFormComponent",
    component: lazy(() => import("@iso/containers/Forms/Forms")),
  },
  {
    path: "InputField",
    component: lazy(() => import("@iso/containers/Forms/Input/Input")),
  },
  {
    path: "editor",
    component: lazy(() => import("@iso/containers/Forms/Editor/Editor")),
  },
  {
    path: "stepperForms",
    component: lazy(() =>
      import("@iso/containers/Forms/StepperForms/StepperForms")
    ),
  },
  {
    path: "FormsWithValidation",
    component: lazy(() =>
      import("@iso/containers/Forms/FormsWithValidation/FormsWithValidation")
    ),
  },
  {
    path: "progress",
    component: lazy(() => import("@iso/containers/Forms/Progress/Progress")),
  },
  {
    path: "button",
    component: lazy(() => import("@iso/containers/Forms/Button/Button")),
  },
  {
    path: "tab",
    component: lazy(() => import("@iso/containers/Forms/Tab/Tab")),
  },
  {
    path: "autocomplete",
    component: lazy(() =>
      import("@iso/containers/Forms/AutoComplete/AutoComplete")
    ),
  },
  {
    path: "checkbox",
    component: lazy(() => import("@iso/containers/Forms/Checkbox/Checkbox")),
  },
  {
    path: "radiobox",
    component: lazy(() => import("@iso/containers/Forms/Radiobox/Radiobox")),
  },
  {
    path: "selectbox",
    component: lazy(() => import("@iso/containers/Forms/Select/Select")),
  },
  {
    path: "transfer",
    component: lazy(() => import("@iso/containers/Forms/Transfer/Transfer")),
  },
  {
    path: "gridLayout",
    component: lazy(() => import("@iso/containers/Box/GridLayout")),
  },

  // {
  // 	path: 'articles',
  // 	component: lazy(() =>
  // 		import('@iso/containers/FirestoreCRUD/Article/Article')
  // 	),
  // },
  // {
  // 	path: 'investors',
  // 	component: lazy(() =>
  // 		import('@iso/containers/FirestoreCRUD/Investor/Investor')
  // 	),
  // },
  // {
  // 	path: 'contacts',
  // 	component: lazy(() => import('@iso/containers/Contacts/Contacts')),
  // },
  {
    path: "alert",
    component: lazy(() => import("@iso/containers/Feedback/Alert/Alert")),
  },
  {
    path: "modal",
    component: lazy(() => import("@iso/containers/Feedback/Modal/Modal")),
  },
  {
    path: "message",
    component: lazy(() => import("@iso/containers/Feedback/Message/Message")),
  },
  {
    path: "notification",
    component: lazy(() =>
      import("@iso/containers/Feedback/Notification/Notification")
    ),
  },
  {
    path: "Popconfirm",
    component: lazy(() =>
      import("@iso/containers/Feedback/Popconfirm/Popconfirm")
    ),
  },
  {
    path: "spin",
    component: lazy(() => import("@iso/containers/Feedback/Spin/Spin")),
  },

  {
    path: "affix",
    component: lazy(() => import("@iso/containers/Navigation/Affix")),
  },
  {
    path: "breadcrumb",
    component: lazy(() =>
      import("@iso/containers/UIElements/Breadcrumb/Breadcrumb")
    ),
  },
  {
    path: "backToTop",
    component: lazy(() => import("@iso/containers/Navigation/BackToTop")),
  },
  {
    path: "dropdown",
    component: lazy(() =>
      import("@iso/containers/UIElements/Dropdown/Dropdown")
    ),
  },
  {
    path: "op_badge",
    component: lazy(() => import("@iso/containers/UIElements/Badge/Badge")),
  },
  {
    path: "op_card",
    component: lazy(() => import("@iso/containers/UIElements/Card/Card")),
  },
  {
    path: "op_carousel",
    component: lazy(() =>
      import("@iso/containers/UIElements/Carousel/Carousel")
    ),
  },
  {
    path: "op_collapse",
    component: lazy(() =>
      import("@iso/containers/UIElements/Collapse/Collapse")
    ),
  },
  {
    path: "op_tooltip",
    component: lazy(() => import("@iso/containers/UIElements/Tooltip/Tooltip")),
  },
  {
    path: "rating",
    component: lazy(() => import("@iso/containers/UIElements/Rating/Rating")),
  },
  {
    path: "tree",
    component: lazy(() => import("@iso/containers/UIElements/Tree/Tree")),
  },
  {
    path: "op_tag",
    component: lazy(() => import("@iso/containers/UIElements/Tag/Tag")),
  },
  {
    path: "op_timeline",
    component: lazy(() =>
      import("@iso/containers/UIElements/Timeline/Timeline")
    ),
  },
  {
    path: "pagination",
    component: lazy(() =>
      import("@iso/containers/UIElements/Pagination/Pagination")
    ),
  },
  {
    path: "op_popover",
    component: lazy(() => import("@iso/containers/UIElements/Popover/Popover")),
  },
  {
    path: "googleChart",
    component: lazy(() =>
      import("@iso/containers/Charts/GoogleChart/GoogleChart")
    ),
  },
  {
    path: "reecharts",
    component: lazy(() => import("@iso/containers/Charts/Recharts/Recharts")),
  },
  {
    path: "menu",
    component: lazy(() => import("@iso/containers/Navigation/NavigationMenu")),
  },
  {
    path: "ReactChart2",
    component: lazy(() =>
      import("@iso/containers/Charts/ReactChart2/ReactChart2")
    ),
  },
  {
    path: "card",
    component: lazy(() => import("@iso/containers/Ecommerce/Card/Card")),
  },
  {
    path: "cart",
    component: lazy(() => import("@iso/containers/Ecommerce/Cart/Cart")),
  },
  {
    path: "productdetail",
    component: lazy(() =>
      import("@iso/containers/Ecommerce/Shop/ProductDetail")
    ),
  },
  {
    path: "checkout",
    component: lazy(() =>
      import("@iso/containers/Ecommerce/Checkout/Checkout")
    ),
  },
  {
    path: "shop",
    component: lazy(() =>
      import("@iso/containers/Ecommerce/Shop/InstantSearch")
    ),
  },

  {
    path: "reactDates",
    component: lazy(() =>
      import("@iso/containers/AdvancedUI/ReactDates/ReactDates")
    ),
  },
  {
    path: "codeMirror",
    component: lazy(() =>
      import("@iso/containers/AdvancedUI/CodeMirror/CodeMirror")
    ),
  },
  {
    path: "uppy",
    component: lazy(() => import("@iso/containers/AdvancedUI/Uppy/Uppy")),
  },
  {
    path: "dropzone",
    component: lazy(() =>
      import("@iso/containers/AdvancedUI/Dropzone/Dropzone")
    ),
  },
  {
    path: "frappeChart",
    component: lazy(() =>
      import("@iso/containers/Charts/FrappeChart/FrappeCharts")
    ),
  },
  {
    path: "invoice/:invoiceId",
    component: lazy(() => import("@iso/containers/Invoice/SingleInvoice")),
  },
  {
    path: "invoice",
    component: lazy(() => import("@iso/containers/Invoice/Invoices")),
  },

  {
    path: "blank_page",
    component: lazy(() => import("@iso/containers/BlankPage")),
  },
  {
    path: "c_wallet",
    component: lazy(() => import("@iso/containers/Wallet/C_Wallet")),
  },
  {
    path: "s_wallet",
    component: lazy(() => import("@iso/containers/Wallet/S_Wallet")),
  },
  {
    path: "r_wallet",
    component: lazy(() => import("@iso/containers/Wallet/R_Wallet")),
  },

  {
    path: "product",
    component: lazy(() => import("@iso/containers/Product/Product")),
  },
  {
    path: "inventory",
    component: lazy(() => import("@iso/containers/Inventory/Inventory")),
  },
  {
    path: "shipment",
    component: lazy(() => import("@iso/containers/Shipment/Shipment")),
  },
  {
    path: "report",
    component: lazy(() => import("@iso/containers/Report/Report")),
  },
  {
    path: "setting",
    component: lazy(() => import("@iso/containers/Setting/Setting")),
  },
];

export default function AppRouter() {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
}
