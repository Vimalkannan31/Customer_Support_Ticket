import * as Yup from 'yup';

export const FormSchema = Yup.object().shape({
  ticket_name: Yup.string()
    .required('Ticket Name is required')
    .min(3, 'Ticket Name must be at least 3 characters')
    .max(100, 'Ticket Name must be less than 100 characters'),

  ticket_type: Yup.string()
    .required('Ticket Type is required'),

  module: Yup.string()
    .required('Module is required'),

  ticket_description: Yup.string()
    .required('Ticket Description is required')
    .min(10, 'Ticket Description must be at least 10 characters')
    .max(500, 'Ticket Description must be less than 500 characters'),

  attachment: Yup.mixed()
    .required('Attachment is required')
    .test('fileSize', 'File Size is too large', value => value && value.size <= 5 * 1024 * 1024)  // 5MB
    .test('fileFormat', 'Unsupported Format', value => value && ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'].includes(value.type)),
});
