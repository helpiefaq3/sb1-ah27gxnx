import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Input } from '../ui/Input';

interface Props {
  quantity: number;
  pricePerResume: number;
}

export function PersonalInfoForm({ quantity, pricePerResume }: Props) {
  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: ''
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.name) errors.name = 'Name is required';
      if (!values.email) errors.email = 'Email is required';
      if (!values.email.includes('@')) errors.email = 'Invalid email address';
      if (!values.phone) errors.phone = 'Phone number is required';
      return errors;
    },
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    }
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-6 rounded-lg bg-blue-50 p-4">
        <p className="text-sm text-blue-800">
          Order Summary: {quantity} {quantity === 1 ? 'Resume' : 'Resumes'} at ${pricePerResume} each
        </p>
        <p className="mt-1 text-lg font-bold text-blue-900">
          Total: ${quantity * pricePerResume}
        </p>
      </div>

      <Input
        label="Full Name"
        name="name"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
        required
      />

      <Input
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
        required
      />

      <Input
        label="Phone"
        name="phone"
        type="tel"
        value={values.phone}
        onChange={handleChange}
        error={errors.phone}
        required
      />
    </form>
  );
}