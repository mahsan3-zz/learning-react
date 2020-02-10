import React from "react";

export default class NewItemForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          itemName: "",
          itemDescription: ""
        };
    }

    onFieldChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        });

        console.log(this.state);
    };

    emitFormValues = () => {
      this.props.parentalUnit(this.state);
      this.setState({
          itemName: "",
          itemDescription: ""
      });
    };

    render() {
        return (
            <form>

                <div className="form-group">
                    <label htmlFor="item-name">Item Name</label>
                    <input type="text" className="form-control" id="item-name" name="itemName"
                           value={this.state.itemName} onChange={this.onFieldChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="item-description">Short Description</label>
                    <textarea rows="3"  type="text" className="form-control" id="item-description" name="itemDescription"
                              value={this.state.itemDescription} onChange={this.onFieldChange}
                    ></textarea>
                </div>

                <button type="button" className="btn btn-success float-right" onClick={this.emitFormValues}>Submit</button>

            </form>
        );
    }

}