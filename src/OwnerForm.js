import { useState } from 'react';
import './OwnerForm.css';

function OwnerForm() {
  const [ name, setName ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ ssn, setSsn ] = useState('');
  const [ success, setSuccess ] = useState(false);
  const [ errors, setErrors ] = useState({
    name: '',
    address: '',
    ssn: ''
  })

  function validateSsn() {
    if(ssn === '') {
      return setErrors({...errors, ssn: 'SSN is required'})
    } else if(ssn.length < 9 || ssn.length > 9) {
      return setErrors({...errors, ssn: 'SSN must be 9 characters'})
    }
  }

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
          onBlur={() => validateSsn()}
        />
        {errors.ssn && <p>{errors.ssn}</p>}
        <button id='submit' type='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
      {success && <h2>Form Submitted</h2>}
    </div>
  );
}

export default OwnerForm;