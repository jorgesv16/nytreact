import React from "react";

const Query = props => (
  <div className="row">
      <div className="col-sm-12">

        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>Search</strong></h3>
          </div>
          <div className="panel-body">

            <form role="form">

              <div className="form-group">
                <label for="search">Topic:</label>
                <input 
                  value={props.articleSearch}
                  name="search-term"
                  onChange={App.handleInputChange}
	              type="text" 
	              className="form-control" 
	            />
              </div>


              <div className="form-group">
                <label for="start-year">Start Year:</label>
                <input 
                  value= <Aprops.yearFrom}
                  name="search-term"
                  onChange={App.handleInputChange}
	              type="text" 
	              className="form-control"
                />
              </div>


              <div className="form-group">
                <label for="end-year">End Year:</label>
                <input 
                  value={props.yearTo}
                  name="search-term"
                  onChange={App.handleInputChange}
	              type="text" 
	              className="form-control"
                />
              </div>

              <button type="submit" className="btn btn-default"><i className="fa fa-search"></i> Search</button>

            </form>
          </div>
        </div>
      </div>
    </div>
);

export default Query;