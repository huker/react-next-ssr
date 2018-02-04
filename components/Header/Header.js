import React from 'react';
import Link from 'next/link';
import { Icon, Layout, Menu } from 'antd';
const SubMenu = Menu.SubMenu;
import { connect } from 'react-redux';
import stylesheet from 'styles/base.less';

export default connect(state => state)(({ menuCurrent }) => {

    return (
        <Layout>
            <style dangerouslySetInnerHTML={{ __html: stylesheet }}/>
            <div className="header">
                <Link href="/">
                    <div className="logo"/>
                </Link>
                <Menu
                    mode="horizontal"
                    selectedKeys={menuCurrent}
                    style={{ lineHeight: '64px', float: 'right', fontSize: '16px', color: '#666' }}
                    id="nav"
                    key="nav"
                >
                    <Menu.Item key="/Home">
                        <Link href="/">
                            <a>首页</a>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="/product"
                             title={<div><span style={{ marginLeft: '10px' }}>产品及服务</span><Icon
                                 type="caret-down"/></div>}>
                        <Menu.Item key="/ImagePlatform">
                            <Link href="/product/ImagePlatform">
                                <a>pro1</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/DataPlatform">
                            <Link href="/product/DataPlatform">
                                <a>pro2</a>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="/case" title={<div><span style={{ marginLeft: '10px' }}>成功案例</span><Icon
                        type="caret-down"/></div>}>
                        <Menu.Item key="/Hospital">
                            <Link href="/case/Hospital">
                                <a>Hospital</a>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="health">
                        <a href="http://www.baidu.com" target="__blank">外链</a>
                    </Menu.Item>
                </Menu>
            </div>
        </Layout>
    )
})
