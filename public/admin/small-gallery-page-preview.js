var SmallGalleryPreview = createClass({
  render: function () {
    var entry = this.props.entry;

    var smallGalleryImages = entry.getIn(['data', 'images']);
    var smallGalleryImagesArray;
    if (smallGalleryImages) {
      smallGalleryImagesArray = smallGalleryImages.toJS();
    }

    return h(
      'div',
      { style: { fontFamily: 'Arial', maxWidth: '1200px' } },
      h(
        'div',
        {
          style: {
            backgroundColor: '#F8F9EE',
            display: 'flex',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 679px)',
            padding: '2.5rem 1rem',
          },
        },
        h(
          'div',
          {
            style: {
              maxWidth: '85.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              margin: '0 0.625rem',
            },
          },
          h(
            'div',
            {
              style: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              },
            },
            h(
              'div',
              {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '2rem',
                  margin: '0 auto',
                },
              },
              h(
                'div',
                { style: { marginBottom: '1.5rem' } },
                h('h3', {}, 'Instructions for Compressing Images'),
                h(
                  'p',
                  {},
                  'To compress photos for the galley page, I suggest using this website:'
                ),
                h(
                  'a',
                  { href: 'https://squoosh.app/' },
                  'https://squoosh.app/'
                ),
                h('p', {}, "Here's some quick instructions:"),
                h('p', {}, '1. Drag your photo into the editor'),
                h(
                  'p',
                  {},
                  "2. Select WebP as the format (this is a lossless compression format that's great for web)"
                ),
                h(
                  'p',
                  {},
                  '3. In the edit section, select Resize. Compare the width and height, whichever is bigger, reduce to 1,000. '
                ),
                h('p', {}, "4. That's it. Download!")
              ),
              h(
                'h1',
                {
                  style: {
                    color: '#2E363E',
                    margin: 0,
                    paddingBottom: '1rem',
                  },
                },
                'Small Budget Gallery Images'
              ),
              h(
                'div',
                {
                  display: 'flex',
                  flexWrap: 'wrap',
                  width: '100%',
                },
                //more content
                smallGalleryImagesArray.map((c, i) =>
                  h('img', {
                    src: c.image,
                    alt: c.imageAlt,
                    style: {
                      maxWidth: '300px',
                      maxHeight: '300px',
                      width: 'auto',
                      height: 'auto',
                      padding: '1.25rem',
                    },
                  })
                )
              )
            )
          )
        )
      )
    );
  },
});

CMS.registerPreviewTemplate('small', SmallGalleryPreview);
