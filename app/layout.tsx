import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptCost — Track AI Prompt Costs Per Customer",
  description: "SDK that wraps AI API calls, attributes costs to user IDs, and provides per-customer cost dashboards for AI-powered SaaS founders."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="da5fea02-0ab8-406d-8f28-97638411b89e"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
