import { useState } from "react";

const useTabs = (initialTabIndex, allTabs) => {
  const [currentIndex, setIndex] = useState(initialTabIndex);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setIndex,
  };
};

export default useTabs;
