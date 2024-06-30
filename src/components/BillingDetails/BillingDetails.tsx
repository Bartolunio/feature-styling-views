import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Select from 'react-select';
import axios from 'axios';
import styles from './BillingDetails.module.css'; // Zaktualizowana ścieżka do stylów

interface Option {
  value: string;
  label: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  companyName?: string;
  country: Option | null;
  streetAddress: string;
  apartment?: string;
  townCity: string;
  state: Option | null;
  zipCode: string;
  phone: string;
  email: string;
  blikCode: string;
}

const BillingDetails: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    country: null,
    streetAddress: '',
    apartment: '',
    townCity: '',
    state: null,
    zipCode: '',
    phone: '',
    email: '',
    blikCode: '',
  });

  const [countries, setCountries] = useState<Option[]>([]);
  const [states, setStates] = useState<Option[]>([]);

  useEffect(() => {
  
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        const countriesData = response.data.map((country) => ({
          value: country.alpha2Code,
          label: country.name,
        }));
        setCountries(countriesData);
      })
      .catch((error) => {
        console.error('Error fetching countries data:', error);
      });


    axios
      .get('https://api.example.com/states')
      .then((response) => {
        const statesData = response.data.map((state) => ({
          value: state.code,
          label: state.name,
        }));
        setStates(statesData);
      })
      .catch((error) => {
        console.error('Error fetching states data:', error);
      });
  }, []);

  const handleCountryChange = (selectedOption: Option | null) => {
    setFormData({
      ...formData,
      country: selectedOption,
    });
  };

  const handleStateChange = (selectedOption: Option | null) => {
    setFormData({
      ...formData,
      state: selectedOption,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.blikCode) {
      alert('Operacja poprawnie przeprowadzona');
      window.location.href = '/';
    } else {
      alert('Proszę wypełnić wszystkie wymagane pola');
    }
  };

  return (
    <form className={styles.billingForm} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Billing details</h2>
      <div className={styles.formGroup}>
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
      <div className={styles.formGroup}>
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
      <div className={styles.formGroup}>
        <label htmlFor='companyName'>COMPANY NAME (OPTIONAL)</label>
        <input
          type='text'
          id='companyName'
          name='companyName'
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='country'>COUNTRY / REGION *</label>
        <Select
          id='country'
          name='country'
          value={formData.country}
          onChange={handleCountryChange}
          options={countries}
          placeholder='Select country...'
          required
        />
      </div>
      <div className={styles.formGroup}>
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
      <div className={styles.formGroup}>
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
      <div className={styles.formGroup}>
        <label htmlFor='state'>STATE *</label>
        <Select
          id='state'
          name='state'
          value={formData.state}
          onChange={handleStateChange}
          options={states}
          placeholder='Select state...'
          required
        />
      </div>
      <div className={styles.formGroup}>
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
      <div className={styles.formGroup}>
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
      <div className={styles.formGroup}>
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
      <div className={styles.formGroup}>
        <label htmlFor='blikCode'>BLIK CODE *</label>
        <input
          type='text'
          id='blikCode'
          name='blikCode'
          value={formData.blikCode}
          onChange={handleChange}
          pattern='\d{6}'
          maxLength={6}
          inputMode='numeric'
          required
        />
      </div>
      <button type='submit' className={styles.payButton}>
        Zapłać
      </button>
    </form>
  );
};

export default BillingDetails;
