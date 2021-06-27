import React from "react";
import "./SearchPanel.css";



class SearchPanel extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      value : ''
    }

    this.searchData = this.searchData.bind(this);
    this.inputHandler = this.inputHandler.bind(this)
  }

  
  inputHandler(event){
    this.setState({ value : event.target.value.toLowerCase() })
    
  }

  searchData(){
    this.props.onStateChange(this.state.value);
  }

  
  render()
  {
     
    return (
      <div>
     

      <div class="col-xs-6 col-md-6">
            <div class="input-group">
              <input
                type="search"
                class="searchbox form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                onInput={this.inputHandler}
               
              />
              <button type="button" onClick={this.searchData} class="btn btn-outline-primary">
                search
              </button>
            </div>
          </div>
      </div>
      
    );

  }
}


export default SearchPanel;

