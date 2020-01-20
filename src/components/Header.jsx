import React, { Component } from 'react';
import logo from '../images_azov_pack/favicon_io/favicon-32x32.png'

class Header extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light shadow-sm">
                        
                        <img className="mr-2" src={logo} alt=""/>
                        <h5 className="my-0 mr-md-auto font-weight-normal">АзовПак</h5>
                        
                        
                        <nav className="my-2 my-md-0 mr-md-3">
                        {this.props.items.map((item)=>{
                            return(
                            <a className="p-2 text-dark" href={item.url}>{item.name}</a>
                            )
                            
                        })}
                        </nav>
                        {/* <a className="btn btn-outline-primary" href="#">Войти</a> */}
                    </div>
                </div>
            </>
        );
    }
}

export default Header;
