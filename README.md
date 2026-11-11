# Weezo AI Landing Page

The **Weezo AI** landing page introduces the product's Dataset-as-a-Service proposition and its use in building more useful, domain-aware customer-support chatbots. It is a responsive, animated Next.js website with a scripted chatbot comparison, illustrative analytics, product and workflow sections, industry examples, a testimonial carousel, and a demo-request form.

> **Repository scope:** This repository contains the marketing website and its demo-request email endpoint. It does not contain a production chatbot service, model-training pipeline, dataset-processing platform, customer analytics backend, or integrations with the systems described in the website's product copy.

## What the website includes

- **Landing page and navigation** — animated hero section, responsive navigation, and demo calls to action.
- **Chatbot comparison** — two side-by-side conversations that illustrate a rule-based flow and a Weezo-style assistant.
- **Analytics preview** — accuracy and customer-satisfaction charts rendered with Recharts.
- **Customer insights** — content describing sentiment tracking, response-time analysis, and FAQ-gap detection.
- **Product and workflow sections** — feature highlights and a five-step dataset workflow: collect, clean and normalize, label and annotate, train and validate, then deploy and monitor.
- **Industry examples** — banking and fintech, government, customer service, telecommunications, e-commerce, and sports betting.
- **Testimonials** — a carousel of hard-coded quote and attribution entries.
- **Demo requests** — a form that sends an email through the Next.js contact API route and Nodemailer.

### Important: illustrative content and public claims

Several elements are demonstrations rather than live product functionality:

- The chatbot conversations are predefined in the frontend. They do not call a live model or backend.
- The analytics charts use values hard-coded in the component. They are not connected to production telemetry or a live analytics service.
- The insights and dataset workflow sections are explanatory website content; this repository does not implement the underlying data or model operations.
- The testimonial carousel contains hard-coded quotes, names, and organization names. Verify that each endorsement is genuine and that publication has been authorized.
- Performance figures and product statements (including security, accuracy, and continuous-improvement claims) should be substantiated and approved before being presented as factual customer or product claims.

## Technology stack

| Area | Technology |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) App Router |
| UI | [React 19](https://react.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Charts | [Recharts](https://recharts.org/) |
| Icons | [Lucide React](https://lucide.dev/) |
| UI primitives | Radix UI Slot and locally maintained components |
| Email delivery | [Nodemailer](https://nodemailer.com/) |

Additional libraries support intersection-observer behavior, typewriter text, and shared styling utilities. Exact dependency versions are recorded in `package.json` and `package-lock.json`.

## Getting started

### Prerequisites

- Node.js **18.18.0 or later**. Use a currently supported Node.js LTS release for development and deployment.
- npm (the repository includes `package-lock.json`).

### 1. Clone the repository

```bash
git clone https://github.com/weezo-chatbot/weezo-ai-landing.git
cd weezo-ai-landing
```

### 2. Install dependencies

Use `npm ci` for an installation that follows the committed lockfile:

```bash
npm ci
```

### 3. Configure the demo-request email

Create a `.env.local` file in the project root:

```env
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
CONTACT_EMAIL=destination@example.com
```

| Variable | Purpose |
| --- | --- |
| `SMTP_USER` | Gmail account used as the sender. |
| `SMTP_PASS` | Gmail App Password or the applicable Gmail SMTP credential. |
| `CONTACT_EMAIL` | Email address that should receive demo requests. |

The current transporter configuration in `app/api/contact/route.ts` explicitly uses Nodemailer's **Gmail** service. Changing these environment values does not switch the integration to another email provider; supporting another provider requires changing the transporter configuration.

For Gmail, use an App Password where supported rather than your normal account password. Keep credentials server-side: do not add them to client-side code or commit `.env.local`. The repository's `.gitignore` excludes environment files.

The landing page can be viewed without email credentials. The demo-request submission will not work until valid sender credentials and a recipient address are configured. There is currently no `.env.example` file, so use the variable names shown above.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run lint` | Run ESLint. |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Start the production server after a successful build. |

Run lint separately: `next.config.ts` currently sets `eslint.ignoreDuringBuilds` to `true`, so a production build does not run ESLint. There is no automated test script configured in `package.json` at present.

## Demo-request flow

1. A visitor opens the **Book a Demo** form in the call-to-action section.
2. The form sends the visitor's name, email, company, and message to `POST /api/contact`.
3. The route uses Nodemailer and the environment variables above to send an email to `CONTACT_EMAIL`.
4. The frontend displays a success or error message based on the API response.

The current flow sends an email; it does not save submissions to a database, CRM, or mailing list.

### Production-readiness note

The contact route is a minimal example, not a complete hardened public form endpoint. In its current implementation, submitted values are interpolated into an HTML email template without HTML escaping, and the route does not perform server-side schema validation or rate limiting. Before exposing the form to untrusted public traffic, add server-side validation, safe HTML encoding, abuse protection, and suitable operational monitoring.

## Project structure

```text
.
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Demo-request email endpoint
│   ├── favicon.ico
│   ├── globals.css            # Global styles and Tailwind theme
│   ├── layout.tsx             # Root layout, fonts, and metadata
│   └── page.tsx               # Landing page composition
├── components/
│   ├── ui/
│   │   ├── button.tsx         # Shared button primitive
│   │   └── card.tsx           # Shared card primitives
│   ├── AnalyticsPanel.tsx     # Illustrative performance charts
│   ├── BackToTop.tsx          # Scroll-to-top control
│   ├── CTASection.tsx         # Demo-request form
│   ├── ChatDemo.tsx           # Scripted chatbot comparison
│   ├── Features.tsx           # Product feature content
│   ├── Footer.tsx             # Contact details and footer
│   ├── Hero.tsx               # Hero, navigation, and animated background
│   ├── HowItWorks.tsx         # Dataset workflow presentation
│   ├── Industries.tsx         # Industry examples
│   ├── InsightsPanel.tsx      # Customer-insight content
│   └── Testimonials.tsx       # Hard-coded testimonial carousel
├── lib/
│   └── utils.ts               # Shared utilities
├── public/                    # Static assets
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Deployment

The site can be deployed to a platform that supports the Next.js version used by this repository, such as [Vercel](https://vercel.com/).

For a typical deployment:

1. Push the repository to your Git provider and import it into the hosting platform.
2. Configure `SMTP_USER`, `SMTP_PASS`, and `CONTACT_EMAIL` in the hosting platform's server-side environment settings.
3. Build using `npm run build`.
4. Deploy the site and test the demo-request form using the production email configuration.

Do not expose SMTP credentials through public environment variables. Verify the form's production protections before directing real visitors to it.

## Contributing

Contributions are welcome. For substantial changes, open an issue first to discuss the proposal. Pull requests should include a clear summary of the change and relevant testing notes or screenshots.

## License

No license file is currently present in the repository. Unless a license is added, do not assume that the code is available for reuse, modification, or redistribution.
