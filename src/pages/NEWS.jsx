import React from 'react';
import { keyword } from '../components/BubbleChart/keyword.js';
import MyComponent from '../components/BubbleChart/MyComponent.js';

const NEWS = () => {
    return (
        <div>
           NEWS
           <MyComponent data = {keyword} />
        </div>
    );
};

export default NEWS;