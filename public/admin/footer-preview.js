var FooterPreview = createClass({
    render: function () {
      var entry = this.props.entry;

      var footerLogo = entry.getIn(['data', 'footerLogo']);
      var darkModeLogoSrc = entry.getIn(['data', 'darkModeLogoSrc']);
      
      var iconLinks = entry.getIn(['data', 'iconLinks']);
      var iconLinksArray;
      if (iconLinks) {
          iconLinksArray = iconLinks.toJS();
      }
      
      var buttonTitle = entry.getIn(['data', 'buttonTitle']);
      var buttonText = entry.getIn(['data', 'buttonText']);
      var buttonLink = entry.getIn(['data', 'buttonLink']);
      
      var pageLinks = entry.getIn(['data', 'pageLinks']);
      var pageLinksArray;
      if (pageLinks) {
          pageLinksArray = pageLinks.toJS();
      }
      
    return h(
        'div',
        { style: { fontFamily: 'Arial', maxWidth: '1200px', padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '2rem' } },
        //LIGHT MODE
        h(
            'footer',
            {
              style: {
                backgroundColor: '#F8F9EE',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              },
            },
            h('div', {
              style: {
                height: '2px',
                width: '100%',
                background: 'linear-gradient(to right, #C6AFC0, #2E363E)',
              },
            }),
            h(
              'div',
              {
                style: {
                  width: '100%',
                  padding: '4rem 2.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  items: 'center',
                  maxWidth: '1000px'
                },
              },
                h('div', { style: { width: '33%', display: 'flex', alignItems: 'center', justifyContent:'start'}}, 
                    h('img', {
                        src: footerLogo, // Light mode logo
                        loading: 'lazy',
                        alt: 'Footer Logo',
                        style: {
                            maxWidth: '174px',
                            height: 'auto',
                        },
                        }),
                ),
                
                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '2rem',
                      marginBottom: '1rem',
                      width: '33%',
                    },
                  },
                  h(
                    'div',
                    {
                      style: {
                        display: 'flex',
                        gap: '2rem',
                      },
                    },
                    iconLinksArray.map((i) =>
                      h(
                        'a',
                        {
                          href: i.iconLink,
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          style: {
                            display: 'inline-block',
                            transition: 'transform 0.3s ease-in-out',
                          },
                        },
                        h('img', {
                          src: i.iconImageSrc,
                          alt: i.imageAlt,
                          loading: 'lazy',
                          style: {
                            height: '30px',
                            width: '30px',
                            transition: 'transform 0.3s ease-in-out',
                          },
                        }),                     
                    )
                    )
                  ),
                  h(
                    'h2',
                    {
                      style: {
                        color: '#2E363E', // NavySmoke
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        maxWidth: '375px',
                      },
                    },
                    buttonTitle
                  ),
                  h(
                    'a',
                    {
                      href: buttonLink,
                      style: {
                        display: 'inline-block',
                        backgroundColor: '#C6AFC0', // Mauvelous
                        padding: '0.75rem 1.5rem',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        color: '#FFFFFF',
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'background 0.3s ease-in-out',
                      },
                    },
                    buttonText
                  )
                ),
                h(
                    'div',
                    {
                      style: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        width: '33%',
                      },
                    },
                    h(
                      'ul',
                      {
                        style: {
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1rem',
                          maxWidth: '175px',
                          alignItems: 'start',
                        
                        },
                      },
                      pageLinksArray.map((l) =>
                        h(
                          'li',
                          {
                            key: l.linkText,
                            style: {
                              color: '#2E363E', // NavySmoke
                              fontWeight: '500',
                              transition: 'font-weight 0.3s ease-in-out',
                              textAlign: 'center',
                              marginBottom: '1rem',
                              listStyleType: 'none',
                            },
                          },
                          h(
                            'a',
                            {
                              href: l.link,
                              ...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
                              style: {
                                textDecoration: 'none',
                                color: '#2E363E',
                                transition: 'color 0.3s ease-in-out',
                              },
                            },
                            l.linkText
                          )
                        )
                      )
                    ),
                    h(
                      'div',
                      {
                        style: {
                          display: 'flex',
                          justifyContent: 'center',
                          fontSize: '12px',
                          color: '#2E363E', // NavySmoke
                          marginTop: '1rem',
                        },
                      },
                      'Made with ',
                      h('span', { style: { display: 'inline-block', padding: '0 0.5rem' } }, String.fromCodePoint(128420)), // Heart Emoji
                      ' by ',
                      h(
                        'a',
                        {
                          href: 'https://leighdahlin.com/',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          style: {
                            textDecoration: 'underline',
                            marginLeft: '5px',
                            color: 'black'
                          },
                        },
                        'Leigh Dahlin'
                      )
                    )
                )
              ),
              
          ),     
          
          //DARK MODE
          h(
            'footer',
            {
              style: {
                backgroundColor: '#2E363E',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              },
            },
            h('div', {
              style: {
                height: '2px',
                width: '100%',
                background: 'linear-gradient(to right, #C6AFC0, #FCFC62)',
              },
            }),
            h(
              'div',
              {
                style: {
                  width: '100%',
                  padding: '4rem 2.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  items: 'center',
                  maxWidth: '1000px'
                },
              },
                h('div', { style: { width: '33%', display: 'flex', alignItems: 'center', justifyContent:'start'}}, 
                    h('img', {
                        src: darkModeLogoSrc, // Dark mode logo
                        loading: 'lazy',
                        alt: 'Footer Logo',
                        style: {
                            maxWidth: '174px',
                            height: 'auto',
                        },
                        }),
                ),
                
                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '2rem',
                      marginBottom: '1rem',
                      width: '33%',
                    },
                  },
                  h(
                    'div',
                    {
                      style: {
                        display: 'flex',
                        gap: '2rem',
                      },
                    },
                    iconLinksArray.map((i) =>
                      h(
                        'a',
                        {
                          href: i.iconLink,
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          style: {
                            display: 'inline-block',
                            transition: 'transform 0.3s ease-in-out',
                          },
                        },
                        h('img', {
                          src: i.darkmodeSrc,
                          alt: i.imageAlt,
                          loading: 'lazy',
                          style: {
                            height: '30px',
                            width: '30px',
                            transition: 'transform 0.3s ease-in-out',
                          },
                        }),                     
                    )
                    )
                  ),
                  h(
                    'h2',
                    {
                      style: {
                        color: '#F8F9EE', // NavySmoke
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        maxWidth: '375px',
                      },
                    },
                    buttonTitle
                  ),
                  h(
                    'a',
                    {
                      href: buttonLink,
                      style: {
                        display: 'inline-block',
                        backgroundColor: '#FCFC62',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        color: 'black',
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'background 0.3s ease-in-out',
                      },
                    },
                    buttonText
                  )
                ),
                h(
                    'div',
                    {
                      style: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        width: '33%',
                      },
                    },
                    h(
                      'ul',
                      {
                        style: {
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1rem',
                          maxWidth: '175px',
                          alignItems: 'start',
                        
                        },
                      },
                      pageLinksArray.map((l) =>
                        h(
                          'li',
                          {
                            key: l.linkText,
                            style: {
                              fontWeight: '500',
                              transition: 'font-weight 0.3s ease-in-out',
                              textAlign: 'center',
                              marginBottom: '1rem',
                              listStyleType: 'none',
                            },
                          },
                          h(
                            'a',
                            {
                              href: l.link,
                              ...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
                              style: {
                                textDecoration: 'none',
                                color: '#F8F9EE',
                                transition: 'color 0.3s ease-in-out',
                              },
                            },
                            l.linkText
                          )
                        )
                      )
                    ),
                    h(
                      'div',
                      {
                        style: {
                          display: 'flex',
                          justifyContent: 'center',
                          fontSize: '12px',
                          color: '#F8F9EE',
                          marginTop: '1rem',
                        },
                      },
                      'Made with ',
                      h('span', { style: { display: 'inline-block', padding: '0 0.5rem' } }, String.fromCodePoint(0x1F90D)), // Heart Emoji
                      ' by ',
                      h(
                        'a',
                        {
                          href: 'https://leighdahlin.com/',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          style: {
                            textDecoration: 'underline',
                            marginLeft: '5px',
                            color: '#F8F9EE'
                          },
                        },
                        'Leigh Dahlin'
                      )
                    )
                )
              ),
              
          )  
        )

    }
})

CMS.registerPreviewTemplate('footer', FooterPreview);