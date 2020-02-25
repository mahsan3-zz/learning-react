import React from "react";

function QuoteCard(props) {

    return (
        <li className="list-group-item">
            Symbol: {props.symbol}
            {
                props.isLoading ?
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div> :
                    <div>
                        Price: ${props.price} | <span style={{color: props.changeColor}}>
                            Change: ${props.change}
                        </span>
                    </div>
            }
        </li>
    );

}

export default QuoteCard;