var ContactPagePreview = createClass({
  render: function () {
    var entry = this.props.entry;

    var contactPageTitle = entry.getIn(["data", "contactPageTitle"]);
    var contactPhoneNumber = entry.getIn(["data", "contactPhoneNumber"]);
    var contactEmail = entry.getIn(["data", "contactEmail"]);

    return h(
      "div",
      { style: { fontFamily: "Arial", maxWidth: "1200px" } },
      h(
        "div",
        {
          style: {
            backgroundColor: "#C6AFC0",
            display: "flex",
            justifyContent: "center",
            minHeight: "calc(100vh - 679px)",
            padding: "4.5rem 1rem",
          },
        },
        h(
          "div",
          {
            style: {
              maxWidth: "85.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              margin: "0 0.625rem",
            },
          },
          h(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                width: "100%",
              },
            },
            h(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2rem",
                  marginTop: "2rem",
                  margin: "0 auto",
                },
              },
              h(
                "h1",
                {
                  style: {
                    color: "#2E363E",
                    margin: 0,
                  },
                },
                contactPageTitle,
              ),
              h(
                "a",
                {
                  href: "tel:+916-296-4656",
                  style: { color: "#2E363E", textDecoration: "none" },
                },
                contactPhoneNumber,
              ),
              h(
                "a",
                {
                  href: "mailto:alina@givher.com",
                  style: {
                    color: "#2E363E",
                    textDecoration: "none",
                    margin: 0,
                  },
                },
                contactEmail,
              ),
            ),
          ),
          h(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                flex: 1,
              },
            },
            h("img", {
              loading: "eager",
              src: "/images/geometric-pattern.svg",
              alt: "geometric pattern",
              width: 1000,
              height: 294,
              style: {
                width: "100%",
                maxWidth: "800px",
                height: "auto",
              },
            }),
          ),
        ),
      ),
    );
  },
});

CMS.registerPreviewTemplate("contactPage", ContactPagePreview);
