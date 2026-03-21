import { useState, useMemo } from "react";
import { FixedSizeList as List } from "react-window";
import { generateItems } from "../utils/generateItems";

export function VirtualList({ itemCount = 10000 }) {

  const [filter, setFilter] = useState("");

  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  const filteredItems = useMemo(() => {

    if (!filter) return items;

    return items.filter((item) =>
      item.title.toLowerCase().includes(filter.toLowerCase())
    );

  }, [items, filter]);

  return (
    <div>

      <input
        placeholder="Filter..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <List
        height={500}
        width="100%"
        itemCount={filteredItems.length}
        itemSize={80}
      >
        {({ index, style }) => {

          const item = filteredItems[index];

          return (
            <div style={style}>

              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <span>{item.category}</span>

            </div>
          );
        }}
      </List>

    </div>
  );
}