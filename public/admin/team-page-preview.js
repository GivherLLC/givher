var TeamPagePreview = createClass({
  getInitialState: function () {
    return { showBio: null }; // Initial state for showBio
  },

  toggleBio: function (member) {
    this.setState({ showBio: this.state.showBio ? null : member });
  },

  render: function () {
    var { teamPageTitle, teamMembers } = this.props.entry
      .getIn(['data'])
      .toJS();
    var { showBio } = this.state;

    return h(
      'div',
      {
        style: {
          backgroundColor: '#FFFFFF',
          padding: '2.5rem 0',
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '1200px',
          fontFamily: 'Arial',
        },
      },
      h(
        'div',
        {
          style: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem',
            maxWidth: '85.75rem',
            padding: '0 0.625rem',
            width: '100%',
          },
        },
        h(
          'h1',
          {
            style: {
              color: '#2E363E',
              fontSize: '2.5rem',
            },
          },
          teamPageTitle
        ),
        h(
          'div',
          {
            style: {
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              gap: '5rem',
              width: '100%',
              justifyContent:
                teamMembers.length > 2 ? 'space-between' : 'space-around',
              flexDirection: window.innerWidth >= 1280 ? 'row' : 'column',
            },
          },
          teamMembers.map((t, i) =>
            h(
              'div',
              {
                key: t.name,
                style: {
                  display: 'flex',
                  flexDirection: window.innerWidth >= 1280 ? 'column' : 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: window.innerWidth >= 1280 ? '1rem' : '2rem',
                  maxWidth: window.innerWidth >= 1280 ? '25%' : '100%',
                },
              },
              h('img', {
                loading: 'eager',
                src: t.imageSrc,
                alt: t.name + ' headshot',
                width: 420,
                height: 420,
                onClick: () => this.toggleBio(t),
                style: {
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  marginBottom: '1rem',
                  cursor: 'pointer',
                },
              }),
              h(
                'div',
                {
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    justifyContent: 'center',
                  },
                },
                h(
                  'h2',
                  {
                    style: {
                      color: '#2E363E',
                      fontSize: '2rem',
                      textAlign: 'center',
                      margin: 0,
                    },
                  },
                  t.name
                ),
                h(
                  'p',
                  {
                    style: {
                      color: '#000000',
                      fontSize: '1.25rem',
                      textAlign: 'center',
                      margin: 0,
                    },
                  },
                  t.title
                ),
                h('div', {
                  style: {
                    height: '3px',
                    width: '50px',
                    backgroundColor: '#C6AFC0',
                  },
                }),
                h(
                  'div',
                  { style: { display: 'flex', gap: '2rem' } },
                  h(
                    'div',
                    {
                      style: {
                        display: 'flex',
                        gap: '2rem',
                      },
                    },
                    t.iconLinks.map((icon, index) =>
                      h(
                        'a',
                        {
                          key: index,
                          href: icon.iconLink,
                          target: '_blank', // Open link in a new tab
                          rel: 'noopener noreferrer',
                          style: {
                            display: 'inline-block',
                          },
                        },
                        h('img', {
                          src: icon.iconImageSrc,
                          alt: icon.iconImageAlt,
                          height: 27,
                          width: 27,
                          style: {
                            transition: 'transform 0.3s ease-in-out',
                          },
                        })
                      )
                    )
                  ),
                  // Custom button component
                  h(
                    'button',
                    {
                      onClick: () => this.toggleBio(t),
                      style: {
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'center',
                        cursor: 'pointer',
                        backgroundColor: 'transparent',
                        border: 'none',
                      },
                    },
                    h(
                      'p',
                      {
                        style: {
                          color: '#000000',
                          fontSize: '1rem',
                          margin: 0,
                        },
                      },
                      'View Bio'
                    ),
                    h('img', {
                      loading: 'lazy',
                      src: '/images/common/arrow-black.svg',
                      alt: 'arrow',
                      width: 20,
                      height: 20,
                      style: {
                        width: '20px',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    })
                  )
                )
              )
            )
          )
        ),
        // Overlay for Bio
        showBio &&
          h(
            'div',
            {
              style: {
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 101,
                maxWidth: '1040px',
              },
            },
            h(
              'div',
              {
                style: {
                  backgroundColor: '#F8F9EE',
                  maxWidth: '1040px',
                  padding: '2.5rem',
                  maxHeight: '80vh',
                  overflowY: 'auto',
                  position: 'relative',
                  display: 'flex',
                  gap: '1.5rem',
                },
              },
              h(
                'button',
                {
                  onClick: () => this.toggleBio(null),
                  style: {
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: 'transparent',
                  },
                },
                h('div', {
                  style: {
                    height: '2px',
                    width: '20px',
                    backgroundColor: '#808080',
                    transform: 'rotate(-45deg)',
                    position: 'absolute',
                  },
                }),
                h('div', {
                  style: {
                    height: '2px',
                    width: '20px',
                    backgroundColor: '#808080',
                    transform: 'rotate(45deg)',
                    position: 'absolute',
                  },
                })
              ),
              h(
                'div',
                {
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                  },
                },
                h('img', {
                  loading: 'lazy',
                  src: showBio.imageSrc,
                  alt: `${showBio.name} headshot`,
                  width: 420,
                  height: 420,
                  style: {
                    maxWidth: '325px',
                    height: 'auto',
                    marginBottom: '1rem',
                  },
                }),
                h(
                  'h2',
                  {
                    style: {
                      color: '#000000',
                      fontSize: '1.5rem',
                      margin: 0,
                    },
                  },
                  showBio.name
                ),
                h(
                  'p',
                  {
                    style: {
                      color: '#000000',
                      fontSize: '1rem',
                      margin: 0,
                    },
                  },
                  showBio.title
                ),
                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                      gap: '2rem',
                    },
                  },
                  showBio.iconLinks.map((icon, index) =>
                    h(
                      'a',
                      {
                        key: index,
                        href: icon.iconLink,
                        target: '_blank', // Open link in new tab
                        rel: 'noopener noreferrer',
                        style: {
                          display: 'inline-block',
                        },
                      },
                      h('img', {
                        src: icon.iconImageSrc,
                        alt: icon.iconImageAlt,
                        height: 27,
                        width: 27,
                        style: {
                          transition: 'transform 0.3s ease-in-out',
                        },
                      })
                    )
                  )
                )
              ),
              // Paragraph section for bio details
              h(
                'div',
                {
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '1rem',
                    padding: '0 2rem',
                  },
                },
                showBio.bio.map((paragraph, index) =>
                  h(
                    'p',
                    {
                      key: index,
                      style: {
                        color: '#000000',
                        fontSize: '1rem',
                        margin: 0,
                        lineHeight: 1.5,
                      },
                    },
                    paragraph.paragraph
                  )
                )
              )
            )
          )
      )
    );
  },
});

CMS.registerPreviewTemplate('teamPage', TeamPagePreview);
