import React from 'react';
import { connect } from 'react-redux';
import { HeaderLayout, Footer } from './index';
import Index from '../index';
import { bindActionCreators } from 'redux'
import { menuChange } from '../redux/store'
import { Layout } from 'antd';
const { Header, Content } = Layout;

class Base extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Index>
                <Layout>
                    <Header>
                        <HeaderLayout menuChange={this.props.menuChange}/>
                    </Header>
                    <Content>
                        <div>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer />
                </Layout>
            </Index>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        menuChange: bindActionCreators(menuChange, dispatch),
    }
};

Base = connect((state) => ({ current: state.current }), mapDispatchToProps)(Base);

export default Base