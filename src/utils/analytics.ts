export function trackFormSubmission(formData: { email: string }) {
  // In a real app, you would send this to your analytics service
  console.log('Form submission tracked:', formData.email);
}

export function trackSectionView(sectionId: string) {
  console.log('Section viewed:', sectionId);
}