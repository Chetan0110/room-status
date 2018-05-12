import React, { Component } from 'react';

import Item from './Item';

/**
 * Home Component -
 * to start the application with
 * Renders the root div with three Item component and
 * maintains the state of the number of ROOMS, ADULTS and CHILDREN
 * and logic related to those numbers
 */
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: 1,
            adults: 1,
            children: 0
        };
        this.onClickOfPlus = this.onClickOfPlus.bind(this);
        this.onClickOfMinus = this.onClickOfMinus.bind(this);
    }

    onClickOfPlus = (content) => {
        switch (content) {
            case 'ROOMS':
                {
                    this.setState({ rooms: this.state.rooms + 1 });
                    if (this.state.rooms + 1 > this.state.adults + this.state.children) {
                        this.setState({
                            adults: this.state.adults +
                                ((this.state.rooms + 1) - (this.state.adults + this.state.children))
                        });
                    }
                    break;
                }
            case 'ADULTS':
                {
                    if (this.state.rooms * 4 >= this.state.adults + 1 + this.state.children) {
                        this.setState({
                            adults: this.state.adults + 1,
                        });
                    }
                    else if (this.state.rooms < 5) {
                        this.setState({
                            rooms: this.state.rooms + 1,
                            adults: this.state.adults + 1
                        });
                    }
                    else {
                        alert('You have reached the limit of accommodating the persons in your 5 rooms...');
                    }
                    break;
                }
            case 'CHILDREN':
            default:
                {
                    if (this.state.rooms * 4 >= this.state.adults + this.state.children + 1) {
                        this.setState({
                            children: this.state.children + 1,
                        });
                    }
                    else if (this.state.rooms < 5) {
                        this.setState({
                            rooms: this.state.rooms + 1,
                            children: this.state.children + 1
                        });
                    }
                    else {
                        alert('You have reached the limit of accommodating the persons in your 5 rooms...');
                    }
                    break;
                }
        }

    }

    onClickOfMinus = (content) => {
        let rooms = this.state.rooms;
        let adults = this.state.adults;
        let children = this.state.children;
        switch (content) {
            case 'ROOMS': {
                while ((adults + children) > (4 * (rooms - 1))) {
                    if (children > 0) {
                        children--;
                    }
                    else {
                        adults--;
                    }
                }
                this.setState({
                    rooms: rooms - 1,
                    adults: adults,
                    children: children
                })
                break;
            }
            case 'ADULTS':
                {
                    while (rooms > adults - 1 + children) {
                        rooms--;
                    }
                    this.setState({ adults: adults - 1, rooms: rooms })
                    break;
                }
            case 'CHILDREN':
            default:
                {
                    while (rooms > adults + children - 1) {
                        rooms--;
                    }
                    this.setState({ children: children - 1, rooms: rooms });
                    break;
                }
        }
    }

    render() {
        const style = {
            marginLeft: '25%',
            width: '50%',
            border: '1px grey solid',
            color: 'DarkBlue'
        }
        return (
            <div>
                <h1>Room Status</h1>
                <p style={{
                    marginLeft: '25%',
                    marginTop: '50px',
                    color: 'DarkBlue',
                    fontSize: '20px'
                }}>
                    <i className="fa fa-users"></i> Choose number of <b>people</b>
                </p>
                <div style={style}>
                    <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                        <hr />
                        <Item
                            content='ROOMS'
                            icon='bed'
                            counter={this.state.rooms}
                            onPlusClick={this.onClickOfPlus}
                            onMinusClick={this.onClickOfMinus}
                        />
                        <hr />
                        <Item
                            content='ADULTS'
                            icon='user'
                            counter={this.state.adults}
                            onPlusClick={this.onClickOfPlus}
                            onMinusClick={this.onClickOfMinus}
                        />
                        <hr />
                        <Item
                            content='CHILDREN'
                            icon='child'
                            counter={this.state.children}
                            onPlusClick={this.onClickOfPlus}
                            onMinusClick={this.onClickOfMinus}
                        />
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;