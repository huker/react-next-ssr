/**
 * Created by huk on 2018/1/22.
 */
import React from 'react';
import { IndexPage } from '../components/index';
import { initStore } from '../redux/store';
import withRedux from 'next-redux-wrapper';

//首页路由
class IndexRoute extends React.Component {

    static async getInitialProps({ store, isServer }) {
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <IndexPage/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default withRedux(initStore, null, mapDispatchToProps)(IndexRoute)
