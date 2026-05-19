export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase border border-[#30363d]">
          For AI-Powered SaaS Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know exactly which customers are{" "}
          <span className="text-[#58a6ff]">costing you money</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          PromptCost wraps your OpenAI &amp; Anthropic calls, attributes every token to a user ID, and shows you per-customer profitability in a live dashboard — so you can price smarter and stop subsidizing heavy users.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $29/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. No credit card required to try the SDK.</p>

        {/* Mini feature strip */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⚡", title: "2-line SDK setup", body: "Wrap your existing AI client. No refactoring needed." },
            { icon: "📊", title: "Per-user dashboard", body: "See cost, token usage, and margin per customer in real time." },
            { icon: "🔔", title: "Cost alerts", body: "Get notified when a user exceeds your profitability threshold." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited tracked users",
              "OpenAI + Anthropic support",
              "Real-time cost dashboard",
              "Profitability alerts via email",
              "CSV export",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          {[
            {
              q: "How does the SDK work?",
              a: "You wrap your existing OpenAI or Anthropic client with our SDK and pass a userId. We intercept each call, count tokens, calculate cost, and send the data to your dashboard — no changes to your business logic."
            },
            {
              q: "Does it add latency to my AI calls?",
              a: "No. Cost tracking is done asynchronously after the response is returned. Your users experience zero added latency."
            },
            {
              q: "What if I want to cancel?",
              a: "Cancel any time from your billing portal. You keep access until the end of your billing period, no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-10">
        &copy; {new Date().getFullYear()} PromptCost. All rights reserved.
      </footer>
    </main>
  );
}
