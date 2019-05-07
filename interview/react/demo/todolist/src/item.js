import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Item extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    shouldComponentUpdate(nextProps,nextState){
        if (nextProps.content !== this.props.content) {
            return true
        }else{
            return false
        }
    }
    render(){
        const {content} = this.props;
        return (
            <div>
                <div onClick={this.handleClick}>{content}</div>
            </div>
        )
    }
    handleClick(){
        // console.log(this.props.index)
        const {deleteItem} = this.props
        deleteItem(this.props.index)
    }
}
Item.propTypes = {
    content:PropTypes.string.isRequired,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
Item.defaultProps = {
    content:'hello world'
}

export default Item