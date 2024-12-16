import { useState } from 'react';
import { z } from 'zod';

interface UseFormProps<T> {
  initialValues: T;
  validationSchema?: z.ZodType<T>;
  onSubmit: (values: T) => Promise<void>;
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  validationSchema,
  onSubmit,
}: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    
    if (validationSchema) {
      try {
        validationSchema.parse(values);
        setErrors(prev => ({ ...prev, [name]: undefined }));
      } catch (error) {
        if (error instanceof z.ZodError) {
          const fieldError = error.errors.find(err => err.path[0] === name);
          if (fieldError) {
            setErrors(prev => ({ ...prev, [name]: fieldError.message }));
          }
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    if (validationSchema) {
      try {
        validationSchema.parse(values);
      } catch (error) {
        if (error instanceof z.ZodError) {
          const newErrors = error.errors.reduce((acc, curr) => {
            const field = curr.path[0] as keyof T;
            acc[field] = curr.message;
            return acc;
          }, {} as Record<keyof T, string>);
          setErrors(newErrors);
          setStatus('error');
          return;
        }
      }
    }

    try {
      await onSubmit(values);
      setStatus('success');
      setValues(initialValues);
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
    }
  };

  return {
    values,
    errors,
    status,
    handleChange,
    handleSubmit,
  };
}