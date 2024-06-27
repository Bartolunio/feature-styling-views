import React, { useState, ChangeEvent, FormEvent } from 'react';
import './BillingDetails.css';

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  streetAddress: string;
  apartment: string;
  townCity: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  shipToDifferentAddress: boolean;
}

const BillingDetails: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'UNITED STATES (US)',
    streetAddress: '',
    apartment: '',
    townCity: '',
    state: 'CALIFORNIA',
    zipCode: '',
    phone: '',
    email: '',
    shipToDifferentAddress: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dane formularza:', formData);
  };

  return (
    <form className='billingForm' onSubmit={handleSubmit}>
      <h2 className='formTitle'>Billing details</h2>

      <div className='formGroup'>
        <label htmlFor='firstName'>FIRST NAME *</label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div className='formGroup'>
        <label htmlFor='lastName'>LAST NAME *</label>
        <input
          type='text'
          id='lastName'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className='formGroup'>
        <label htmlFor='companyName'>COMPANY NAME (OPTIONAL)</label>
        <input
          type='text'
          id='companyName'
          name='companyName'
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>

      <div className='formGroup'>
        <label htmlFor='country'>COUNTRY / REGION *</label>
        <select
          id='country'
          name='country'
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value='UNITED STATES (US)'>UNITED STATES (US)</option>
        </select>
      </div>

      <div className='formGroup'>
        <label htmlFor='streetAddress'>STREET ADDRESS *</label>
        <input
          type='text'
          id='streetAddress'
          name='streetAddress'
          placeholder='House number and street name'
          value={formData.streetAddress}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          id='apartment'
          name='apartment'
          placeholder='Apartment, suite, unit, etc. (optional)'
          value={formData.apartment}
          onChange={handleChange}
        />
      </div>

      <div className='formGroup'>
        <label htmlFor='townCity'>TOWN / CITY *</label>
        <input
          type='text'
          id='townCity'
          name='townCity'
          value={formData.townCity}
          onChange={handleChange}
          required
        />
      </div>

      <div className='formGroup'>
        <label htmlFor='state'>STATE *</label>
        <select
          id='state'
          name='state'
          value={formData.state}
          onChange={handleChange}
          required
        >
          <option value='CALIFORNIA'>CALIFORNIA</option>
        </select>
      </div>

      <div className='formGroup'>
        <label htmlFor='zipCode'>ZIP CODE *</label>
        <input
          type='text'
          id='zipCode'
          name='zipCode'
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
      </div>

      <div className='formGroup'>
        <label htmlFor='phone'>PHONE *</label>
        <input
          type='tel'
          id='phone'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className='formGroup'>
        <label htmlFor='email'>EMAIL ADDRESS *</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className='formGroup checkboxGroup'>
        <input
          type='checkbox'
          id='shipToDifferentAddress'
          name='shipToDifferentAddress'
          checked={formData.shipToDifferentAddress}
          onChange={handleChange}
        />
        <label htmlFor='shipToDifferentAddress'>
          SHIP TO A DIFFERENT ADDRESS?
        </label>
      </div>
    </form>
  );
};

export default BillingDetails;
