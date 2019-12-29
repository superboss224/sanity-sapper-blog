export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5e09165a6afb0e2ef1162f17',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-y36so32e',
                  apiId: '90e74288-fcd4-490f-895f-08182861b0d9'
                },
                {
                  buildHookId: '5e09165a8d0c8aff3d714643',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-geddhccz',
                  apiId: '89f6a976-0b28-4bd4-bf8f-2a02473cbc0d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/superboss224/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-geddhccz.netlify.com', category: 'apps'}
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
