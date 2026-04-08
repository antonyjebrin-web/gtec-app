import { useState } from 'react';
import styles from './ContactForm.module.css';

const courses = [
  'Full Stack',
  'Tally',
  'Cyber Security',
  'Data Science',
  'Digital Marketing',
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    address: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.phone || !formData.course || !formData.address) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit enquiry');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', course: '', address: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError('Unable to send message. Please make sure the server is running.');
      console.error(err);
    }
  };

  return (
    <div className={styles.contactFormPage}>
      <div className={styles.formWrapper}>
        <h2 className={styles.formTitle}>Contact Us</h2>
        <p className={styles.formSubtitle}>Please fill in your details and we’ll contact you soon.</p>

        {submitted && <div className={styles.successMessage}>Your enquiry was submitted successfully.</div>}
        {error && <div className={styles.errorMessage}>{error}</div>}

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="course" className={styles.label}>Select Course</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className={styles.select}
              required
            >
              <option value="">Choose a course</option>
              {courses.map((course) => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address" className={styles.label}>Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className={styles.textarea}
              rows={4}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
