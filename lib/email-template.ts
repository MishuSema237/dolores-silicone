export function generateEmailTemplate(content: string) {
  const logoUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/assets/owners-logo/Dolores Silicone Logo.png`;
  const primaryColor = "#9333ea"; // Purple-600
  const backgroundColor = "#f9fafb";
  const contentWidth = "600px";

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dolores Silicone</title>
      <style>
        body {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          background-color: ${backgroundColor};
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          color: #1f2937;
        }
        .wrapper {
          width: 100%;
          table-layout: fixed;
          background-color: ${backgroundColor};
          padding-top: 40px;
          padding-bottom: 60px;
        }
        .container {
          max-width: ${contentWidth};
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);
          border: 1px solid #e5e7eb;
        }
        .header {
          text-align: center;
          padding: 40px 0 20px 0;
          background-color: #ffffff;
        }
        .logo {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          display: inline-block;
          margin-bottom: 16px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .brand-name {
          color: #111827;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 0;
        }
        .accent-line {
            width: 40px;
            height: 2px;
            background-color: ${primaryColor};
            margin: 16px auto 0;
            opacity: 0.5;
        }
        .content {
          padding: 30px 40px 50px;
          background-color: #ffffff;
          line-height: 1.7;
          font-size: 16px;
          color: #374151;
        }
        h1 {
          color: #111827;
          font-size: 26px;
          font-weight: 800;
          margin-top: 0;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }
        h2 {
          color: #1f2937;
          font-size: 20px;
          font-weight: 700;
          margin-top: 32px;
          margin-bottom: 16px;
          border-bottom: 1px solid #f3f4f6;
          padding-bottom: 8px;
        }
        p {
          margin-bottom: 20px;
        }
        ul {
          margin-bottom: 20px;
          padding-left: 20px;
        }
        li {
          margin-bottom: 8px;
        }
        a {
          color: ${primaryColor};
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s;
        }
        a:hover {
            text-decoration: underline;
        }
        .button {
          display: inline-block;
          background-color: ${primaryColor};
          color: #ffffff !important;
          padding: 14px 32px;
          border-radius: 9999px; /* Rounded pill */
          text-decoration: none !important;
          font-weight: 600;
          text-align: center;
          margin-top: 24px;
          margin-bottom: 24px;
          box-shadow: 0 4px 12px rgba(147, 51, 234, 0.25);
        }
        .table-summary {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
            margin-bottom: 30px;
        }
        .table-summary th {
            text-align: left;
            padding: 12px;
            border-bottom: 2px solid #e5e7eb;
            color: #6b7280;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .table-summary td {
            padding: 16px 12px;
            border-bottom: 1px solid #f3f4f6;
            vertical-align: top;
        }
        .table-summary td.price {
            text-align: right;
            white-space: nowrap;
            font-weight: 600;
        }
        .footer {
          background-color: #ffffff;
          padding: 30px 20px;
          text-align: center;
          font-size: 13px;
          color: #9ca3af;
          border-top: 1px solid #f3f4f6;
        }
        .footer a {
          color: #6b7280;
          font-weight: 500;
          margin: 0 8px;
        }
        @media only screen and (max-width: 600px) {
          .wrapper {
            padding-top: 0;
            padding-bottom: 0;
          }
          .container {
            width: 100% !important;
            border-radius: 0;
            border: none;
            box-shadow: none;
          }
          .content {
            padding: 20px 24px 40px;
          }
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
             <img src="${logoUrl}" alt="Dolores Silicone" class="logo">
             <div class="brand-name">Dolores Silicone</div>
             <div class="accent-line"></div>
          </div>
          <div class="content">
            ${content}
          </div>
          <div class="footer">
            <p style="margin-bottom: 16px;">
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}/gallery">Gallery</a>
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}/contact">Contact</a>
            </p>
            <p>&copy; ${new Date().getFullYear()} Dolores Silicone. All rights reserved.</p>
            <p style="margin-top: 8px; font-size: 11px; opacity: 0.8;">
                You are receiving this because you made a purchase or inquiry.
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}
