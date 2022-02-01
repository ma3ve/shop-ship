import React, { useState } from 'react';
import { Modal, Form, Input, Button, Checkbox } from 'antd';
import joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi'
import { useForm } from 'react-hook-form';
import axios from 'axios'

type Props = {};

export const CustomerJoi = joi.object({
	name: joi.string().required(),
	email: joi.string().required().email({ tlds: false }),
	mobile: joi.string().required(),
	city: joi.string().required(),
});

function CustomerForm({ }: Props) {

	const { register, handleSubmit, formState: { errors } } = useForm({ resolver: joiResolver(CustomerJoi) })
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const submit = (data: any) => {
		axios.post("/api/customer", data).then(res => {
			setIsModalVisible(false);
		})
	};

	console.log(errors);

	const handleCancel = () => {
		setIsModalVisible(false);
	};


	return (
		<>
			<Button type="primary" onClick={showModal}>
				Create Customer
			</Button>
			<form onSubmit={handleSubmit(submit)}>
				<Modal
					title="Customer Details"
					visible={isModalVisible}
					footer={[
						<Button key="back" onClick={handleCancel}>
							Return
						</Button>,
						<Button key="submit" htmlType='submit' onClick={handleSubmit(submit)}>
							Submit
						</Button>,
					]}
				>
					<Form.Item
						label="Name"
					>
						<input {...register("name")} className='border-blue-400 border-2 w-full ' />
						<p className='text-red-500'>{errors.name && errors.name.message.replaceAll('\"', "")}</p>
					</Form.Item>
					<Form.Item
						label="Email"
					>
						<input {...register("email")} className='border-blue-400 border-2 w-full ' />
						<p className='text-red-500'>{errors.email && errors.email.message.replaceAll('\"', "")}</p>
					</Form.Item>
					<Form.Item
						label="Mobile"
					>
						<input {...register("mobile")} className='border-blue-400 border-2 w-full ' />
						<p className='text-red-500'>{errors.mobile && errors.mobile.message.replaceAll('\"', "")}</p>

					</Form.Item>
					<Form.Item
						label="City"
					>
						<input {...register("city")} className='border-blue-400 border-2 w-full ' />
						<p className='text-red-500'>{errors.city && errors.city.message.replaceAll('\"', "")}</p>
					</Form.Item>
				</Modal>
			</form >
		</>
	);
}

export default CustomerForm;
