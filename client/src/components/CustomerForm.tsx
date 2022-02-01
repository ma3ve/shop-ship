import React, { useState } from 'react';
import { Modal, Form, Input, Button, Checkbox } from 'antd';
import joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi'
import { useForm } from 'react-hook-form';

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

	const handleOk = () => {

	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};


	return (
		<>
			<Button type="primary" onClick={showModal}>
				Create Customer
			</Button>
			<form onSubmit={handleSubmit(handleOk)}>
				<Modal
					title="Customer Details"
					visible={isModalVisible}
					footer={[
						<Button key="back" onClick={handleCancel}>
							Return
						</Button>,
						<Button key="submit" htmlType='submit' onClick={() => handleSubmit(handleOk)} >
							Submit
						</Button>,
					]}
				>
					<Form.Item
						label="Name"
					>
						<Input {...register("name")} />
					</Form.Item>
					<Form.Item
						label="Email"
					>
						<Input {...register("email")} />
					</Form.Item>
					<Form.Item
						label="Mobile"
					>
						<Input {...register("mobile")} />
					</Form.Item>
					<Form.Item
						label="City"
					>
						<Input {...register("city")} />
					</Form.Item>
				</Modal>
			</form >
		</>
	);
}

export default CustomerForm;
