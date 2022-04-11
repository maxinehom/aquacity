const options = [
	{
		key: '',
		label: 'Dashboard',
		leftIcon: 'ion-android-home',
	},
	{
		key: 'announcement',
		label: 'Announcement',
		leftIcon: 'ion-android-notifications-none',
		children: [
			{
			  key: 'announcement',
			  label: 'Announcement List',
			},
			{
			  key: 'addAnnouncement',
			  label: 'Add Announcement',
			},
			{
				key: 'manageAnnouncement',
				label: 'Manage Announcement',
			  },
		  ],
	},
	// {
	// 	key: 'chat',
	// 	label: 'sidebar.chat',
	// 	leftIcon: 'ion-chatbubbles',
	// },
	// {
	//   key: 'quiz',
	//   label: 'sidebar.quiz',
	//   leftIcon: 'ion-chatbubbles',
	// },
	{
		key: 'shop',
		label: 'Shopping',
		leftIcon: 'ion-bag',
		// children: [
		// 	{
		// 		key: 'shop',
		// 		label: 'sidebar.shop',
		// 	},
		// 	// {
		// 	// 	key: 'cart',
		// 	// 	label: 'sidebar.cart',
		// 	// },
		// 	// {
		// 	// 	key: 'checkout',
		// 	// 	label: 'sidebar.checkout',
		// 	// },
		// 	// {
		// 	// 	key: 'card',
		// 	// 	label: 'sidebar.cards',
		// 	// },
		// ],
	},
	{
		key: 'member',
		label: 'Member',
		leftIcon: 'ion-ios-people-outline',
		children: [
			{
			  key: 'memberprofile',
			  label: 'Member Profile',
			},
			{
			  key: 'memberregistration',
			  label: 'Member Registration',
			},
			{
				key: 'memberlist',
				label: 'Member List',
			  },
			{
				key: 'organizationchart',
				label: 'Organization Chart',
			},
		  ],
	},
	{
		key: 'c_wallet',
		label: 'Wallet',
		leftIcon: 'ion-social-usd',
	},
	{
		key: 'adminpanel',
		label: 'Admin Panel',
		leftIcon: 'ion-ios-person-outline',
		children: [
			{
			  key: 'paymentapproval',
			  label: 'Sales Payment Approval',
			},
			{
			  key: 'salesshipment',
			  label: 'Update Sales Shipment',
			},
		  ],
	},
	{
		key: 'inventory',
		label: 'Inventory',
		leftIcon: 'ion-ios-box-outline',
		children: [
			{
			  key: 'stockadjustment',
			  label: 'Stock Adjustment',
			},
		  ],
	},
	{
		key: 'product',
		label: 'Product',
		leftIcon: 'ion-ios-cart-outline',
		children: [
			{
			  key: 'productlist',
			  label: 'Product List',
			},
			{
				key: 'productadd',
				label: 'Add Product',
			  },
		  ],
	},
	
	{
		key: 'shipment',
		label: 'Shipment',
		leftIcon: 'ion-android-boat',
		children: [
			{
			  key: 'courierlist',
			  label: 'Courier List',
			},
			{
				key: 'addcourier',
				label: 'Add Courier',
			  },
		  ],
	},
	{
		key: 'report',
		label: 'Report',
		leftIcon: 'ion-ios-paper-outline',
		children: [
			{
			  key: 'detailsbonusreport',
			  label: 'Details Bonus Report',
			},
			{
				key: 'groupbonusreport',
				label: 'Group Bonus Report',
			  },
			  {
				key: 'personalsalesreport',
				label: 'Personal Sales Report',
			  },
		  ],
	},
	{
		key: 'voucher',
		label: 'Voucher',
		leftIcon: 'ion-cash',
		children: [
			{
			  key: 'voucherlist',
			  label: 'Voucher List',
			},
			{
				key: 'newvoucher',
				label: 'New Voucher',
			  },
			
		  ],
	},
	{
		key: 'sms',
		label: 'SMS',
		leftIcon: 'ion-android-textsms',
		children: [
			{
			  key: 'smsstatement',
			  label: 'SMS Statement',
			},
			{
				key: 'sendsms',
				label: 'Send SMS',
			  },

			
		  ],
	},
	{
		key: 'setting',
		label: 'Setting',
		leftIcon: 'ion-ios-gear-outline',
		children: [
			{
			  key: 'securitysetting',
			  label: 'Security Setting',
			},
			{
				key: 'usersetting',
				label: 'User Setting',
			  },
		  ],
	},
	
	
	// {
	// 	key: 'maps',
	// 	label: 'sidebar.maps',
	// 	leftIcon: 'ion-map',
	// 	children: [
	// 		{
	// 			key: 'googlemap',
	// 			label: 'sidebar.googleMap',
	// 		},
	// 		{
	// 			key: 'leafletmap',
	// 			label: 'sidebar.leafletMap',
	// 		},
	// 	],
	// },
	// {
	// 	key: 'my-profile',
	// 	label: 'sidebar.profile',
	// 	leftIcon: 'ion-person',
	// },
	// {
	// 	key: 'scrum-board',
	// 	label: 'sidebar.scrumboard',
	// 	leftIcon: 'ion-android-checkbox-outline',
	// },
	// {
	// 	key: 'invoice',
	// 	label: 'sidebar.invoice',
	// 	leftIcon: 'ion-clipboard',
	// },
	// {
	// 	key: 'calendar',
	// 	label: 'sidebar.calendar',
	// 	leftIcon: 'ion-calendar',
	// },
	// {
	// 	key: 'notes',
	// 	label: 'sidebar.notes',
	// 	leftIcon: 'ion-ios-paper',
	// },
	// {
	// 	key: 'todo',
	// 	label: 'sidebar.todos',
	// 	leftIcon: 'ion-android-checkbox-outline',
	// },
	// {
	// 	key: 'firestorecrud',
	// 	label: 'sidebar.firestorecrud',
	// 	leftIcon: 'ion-fireball',

	// 	children: [
	// 		{
	// 			key: 'articles',
	// 			label: 'sidebar.firestorecrudarticle',
	// 		},
	// 		{
	// 			key: 'investors',
	// 			label: 'sidebar.firestorecrudinvestor',
	// 		},
	// 	],
	// },
	// {
	// 	key: 'contacts',
	// 	label: 'sidebar.contacts',
	// 	leftIcon: 'ion-android-person-add',
	// },
	// {
	// 	key: 'shuffle',
	// 	label: 'sidebar.shuffle',
	// 	leftIcon: 'ion-grid',
	// },
	// {
	// 	key: 'charts',
	// 	label: 'sidebar.charts',
	// 	leftIcon: 'ion-arrow-graph-up-right',
	// 	children: [
	// 		{
	// 			key: 'googleChart',
	// 			label: 'sidebar.googleCharts',
	// 		},
	// 		{
	// 			key: 'reecharts',
	// 			label: 'sidebar.recharts',
	// 		},
	// 		{
	// 			key: 'reactChart2',
	// 			label: 'sidebar.reactChart2',
	// 		},
	// 		{
	// 			key: 'frappeChart',
	// 			label: 'sidebar.frappeChart',
	// 		},
	// 	],
	// },
	// {
	// 	key: 'Forms',
	// 	label: 'sidebar.forms',
	// 	leftIcon: 'ion-android-mail',
	// 	children: [
	// 		{
	// 			key: 'InputField',
	// 			label: 'sidebar.input',
	// 		},
	// 		{
	// 			key: 'editor',
	// 			label: 'sidebar.editor',
	// 		},
	// 		{
	// 			key: 'FormsWithValidation',
	// 			label: 'sidebar.formsWithValidation',
	// 		},
	// 		{
	// 			key: 'progress',
	// 			label: 'sidebar.progress',
	// 		},
	// 		{
	// 			key: 'button',
	// 			label: 'sidebar.button',
	// 		},
	// 		{
	// 			key: 'tab',
	// 			label: 'sidebar.tab',
	// 		},
	// 		{
	// 			key: 'checkbox',
	// 			label: 'sidebar.checkbox',
	// 		},
	// 		{
	// 			key: 'radiobox',
	// 			label: 'sidebar.radiobox',
	// 		},
	// 		{
	// 			key: 'selectbox',
	// 			label: 'sidebar.selectbox',
	// 		},
	// 		{
	// 			key: 'transfer',
	// 			label: 'sidebar.transfer',
	// 		},
	// 		{
	// 			key: 'autocomplete',
	// 			label: 'sidebar.autocomplete',
	// 		},
	// 	],
	// },
	// {
	//   key: 'gridLayout',
	//   label: 'sidebar.boxOptions',
	//   leftIcon: 'ion-cube'
	// },
	// {
	// 	key: 'uielements',
	// 	label: 'sidebar.uiElements',
	// 	leftIcon: 'ion-leaf',
	// 	children: [
	// 		{
	// 			key: 'op_badge',
	// 			label: 'sidebar.badge',
	// 		},
	// 		{
	// 			key: 'op_card',
	// 			label: 'sidebar.card2',
	// 		},
	// 		{
	// 			key: 'op_carousel',
	// 			label: 'sidebar.corusel',
	// 		},
	// 		{
	// 			key: 'op_collapse',
	// 			label: 'sidebar.collapse',
	// 		},
	// 		{
	// 			key: 'op_popover',
	// 			label: 'sidebar.popover',
	// 		},
	// 		{
	// 			key: 'op_tooltip',
	// 			label: 'sidebar.tooltip',
	// 		},
	// 		{
	// 			key: 'op_tag',
	// 			label: 'sidebar.tag',
	// 		},
	// 		{
	// 			key: 'op_timeline',
	// 			label: 'sidebar.timeline',
	// 		},
	// 		{
	// 			key: 'dropdown',
	// 			label: 'sidebar.dropdown',
	// 		},
	// 		{
	// 			key: 'pagination',
	// 			label: 'sidebar.pagination',
	// 		},
	// 		{
	// 			key: 'rating',
	// 			label: 'sidebar.rating',
	// 		},
	// 		{
	// 			key: 'tree',
	// 			label: 'sidebar.tree',
	// 		},
	// 		{
	// 			key: 'swiperslider',
	// 			label: 'sidebar.swiperslider',
	// 		},
	// 	],
	// },
	// {
	// 	key: 'advancedUielements',
	// 	label: 'sidebar.advancedElements',
	// 	leftIcon: 'ion-flash',
	// 	children: [
	// 		{
	// 			key: 'reactDates',
	// 			label: 'sidebar.reactDates',
	// 		},
	// 		{
	// 			key: 'codeMirror',
	// 			label: 'sidebar.codeMirror',
	// 		},
	// 		{
	// 			key: 'uppy',
	// 			label: 'sidebar.uppy',
	// 		},
	// 		{
	// 			key: 'dropzone',
	// 			label: 'sidebar.dropzone',
	// 		},
	// 	],
	// },
	// {
	// 	key: 'feedback',
	// 	label: 'sidebar.feedback',
	// 	leftIcon: 'ion-thumbsup',
	// 	children: [
	// 		{
	// 			key: 'alert',
	// 			label: 'sidebar.alert',
	// 		},
	// 		{
	// 			key: 'modal',
	// 			label: 'sidebar.modal',
	// 		},
	// 		{
	// 			key: 'message',
	// 			label: 'sidebar.message',
	// 		},
	// 		{
	// 			key: 'notification',
	// 			label: 'sidebar.notification',
	// 		},
	// 		{
	// 			key: 'popConfirm',
	// 			label: 'sidebar.popConfirm',
	// 		},
	// 		{
	// 			key: 'spin',
	// 			label: 'sidebar.spin',
	// 		},
	// 	],
	// },
	// {
	// 	key: 'table',
	// 	label: 'sidebar.tables',
	// 	leftIcon: 'ion-android-menu',
	// 	children: [
	// 		{
	// 			key: 'table_ant',
	// 			label: 'sidebar.antTables',
	// 		},
	// 	],
	// },
	// {
	// 	key: 'pages',
	// 	label: 'sidebar.pages',
	// 	leftIcon: 'ion-document-text',
	// 	children: [
	// 		{
	// 			key: '404',
	// 			label: 'sidebar.404',
	// 			withoutDashboard: true,
	// 		},
	// 		{
	// 			key: '500',
	// 			label: 'sidebar.500',
	// 			withoutDashboard: true,
	// 		},
	// 		{
	// 			key: 'signin',
	// 			label: 'sidebar.signIn',
	// 			withoutDashboard: true,
	// 		},
	// 		{
	// 			key: 'signup',
	// 			label: 'sidebar.signUp',
	// 			withoutDashboard: true,
	// 		},
	// 		{
	// 			key: 'forgotpassword',
	// 			label: 'sidebar.forgotPw',
	// 			withoutDashboard: true,
	// 		},
	// 		{
	// 			key: 'resetpassword',
	// 			label: 'sidebar.resetPw',
	// 			withoutDashboard: true,
	// 		},

	// 		// {
	// 		//   key: 'comingSoon',
	// 		//   label: 'sidebar.comingSoon',
	// 		//    withoutDashboard: true
	// 		// }
	// 	],
	// },
	// {
	// 	key: 'githubSearch',
	// 	label: 'sidebar.githubSearch',
	// 	leftIcon: 'ion-social-github',
	// },
	// {
	// 	key: 'blank_page',
	// 	label: 'sidebar.blankPage',
	// 	leftIcon: 'ion-document',
	// },
];
export default options;
