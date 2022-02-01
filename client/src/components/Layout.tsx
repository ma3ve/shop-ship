import React from 'react';
import { Layout as AntDLayout, Menu } from 'antd';
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = AntDLayout;

type Props = {
	children: React.ReactNode
};
function Layout({ children }: Props) {
	return (
		<AntDLayout>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={(broken) => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
				style={{ height: '100vh' }}
			>
				<div className="logo" style={{
					justifyContent: 'center',
				}}>
					<h1 style={{
						color: 'white',
						padding: '20px'
					}}>
						ShopShip
					</h1>
				</div>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
					<Menu.Item key="customer" icon={<UserOutlined />}>
						Customers
					</Menu.Item>
					<Menu.Item key="purchase" icon={<VideoCameraOutlined />}>
						Purchases
					</Menu.Item>
					<Menu.Item key="shippings" icon={<UploadOutlined />}>
						Shippings
					</Menu.Item>
				</Menu>
			</Sider>
			<AntDLayout>
				<Header
					className="site-layout-sub-header-background"
					style={{ padding: 0 }}
				/>
				<Content style={{ margin: '24px 16px 0' }}>
					<div
						className="site-layout-background"
					// style={{ padding: 24, minHeight: '90vh' }}
					>
						{children}
					</div>
				</Content>
			</AntDLayout>
		</AntDLayout>
	);
}

export default Layout;
