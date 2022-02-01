import { Button } from 'antd';
import React from 'react';
import CustomerForm from '../components/CustomerForm';
import CustomerList from '../components/CustomerList';

type Props = {};

function Customer({ }: Props) {
	return <>
		<div className='flex flex-row justify-end mb-10'>
			<CustomerForm />
		</div>
		<div>
			<CustomerList />
		</div>
	</>
}

export default Customer;
