/**
 * Created by huk on 2018/1/24.
 */
import React from 'react';
import { Base } from '../../components/index';
import { bindActionCreators } from 'redux';
import { initStore, menuChange, } from '../../redux/store';
import withRedux from 'next-redux-wrapper';

class Hospital extends React.Component {
    render() {
        return (
            <Base>
                <p>Hospital</p>
                <p>Hospital</p>
                <p>Hospital</p>
                <p>Hospital</p>
                <p>Hospital</p>
                <p>Hospital</p>
            </Base>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        menuChange: bindActionCreators(menuChange, dispatch),
    }
};

export default withRedux(initStore, null, mapDispatchToProps)(Hospital)