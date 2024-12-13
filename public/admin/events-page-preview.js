var EventsPagePreview = createClass({
  render: function () {
    var entry = this.props.entry;

    var allEventsSectionTitle = entry.getIn(["data", "allEventsSectionTitle"]);
    var comingSoonEventsSectionTitle = entry.getIn([
      "data",
      "comingSoonEventsSectionTitle",
    ]);
    var comingSoonEventsSectionSubtitle = entry.getIn([
      "data",
      "comingSoonEventsSectionSubtitle",
    ]);
    var postponedEventText = entry.getIn(["data", "postponedEventText"]);

    var givherFeaturedEvent = entry.getIn(["data", "givherFeaturedEvent"]);

    const buttonContainerStyle = {
      display: "flex",
      flexWrap: "wrap",
      gap: "1.5rem",
      alignItems: "center",
      width: "fit-content",
      position: "relative", // Added this to ensure the button and its content are correctly positioned
    };

    const buttonStyle = (bgColor) => ({
      textTransform: "uppercase",
      backgroundColor: bgColor,
      color: "#2E363E",
      padding: "10px 20px",
      borderRadius: "12px",
      fontWeight: "bold",
      border: "3px solid black",
      position: "relative", // Contains the before span within the button
      zIndex: 1, // Ensures the button and text are above the before element
      display: "block",
      transition: "transform 0.3s ease",
      textDecoration: "none",
      fontSize: ".75rem",
      overflow: "hidden", // Ensures the before span stays inside the button container
      transform: "translateZ(0)",
      willChange: "transform",
    });

    const beforeSpanStyle = {
      content: '""', // Acts like :before content
      backgroundColor: "black",
      borderRadius: "12px",
      height: "calc(100% + 3px)", // Slightly larger than the button itself
      width: "calc(100% + 3.5px)", // Slightly larger than the button itself
      position: "absolute", // Positioned relative to the button
      left: 0,
      top: 0,
      transform: "translate(2px, 2px)",
    };

    // Event Card Styles
    const containerStyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "1.05rem",
      border: "1px solid #2E363E",
      borderRadius: "10px",
      paddingBottom: "2rem",
      paddingLeft: "1.5rem",
      paddingTop: "1rem",
      width: "375px",
      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.15)",
      backgroundColor: "#F8F9EE",
    };

    const eventNameStyle = {
      fontWeight: "bold",
      color: "#2E363E",
      fontSize: "1.25rem",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      overflow: "ellipsis",
      display: "-webkit-box",
      fontSize: "23px",
      lineHeight: 1.5,
      margin: 0,
      height: "69px",
      paddingRight: "1.5rem",
    };

    const eventInfoStyle = {
      color: "#2E363E",
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      paddingRight: "1.5rem",
    };

    return h(
      "div",
      { style: { fontFamily: "Arial", maxWidth: "1200px" } },
      h("h1", { style: {} }, "Events Page"),
      //Featured Events
      h(
        "div",
        {
          style: {
            backgroundColor: "#F8F9EE",
            paddingTop: "2.5rem",
            paddingBottom: "2.5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            padding: "3rem",
            height: "100%",
            overflow: "hidden",
          },
        },
        h(
          "div",
          {
            style: {
              height: "100%",
              display: "grid",
              gridTemplateRows: "1fr 52px",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "50px",
            },
          },
          h(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                height: "100%",
                gap: "2rem",
                justifyContent: "center",
              },
            },
            h(
              "h1",
              {
                style: { fontSize: "2.5rem", margin: 0, marginBottom: "1rem" },
              },
              givherFeaturedEvent.get("eventName"),
            ),
            h(
              "div",
              { style: buttonContainerStyle },
              h("span", { style: beforeSpanStyle }), // This acts as the :before pseudo-element
              h(
                "a",
                {
                  href: givherFeaturedEvent.get("eventButtonLinkOne"),
                  style: buttonStyle("#FCFC62"), // Button's background color
                  target: "_blank",
                },
                givherFeaturedEvent.get("eventButtonTextOne"),
              ),
            ),
          ),
          h(
            "div",
            {
              style: {
                display: "flex",
                gap: "24px",
                alignSelf: "flex-end",
              },
            },
            h(
              "button",
              {
                type: "button",
                "data-id": "prev",
                "aria-label": "Previous Event",
                className: "custom-prev-button",
                style: { backgroundColor: "transparent", border: "none" },
              },
              h(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 24,
                  height: 24,
                  style: {
                    overflow: "hidden",
                    transform: "rotate(180deg)",
                    color: "#000000",
                    cursor: "pointer",
                    verticalAlign: "middle",
                  },
                },
                h("path", {
                  d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z",
                  fill: "currentColor",
                }),
              ),
            ),
            h(
              "button",
              {
                type: "button",
                "data-id": "next",
                "aria-label": "Next Event",
                className: "custom-next-button",
                style: { backgroundColor: "transparent", border: "none" },
              },
              h(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 24,
                  height: 24,
                  style: {
                    overflow: "hidden",
                    color: "#000000", // Replace with softOpal color for dark mode if necessary
                    cursor: "pointer",
                    verticalAlign: "middle",
                  },
                },
                h("path", {
                  d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z",
                  fill: "currentColor",
                }),
              ),
            ),
          ),
        ),

        h(
          "div",
          { style: { position: "relative", height: "100%" } },
          h(
            "div",
            {
              style: {
                backgroundColor: "#FFFFFF", // White background
                height: "400px",
                width: "400px",
                borderRadius: "1rem", // 2xl in Tailwind corresponds to 1rem (16px) rounded corners
                padding: "2rem",
                border: "1px solid #000000", // Black border
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                zIndex: 10,
              },
            },
            h("img", {
              style: {
                objectFit: "contain",
                maxWidth: "100%",
                maxHeight: "100%",
              },
              src: givherFeaturedEvent.get("clientImage"),
              height: 350,
              width: 350,
            }),
          ),
          h("img", {
            style: {
              position: "absolute",
              left: "-30%",
              bottom: "-15%",
              zIndex: 0,
            },
            src: "/images/events/paint-splatter-large.png",
            height: 435,
            width: 595,
          }),
        ),
      ),
      //All Events Section
      h(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            backgroundColor: "#F8F9EE",
            padding: "2.5rem",
          },
        },
        h(
          "h1",
          { style: { margin: 0, fontSize: "2.5rem" } },
          allEventsSectionTitle,
        ),
        h(
          "div",
          { style: { display: "flex", gap: "4rem" } },
          h(
            "div",
            { style: containerStyle },
            h(
              "div",
              {},
              h(
                "div",
                {},
                h(
                  "div",
                  {
                    style: {
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    },
                  },
                  h(
                    "div",
                    {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        gap: "1rem",
                      },
                    },
                    h(
                      "div",
                      {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                        },
                      },
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
                          },
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
                              borderRadius: "10px",
                            },
                          },
                          "Client Logo",
                        ),
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
                            height: "min-content",
                          },
                        },
                        "501(c)(3)",
                      ),
                    ),
                  ),
                  h("p", { style: eventNameStyle }, "Event Name"),
                ),
                h("p", { style: { margin: 0 } }, ""),
              ),
            ),
            h(
              "div",
              { style: eventInfoStyle },
              h(
                "div",
                { style: { display: "flex", justifyContent: "space-between" } },
                h(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    },
                  },
                  h("img", {
                    style: { maxWidth: "20px", height: "auto" },
                    src: "/images/common/location-icon.svg",
                  }),
                  h(
                    "div",
                    { style: { display: "flex", flexDirection: "column" } },
                    h(
                      "div",
                      { style: { overflow: "hidden" } },
                      h(
                        "p",
                        {
                          style: {
                            margin: 0,
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 1,
                            overflow: "ellipsis",
                            display: "-webkit-box",
                            maxWidth: "240px",
                          },
                        },
                        "Punch Bowl Social",
                      ),
                    ),
                    h(
                      "p",
                      {
                        style: {
                          margin: 0,
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 1,
                          overflow: "ellipsis",
                          display: "-webkit-box",
                          maxWidth: "240px",
                        },
                      },
                      "Sacramento, CA",
                    ),
                  ),
                ),
                h("p", { style: { margin: 0, width: "100px" } }, "10/01/2024"),
              ),
            ),
            h(
              "div",
              { style: buttonContainerStyle },
              h("span", { style: beforeSpanStyle }), // This acts as the :before pseudo-element
              h(
                "a",
                {
                  href: ``,
                  style: buttonStyle("#C6AFC0"), // Button's background color
                  target: "_blank",
                },
                "Inside The Event", // Button text content
              ),
            ),
          ),
          h(
            "div",
            { style: containerStyle },
            h(
              "div",
              {},
              h(
                "div",
                {},
                h(
                  "div",
                  {
                    style: {
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    },
                  },
                  h(
                    "div",
                    {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        gap: "1rem",
                      },
                    },
                    h(
                      "div",
                      {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                        },
                      },
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
                          },
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
                              borderRadius: "10px",
                            },
                          },
                          "Client Logo",
                        ),
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
                            height: "min-content",
                          },
                        },
                        "PAC",
                      ),
                    ),
                  ),
                  h(
                    "p",
                    { style: eventNameStyle },
                    "Event Name for a Postponed Event",
                  ),
                ),
                h(
                  "p",
                  { style: { margin: 0 } },
                  h(
                    "span",
                    { style: { color: "red", paddingLeft: "1rem" } },
                    postponedEventText,
                  ),
                ),
              ),
            ),
            h(
              "div",
              { style: eventInfoStyle },
              h(
                "div",
                { style: { display: "flex", justifyContent: "space-between" } },
                h(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    },
                  },
                  h("img", {
                    style: { maxWidth: "20px", height: "auto" },
                    src: "/images/common/location-icon.svg",
                  }),
                  h(
                    "div",
                    { style: { display: "flex", flexDirection: "column" } },
                    h(
                      "div",
                      { style: { overflow: "hidden" } },
                      h(
                        "p",
                        {
                          style: {
                            margin: 0,
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 1,
                            overflow: "ellipsis",
                            display: "-webkit-box",
                            maxWidth: "240px",
                          },
                        },
                        "Somewhere Cool",
                      ),
                    ),
                    h(
                      "p",
                      {
                        style: {
                          margin: 0,
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 1,
                          overflow: "ellipsis",
                          display: "-webkit-box",
                          maxWidth: "240px",
                        },
                      },
                      "Los Angeles, CA",
                    ),
                  ),
                ),
                h(
                  "p",
                  { style: { margin: 0, width: "100px" } },
                  "12/01/2024 - 12/03/2024",
                ),
              ),
            ),
            h(
              "div",
              { style: buttonContainerStyle },
              h("span", { style: beforeSpanStyle }), // This acts as the :before pseudo-element
              h(
                "a",
                {
                  href: ``,
                  style: buttonStyle("#C6AFC0"), // Button's background color
                  target: "_blank",
                },
                "Inside The Event", // Button text content
              ),
            ),
          ),
        ),
      ),

      //Events in the Works
      h(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            backgroundColor: "#F8F9EE",
            padding: "2.5rem",
          },
        },
        h(
          "div",
          {},
          h(
            "h1",
            { style: { margin: 0, marginBottom: "1rem", fontSize: "2.5rem" } },
            comingSoonEventsSectionTitle,
          ),
          h(
            "p",
            { style: { margin: 0, fontSize: "1rem" } },
            comingSoonEventsSectionSubtitle,
          ),
        ),
        h(
          "div",
          { style: containerStyle },
          h(
            "div",
            {},
            h(
              "div",
              {},
              h(
                "div",
                {
                  style: {
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  },
                },
                h(
                  "div",
                  {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      gap: "1rem",
                    },
                  },
                  h(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                      },
                    },
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
                        },
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
                            borderRadius: "10px",
                          },
                        },
                        "Client Logo",
                      ),
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
                          height: "min-content",
                        },
                      },
                      "501(c)(4)",
                    ),
                  ),
                ),
                h(
                  "p",
                  { style: eventNameStyle },
                  "Event Name for an event that's In The Works",
                ),
              ),
            ),
          ),
          h(
            "div",
            { style: eventInfoStyle },
            h(
              "div",
              { style: { display: "flex", justifyContent: "space-between" } },
              h(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  },
                },
                h("img", {
                  style: { maxWidth: "20px", height: "auto" },
                  src: "/images/common/location-icon.svg",
                }),
                h(
                  "div",
                  { style: { display: "flex", flexDirection: "column" } },
                  h(
                    "p",
                    {
                      style: {
                        margin: 0,
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 1,
                        overflow: "ellipsis",
                        display: "-webkit-box",
                        maxWidth: "240px",
                      },
                    },
                    "Los Angeles, CA",
                  ),
                ),
              ),
              h("p", { style: { margin: 0, width: "100px" } }, "01/03/2025"),
            ),
          ),
          h(
            "div",
            { style: buttonContainerStyle },
            h("span", { style: beforeSpanStyle }), // This acts as the :before pseudo-element
            h(
              "a",
              {
                href: ``,
                style: buttonStyle("#FCFC62"), // Button's background color
                target: "_blank",
              },
              "Get Event Updates", // Button text content
            ),
          ),
        ),
      ),
    );
  },
});

CMS.registerPreviewTemplate("eventsPage", EventsPagePreview);
