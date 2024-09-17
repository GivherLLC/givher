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
      var eventButtonText = entry.getIn(['data', 'eventButtonText']);
      var eventButtonLink = entry.getIn(['data', 'eventButtonLink']);
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
      var eventLinkText = entry.getIn(['data', 'eventLinkText']);
      var eventLink = entry.getIn(['data', 'eventLink']);
  
      // Homepage Event Card Styles
      const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        border: '1px solid #2E363E',
        borderRadius: '10px',
        padding: '2.5rem 1.5rem',
        width: '100%',
        maxWidth: '400px',
        maxHeight: '429px',
        boxShadow: '0 4px 20px 0 rgba(0,0,0,0.15)',
        backgroundColor: '#F8F9EE',
      };
  
      const cardContentStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        height: '50%',
      };
  
      const eventNameStyle = {
        fontWeight: 'bold',
        color: '#2E363E',
        fontSize: '1.25rem',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        overflow: 'hidden',
        display: '-webkit-box',
      };
  
      const eventInfoStyle = {
        paddingLeft: '1rem',
        color: '#2E363E',
        height: '48px',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
      };
  
      const clientNameStyle = {
        textTransform: 'uppercase',
        color: '#2E363E',
        fontWeight: 'bold',
        maxWidth: '300px'
      };
  
      const buttonContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        height: '50%',
        alignItems: 'center',
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
      });
  
      // Detail Page Styles
      const detailPageStyle = {
        backgroundColor: '#2E363E',
        padding: '2.5rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        maxWidth: '75rem',
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
        backgroundColor: '#F5F5F5',
        padding: '2.5rem',
        display: 'flex',
        gap: '2rem',
        maxWidth: '75rem',
        width: '100%'
      };
  
      const headingStyle = {
        color: '#F5F5F5',
        fontWeight: 'bold',
        fontSize: '2rem',
      };

      const detailHeadingStyle = {
        color: '#2E363E',
        fontWeight: 'bold',
        fontSize: '2rem',
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

      function formatEventDate(isoDateString) {
        const date = new Date(isoDateString);
      
        // Options for formatting the date
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
      
        // Return the formatted date
        return date.toLocaleDateString(undefined, options);
      }

      function formatEventTime(militaryTimeString) {
        // Split the military time string into hours and minutes
        const [hours, minutes] = militaryTimeString.split(':').map(Number);
      
        // Determine whether it's AM or PM
        const period = hours >= 12 ? 'PM' : 'AM';
      
        // Convert the hours to 12-hour format
        const hours12 = hours % 12 || 12; // Convert 0 (midnight) or 12 (noon) to 12
      
        // Return the formatted time in hh:mm AM/PM format
        return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
      }
      

      var firstDayFormatted = firstDayOfEvent ? formatEventDate(firstDayOfEvent):"";
      var lastDayFormatted = lastDayOfEvent ? formatEventDate(lastDayOfEvent):"";
      var timeFormatted = eventTime ? formatEventTime(eventTime):"";
  
      return h(
        'div',
        { style: { padding: '2rem', fontFamily: 'Arial'}},
  
        // Header for Homepage Event Card
        h('h1', { style: { marginBottom: '20px' } }, 'Homepage + Event Page Card'),
  
        // Homepage Event Card
        h(
          'div',
          { style: containerStyle },
          h(
            'div',
            { style: cardContentStyle },
            h('div', { style: { height: '56px', overflow: 'hidden' } },
              h('p', { style: eventNameStyle }, eventName)
            ),
            h(
              'div',
              { style: eventInfoStyle },
              h(
                'p',
                {},
                firstDayOfEvent,
                lastDayOfEvent ? ` - ${lastDayOfEvent}` : "",  // Display date range if lastDayFormatted exists
                eventCity ? ' | ':"",
                eventCity,
                postponed ? h('span', { style: { color: 'red', paddingLeft: '1rem' } }, '* Event Postponed'):""
              )
            ),
            h('p', { style: clientNameStyle }, clientName)
          ),
          h(
            'div',
            { style: buttonContainerStyle },
            eventButtonText ?h(
              'a',
              {
                href: eventButtonLink,
                style: buttonStyle('#FCFC62'),
                target: '_blank',
              },
              eventButtonText
            ):"",
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
  
        // Header for Detail Page
        h('h1', { style: { marginBottom: '20px' } }, 'Detail Page'),
  
        // Detail Page Content
        h(
          'div',
          { style: detailPageStyle },
          h(
            'div',
            { style: detailContainerStyle },
                h('div', { style: { display: 'flex', gap: '1rem' } }, 
                    h('p', { style: { color: '#F8F9EE', margin: 0 } }, `${firstDayFormatted ? firstDayFormatted : ""} ${lastDayFormatted ? ` - ${lastDayFormatted}`:""}`),
                    h('p', { style: subheadingStyle }, `${eventLocation? eventLocation : ""}`),
                    postponed? h('div', { style: { color: 'red' } }, '* Event Postponed'):"",
                ),
            h('h1', { style: headingStyle }, eventName),
            h('h1', { style: {color: '#F5F5F5',fontWeight: 'bold', fontSize: '1.5rem', margin: 0 } }, eventCity),
            h(
              'div',
              { style: { display: 'flex', gap: '1rem' } },
              eventButtonText ? h('a', {
                href: eventButtonLink,
                style: buttonLinkStyle,
                target: '_blank',
              }, eventButtonText):"",
              h('h2', { style: { color: '#F5F5F5', fontSize: '1rem', textTransform: 'uppercase', margin: 0, display: 'flex', alignItems: 'center' } }, timeFormatted)
            )
          ),
          h ('div', { style: { width: '50%', display: 'flex', justifyContent: 'center' } }, 
            clientName? h('div', { style: { backgroundColor: '#F5F5F5', height: '350px', width: '350px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', padding: '1rem' } }, `${clientName} logo`):"",
          )
        ),
  
        // Event Description and Bolded Information
        h(
          'div',
          { style: descriptionStyle },
          h(
            'div',
            { style: { display: 'flex', flexDirection: 'column', maxWidth: '615px' } },
            h('h1', { style: detailHeadingStyle }, eventName),
            h('div', { style: { display: 'flex', gap: '0.5rem' } }, 
                eventLinkText ? h(
                    'a',
                    {
                      href: eventLink,
                      style: { borderBottom: '3px solid #C6AFC0', lineHeight: 1.5 },
                      target: '_blank',
                    },
                    eventLinkText
                  ):"",
                eventLinkText ? h('img', {
                    src: '/images/common/arrow-black.png',
                    alt: 'black arrow',
                    height: '20',
                    width: '20',
                  }):"",
            ),
            eventDescriptionArray ? 
              eventDescriptionArray.map((desc, index) =>
                h('p', { key: index, style: { color: '#000' } }, desc.paragraph)
              ):"",
            boldedInfoArray ?
            boldedInfoArray.map((info, index) => {
                return (
                    h('p', { key: index, style: { fontWeight: 'bold' } }, info.line)
                )
              }
              ):""
          ),
          h(
            'div',
            { style: { display: 'flex', alignItems: 'center', position: 'relative' } },
            h('img', {
              src: '/images/events/paint-splatter-small.png',
              alt: 'paint splatter',
              height: '311',
              width: '322',
              style: { position: 'absolute', left: '30%', zIndex: '0' },
            }),
            h('img', {
              src: detailImage ? detailImage.toString() : '',
              alt: eventName,
              height: '385',
              width: '615',
              style: { position: 'relative', zIndex: '8', maxWidth: '500px', height: 'auto' },
            })
          )
        )
      );
    },
  });
  
  CMS.registerPreviewTemplate('events', EventPreview);
  