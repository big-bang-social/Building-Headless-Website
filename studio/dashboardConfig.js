export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa867e40a6d5903972052f8',
                  title: 'Sanity Studio',
                  name: 'building-headless-website-studio',
                  apiId: 'e792b3bb-4c32-4345-92b9-66a255e9f78a'
                },
                {
                  buildHookId: '5fa867e4e9ded3101b574574',
                  title: 'Blog Website',
                  name: 'building-headless-website',
                  apiId: 'ac34da68-7cce-489b-9659-ada79df1a6a7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/big-bang-social/Building-Headless-Website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://building-headless-website.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
