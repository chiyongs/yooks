import React, { useState } from "react";
import "./styles.css";

const content = [
  {
    tabs: "Section 1",
    content: "I'm the content of Section 1",
  },
  {
    tabs: "Section 2",
    content: "I'm the content of Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tabs}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
