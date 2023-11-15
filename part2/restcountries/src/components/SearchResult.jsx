import { Country } from "./Country";

export const SearchResult = ({ countries, search }) => {
  return (
    <>
      {search && (
        <>
          {countries.length === 1 ? (
            <Country country={countries[0]} />
          ) : (
            <>
              {countries.length > 10 ? (
                <div> Too many matches, specify another filter</div>
              ) : (
                <div>
                  {countries.map((e) => {
                    return <Country country={e} key={e.name} />;
                  })}
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};
