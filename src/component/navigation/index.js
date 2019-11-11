import React from 'react';
import styles from '../../module/styles.module.css';
import Menu from '../menu';

class Navigation extends React.Component {
  constructor(props){
    super(props);

    this.toggleNav = React.createRef();

    this.state = {
      isOpened: false
    }

    this.onClickHandle = this.onClickHandle.bind(this);
    this.onClickOutside = this.onClickOutside.bind(this);
  }

  onClickHandle() {
    this.setState((current) => ({
      isOpened: !current.isOpened
    }))
  }

  onClickOutside(event) {
    if(this.state.isOpened && this.toggleNav.current.contains(event.target)){
      this.setState({
        isOpened: false
      })
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutside);
  }

  render() {
    return(
      <div ref={this.toggleNav} className={styles.root__navbar}>
        <Menu/>
      </div>
    );
  }
}

export default Navigation;