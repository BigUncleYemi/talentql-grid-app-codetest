import React from 'react';
import { FilterBar, FilterShapesBarButton, FilterColorsBarButton, FilterResultCard } from '../components';
import shapes from '../../utils/data.json';

const initialShapes = [
  "oval",
  "round",
  "triangle",
  "square",
  "rectangle",
];

const initialColors = [
  'red',
  'blue',
  'green',
  'yellow',
  'gray',
  'sky blue'
];

function getTitle(activeColor: any, activeShapes: any) {
  if (activeColor.length === initialColors.length && activeShapes.length === initialShapes.length) {
    return  "All items";
  }

  // if 
}

function App() {
  const [activeShapes, setActiveShapes] = React.useState(initialShapes);

  const [activeColor, setActiveColor] = React.useState(initialColors);

  const data = shapes.filter(i => activeColor.includes(i.color) && activeShapes.includes(i.shape));

  const handleShapes = (item: string) => {
    let newShapes;
    const oldShapes = [...activeShapes];
    if (oldShapes.includes(item)) {
      newShapes = oldShapes.filter(i => i !== item);
    } else {
      newShapes = [...oldShapes, item];
    }

    if (newShapes.length < 1) {
      newShapes = initialShapes;
    }

    setActiveShapes(newShapes);
  }


  const handleColors = (item: string) => {
    let newColors;
    const oldColors = [...activeColor];
    if (oldColors.includes(item)) {
      newColors = oldColors.filter(i => i !== item);
    } else {
      newColors = [...oldColors, item];
    }

    if (newColors.length < 1) {
      newColors = initialColors;
    }

    setActiveColor(newColors);
  }

  return (
    <main className="container">
      <h3>Filter</h3>
      <section>
        <FilterBar name="Shapes">
          <div className="filter-section_shapes-selector">
            {
              [
                { name: "Oval" },
                { name: "Round" },
                { name: "Triangle" },
                { name: "Square" },
                { name: "Rectangle" },
              ].map(
                (item, index) => (
                  <FilterShapesBarButton
                    key={index}
                    name={item.name}
                    active={activeShapes.includes(item.name.toLowerCase())}
                    onClick={handleShapes}
                  />
                )
              )
            }
          </div>
        </FilterBar>
        <FilterBar name="Colors">
          <div className="filter-section_colors-selector">
            {
              [
                { name: "red", color: "#ed312b" },
                { name: "blue", color: "#2513ff" },
                { name: "green", color: "#018002" },
                { name: "yellow", color: "#fdfe05" },
                { name: "sky blue", color: "#bad1fd" },
                { name: "gray", color: "#999999" },
              ].map(
                (item, index) => (
                  <FilterColorsBarButton
                    key={index}
                    color={item.color}
                    name={item.name}
                    active={activeColor.includes(item.name)}
                    onClick={handleColors}
                  />
                )
              )
            }
          </div>
        </FilterBar>
        <div>
          <h3>All oval items. ({data.length})</h3>
          <div className="filter-section_results">
            {console.log(shapes.filter(i => activeColor.includes(i.color)))}
            {
              data.map((item, index) => (
                <FilterResultCard
                  key={index}
                  color={item.color}
                  shape={item.shape}
                />
              ))
            }
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
