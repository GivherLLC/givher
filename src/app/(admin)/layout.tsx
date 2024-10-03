// components/AdminLayout.tsx
import React from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Content Manager</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default AdminLayout;