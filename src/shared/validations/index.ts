export const required = (value: string) =>
  value || typeof value === 'number' ? undefined : 'Required';