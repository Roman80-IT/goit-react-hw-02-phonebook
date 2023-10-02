export const Filter = ({ filter, onFilterChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        placeholder="Find contact"
        value={filter}
        onChange={onFilterChange}
      />
    </>
  );
};
