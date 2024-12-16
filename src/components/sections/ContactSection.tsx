import React from 'react';
import { MapPin, Mail, ExternalLink } from 'lucide-react';
import { useContactForm } from '../../hooks/useContactForm';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { TextArea } from '../common/TextArea';
import { Container } from '../layout/Container';
import { useI18n } from '../../i18n/I18nContext';

export function ContactSection() {
  const { formData, errors, status, handleSubmit, handleChange } = useContactForm();
  const { t } = useI18n();

  return (
    <section id="contact" className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">{t('contact.location.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">London House Exchange</p>
                    <p className="text-gray-600">No. 1 Royal Exchange</p>
                    <p className="text-gray-600">London EC3V 3DG</p>
                    <p className="text-gray-600">United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-green-600" />
                  <a href="mailto:contact@fidus.group" className="text-gray-600 hover:text-green-600">
                    contact@fidus.group
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <ExternalLink className="h-6 w-6 text-green-600" />
                  <a href="https://www.fidus.group" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
                    www.fidus.group
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label={t('contact.form.fields.name.label')}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
                placeholder={t('contact.form.fields.name.placeholder')}
              />

              <Input
                label={t('contact.form.fields.email.label')}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
                placeholder={t('contact.form.fields.email.placeholder')}
              />

              <TextArea
                label={t('contact.form.fields.message.label')}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                required
                rows={4}
                placeholder={t('contact.form.fields.message.placeholder')}
              />

              <Button
                type="submit"
                variant="primary"
                isLoading={status === 'submitting'}
                className="w-full"
              >
                {t('contact.form.submit')}
              </Button>
              
              {status === 'success' && (
                <div className="text-green-600 text-center">
                  {t('contact.form.success')}
                </div>
              )}
              
              {status === 'error' && (
                <div className="text-red-600 text-center">
                  {t('contact.form.error')}
                </div>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}