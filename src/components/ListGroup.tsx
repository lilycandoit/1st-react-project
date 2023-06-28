import { useState } from "react";

// {items: [], head: string}
interface Props {
  items: string[];
  heading: string;
  //same with onClick
  onSelectItem: (item: string) => void;
}

const ListGroup = ({items, heading, onSelectItem}:  Props) => {

  const [selectedIndex, setSelectedIndex] = useState(-1);
  // let selectedIndex = 0;

  // const setSelectedIndex = (index:number) => {
  //   selectedIndex = index;
  //   console.log(selectedIndex);
  //   return selectedIndex;
  // }
  

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p> No item found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
