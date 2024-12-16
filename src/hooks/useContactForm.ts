import { useState } from 'react';
import { contactFormSchema, type ContactFormData } from '../utils/validation';
import { trackFormSubmission } from '../utils/analytics';

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateField = (name: keyof ContactFormData, value: string) => {
    try {
      contactFormSchema.shape[name].parse(value);
      setErrors(prev => ({ ...prev, [name]: undefined }));
    } catch (error) {
      if (error instanceof Error) {
        setErrors(prev => ({ ...prev, [name]: error.message }));
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name as keyof ContactFormData, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      contactFormSchema.parse(formData);
      
      // In a real application, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      trackFormSubmission({ email: formData.email });
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Form validation error:', error);
      setStatus('error');
    }
  };

  return {
    formData,
    errors,
    status,
    handleSubmit,
    handleChange,
  };
}