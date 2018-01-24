import { HeaderLayout, Footer } from './index';
import { bindActionCreators } from 'redux'
import { initStore, menuChange } from '../redux/store'
import withRedux from 'next-redux-wrapper'
import { Layout } from 'antd';
const { Header, Content } = Layout;

class Base extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
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
                <style global jsx>{`

    `}</style>
            </Layout>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        menuChange: bindActionCreators(menuChange, dispatch),
    }
};

Base = withRedux(initStore, (state) => ({ current: state.current }), mapDispatchToProps)(Base);

export default Base