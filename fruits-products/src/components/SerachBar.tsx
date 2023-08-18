import React from "react";

const SerachBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        Only showed product in stock
      </label>
    </form>
  );
};

export default SerachBar;
