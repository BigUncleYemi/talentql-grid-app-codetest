import React from 'react';
import { FilterBarButtonProps } from '../type';

export default function FilterShapesBarButton(props: FilterBarButtonProps) {
  return (
    <button onClick={() => props.onClick(props.name?.toLowerCase())} className={props.active ? "filter-section_shapes-selector-button active" : "filter-section_shapes-selector-button"}>
      {props.name}
    </button>
  )
}
