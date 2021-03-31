import React from 'react';
import { Spinner } from 'react-bootstrap';

let Loader = (props) => {
  return (
    <div className="d-flex justify-content-center loading">
      <Spinner animation="border" role="status">
        {/* <span className="sr-only">Loading...</span> */}
      </Spinner>
    </div>
  )
}


export default Loader;

{/* <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div> */}