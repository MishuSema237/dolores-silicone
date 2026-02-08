export function generateEmailTemplate(content: string) {
  const logoUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/assets/owners-logo/Dolores Silicone Logo.png`;
  const primaryColor = "#9333ea"; // Purple-600

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
          background-color: #f3f4f6;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          color: #1f2937;
        }
        .wrapper {
          width: 100%;
          table-layout: fixed;
          background-color: #f3f4f6;
          padding-bottom: 40px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .header {
          text-align: center;
          padding: 40px 20px;
          background: linear-gradient(135deg, #9333ea 0%, #7e22ce 100%);
        }
        .logo-container {
            width: 80px;
            height: 80px;
            margin: 0 auto;
            background-color: white;
            border-radius: 50%;
            padding: 4px;
            display: inline-block;
        }
        .logo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
        }
        .brand-name {
            color: white;
            font-size: 24px;
            font-weight: bold;
            margin-top: 16px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }
        .content {
          padding: 40px 40px;
          line-height: 1.6;
          font-size: 16px;
          color: #374151;
        }
        h1 {
          color: #111827;
          font-size: 24px;
          font-weight: 700;
          margin-top: 0;
          margin-bottom: 24px;
        }
        h2 {
          color: #374151;
          font-size: 20px;
          font-weight: 600;
          margin-top: 32px;
          margin-bottom: 16px;
        }
        p {
          margin-bottom: 16px;
        }
        a {
          color: ${primaryColor};
          text-decoration: none;
          font-weight: 600;
        }
        .button {
          display: inline-block;
          background-color: ${primaryColor};
          color: #ffffff !important;
          padding: 14px 28px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          text-align: center;
          margin-top: 24px;
          margin-bottom: 24px;
          box-shadow: 0 4px 6px -1px rgba(147, 51, 234, 0.3);
        }
        .footer {
          background-color: #f9fafb;
          padding: 32px 20px;
          text-align: center;
          font-size: 13px;
          color: #6b7280;
          border-top: 1px solid #e5e7eb;
        }
        .footer a {
            color: #6b7280;
            text-decoration: underline;
            font-weight: normal;
        }
        hr {
            border: 0;
            height: 1px;
            background: #e5e7eb;
            margin: 32px 0;
        }
        @media only screen and (max-width: 600px) {
          .container {
            width: 100% !important;
            border-radius: 0;
          }
          .content {
            padding: 30px 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div style="height: 40px;"></div>
        <div class="container">
          <div class="header">
             <div class="logo-container">
                <img src="${logoUrl}" alt="Dolores Silicone" class="logo">
             </div>
             <div class="brand-name">Dolores Silicone</div>
          </div>
          <div class="content">
            ${content}
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Dolores Silicone. All rights reserved.</p>
            <p style="margin-top: 12px;">
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}">Visit Our Gallery</a> &bull; 
              <a href="mailto:info@dolore-silicone.com">Contact Support</a>
            </p>
            <p style="margin-top: 24px; font-size: 11px; color: #9ca3af;">
                You are receiving this email because you made a purchase or inquiry at Dolores Silicone.
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}
