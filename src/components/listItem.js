import React, { Component } from 'react';
import PropTypes from 'prop-types'
class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  //????????dom????????
  //?????????
  componentWillReceiveProps(){
    // console.log('componentWillReceiveProps(){')

  }
  shouldComponentUpdate(Props,nextState){ //????
    // console.log(Props)
    
    return Props.content!== this.props.content? true :false
  }
  componentWillUnmount(){
    // console.log('componentWillUnmount()')
  }
  handleClick(){
    console.log(this.props.index)
    this.props.deleteItem(this.props.index,1)
  }
  render() { 
    // console.log('childs')
    return (
      <div onClick={this.handleClick.bind(this)}>{this.props.name}--{this.props.content}</div>
    );
  }
}
ListItem.propTypes={
  name:PropTypes.string.isRequired,
  // content:PropTypes.string,
  index:PropTypes.number
}
 
ListItem.defaultProps={
  name:'小明'
}
export default ListItem;
