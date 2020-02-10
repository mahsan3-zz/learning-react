import React from "react";
import CoffeeCard from "../CoffeeCard/CoffeeCard";

class Coffee extends React.Component {

    constructor() {
        super();
        this.state = {
            coffees: [{
                name: "Espresso",
                image: "coffees/espresso.PNG",
                description: "The espresso, also known as a short black, is approximately one ounce of highly concentrated coffee. Although simple in appearance, it can be difficult to master."
            }, {
                name: "Red Eye",
                image: "coffees/redeye.PNG",
                description: "The red eye's purpose is to add a boost of caffeine to your standard cup of coffee."
            }, {
                name: "Black Eye",
                image: "coffees/blackeye.PNG",
                description: "The black eye is just the doubled version of the red eye and is very high in caffeine."
            }, {
                name: "Americano",
                image: "coffees/americano.PNG",
                description: "Americanos are popular breakfast drinks and thought to have originated during World War II. Soldiers would add water to their coffee to extend their rations farther. The water dilutes the espresso while still maintaining a high level of caffeine."
            }, {
                name: "Long Black",
                image: "coffees/longblack.PNG",
                description: "The long black is a similar coffee drink to the americano, but it originated in New Zealand and Australia. It generally has more crema than an americano."
            }, {
                name: "Macchiato",
                image: "coffees/macchiato.PNG",
                description: "The word 'macchiato' means mark or stain. This is in reference to the mark that steamed milk leaves on the surface of the espresso as it is dashed into the drink. Flavoring syrups are often added to the drink according to customer preference."
            }]
        }
    }

    render() {
        return (
            <div className="row">
                {this.state.coffees.map((c) => {
                    return (
                        <div className="col-12 col-md-3 col-lg-4 pb-3" key={c.name}>
                            <CoffeeCard coffeeItem={c} />
                        </div>
                    );
                })}

                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    Source: <a target="_blank" href="https://www.webstaurantstore.com/article/397/types-of-coffee-drinks.html">webstaurantstore</a>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        );
    }

}

export default Coffee;