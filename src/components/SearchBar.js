import React from "react";
/*
<input type="text" onChange={(e)=>console.log(e.target.value)} />   //alternative callback
<input type="text" onChange={this.onInputChange} />
*/

class SearchBar extends React.Component {
  /*
    onInputChange(event){
        console.log(event.target.value);
    */
  state = { term: "" };

  /*
        constructor() {
            this.onFormSubmit=this.onFormSubmit.bind(this); // alternative to fix undefined
        }

    */

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
