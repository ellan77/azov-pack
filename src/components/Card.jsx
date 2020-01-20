import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <>
            <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">{this.props.name}</h4>
                </div>
                <div className="card-body ">
                  <img src={this.props.image} alt="" className="card_image" />
                </div>
                <button type="button" className="btn btn-lg btn-block btn-primary ">Просмотреть</button>
              </div>
            </>
        );
    }
}

export default Card;
