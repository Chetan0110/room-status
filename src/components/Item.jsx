import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Item Component -
 * to display each row of items like ROOMS, ADULTS, CHILDREN
 * with respective icons of it, plus and minus button to increase and decrease
 * numbers of each items
 */
class Item extends Component {
    render() {
        return (
            <div style={{ fontSize: "20px" }}>

                {/* Logo and name of Item */}
                <span> <i className={`fa fa-${this.props.icon}`}></i>{` ${this.props.content}`}</span>

                {/* Plus button using font-awesome icon*/}
                <span className='pull-right'>
                    <i
                        className="fa fa-plus-circle"
                        style={{ color: "DarkBlue", marginLeft: "10px", marginRight: "10px", cursor: "pointer" }}
                        onClick={e =>
                            this.props.content === 'ROOMS' && this.props.counter === 5 ?
                                alert('You have reached your limit to add rooms...') :
                                this.props.onPlusClick(this.props.content)
                        }
                    >
                    </i>
                </span>

                {/* Counter of number of ROOMS, ADULTS or CHILDREN which increases or decreases based
                    plus or minus button click
                */}
                <span className='pull-right' style={{ marginLeft: "10px", color: "grey" }}>{this.props.counter}</span>

                {/* Minus button using font-awesome minus icon */}
                <span className='pull-right' >
                    <i
                        className="fa fa-minus-circle"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={e =>
                            this.props.content === 'ROOMS' && this.props.counter === 1 ?
                                alert('You can not have 0 rooms...') :
                                this.props.content === 'ADULTS' && this.props.counter === 1 ?
                                    alert('Atleast one adult has to be present in the room...') :
                                    this.props.content === 'CHILDREN' && this.props.counter === 0 ?
                                        alert('Invalid decrement...') :
                                        this.props.onMinusClick(this.props.content)
                        }
                    >
                    </i>
                </span>

            </div>
        );
    }
}

Item.propTypes = {
    content: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired,
    onPlusClick: PropTypes.func.isRequired,
    onMinusClick: PropTypes.func.isRequired
};

export default Item;