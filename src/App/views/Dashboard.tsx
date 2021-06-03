import React from 'react';
import { connect } from 'react-redux';
import { getAllShapes } from '../../App/redux/actions/index';
import { FilterBar, FilterShapesBarButton, FilterColorsBarButton, FilterResultCard } from '../components';

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
    return  "All items.";
  }

  if ((activeColor.length === 1 ) && (activeShapes.length === 1) ) {
    return  `${activeColor[0]} ${activeShapes[0]} items.`;
  }

  if ((activeColor.length < initialColors.length && activeColor.length > 0 ) && (activeShapes.length === 1 ) ) {
    return  `Multiple ${activeShapes[0]} items.`;
  } 

  if ((activeColor.length === 1 ) || (activeShapes.length < initialShapes.length && activeShapes.length > 0 ) ) {
    return  `Multiple ${activeColor[0]} items.`;
  }

  if ((activeColor.length < initialColors.length && activeColor.length > 1 ) || (activeShapes.length < initialShapes.length && activeShapes.length > 1 ) ) {
    return  "Multiple items.";
  }
}

function Dashboard(props: any) {
  const { shapes, getAllShapes } = props;
  React.useEffect(() => {
    getAllShapes()
  } ,[getAllShapes])
  const [activeShapes, setActiveShapes] = React.useState(initialShapes);

  const [activeColor, setActiveColor] = React.useState(initialColors);

  const data = shapes?.filter((i: any)=> activeColor.includes(i.color) && activeShapes.includes(i.shape)) || [];

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
                (item: any, index: any) => (
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
                (item: any, index: any) => (
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
          <h3>{getTitle(activeColor, activeShapes)} ({data.length})</h3>
          <div className="filter-section_results">
            {
              data.map((item: any, index: any) => (
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

const mapStateToProps = ({ shapes }: { shapes: any }) => {
  return { shapes: shapes.shapes };
};

const mapDispatchToProps = {
  getAllShapes,
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
