var EventsPagePreview = createClass({
    render: function () {
      var entry = this.props.entry;

      var allEventsSectionTitle = entry.getIn(['data', 'allEventsSectionTitle']);
      var comingSoonEventsSectionTitle = entry.getIn(['data', 'comingSoonEventsSectionTitle']);
      var postponedEventText = entry.getIn(['data', 'postponedEventText']);
      var clientEventPageUpcomingEventsTitle = entry.getIn(['data', 'clientEventPageUpcomingEventsTitle']);
      
      var givherFeaturedEvent = entry.getIn(['data', 'givherFeaturedEvent']);
    //   var eventName = givherFeaturedEvent ? givherFeaturedEvent.get('eventName') : '';
    //   var eventCity = givherFeaturedEvent ? givherFeaturedEvent.get('eventCity') : '';
    //   var firstDayOfEvent = givherFeaturedEvent ? givherFeaturedEvent.get('firstDayOfEvent') : '';
    //   var eventButtonText = givherFeaturedEvent ? givherFeaturedEvent.get('eventButtonText') : '';
    //   var eventButtonLink = givherFeaturedEvent ? givherFeaturedEvent.get('eventButtonLink') : '';
    //   var clientImage = givherFeaturedEvent ? givherFeaturedEvent.get('clientImage') : '';
    

    return h(
        'div',
        { style: { fontFamily: 'Arial', maxWidth: '1200px' } },
        //Events Header

        //Coming Soon Events

        //All Events Section
        
    )

    }
})

CMS.registerPreviewTemplate('eventsPage', EventsPagePreview);
