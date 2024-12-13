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
    var testimonialsSectionTitle = entry.getIn(['data', 'testimonialsSectionTitle']);
    var testimonials = entry.getIn(['data', 'testimonials']);
    var testimonialsArray;
    if(testimonials){
      testimonialsArray = testimonials.toJS();
    }


      // Homepage Event Card Styles
      const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '1.05rem',
        border: '1px solid #2E363E',
        borderRadius: '10px',
        paddingBottom: '2rem',
        paddingLeft: '1.5rem',
        paddingTop: '1rem',
        width: '375px',
        boxShadow: '0 4px 20px 0 rgba(0,0,0,0.15)',
        backgroundColor: '#F8F9EE',
      };
  
      const eventNameStyle = {
        fontWeight: 'bold',
        color: '#2E363E',
        fontSize: '1.25rem',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        overflow: 'ellipsis',
        display: '-webkit-box',
        fontSize: '23px',
        lineHeight: 1.5,
        margin: 0,
        height: '69px',
        paddingRight: '1.5rem',
      };
  
      const eventInfoStyle = {
        color: '#2E363E',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        paddingRight: '1.5rem',
      };
  
      const buttonContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        alignItems: 'center',
        width: 'fit-content',
        position: 'relative', // Added this to ensure the button and its content are correctly positioned
      };
      
      const buttonStyle = (bgColor) => ({
        textTransform: 'uppercase',
        backgroundColor: bgColor,
        color: '#2E363E',
        padding: '10px 20px',
        borderRadius: '12px',
        fontWeight: 'bold',
        border: '3px solid black',
        position: 'relative', // Contains the before span within the button
        zIndex: 1, // Ensures the button and text are above the before element
        display: 'block',
        transition: 'transform 0.3s ease',
        textDecoration: 'none',
        fontSize: '.75rem',
        overflow: 'hidden', // Ensures the before span stays inside the button container
        transform: 'translateZ(0)',
        willChange: 'transform',
      });
      
      const beforeSpanStyle = {
        content: '""', // Acts like :before content
        backgroundColor: 'black',
        borderRadius: '12px',
        height: 'calc(100% + 3px)', // Slightly larger than the button itself
        width: 'calc(100% + 3.5px)', // Slightly larger than the button itself
        position: 'absolute', // Positioned relative to the button
        left: 0,
        top: 0,
        transform: 'translate(2px, 2px)',
      };
  
    return h(
        'div',
        { style: { fontFamily: 'Arial', maxWidth: '1200px' } },
      
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
                    gap: '2rem',
                    justifyContent: 'center',
                    overflow: 'hidden',
                },
                },
                servicesCarouselCardsArray.map((c, index) =>
                  h(
                    'div',
                    {
                      style: {
                        width: '50%',
                        borderRadius: '15px',
                        backgroundColor: '#F8F9EE',
                        boxShadow: '0 4px 20px 0 rgba(0,0,0,0.15)', 
                        overflow: 'hidden',
                      },
                    },
                    h(
                      'div',
                      {
                        style: {
                          padding: '1.5rem',
                          overflow: 'hidden',
                          borderRadius: '15px',
                          display: 'flex',
                          flexDirection: 'column',
                        },
                      },
                        h('img', {
                          src: c.cardImageSrc,
                          alt: c.cardImageAlt,
                          style: {
                            objectFit: 'cover',
                            height: '150px',
                            width: '150px',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            alignSelf: 'center',
                            paddingBottom: '1rem',
                          },
                        }),
                        h(
                          'h2',
                          {
                            style: {
                              fontWeight: 'bold',
                              paddingTop: '1rem',
                              paddingBottom: '1rem',
                              margin: 0,
                            },
                          },
                          c.cardTitle
                        ),
                      h(
                        'div',
                        {
                          style: {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            overflow: 'hidden',
                            margin: 0,
                          },
                        },
                        h(
                          'div',
                          {
                            style: {
                            },
                          },
                          h('p', {
                            style: {
                              color: c.isDarkMode ? '#F8F9EE' : '#000000',
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
                              target: '_blank',
                            },
                            h(
                              'p',
                              {
                                style: {
                                  color: c.isDarkMode ? '#F8F9EE' : '#000000',
                                },
                              },
                              c.cardLinkText
                            ),
                            h('img', {
                              loading: 'lazy',
                              src: '/images/common/arrow-black.svg',
                              alt: 'arrow',
                              style: {
                                display: 'inline-block',
                                width: '20px',
                                height: '20px',
                              },
                            })
                          )
                        )
                      )
                    )
                  )
                  
                  
                )
            ),
            ),
        ),
  
        // Events Section
        h('div', {style:{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem', padding: '2.5rem 0', backgroundColor: '#F8F9EE'}},
            h('h1', {style: {color: '#2E363E', fontWeight: 'bold', fontSize: '2rem', margin: 0}}, featuredEventsTitle),

            h('div', {style: {display: 'flex', flexDirection: 'row', justifyContent: 'center', gap:'1rem'}},
        // Homepage Event Card
        h(
          'div',
          { style: containerStyle },
          h('div', {},
            h('div', {},
              h('div', { style: { overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '1rem'} },
              h(
                "div",
                { style: { display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", gap: "1rem" } },
                h(
                  "div",
                  { style: { display: "flex", justifyContent: "space-between" } },
                  h(
                    "div",
                    {
                      style: {
                        width: "50%",
                        height: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0.5rem",
                        borderRadius: "0.375rem",
                      }
                    },
                    h(
                      "div",
                      {
                        style: {
                          width: "100%",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "white",
                          borderRadius: '10px',
                        }
                      },
                      "Client Logo"
                    )
                  ),
                    h(
                      "div",
                      {
                        style: {
                          fontWeight: "bold",
                          fontSize: "0.85rem",
                          padding: "0.5rem 1rem",
                          backgroundColor: "#FCFC62",
                          border: "1px solid black",
                          borderRight: "none",
                          borderRadius: "1.5rem 0 0 1.5rem",
                          height: "min-content"
                        }
                      },
                      "501(c)(3)"
                    )
                )
              ),
            h('p', { style: eventNameStyle }, "Event Name"),
            ),
            h('p', { style: { margin: 0}}, "")

          ),
          ),
          h(
            'div',
            { style: eventInfoStyle },
            h('div', { style: { display: 'flex', justifyContent: 'space-between'}},
              h('div', { style: { display: 'flex', alignItems: 'center', gap: '0.5rem'}}, 
                h(
                  'img',
                  {
                    style: { maxWidth: '20px', height: 'auto' },
                    src: "/images/common/location-icon.svg"
                  }
                ),
                h('div', { style : { display: 'flex', flexDirection: 'column'}},
                  h('div', { style: {overflow: 'hidden'}},
                    h('p', {style: { 
                      margin: 0,         
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 1,
                      overflow: 'ellipsis',
                      display: '-webkit-box',
                      maxWidth: '240px',
                    }}, "Punch Bowl Social"),
                  ),
                  h('p',{style: { 
                    margin: 0,                     
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1,
                    overflow: 'ellipsis',
                    display: '-webkit-box',
                    maxWidth: '240px',
                  }}, "Sacramento, CA")
                ),
              ),
              h(
                'p',
                {style: { margin: 0, width: '100px'}},
                "10/01/2024"
              ),
            ),
          ),
          h(
            'div',
            { style: buttonContainerStyle },
            h('span', { style: beforeSpanStyle }), // This acts as the :before pseudo-element
            h(
              'a',
              {
                href: ``,
                style: buttonStyle('#C6AFC0'), // Button's background color
                target: '_blank',
              },
              'Inside The Event' // Button text content
            )
          )
        ),
        h(
          'div',
          { style: containerStyle },
          h('div', {},
            h('div', {},
              h('div', { style: { overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '1rem'} },
              h(
                "div",
                { style: { display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", gap: "1rem" } },
                h(
                  "div",
                  { style: { display: "flex", justifyContent: "space-between" } },
                  h(
                    "div",
                    {
                      style: {
                        width: "50%",
                        height: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0.5rem",
                        borderRadius: "0.375rem",
                      }
                    },
                    h(
                      "div",
                      {
                        style: {
                          width: "100%",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "white",
                          borderRadius: '10px',
                        }
                      },
                      "Client Logo"
                    )
                  ),
                    h(
                      "div",
                      {
                        style: {
                          fontWeight: "bold",
                          fontSize: "0.85rem",
                          padding: "0.5rem 1rem",
                          backgroundColor: "#FCFC62",
                          border: "1px solid black",
                          borderRight: "none",
                          borderRadius: "1.5rem 0 0 1.5rem",
                          height: "min-content"
                        }
                      },
                      "PAC"
                    )
                )
              ),
            h('p', { style: eventNameStyle }, "Event Name for a Postponed Event"),
            ),
            h('p', { style: { margin: 0}},  h('span', { style: { color: 'red', paddingLeft: '1rem' } }, '* Event Postponed'))
          ),
          ),
          h(
            'div',
            { style: eventInfoStyle },
            h('div', { style: { display: 'flex', justifyContent: 'space-between'}},
              h('div', { style: { display: 'flex', alignItems: 'center', gap: '0.5rem'}}, 
                h(
                  'img',
                  {
                    style: { maxWidth: '20px', height: 'auto' },
                    src: "/images/common/location-icon.svg"
                  }
                ),
                h('div', { style : { display: 'flex', flexDirection: 'column'}},
                  h('div', { style: {overflow: 'hidden'}},
                    h('p', {style: { 
                      margin: 0,         
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 1,
                      overflow: 'ellipsis',
                      display: '-webkit-box',
                      maxWidth: '240px',
                    }}, "Somewhere Cool"),
                  ),
                  h('p',{style: { 
                    margin: 0,                     
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1,
                    overflow: 'ellipsis',
                    display: '-webkit-box',
                    maxWidth: '240px',
                  }}, "Los Angeles, CA")
                ),
              ),
              h(
                'p',
                {style: { margin: 0, width: '100px'}},
                "12/01/2024 - 12/03/2024"
              ),
            ),
          ),
          h(
            'div',
            { style: buttonContainerStyle },
            h('span', { style: beforeSpanStyle }), // This acts as the :before pseudo-element
            h(
              'a',
              {
                href: ``,
                style: buttonStyle('#C6AFC0'), // Button's background color
                target: '_blank',
              },
              'Inside The Event' // Button text content
            )
          )
        ),
            ),
            h('div', { style: { display: 'flex', gap: '0.5rem' } }, 
              h(
                  'a',
                  {
                    href: '/events',
                    style: { borderBottom: '3px solid #C6AFC0', lineHeight: 1.5, textDecoration: 'none', color: 'black' },
                    target: '_blank',
                  },
                  'See All Events'
                ),
             h('img', {
                  src: '/images/common/arrow-black.svg',
                  alt: 'black arrow',
                  height: '20',
                  width: '20',
                }),
          ),
            ),

        // About Us Section with inline styles
            h(
            'div',
            {
            style: {
                backgroundColor: '#FFFFFF',
                padding: '2.5rem 1rem',
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
        
        // Testimonials Section
        h(
          'div',
          {
          style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2.4rem',
              backgroundColor: '#C6AFC0',
              position: 'relative',
              padding: '5rem 1rem'
          },
          },
          testimonialsSectionTitle && h(
              'h1',
              {
                  style: {
                  color: '#2E363E',
                  textAlign: 'center',
                  margin: 0,
                  },
              },
              testimonialsSectionTitle
              ),
          // Background Image (Geometric Pattern)
          testimonialsArray? h('img', {
              loading: 'lazy',
              src: "/images/geometric-pattern.svg",
              alt: 'geometric pattern',
              width: 2000,
              height: 788,
              style: {
                  width: '100%',
                  position: 'absolute',
                  bottom: 0,
                  maxWidth: '1150px',
                  height: 'auto',
                  verticalAlign: 'middle',
              },
              }):null,    
          // Testimonial Cards
          h(
          'div',
          {
              style: {
              zIndex: 10,
              display: 'flex',
              justifyContent: 'center',
              gap: '3rem',
              overflowX: 'auto', // Enable horizontal scrolling
              scrollbarWidth: 'thin', // Thin scrollbar for Firefox
              WebkitOverflowScrolling: 'touch', // Enable smooth scrolling for mobile
              },
          },
          testimonialsArray? testimonialsArray.map((testimonial, i) =>
              h(
              'div',
              {
                  key: i,
                  style: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF',
                  padding: '1.5rem',
                  borderRadius: '25px',
                  width: '272px',
                  height: '373px',
                  flex: '0 0 auto', // Flex basis for each card (prevents shrinking)
              },
              },
              h(
                  'div',
                  {
                  style: {
                      display: 'flex',
                      justifyContent: 'center',
                  },
                  },
                  h('img', {
                  style: {height: 'auto'},
                  loading: 'lazy',
                  src: "/images/clients/quote-1.png",
                  width: 245,
                  height: 40,
                  alt: 'quotes with a line through them',
                  })
              ),
              h(
                  'q',
                  {
                  style: {
                      color: '#000000',
                      lineHeight: '1.5',
                  },
                  },
                  testimonial.quote
              ),
              h(
                  'div',
                  null,
                  h(
                  'p',
                  null,
                  `- ${testimonial.quoteeName}`
                  ),
                  h(
                  'p',
                  {
                      style: {
                      color: '#000000',
                      fontWeight: 'bold',
                      marginLeft: '0.75rem',
                      },
                  },
                  testimonial.organization
                  )
              )
              )
          ):null,
          ),


      )

    );
      
    },
  });
  
  CMS.registerPreviewTemplate('homePage', HomePagePreview);
  