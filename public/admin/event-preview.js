var EventPreview = createClass({
    render: function () {
      var entry = this.props.entry;
  
      // Homepage Event Card fields
      var eventName = entry.getIn(['data', 'eventName']);
      var clientName = entry.getIn(['data', 'clientName']);
      var firstDayOfEvent = entry.getIn(['data', 'firstDayOfEvent']);
      var eventTime = entry.getIn(['data', 'eventTime']);
      var lastDayOfEvent = entry.getIn(['data', 'lastDayOfEvent']);
      var eventCity = entry.getIn(['data', 'eventCity']);
      var eventLocation = entry.getIn(['data', 'eventLocation']);
      var eventButtonTextOne = entry.getIn(['data', 'eventButtonTextOne']);
      var eventButtonLinkOne = entry.getIn(['data', 'eventButtonLinkOne']);
      var eventButtonTextTwo = entry.getIn(['data', 'eventButtonTextTwo']);
      var eventButtonLinkTwo = entry.getIn(['data', 'eventButtonLinkTwo']);
      var postponed = entry.getIn(['data', 'postponed']);
      var detailImage = this.props.getAsset(entry.getIn(['data', 'detailImage']));
      var eventDescription = entry.getIn(['data', 'eventDescription']);
      var eventDescriptionArray;
      if(eventDescription){
        eventDescriptionArray = eventDescription.toJS();
      }
      var boldedEventInformation = entry.getIn(['data', 'boldedEventInformation']);
      var boldedInfoArray;
      if(boldedEventInformation){
        boldedInfoArray = boldedEventInformation.toJS();
      }

      function formatEventTime(militaryTimeString) {
        // Split the military time string into hours and minutes
        const [hours, minutes] = militaryTimeString.split(':').map(Number);
      
        // Determine whether it's AM or PM
        const period = hours >= 12 ? 'PM' : 'AM';
      
        // Convert the hours to 12-hour format
        const hours12 = hours % 12 || 12; // Convert 0 (midnight) or 12 (noon) to 12
      
        // If the time is exactly on the hour, omit the minutes
        if (minutes === 0) {
          return `${hours12} ${period}`;
        }
      
        // Otherwise, return the full formatted time in hh:mm AM/PM format
        return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
      }      

      var timeFormatted = eventTime ? formatEventTime(eventTime):"";


      // Homepage Event Card Styles
      const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '1rem',
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
  
      // Detail Page Styles
      const detailPageStyle = {
        backgroundColor: '#2E363E',
        padding: '2.5rem 1rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        width: '100%'
      };
  
      const detailContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        justifyContent: 'center',
        width: '50%',
      };
  
      const descriptionStyle = {
        backgroundColor: '#F8F9EE',
        padding: '4.5rem 1rem',
        display: 'flex',
        gap: '2rem',
        width: '100%',
      };
  
      const headingStyle = {
        color: '#F8F9EE',
        fontWeight: 'bold',
        fontSize: '2.5rem',
        lineHeight: 1.25,
        margin: 0,
      };

      const detailHeadingStyle = {
        color: '#2E363E',
        fontWeight: 'bold',
        fontSize: '2.5rem',
        lineHeight: 1.25,
        margin: 0,
      };
  
      const subheadingStyle = {
        color: '#FCFC62',
        margin: 0,
      };
  
      const buttonLinkStyle = {
        backgroundColor: '#FCFC62',
        padding: '0.75rem',
        minWidth: '175px',
        borderRadius: '0.25rem',
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'start',
      };
        
      return h(
        'div',
        { style: { fontFamily: 'Arial', maxWidth: '1200px'}},
  
        // Header for Homepage Event Card
        h('h1', { style: { marginBottom: '20px' } }, 'Event Card (Home Page + Events Page)'),
  
        // Homepage Event Card
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
                h('p', {style: { margin: 0}}, eventLocation),
                h(
                  'p',
                  {style: { margin: 0}},
                  firstDayOfEvent,
                  lastDayOfEvent ? ` - ${lastDayOfEvent}` : "",  // Display date range if lastDayFormatted exists
                ),
              ),

              h('p',{style: { margin: 0}}, eventCity)
            ),
            h('p', { style: clientNameStyle }, clientName),
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
                'View Details' // Button text content
              )
            )
        ),
  
        // Header for Detail Page
        h('h1', { style: { padding: '2.5rem 0 20px 0', margin: 0 } }, 'Event Detail Page (View Details)'),
  
        // Detail Page Content
        h(
          'div',
          { style: detailPageStyle },
          h(
            'div',
            { style: detailContainerStyle },
                h('div', { style: { display: 'flex', gap: '1rem' } }, 
                    h('p', { style: { color: '#F8F9EE', margin: 0 } }, `${firstDayOfEvent} ${lastDayOfEvent ? ` - ${lastDayOfEvent}`:""}`),
                    h('p', { style: subheadingStyle }, `${eventLocation? eventLocation : ""}`),
                ),
            postponed? h('div', { style: { color: 'red' } }, '* Event Postponed'):"",
            h('h1', { style: headingStyle }, eventName),
            h('div', { style: { display: 'flex', gap: '1rem'}},
              h('h2', { style: { color: '#F8F9EE',fontWeight: 'bold', fontSize: '1.5rem', margin: 0 } }, eventCity),
              h('h2', { style: { color: '#C6AFC0', fontSize: '1.5rem', textTransform: 'uppercase', margin: 0} }, timeFormatted)
            ),
            h(
              'div',
              { style: { display: 'flex', gap: '1rem' } },
              eventButtonTextOne ? h('a', {
                href: eventButtonLinkOne,
                style: buttonLinkStyle,
                target: '_blank',
              }, eventButtonTextOne):"",
            )
          ),
          h ('div', { style: { width: '50%', display: 'flex', justifyContent: 'center' } }, 
            clientName? h('div', { style: { backgroundColor: '#F8F9EE', height: '350px', width: '350px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', padding: '1rem' } }, `${clientName} logo`):"",
          )
        ),
  
        // Event Description and Bolded Information
        h(
          'div',
          { style: descriptionStyle },
          h(
            'div',
            { style: { display: 'flex', flexDirection: 'column', maxWidth: '615px', width: '50%', gap: '1rem' } },
            h('h1', { style: detailHeadingStyle }, eventName),
            postponed? h('div', { style: { color: 'red' } }, '* Event Postponed'):"",
            h('div', { style: { display: 'flex', gap: '0.5rem' } }, 
                h(
                    'a',
                    {
                      href: eventButtonLinkTwo ? eventButtonLinkTwo : eventButtonLinkOne,
                      style: { borderBottom: '3px solid #C6AFC0', lineHeight: 1.5, fontSize: '1rem' },
                      target: '_blank',
                    },
                    eventButtonTextTwo ? eventButtonTextTwo : eventButtonTextOne
                  ),
                 h('img', {
                    src: '/images/common/arrow-black.png',
                    alt: 'black arrow',
                    height: '20',
                    width: '20',
                  }),
            ),
            eventDescriptionArray ? 
              eventDescriptionArray.map((desc, index) =>
                h('p', { key: index, style: { color: '#000', margin: 0, lineHeight: 1.5, fontSize: '1rem' } }, desc.paragraph)
              ):"",
            boldedInfoArray ?
            boldedInfoArray.map((info, index) => {
                return (
                    h('p', { key: index, style: { fontWeight: 'bold', margin: 0, lineHeight: 1.5, fontSize: '1rem' } }, info.line)
                )
              }
              ):""
          ),
          h(
            'div',
            { style: { display: 'flex', alignItems: 'center', position: 'relative', width: '50%' } },
            h('img', {
              src: '/images/events/paint-splatter-small.png',
              alt: 'paint splatter',
              height: '311',
              width: '322',
              style: { position: 'absolute', left: '-23%', bottom: '-23%', zIndex: '0' },
            }),
            h('img', {
              src: detailImage ? detailImage.toString() : '',
              alt: eventName,
              height: '385',
              width: '615',
              style: { position: 'relative', zIndex: '8', maxWidth: '500px', height: 'auto', width: '100%' },
            })
          )
        )
      );
    },
  });
  
  CMS.registerPreviewTemplate('events', EventPreview);
  