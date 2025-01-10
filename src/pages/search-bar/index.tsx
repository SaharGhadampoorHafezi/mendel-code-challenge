import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onsubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/protein/${value}`);
    console.log(value);
  };
  return (
    <form className="flex flex-col" onSubmit={onsubmitHandler}>
      <label htmlFor="#id" className="text-lg my-4">
        Search your protein ID to get complete information about that!
      </label>
      <input
        type="text"
        id="id"
        placeholder="search for a protein ID"
        value={value}
        onChange={onChangeHandler}
        className="placeholder:text-sm placeholder:text-center rounded-sm mb-4 py-2"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
