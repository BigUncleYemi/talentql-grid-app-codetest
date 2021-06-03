import React from 'react';
import { FilterBarButtonProps } from '../type';

export default function FilterColorsBarButton(props: FilterBarButtonProps) {
  return (
    <button
      style={{backgroundColor: props.color}}
      onClick={() => props.onClick(props.name)}
      className={props.active ? "filter-section_colors-selector-button active" : "filter-section_colors-selector-button"}
    />
  )
}
