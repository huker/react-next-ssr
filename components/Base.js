import React from 'react';
import { connect } from 'react-redux';
import { HeaderLayout, Footer } from './index';
import Index from '../index';
import { bindActionCreators } from 'redux'
import { menuChange } from '../redux/store'
import { Layout } from 'antd';
import Router from 'next/router';
const { Header, Content } = Layout;

class Base extends React.Component {

    menuCurrent;

    constructor(props) {
        super(props)

    }

    componentWillMount() {
        this.menuCurrent = Router && Router.router && Router.router.route;
        if (this.menuCurrent && this.menuCurrent === '/') {
            this.menuCurrent = '/Home';
        }
    }

    render() {
        return (
            <Index>
                {
                    this.menuCurrent &&
                    <Layout>
                        <Header>

                            <HeaderLayout
                                menuCurrent={this.menuCurrent}/>
                        </Header>
                        <Content>
                            <div>
                                {this.props.children}
                            </div>
                        </Content>
                        <Footer />
                    </Layout>

                }
            </Index>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        menuChange: bindActionCreators(menuChange, dispatch),
    }
};

Base = connect(null, mapDispatchToProps)(Base);

export default Base