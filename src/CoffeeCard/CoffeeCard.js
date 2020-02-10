import React from "react";

class CoffeeCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            coffeeObj  : props.coffeeItem,
            selected: false
        };

        this.toggleLike = this.toggleLike.bind(this);
    }

    toggleLike() {
        this.setState(state => ({
            selected: !state.selected
        }));
    }

    render() {
        return (
            <div className="card">
                <img src={this.state.coffeeObj.image} className="card-img-top" alt="coffee :P" />
                <div className="card-body">
                    <h5 className="card-title">{this.state.coffeeObj.name}</h5>
                    <p className="card-text">
                        {this.state.coffeeObj.description}
                    </p>
                    <button className="btn btn-primary" onClick={this.toggleLike}>
                        Like {this.state.selected ? <img src="icons/check.svg" alt="" width="32" height="32" title="check" />: ''}

                    </button>
                </div>
            </div>
        );
    }

}

export default CoffeeCard;