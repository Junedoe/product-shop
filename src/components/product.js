import React, { Component } from 'react';
import { getProductJson, getProductJsonItem } from '../services/productService';

class Product extends Component {
    state = {
        items: [],
        isLoading: false,
        error: null
    };

    componentDidMount() {
        try {
            const items = getProductJson();
            console.log(items);
            this.setState({ items });
        } catch (error) {
            this.setState({
                error,
                isLoading: false
            });
        }
    }

    async handleDetails(anObjectMappedKey) {
        // save orginalItems
        const originalItems = this.state.items;

        try {
            const items = await getProductJsonItem(anObjectMappedKey);
            this.setState({ items });
        } catch (ex) {
            if (ex.response && ex.response.status === 404) console.log(ex);

            // back saved Items to items
            this.setState({ items: originalItems });
        }
    }

    getRows() {
        if (this.state.items) {
            return (
                <div className="heading">
                    <h1 className="text-center mt-5">Recommended Products</h1>

                    <div className="card-deck card-deck--mod">
                        {this.state.items.map((anObjectMapped, index) => (
                            <div className="card card--mod" key={anObjectMapped.id} id="images">
                                <img
                                    className="card-img-top"
                                    src={'http://localhost:3000/' + anObjectMapped['product-photo']}
                                    alt={anObjectMapped['product-photo']}
                                />
                                <div className="card-body">
                                    <h3 className="card-title"> {anObjectMapped.label}</h3>
                                    <h4 className="card-subtitle mb-2">{anObjectMapped.price}</h4>
                                </div>
                                <div className="card-body">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => this.handleDetails(anObjectMapped.id)}
                                    >
                                        show only me
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        } else {
            return <p>data is not available</p>;
        }
    }
    render() {
        const { isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }
        return <div className="row">{this.getRows()}</div>;
    }
}

export default Product;
