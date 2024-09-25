var HomePagePreview = createClass({
    render: function () {
      var entry = this.props.entry;
  
    var videoTitle = entry.getIn(['data', 'video', 'videoTitle']);
    var videoDescription = entry.getIn(['data', 'video', 'videoDescription']);
    var videoButtonText = entry.getIn(['data', 'video', 'videoButtonText']);
    var videoButtonLink = entry.getIn(['data', 'video', 'videoButtonLink']);

    var servicesCarouselTitle = entry.getIn(['data', 'services', 'servicesCarouselTitle']);
    var servicesCarouselCards = entry.getIn(['data', 'services', 'sevicesCarouselCards']);
    var servicesCarouselCardsArray;
    if(servicesCarouselCards){
        servicesCarouselCardsArray = servicesCarouselCards.toJS();
    }

    var featuredEventsTitle = entry.getIn(['data', 'featuredEvents', 'title']);

    var aboutTitle = entry.getIn(['data', 'about', 'aboutTitle']);
    var aboutUsSections = entry.getIn(['data', 'about', 'aboutUsSections']);
    var aboutUsSectionsArray;
    if(aboutUsSections){
        aboutUsSectionsArray = aboutUsSections.toJS();
    }

    var eventCarouselTitle = entry.getIn(['data', 'eventCarousel', 'eventCarouselTitle']);
    var eventCarouselImages = entry.getIn(['data', 'eventCarousel', 'eventCarouselImages']);
    var eventCarouselImagesArray;
    if(eventCarouselImages){
        eventCarouselImagesArray = eventCarouselImages.toJS();
    }

          // Homepage Event Card Styles
          const containerStyle = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1.5rem',
            border: '1px solid #2E363E',
            borderRadius: '10px',
            padding: '2.5rem 1.5rem',
            width: '100%',
            width: '352px',
            height: '275px',
            boxShadow: '0 4px 20px 0 rgba(0,0,0,0.15)',
            backgroundColor: '#F8F9EE',
          };
      
          const eventNameStyle = {
            fontWeight: 'bold',
            color: '#2E363E',
            fontSize: '1.25rem',
            margin: 0
          };
      
          const eventInfoStyle = {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1.5rem',
          };
      
          const clientNameStyle = {
            textTransform: 'uppercase',
            color: '#2E363E',
            fontWeight: 'bold',
            maxWidth: '300px',
            paddingBottom: '1.5rem',
            margin: 0,
          };
      
          const buttonStyle = (bgColor) => ({
            textTransform: 'uppercase',
            backgroundColor: bgColor,
            color: '#2E363E',
            padding: '10px 20px',
            borderRadius: '12px',
            fontWeight: 'bold',
            border: '3px solid black',
            position: 'relative',
            zIndex: 10,
            display: 'block',
            transition: 'transform 0.3s',
            textDecoration: 'none',
            width: 'fit-content',
          });    
  
    return h(
        'div',
        { style: { padding: '2rem', fontFamily: 'Arial', maxWidth: '1200px' } },
      
        // Video Section
        h(
            'div',
            {
              style: {
                backgroundColor: 'black',
                height: 'calc(100vh - 65px)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
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
                  width: '100%',
                  height: '100%',
                  left: '0',
                  margin: '0 auto',
                  padding: '1.25rem',
                  textAlign: 'center',
                  top: '0',
                  zIndex: '10',
                },
              },
              h(
                'div',
                {
                  style: {
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingBottom: '50px',
                    gap: '2.5rem',
                  },
                },
                h('h1', { style: { color: '#F8F9EE', margin: 0 } }, videoTitle),
                h(
                  'p',
                  {
                    style: {
                      color: '#F8F9EE',
                      maxWidth: '350px',
                      margin: 0,
                    },
                  },
                  videoDescription
                ),
                h('a', { style: { backgroundColor: '#F8F9EE', color: 'transparent', color: 'black', padding: '0.75rem', minWidth: '175px', text:'center', borderRadius: '0.25rem', textDecoration: 'none', }, href: videoButtonLink, target: '_blank' }, videoButtonText)
              )
            ),
            h('video', {
              id: 'home-video',
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true,
              'aria-hidden': true,
              src: '/videos/givher-video.hevc.mp4',
              style: {
                width: '100%',
                height: '100%',
                backgroundColor: 'black',
                objectFit: 'cover',
                position: 'absolute',
                overflow: 'hidden',
                top: '0',
                opacity: '0.75',
              },
            })
          ),
        
        // Services Section
            h(
            'div',
            {
            style: {
                backgroundColor: '#C6AFC0',
                padding: '2.5rem 0',
                display: 'flex',
                justifyContent: 'center',
            },
            },
            h(
            'div',
            {
                style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem',
                justifyContent: 'center',
                width: '100%',
                maxWidth: '85.75rem',
                margin: '0 0.625rem',
                overflow: 'hidden',
                padding: '2.5rem 0'
                },
            },
            h('h1', {
                style: {
                color: '#2E363E',
                textAlign: 'center',
                margin: 0,
                },
            }, servicesCarouselTitle),
            h(
                'div',
                {
                style: {
                    display: 'flex',
                    overflow: 'hidden',
                },
                },
                servicesCarouselCardsArray.map((c, index) =>
                h(
                    'div',
                    {
                    'data-id': 'card',
                    style: {
                        width: '50%',
                        marginRight: '2rem',
                        borderRadius: '15px',
                    },
                    },
                    h(
                    'div',
                    {
                        style: {
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '15px',
                        },
                    },
                    h('img', {
                        src: c.cardImageSrc,
                        alt: c.cardImageAlt,
                        style: {
                        objectFit: 'cover',
                        height: '372px',
                        width: '315px',
                        },
                    }),
                    h(
                        'div',
                        {
                        style: {
                            position: 'absolute',
                            bottom: '0px',
                            left: '0',
                            padding: '1.25rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                        },
                        },
                        h('h2', {
                        style: {
                            color: '#F8F9EE',
                            fontWeight: '600',
                            paddingBottom: '0.5rem',
                            margin: 0,
                        },
                        }, c.cardTitle),
                        h(
                        'div',
                        {
                            style: {
                            opacity: '1',
                            },
                        },
                        h('p', {
                            style: {
                            color: '#F8F9EE',
                            marginBottom: '1rem',
                            lineHeight: '1.35rem',
                            },
                        }, c.cardDescription),
                        h(
                            'a',
                            {
                              href: c.cardLink,
                              style: {
                                display: 'flex',
                                gap: '1rem',
                                alignItems: 'center',
                                textDecoration: 'none',
                              },
                             target: "_blank",
                            },
                            h(
                              'p',
                              {
                                style: {
                                  color: '#F8F9EE',
                                },
                              },
                              c.cardLinkText
                            ),
                            h('img', {
                              loading: 'lazy',
                              src: `/images/common/arrow-softOpal.png`,
                              height: 20,
                              width: 20,
                              alt: 'arrow',
                              style: {
                                display: 'inline-block',
                                width: '20px',
                              },
                            }),
                          )                                                  
                        )
                    )
                    )
                )
                )
            )
            )
        ),
  
        // Events Section
        h('div', {style:{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem', padding: '2.5rem 0', backgroundColor: '#F8F9EE'}},
            h('h1', {style: {color: '#2E363E', fontWeight: 'bold', fontSize: '2rem', margin: 0}}, featuredEventsTitle),

            h('div', {style: {display: 'flex', flexDirection: 'row', justifyContent: 'center', gap:'1rem'}},
                h(
                    'div',
                    { style: containerStyle },
                    h('p', { style: eventNameStyle }, 'Event Name'),
                    h(
                      'div',
                      { style: eventInfoStyle },
                      h(
                        'p',
                        {},
                        'Punch Bowl Social',
                        ' | ',
                        'Sacramento',
                      ),
                      h('p', {}, '10/01/2024')
                    ),
                    h('div', {},
                      h('p', { style: clientNameStyle }, 'Client Name'),
                      h(
                        'a',
                        {
                          href: ``,
                          style: buttonStyle('#C6AFC0'),
                          target: '_blank',
                        },
                        'View Details'
                      )  
                    )
                ),
                h(
                  'div',
                  { style: containerStyle },
                  h('div', {},
                    h('p', { style: eventNameStyle }, 'Event Name for a Posponed Event'),
                    h('div', { style: { color: 'red', paddingTop: '1rem' } }, '* Event Postponed'),  
                  ),
                  h(
                    'div',
                    { style: eventInfoStyle },
                    h(
                      'p',
                      { style: {width: '50%'} },
                      'Somewhere Cool',
                      ' | ',
                      'Los Angeles',
                    ),
                    h('p', { style: {width: '50%'} }, '12/01/2024 - 12/03/2024')
                  ),
                  h('div', {},
                    h('p', { style: clientNameStyle }, 'Another Client Name'),
                    h(
                      'a',
                      {
                        href: ``,
                        style: buttonStyle('#C6AFC0'),
                        target: '_blank',
                      },
                      'View Details'
                    )  
                  )
              ),
            )
            ),

        // About Us Section with inline styles
            h(
            'div',
            {
            style: {
                backgroundColor: '#FFFFFF',
                padding: '2.5rem 0',
                display: 'flex',
                justifyContent: 'center',
            },
            },
            h(
            'div',
            {
                style: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2.5rem',
                maxWidth: '85.75rem',
                margin: '0 0.625rem',
                },
            },
            h(
                'h1',
                {
                style: {
                    color: '#2E363E',
                },
                },
                aboutTitle
            ),
            h(
                'div',
                {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4rem', // Larger gap for larger screens
                    width: '100%',
                },
                },
                aboutUsSectionsArray.map((s, i) => {
                const even = i % 2 === 0;
                return h(
                    'div',
                    {
                    key: s.sectionTitle,
                    style: {
                        display: 'flex',
                        flexDirection: 'column-reverse',
                        gap: '1rem',
                        width: '100%',
                        justifyContent: 'space-between',
                        margin: '0 auto',
                        ...(even
                        ? { flexDirection: 'row', justifyContent: 'flex-end' }
                        : { flexDirection: 'row-reverse', justifyContent: 'flex-start' }),
                    },
                    },
                    h(
                    'div',
                    {
                        style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        maxWidth: '500px',
                        margin: '0 auto',
                        ...(even ? { marginTop: '2rem' } : {}),
                        alignItems: 'flex-start',
                        },
                    },
                    h(
                        'h2',
                        {
                        style: {
                            paddingBottom: '1rem',
                            borderBottom: '15px solid #C6AFC0',
                            color: '#000000',
                        },
                        },
                        s.sectionTitle
                    ),
                    h(
                        'p',
                        {
                        style: {
                            color: '#000000', 
                            display: 'flex',
                            alignItems: 'center',
                            lineHeight: '1.5',
                        },
                        },
                        s.sectionText
                    )
                    ),
                    h(
                    'div',
                    {
                        style: {
                        display: 'flex',
                        justifyContent: even ? 'flex-end' : 'flex-start',
                        width: '100%',
                        alignItems: 'center',
                        },
                    },
                    h('img', {
                        loading: 'lazy',
                        src: s.sectionImageSrc,
                        alt: s.sectionImageAlt,
                        height: 237.5,
                        width: 500,
                        style: {
                        maxWidth: '400px',
                        height: 'auto',
                        },
                    }),
                    )
                );
                })
            )
            )
        ),
        
        // Scrollable Event Carousel Section with inline styles
        h(
            'div',
            {
            style: {
                backgroundColor: '#F8F9EE', // Soft Opal background
                padding: '2.5rem 1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            },
            h(
            'div',
            {
                style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                maxWidth: '85.75rem',
                margin: '0 0.625rem',
                overflow: 'hidden',
                },
            },
            h(
                'h1',
                {
                style: {
                    color: '#2E363E',
                    textAlign: 'center',
                    margin: 0,
                    marginBottom: '2.5rem',
                },
                },
                eventCarouselTitle
            ),
            h(
                'div',
                {
                style: {
                    display: 'flex',
                    gap: '0.5rem',
                    overflowX: 'auto', // Enable horizontal scrolling
                    scrollbarWidth: 'thin', // Thin scrollbar for Firefox
                    WebkitOverflowScrolling: 'touch', // Enable smooth scrolling for mobile
                },
                },
                eventCarouselImagesArray.map((c, i) =>
                h(
                    'div',
                    {
                    key: i,
                    'data-id': 'card',
                    style: {
                        flex: '0 0 auto', // Flex basis for each card (prevents shrinking)
                        width: '297px',
                        marginRight: '1rem',
                    },
                    },
                    h(
                    'div',
                    {
                        style: {
                        borderRadius: '15px',
                        overflow: 'hidden',
                        },
                    },
                    h('img', {
                        src: c.imageSrc,
                        alt: c.imageAlt,
                        width: 297,
                        height: 390,
                        style: {
                        borderRadius: '15px',
                        objectFit: 'cover',
                        },
                    })
                    )
                )
                )
            ),
            h('div', {
                style: {
                height: '75px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                cursor: 'pointer',}
            },
            eventCarouselImagesArray.map((c, i) =>
                h('div', {
                    style: {
                        height: '15px',
                        width: '15px',
                        borderRadius: '15px',
                        backgroundColor: i === 0 ? '#C6AFC0' : 'grey',            
                    }
                })
            ))
            )
        ),
    );
      
    },
  });
  
  CMS.registerPreviewTemplate('homePage', HomePagePreview);
  