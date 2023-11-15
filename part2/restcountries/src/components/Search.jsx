export const Search = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value.length > 0 ? e.target.value : "");
  };

  return (
    <div>
      find countries <input value={search} onChange={handleChange} />
    </div>
  );
};
