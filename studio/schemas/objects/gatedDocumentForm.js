export default {
  name: 'gatedDocumentForm',
  title: 'Gated Document Form',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Button Text',
      name: 'buttonText',
      type: 'string',
    },
    {
      name: 'emailTo',
      type: 'string',
      title: 'Email To',
      description: 'Email address to send contact form to',
      validation: (Rule) =>
        Rule.required().custom((emailTo) => {
          if (!emailTo) {
            return 'Email is required'
          }

          if (!emailTo.includes('@')) {
            return 'Email must be valid'
          }

          if (!emailTo.includes('.')) {
            return 'Email must be valid'
          }

          if (!emailTo.includes('faktorymail.com')) {
            return 'Email must be a faktorymail.com email'
          }

          return true
        }),
    },
  ],
}
