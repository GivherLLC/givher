var ClientsPagePreview = createClass({
    render: function () {
      var entry = this.props.entry;

      var clientsSectionTitle = entry.getIn(['data', 'clientsSectionTitle']);

      const containerStyle = {
        position: 'relative',
      };
  
      const imageStyle = {
        backgroundColor: 'white',
        borderRadius: '20px',
        border: '1px solid #C6AFC0',
        width: '280px',
        height: '175px',
      };

      const overlayStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '280px',
        height: '175px',
        display: 'none', // Default hidden
        backgroundColor: '#2E363E',
        opacity: '0.9',
        border: '1px solid #C6AFC0',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      };
  
      const textStyle = {
        color: '#F8F9EE',
        paddingTop: '1.5rem',
        paddingLeft: '1rem',
      };
  
      const buttonStyle = {
        padding: '0.75rem',
        marginBottom: '1.5rem',
        marginLeft: '1rem',
        marginRight: '1rem',
        width: '90px',
        borderRadius: '0.5rem',
        fontWeight: '500',
        textAlign: 'center',
        color: '#000',
        display: 'block',
        textDecoration: 'none',
      };
  
      const websiteButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#FCFC62',
      };
  
      const w9ButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#F8F9EE',
      };
  
      const buttonContinerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
      };
  
      return h(
        'div',
        { style: { fontFamily: 'Arial', maxWidth: '1200px' } },
        h(
            'div',
            {
            style: {
                backgroundColor: '#F8F9EE',
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
                gap: '2.5rem',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: '85.75rem',
                margin: '0 0.625rem',
                overflow: 'hidden',
                padding: '2.5rem 0'
                },
            },

            //Clients Section
            h('h1', {
                style: {
                color: '#2E363E',
                textAlign: 'center',
                margin: 0,
                },
            }, clientsSectionTitle),
            h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem'}},
                h(
                    'div',
                    {
                        className: 'client-card-container',
                        style: containerStyle,
                    },
                    h('div', {
                        style: imageStyle,
                    }),
                    h(
                        'div',
                        { className: 'overlay', style: overlayStyle },
                        h('p', { style: textStyle }, 'Client Name #1'),
                        h(
                        'div',
                        { style: buttonContinerStyle },
                            h(
                            'a',
                            {
                                href: '',
                                target: '_blank',
                                style: websiteButtonStyle,
                            },
                            'Website'
                            ),
                            h(
                            'a',
                            {
                                href: '',
                                target: '_blank',
                                style: w9ButtonStyle,
                            },
                            'W-9'
                            )
                        )
                    )
                ),
                h(
                    'div',
                    {
                        className: 'client-card-container',
                        style: containerStyle,
                    },
                    h('div', {
                        style: imageStyle,
                    }),
                    h(
                        'div',
                        { className: 'overlay', style: overlayStyle },
                        h('p', { style: textStyle }, 'Client Name #2'),
                        h(
                        'div',
                        { style: buttonContinerStyle },
                            h(
                            'a',
                            {
                                href: '',
                                target: '_blank',
                                style: websiteButtonStyle,
                            },
                            'Website'
                            ),
                            h(
                            'a',
                            {
                                href: '',
                                target: '_blank',
                                style: w9ButtonStyle,
                            },
                            'W-9'
                            )
                        )
                    )
                ),
                h(
                    'div',
                    {
                        className: 'client-card-container',
                        style: containerStyle,
                    },
                    h('div', {
                        style: imageStyle,
                    }),
                    h(
                        'div',
                        { className: 'overlay', style: overlayStyle },
                        h('p', { style: textStyle }, 'Client Name #3'),
                        h(
                        'div',
                        { style: buttonContinerStyle },
                            h(
                            'a',
                            {
                                href: '',
                                target: '_blank',
                                style: websiteButtonStyle,
                            },
                            'Website'
                            ),
                            h(
                            'a',
                            {
                                href: '',
                                target: '_blank',
                                style: w9ButtonStyle,
                            },
                            'W-9'
                            )
                        )
                    )
                ),
                h(
                    'div',
                    {
                        className: 'client-card-container',
                        style: containerStyle,
                    },
                    h('div', {
                        style: imageStyle,
                    }),
                    h(
                        'div',
                        { className: 'overlay', style: overlayStyle },
                        h('p', { style: textStyle }, 'Client Name #4'),
                        h(
                        'div',
                        { style: buttonContinerStyle },
                            h(
                            'a',
                            {
                                href: '',
                                target: '_blank',
                                style: websiteButtonStyle,
                            },
                            'Website'
                            ),
                            h(
                            'a',
                            {
                                href: '',
                                target: '_blank',
                                style: w9ButtonStyle,
                            },
                            'W-9'
                            )
                        )
                    )
                ),
            ),

            
        )
        ),  
      )

    }
});

CMS.registerPreviewTemplate('clientPage', ClientsPagePreview);