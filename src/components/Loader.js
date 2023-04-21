import React from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';

export default function Loader() {
  return (
    <MDBSpinner role='status'>
      <span className='visually-hidden'>Loading...</span>
    </MDBSpinner>
  );
}