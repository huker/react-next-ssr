import React from 'react';
import Link from 'next/link';
import { Icon, Layout, Menu } from 'antd';
const SubMenu = Menu.SubMenu;
import { connect } from 'react-redux';
import stylesheet from 'styles/base.less';

export default connect(state => state)(({ current, menuChange }) => {

    return (
        <Layout>
            <style dangerouslySetInnerHTML={{ __html: stylesheet }}/>
            <div className="header">
                <Link href="/">
                    <div className="logo"/>
                </Link>
                <Menu
                    mode="horizontal"
                    selectedKeys={current}
                    onClick={(e) => {
                        menuChange(e.key);
                    }}
                    style={{ lineHeight: '64px', float: 'right', fontSize: '16px', color: '#666' }}
                    id="nav"
                    key="nav"
                >
                    <Menu.Item key="home">
                        <Link href="/">
                            <a>首页</a>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="/product"
                             title={<div><span style={{ marginLeft: '10px' }}>产品及服务</span><Icon
                                 type="caret-down"/></div>}>
                        <Menu.Item key="ImagePlatform">
                            <Link href="/Detail">
                                <a>pro1</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="DataPlatform">
                            <a>Pro2</a>
                        </Menu.Item>
                        <Menu.Item key="Apps">
                            <a>pro2</a>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="/case" title={<div><span style={{ marginLeft: '10px' }}>成功案例</span><Icon
                        type="caret-down"/></div>}>
                        <Menu.Item key="Hospital">
                            <a>case1</a>
                        </Menu.Item>
                        <Menu.Item key="MeinianHealth">
                            <a>case2</a>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="health">
                        <a href="http://www.baidu.com" target="__blank">外链</a>
                    </Menu.Item>
                    <SubMenu key="/about" title={<div><span style={{ marginLeft: '10px' }}>关于我们</span><Icon
                        type="caret-down"/></div>}>
                        <Menu.Item key="Company">
                            <Link href="/Detail">
                                <a>公司简介</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="Contact">
                            <a>联系我们</a>
                        </Menu.Item>
                        <Menu.Item key="Join">
                            <a>加入我们</a>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        </Layout>
    )
})
