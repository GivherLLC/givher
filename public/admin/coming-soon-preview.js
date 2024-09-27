var ComingSoonPreview = createClass({
    render: function () {
      var entry = this.props.entry;

      var eventName = entry.getIn(['data', 'eventName']);
      var clientName = entry.getIn(['data', 'clientName']);
      var firstDayOfEvent = entry.getIn(['data', 'firstDayOfEvent']);
      var lastDayOfEvent = entry.getIn(['data', 'lastDayOfEvent']);
      var timeOfYear = entry.getIn(['data', 'timeOfYear']);
      var eventCity = entry.getIn(['data', 'eventCity']);
      var eventButtonTextOne = entry.getIn(['data', 'eventButtonTextOne']);
      var eventButtonLinkOne = entry.getIn(['data', 'eventButtonLinkOne']);
      var eventButtonTextTwo = entry.getIn(['data', 'eventButtonTextTwo']);
      var eventButtonLinkTwo = entry.getIn(['data', 'eventButtonLinkTwo']);
      var postponed = entry.getIn(['data', 'postponed']);

      const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '25px',
        border: '1px solid #2E363E',
        borderRadius: '10px',
        padding: '2.5rem 1.5rem',
        width: '100%',
        maxWidth: '350px',
        maxHeight: '398px',
        boxShadow: '0 4px 20px 0 rgba(0,0,0,0.15)',
        backgroundColor: '#F8F9EE',
      };
  
      const eventNameStyle = {
        fontWeight: 'bold',
        color: '#2E363E',
        fontSize: '1.25rem',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        overflow: 'ellipsis',
        display: '-webkit-box',
        fontSize: '23px',
        lineHeight: 1.5,
        margin: 0,
        height: '103.5px',
      };
  
      const eventInfoStyle = {
        color: '#2E363E',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
      };
  
      const clientNameStyle = {
        textTransform: 'uppercase',
        color: '#2E363E',
        fontWeight: '700',
        fontSize: '.875rem',
        maxWidth: '250px',
        lineHeight: 1.25,
        margin: 0,
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
        { style: { fontFamily: 'Arial', maxWidth: '1200px'}},
        h('h1', { style: { marginBottom: '20px' } }, 'Coming Soon Event Card (Home Page + Events Page)'),

        h(
        'div',
        { style: containerStyle },
            h('div', {},
                h('div', { style: { overflow: 'hidden'} },
                    h('p', { style: eventNameStyle }, eventName),
                ),
                h('p', { style: { margin: 0}}, postponed ? h('span', { style: { color: 'red', paddingLeft: '1rem' } }, '* Event Postponed'):"")
            ),
            h(
            'div',
            { style: eventInfoStyle },
            h('div', { style: { display: 'flex', justifyContent: 'space-between'}},
                eventCity && h('p',{style: 
                  { margin: 0,         
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                  overflow: 'ellipsis',
                  display: '-webkit-box',
                  maxWidth: '240px'
                }}, eventCity),
                h(
                'p',
                {style: { margin: 0}},
                firstDayOfEvent ? firstDayOfEvent : timeOfYear,
                lastDayOfEvent ? ` - ${lastDayOfEvent}` : "",  // Display date range if lastDayFormatted exists
                ),
            ),
            ),
            h('p', { style: clientNameStyle }, clientName),
            h('div', { style: { display: 'flex', gap: '1.5rem', flexWrap: 'wrap'}},
              eventButtonTextOne && 
              h(
                  'div',
                  { style: buttonContainerStyle },
                  h('span', { style: beforeSpanStyle }), // This acts as the :before pseudo-element
                  h(
                      'a',
                      {
                      href: eventButtonLinkOne,
                      style: buttonStyle('#C6AFC0'), // Button's background color
                      target: '_blank',
                      },
                      eventButtonTextOne
                    )
      
                  ),
            
              eventButtonTextTwo && 
              h(
                  'div',
                  { style: buttonContainerStyle },
                  h('span', { style: beforeSpanStyle }), // This acts as the :before pseudo-element
                  h(
                      'a',
                      {
                      href: eventButtonLinkTwo,
                      style: buttonStyle('#FCFC62'), // Button's background color
                      target: '_blank',
                      },
                      eventButtonTextTwo
                      )
      
                  ),
              
                  !eventButtonTextOne && !eventButtonLinkOne && !eventButtonTextTwo && !eventButtonLinkTwo && 
                  h(
                      'div',
                      { style: buttonContainerStyle },
                      h('span', { style: beforeSpanStyle }), // This acts as the :before pseudo-element
                      h(
                          'a',
                          {
                          href: '/signup4emails',
                          style: buttonStyle('#FCFC62'), // Button's background color
                          target: '_blank',
                          },
                          "Get Email Updates"
                          )
          
                      ),

            ),
        ),

      );


    }
})

CMS.registerPreviewTemplate('comingSoon', ComingSoonPreview);
