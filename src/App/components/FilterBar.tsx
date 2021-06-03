import React from 'react';
import {FilterBarProps} from '../type';

export default function FilterBar(props: FilterBarProps) {
  return (
    <div className="filter-section">
      <h4>{props.name}</h4>
      <div>
        {props.children}
      </div>
    </div>
  )
}
