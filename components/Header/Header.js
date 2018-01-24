import Link from 'next/link'
import { Icon, Layout, Menu } from 'antd';
const SubMenu = Menu.SubMenu;
import { connect } from 'react-redux'

export default connect(state => state)(({ current, menuChange }) => {

    return (
        <Layout>
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
                            <Link href="/ImagePlatform">
                                <a>pro1</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="DataPlatform">
                            <Link href="/DataPlatform">
                                <a>Pro2</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="Apps">
                            <Link href="/Apps">
                                <a>pro2</a>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="/case" title={<div><span style={{ marginLeft: '10px' }}>成功案例</span><Icon
                        type="caret-down"/></div>}>
                        <Menu.Item key="Hospital">
                            <Link href="/Hospital">
                                <a>case1</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="MeinianHealth">
                            <Link href="/MeinianHealth">
                                <a>case2</a>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="health">
                        <a href="http://www.baidu.com" target="__blank">外链</a>
                    </Menu.Item>
                    <SubMenu key="/about" title={<div><span style={{ marginLeft: '10px' }}>关于我们</span><Icon
                        type="caret-down"/></div>}>
                        <Menu.Item key="Company">
                            <Link href="/Company">
                                <a>公司简介</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="Contact">
                            <Link href="/Contact">
                                <a>联系我们</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="Join">
                            <Link href="/Join">
                                <a>加入我们</a>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
            <style>
                {`
            .logo {
    width: 178px;
    height: 40px;
    background: url('../../static/logo.svg') no-repeat;
    border-radius: 6px;
    float: left;
    margin-top: 12px;
    &:hover {
      cursor: pointer;
    }
    .header {
    max-width: 1200px;
    margin: 0 auto;
  }
  }
            `}
            </style>
        </Layout>
    )
})
