import React, { Component, Fragment } from 'react';
import Header from '../../../Components/Header';
import LeftNavi from '../../../Components/LeftNavi';
import Content from '../../../Components/Content';
import Footer from '../../../Components/Footer';

class Layout extends Component {
  render() {
    return (
        <Fragment>
            <Header />
            <LeftNavi />
            <Content />
            <Footer />
        </Fragment>
    );
  }
}

export default Layout;
