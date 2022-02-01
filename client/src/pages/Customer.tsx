import { Button } from 'antd';
import React from 'react';
import CustomerForm from '../components/CustomerForm';

type Props = {};

function Customer({ }: Props) {
	return <div className='flex flex-row justify-end'>
		<div >
			<CustomerForm />
		</div>
	</div>;
}

export default Customer;
