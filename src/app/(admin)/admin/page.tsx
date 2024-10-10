'use client';

export default function Admin() {
  return (
    <html
      lang="en"
      dangerouslySetInnerHTML={{
        __html: `
        <!doctype html>
        <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />
        <title>Content Manager</title>
        </head>
        <body>
        <!-- Dashboard script-->
        <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
        <!-- netlify identity -->
        <script is:inline src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <!-- Customize the netlify identity widget to refresh on logout preventing users from using the cms when not logged in and then seeing an error -->
        <script is:inline>netlifyIdentity.on('logout', () => location.reload());</script>
        <!-- Link the external script for previews -->
        <script src="/admin/clients-preview.js"></script>
        <script src="/admin/event-preview.js"></script>
        <script src="/admin/coming-soon-preview.js"></script>
        <script src="/admin/homepage-preview.js"></script>
        <script src="/admin/clients-page-preview.js"></script>
        <script src="/admin/events-page-preview.js"></script>
        <script src="/admin/contact-page-preview.js"></script>
        <script src="/admin/team-page-preview.js"></script>
        <script src="/admin/signup-page-preview.js"></script>
        <script src="/admin/footer-preview.js"></script>
        </body>`,
      }}
    />
  );
}
