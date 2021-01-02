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

export const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
