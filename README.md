# Weezo AI Landing Page

A responsive marketing website for **Weezo AI**, showcasing its AI-powered chatbot and Dataset-as-a-Service offering. The site introduces the product, demonstrates a scripted chatbot comparison, presents sample analytics and customer insights, and lets visitors request a product demo.

## Features

- **Marketing landing page** with animated hero section and responsive navigation.
- **Interactive chatbot comparison** showing a traditional rule-based flow alongside a Weezo AI conversation. The conversations are scripted examples, not a live AI integration.
- **Analytics dashboard previews** with accuracy and customer-satisfaction charts using static sample data.
- **Customer insights** highlighting sentiment tracking, response-time analysis, and FAQ-gap detection.
- **Product features and workflow** covering domain-specific datasets, data preparation, annotation, model validation, deployment, and monitoring.
- **Industry coverage** for banking and fintech, government, customer service, telecommunications, e-commerce, and sports betting.
- **Testimonials carousel** and a demo-request call to action.
- **Email notifications** for demo requests through a Next.js API route and Nodemailer.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Recharts](https://recharts.org/) for charts
- [Lucide React](https://lucide.dev/) for icons
- [Nodemailer](https://nodemailer.com/) for demo-request emails

## Getting Started

### Prerequisites

- Node.js **18.18 or later** (Node.js 20 LTS is recommended)
- npm

### 1. Clone the repository

```bash
git clone https://github.com/weezo-chatbot/weezo-ai-landing.git
cd weezo-ai-landing
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
CONTACT_EMAIL=destination@example.com
```

These variables are used by `app/api/contact/route.ts`:

| Variable | Description |
| --- | --- |
| `SMTP_USER` | Gmail account used by Nodemailer to send demo notifications. |
| `SMTP_PASS` | Gmail app password (or the SMTP credential configured for your mail account). |
| `CONTACT_EMAIL` | Inbox that should receive demo requests. |

For Gmail, use an **App Password** where supported. Do not use your normal account password, commit `.env.local`, or expose SMTP credentials in client-side code. The repository's `.gitignore` excludes environment files.

The landing page itself can run without these values, but submitting the demo form requires valid mail configuration.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Next.js development server. |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Start the production server (run after `npm run build`). |
| `npm run lint` | Run ESLint. |

## Project Structure

```text
.
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Handles demo-request email submissions
│   ├── globals.css            # Global styles and Tailwind theme
│   ├── layout.tsx             # Root layout and page metadata
│   └── page.tsx               # Landing page composition
├── components/
│   ├── ui/                    # Reusable UI components
│   ├── Hero.tsx               # Hero section, animated background and navigation
│   ├── ChatDemo.tsx            # Scripted chatbot comparison
│   ├── AnalyticsPanel.tsx      # Sample performance charts
│   ├── InsightsPanel.tsx       # Customer-insight highlights
│   ├── Features.tsx            # Product features
│   ├── HowItWorks.tsx          # Dataset workflow
│   ├── Industries.tsx          # Industries served
│   ├── Testimonials.tsx        # Testimonial carousel
│   ├── CTASection.tsx           # Demo-request form
│   ├── Footer.tsx               # Contact details and footer
│   └── BackToTop.tsx            # Scroll-to-top control
├── lib/                        # Shared utilities
├── public/                     # Static assets
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Demo Request Flow

1. A visitor opens the **Book a Demo** form in the call-to-action section.
2. The form submits the visitor's name, email, company, and message to `POST /api/contact`.
3. The API route uses Nodemailer and the SMTP environment variables to send an email to `CONTACT_EMAIL`.
4. The page displays a success or error message based on the API response.

Make sure the SMTP settings are configured before testing this flow.

## Deployment

The project can be deployed to any platform that supports Next.js, such as [Vercel](https://vercel.com/).

For a typical deployment:

1. Push the repository to your Git provider and import it into your hosting platform.
2. Set the environment variables listed above in the hosting platform's project settings.
3. Build with `npm run build` (the platform's default Next.js build command).
4. Deploy and test the demo-request form using the production environment variables.

## Notes

- The chatbot conversations and analytics shown on the landing page are illustrative, static frontend demonstrations. They are not connected to a production chatbot, live analytics service, or model-training pipeline in this repository.
- The testimonials and performance figures are page content/sample data. Confirm that they are approved and representative before using them as public customer claims.
- Never commit secrets or real customer information.

## Contributing

Contributions are welcome. For substantial changes, please open an issue first to discuss the proposed update. When submitting a pull request, include a clear description of the change and any relevant screenshots or testing notes.

## License

No license file was identified in the repository at the time this README was prepared. Unless a license is added, do not assume that the code is available for reuse or redistribution.
