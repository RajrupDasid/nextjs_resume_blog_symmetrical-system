import React, { ChangeEvent, FormEvent, Component } from "react";

// Define an interface for the component's props (if required)
interface SearchFormProps {
  // Add props here if needed
}

class SearchForm extends Component<SearchFormProps, { searchQuery: string }> {
  constructor(props: SearchFormProps) {
    super(props);
    this.state = {
      searchQuery: "", // Initialize the searchQuery state
    };
  }

  handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Update the searchQuery state when the input field changes
    this.setState({ searchQuery: event.target.value });
  };

  handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const { searchQuery } = this.state;

    // Handle the search query, e.g., send it to an API
    console.log("Search Query:", searchQuery);

    // You can make an API request here or perform any other actions.
  };

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={this.state.searchQuery}
            onChange={this.handleSearchInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
