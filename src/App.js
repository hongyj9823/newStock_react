import React, { useState } from "react";

import LineChart from './component/LineChart.js'
import TreemapChart from './component/TreemapChart.js'
import BubbleChart from './component/BubbleChart.js'
import HeadLogo from './component/HeadLogo.js';
import Footer from './component/Footer.js';
import News from './component/News.js';
import './App.css';

const content = [
  {
    tab: "NEWS",
    content:
    <TreemapChart/>
  },
  {
    tab: "STOCK",
    content:
    <LineChart/>
    
  }
];

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex
  };
};
function App() {
  const { contentItem , contentChange } = useTabs(0, content);
  return (

     <div className='Frame'>
       <HeadLogo title = "newStock" />

      {content.map((section, index) => (
        <button onClick={() => contentChange(index)}>{section.tab}</button>
      ))}
      <br />
      <br />
      {contentItem.content}
    
      
     <Footer/>
    
    </div>
  );
}

export default App;