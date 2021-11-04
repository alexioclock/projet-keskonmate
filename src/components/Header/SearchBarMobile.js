import {
  Search,
} from 'react-feather';

const SearchBarMobile = () => (
  <div className="div-form-mobile">

    {/* OnClick: the form-mobile appears */}
    <button
      type="button"
      className="form-display"
    >
      <Search />
    </button>

    {/* Form for the mobile that appear when you click on the search icon
    It replaces all the header */}
    <form className="form-mobile">
      <input
        className="form-mobile-input"
        placeholder="Que recherchez-vous ?"
      />
      <button
        type="submit"
        className="form-mobile-submit"
      >
        <Search size="20" />
      </button>
    </form>


  </div>
);

export default SearchBarMobile;
