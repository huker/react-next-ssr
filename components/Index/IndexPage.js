/**
 * Created by huk on 2018/2/1.
 */
import React from 'react';
import { connect } from 'react-redux'
import { Base } from '../index';
import { bindActionCreators } from 'redux';
import { menuChange } from '../../redux/store';

//首页组件
class IndexPage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Base>
                    <img src="../static/logo.jpg" alt=""/>
                </Base>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        menuChange: bindActionCreators(menuChange, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(IndexPage)
