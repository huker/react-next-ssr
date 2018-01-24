/**
 * Created by huk on 2018/1/22.
 */
import Index from '../index';
import { Base } from '../components/index';
import { bindActionCreators } from 'redux';
import { initStore, menuChange, } from '../redux/store';
import withRedux from 'next-redux-wrapper';


class IndexPage extends React.Component {
    static getInitialProps({ store, isServer }) {
        return
    }

    render() {
        return (
            <Index>
                <Base>
                    <p>This is the about page</p>
                </Base>
            </Index>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        menuChange: bindActionCreators(menuChange, dispatch),
    }
};

export default withRedux(initStore, null, mapDispatchToProps)(IndexPage)
