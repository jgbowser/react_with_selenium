import { useState } from 'react';
import './OwnerForm.css';

function OwnerForm() {
  const [ name, setName ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ ssn, setSsn ] = useState('');
  const [ success, setSuccess ] = useState(false);

  function handleSubmit(e) {
    e.preventDefault()
    if(name && address && ssn) {
      setSuccess(true);
    }
  }

  return (
    <div id='form-wrapper'>
      <form id='owner-form'>
        <label htmlFor='name'>Name</label>
        <input 
          id='name' 
          name='name'
          value={name}
          onChange={(e => setName(e.target.value) )}
        />
        <label htmlFor='address'>Address</label>
        <input 
          id='address' 
          name='address'
          value={address}
          onChange={(e => setAddress(e.target.value) )}
        />
        <label htmlFor='ssn'>SSN</label>
        <input 
          id='ssn' 
          name='ssn'
          value={ssn}
          onChange={(e => setSsn(e.target.value) )}
        />
        <button id='submit' type='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
      {success && <h1>Form Submitted</h1>}
    </div>
  );
}

export default OwnerForm