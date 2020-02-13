import React from "react";
import NewItemForm from "./NewItemForm";
import {addCoffee} from "../store/actions/app.actions";
import {connect} from "react-redux";

// Should have called this 'NewItemContainer'
class NewItem extends React.Component {

    constructor(props) {
        super(props);
    }

    onSubmitHandler = (formData) => {
        console.log('Hail destroyer...');
        console.log(this.props);
        this.props.addItem(formData);
    };

    render() {
        return (
            <div className="row">
                <div className="col">

                    <h1>Add a new item</h1>

                    <NewItemForm parentalUnit={this.onSubmitHandler}/>

                    <h4>List of items in store</h4>
                    <ul>
                        {this.props.items.map((item, i) => {
                            return (
                                <li key={i}>
                                    <p>{item.itemName}</p>
                                    <p>{item.itemDescription}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }

}

// Expose props to the component from the store
const mapStateToProps = state => {
    return {
        items: state.coffeeItems
    };
};

// Specify which dispatchers are available for this component
const mapDispatchToProps = dispatch => {
    return {
        addItem: item => {
            dispatch(addCoffee(item));
        }
    };
};

// Redux wrapper for component
export default connect(mapStateToProps, mapDispatchToProps)(NewItem);