var ClientPreview = createClass({
    render: function () {
      var entry = this.props.entry;
      var clientName = entry.getIn(['data', 'clientName']);
      var clientWebsite = entry.getIn(['data', 'clientWebsite']);
      var clientW9Src = entry.getIn(['data', 'clientW9Src']);
  
      // Inline styles replacing Tailwind CSS classes
      const containerStyle = {
        position: 'relative',
        width: '280px',
        height: '175px',
        borderRadius: '20px',
        border: '1px solid #C6AFC0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
  
      const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
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
        { style: { padding: '2rem' } }, // New parent div to wrap everything
  
        h('h1', { style: { marginBottom: '20px' } }, 'Clients Page'),
  
        // Existing div for the client card content
        h(
          'div',
          {
            key: clientName,
            className: 'client-card-container',
            style: containerStyle,
            onMouseEnter: function (e) {
              e.target.querySelector('.overlay').style.display = 'flex';
            },
            onMouseLeave: function (e) {
              e.target.querySelector('.overlay').style.display = 'none';
            },
          },
          h('img', {
            loading: 'eager',
            src: this.props.getAsset(entry.getIn(['data', 'clientLogo'])),
            alt: clientName + ' logo',
            style: imageStyle,
          }),
          h(
            'div',
            { className: 'overlay', style: overlayStyle },
            h('p', { style: textStyle }, clientName),
            h(
              'div',
              { style: buttonContinerStyle },
              clientWebsite &&
                h(
                  'a',
                  {
                    href: clientWebsite,
                    target: '_blank',
                    style: websiteButtonStyle,
                  },
                  'Website'
                ),
              clientW9Src &&
                h(
                  'a',
                  {
                    href: clientW9Src,
                    target: '_blank',
                    style: w9ButtonStyle,
                  },
                  'W-9'
                )
            )
          )
        ),
  
        // Homepage Logo
        h(
          'div',
          { style: { marginTop: '40px' } },
          h('h1', { style: { marginBottom: '20px' } }, 'Homepage Logos'),
          h('img', {
            loading: 'eager',
            src: this.props.getAsset(entry.getIn(['data', 'clientLogo'])),
            alt: 'Homepage Logo',
            style: { display: 'block', width: '200px', height: 'auto' },
          })
        ),
  
        // Events Page
        h(
          'div',
          { style: { marginTop: '40px' } },
          h('h1', { style: { marginBottom: '20px' } }, 'Events Page'),
          h ('div', { style: { width: '50%', display: 'flex', justifyContent: 'center', backgroundColor: '#2E363E', padding: '2rem' } }, 
            h('div', { style: { backgroundColor: 'white', height: '350px', width: '350px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', padding: '1rem' } }, 
              h('img', {
                src: this.props.getAsset(entry.getIn(['data', 'clientLogo'])),
                alt: 'Events Page Image',
                style: { display: 'block', width: '300px', height: 'auto' },
              })
            ),
          ),
        )
      );
    },
  });
  
  CMS.registerPreviewTemplate('clients', ClientPreview);  