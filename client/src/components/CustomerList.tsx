import React, { useState, useEffect } from 'react';
import { Table } from 'antd'
import axios from 'axios'
type Props = {};

function CustomerList({ }: Props) {
	const [customers, setCustomers] = useState([]);
	useEffect(() => {
		axios.get("/api/customer").then(res => setCustomers(res.data))
	}, []);
	console.log(customers);

	const columns = [
		{
			title: 'Id',
			dataIndex: '_id',
			key: '_id'
		},
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name'
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email'
		},
		{
			title: 'Mobile',
			dataIndex: 'mobile',
			key: 'mobile'
		},
		{
			title: 'City',
			dataIndex: 'city',
			key: 'city'
		}
	]
	return <Table dataSource={customers} columns={columns} />;
}

export default CustomerList;
