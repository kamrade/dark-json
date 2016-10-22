module.exports = {
	itemsCount: 40,

	min: {
		'payments':{
			'captured': 1000,
			'declined': 500,
			'voided': 0,
			'chargeback': 0
		},
		'refunds':{
			'captured': 500,
			'declined': 250
		},
		'payouts':{
			'captured': 500,
			'declined': 250
		}
	},

	max: {
		'payments':{
			'captured': 100000,
			'declined': 15000,
			'voided': 1000,
			'chargeback': 1000
		},
		'refunds':{
			'captured': 20000,
			'declined': 5000
		},
		'payouts':{
			'captured': 15000,
			'declined': 5000
		}
	}
};
