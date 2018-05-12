import React from 'react';
import ReactDOM from 'react-dom';
import Item from '../components/Item';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Item
            content='ROOMS'
            icon='bed'
            counter={1}
            onPlusClick={() => { }}
            onMinusClick={() => { }}
        />,
        div);
    ReactDOM.unmountComponentAtNode(div);
});
