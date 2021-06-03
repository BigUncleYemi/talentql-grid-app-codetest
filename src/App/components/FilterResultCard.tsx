import React from 'react';
import {FilterResultCardProps} from '../type';

const colors: Array<{name: String; color: String}> = [
  {name: "red", color: "#ed312b"},
  {name: "blue", color: "#2513ff"},
  {name: "green", color: "#018002"},
  {name: "yellow", color: "#fdfe05"},
  {name: "sky blue", color: "#bad1fd"},
  {name: "gray", color: "#999999"},
];

function getColorCode(color: string): any {
  return colors?.find((i: any) => i.name === color)?.color;
}

export default function FilterResultCard(props: FilterResultCardProps) {
  return (
    <div className="filter-section_results-card">
      <div style={{backgroundColor: `${getColorCode(props.color)}`}} className={`filter-section_results-card-${props.shape}`} />
    </div>
  )
}
