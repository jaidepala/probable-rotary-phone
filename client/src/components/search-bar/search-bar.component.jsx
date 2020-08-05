import React from 'react';
import { Input, AutoComplete } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';

import { message, Button, Space } from 'antd';

const SearchBarComponent = () => {

    const renderTitle = (title) => {
        return (
            <span>
                {title}
                <a
                    style={{ float: 'right' }}
                    href="https://www.google.com/search?q=antd"
                    target="_blank"
                    rel="noopener noreferrer">

                    more
                </a>
            </span>
        );
    };

    const renderItem = (title, count) => {
        return {
            value: title,
            label: (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>

                    {title}
                    <span>
                        <ShoppingOutlined /> {count}
                    </span>
                </div>
            ),
        };
    };

    const options = [
        {
            label: renderTitle('Grocery'),
            options: [renderItem('Apple', 100), renderItem('Banana', 400), renderItem('Strawberry', 600)],
        },
        {
            label: renderTitle('Milk'),
            options: [renderItem('Amul Cheese', 230), renderItem('Dahi', 120)],
        },
        {
            label: renderTitle('Bread'),
            options: [renderItem('Multi Protein Bread', 130)],
        },
    ];

    const handleSearch = (eve) => {

        let searchValue = eve.target.value;
        if(searchValue)
        {
            message.error(searchValue + ' unavailable.');
        }
    };

    return (
        <AutoComplete
            dropdownClassName="certain-category-search-dropdown"
            style={{ width: '100%' }}
            options={options}>

            <Input.Search size="large" placeholder="what do you desire?" onSelect={handleSearch} />
        </AutoComplete>
    );
}

export default SearchBarComponent;
