import React from 'react';

export const DonorSegmentationDetail: React.FC = () => {
  const handleBack = () => {
    window.location.hash = '#/work';
    window.scrollTo(0, 0);
  };

  return (
    <div className="view max-w-[860px] mx-auto px-6 py-12 selection:bg-[var(--accent)] selection:text-white">
      {/* Back link */}
      <button
        type="button"
        onClick={handleBack}
        className="inline-block text-sm text-[var(--muted)] hover:text-[var(--ink)] mb-8 transition-colors cursor-pointer"
      >
        ← work
      </button>

      {/* Case Study Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-3 tracking-tight lowercase">
        n8n x donor segmentation &amp; personalized communication
      </h1>
      <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed font-normal">
        automating donor segmentation and personalized outreach workflows with local LLM.
      </p>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 my-6 border-y border-[var(--line)] text-sm">
        <div>
          <div className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-1">role</div>
          <div className="font-medium text-[var(--ink)]">main contributor</div>
        </div>
        <div>
          <div className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-1">timeline</div>
          <div className="font-medium text-[var(--ink)]">sep 2026 – present</div>
        </div>
        <div>
          <div className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-1">skills &amp; tools</div>
          <div className="font-medium text-[var(--ink)]">n8n, ollama (llama 3.1), google sheets api</div>
        </div>
        <div>
          <div className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-1">showcase</div>
          <div className="font-medium text-[var(--accent)]">
            <a
              href="https://github.com/TienNguyen93/hvac-n8n"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github repo →
            </a>
          </div>
        </div>
      </div>

      {/* Case Study Sections */}
      <article className="space-y-10 my-10 text-[var(--ink)] leading-relaxed">
        <section>
          <h2 className="text-xl font-bold mb-3 text-[var(--ink)] lowercase">tl;dr</h2>
          <p className="text-[var(--ink)] opacity-90 leading-relaxed">
            Built an automated donor communication workflow using n8n and local llm (llama3.1) to classify donors via RFM (recency, frequency, monetary) scoring and their behaviors, and draft personalized thank-you notes, cutting acknowledgment turnaround time by 50% while maintaining on-premise data privacy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-[var(--ink)]">Overview</h2>
          <p className="text-[var(--ink)] opacity-90 leading-relaxed">
            Nonprofit fundraising teams often face massive operational overhead when processing recurring donations. Manually reviewing donor histories, calculating gift frequencies, and drafting individual thank-you notes takes dozens of hours each month, delaying follow-ups and reducing donor retention.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-[var(--ink)]">Problem</h2>
          <p className="text-[var(--ink)] opacity-90 leading-relaxed">
            Staff spent 4-8 hours every week manually cross-referencing intake spreadsheets and typing custom emails. High-value donors often received generic auto-replies while staff worked through the backlogs, resulting in missed stewardship opportunities.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-[var(--ink)]">Opportunity / Gap</h2>
          <p className="text-[var(--ink)] opacity-90 leading-relaxed">
            Current email marketing suites successfully automate dynamic RFM tiering, but they fall short on native contextual message generation. Resolving this constraint through third-party cloud AI solutions is currently bottlenecked by severe data privacy risks involving donor contribution histories.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-[var(--ink)]">Solution &amp; architecture</h2>
          <p className="text-[var(--ink)] opacity-90 leading-relaxed mb-6">
            Built an automated n8n workflow that ingests donor transactions, calculates RFM scores to categorize donors into tiers (Champions, Loyal, At-Risk, Lapsed, New/First-Time, Standard), layer them in engagement-pattern signals (event-driven, email-only, mixed-channel, insufficient-data), and passes donor context to local LLM (Llama 3.1) to draft warm, personalized emails before syncing records to Google Sheets.
          </p>

          {/* Visual Canvas Diagram */}
          <div className="p-6 rounded-xl border border-[var(--line)] bg-[var(--chip-bg)] my-6 overflow-x-auto">
            <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-4 text-center">n8n workflow pipeline</p>
            <div className="min-w-[640px] flex items-center justify-between gap-3 text-xs">
              <div className="p-3 rounded-lg border border-[var(--line)] bg-[var(--bg)] text-center flex-1">
                <span className="font-bold block text-[var(--ink)]">1. Monthly Trigger Node</span>
                <span className="text-[var(--muted)]">Google Sheets Input</span>
              </div>
              <span className="text-[var(--muted)] font-mono">→</span>
              <div className="p-3 rounded-lg border border-[var(--line)] bg-[var(--bg)] text-center flex-1">
                <span className="font-bold block text-[var(--ink)]">2. RFM Engine</span>
                <span className="text-[var(--muted)]">Scoring &amp; Tiering</span>
              </div>
              <span className="text-[var(--muted)] font-mono">→</span>
              <div className="p-3 rounded-lg border border-[var(--line)] bg-[var(--bg)] text-center flex-1">
                <span className="font-bold block text-[var(--ink)]">3. Behavioral Segmentation</span>
                <span className="text-[var(--muted)]">Secondary Signal Tiering</span>
              </div>
              <span className="text-[var(--muted)] font-mono">→</span>
              <div className="p-3 rounded-lg border border-[var(--line)] bg-[var(--bg)] text-center flex-1">
                <span className="font-bold block text-[var(--ink)]">4. Local Ollama LLM</span>
                <span className="text-[var(--muted)]">Llama 3.1 Prompt</span>
              </div>
              <span className="text-[var(--muted)] font-mono">→</span>
              <div className="p-3 rounded-lg border border-[var(--line)] bg-[var(--bg)] text-center flex-1">
                <span className="font-bold block text-[var(--ink)]">5. Log Personalized Messages</span>
                <span className="text-[var(--muted)]">Google Sheets Donor Dataset</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-[var(--ink)]">Outcome &amp; Impact</h2>
          <ul className="list-disc pl-5 space-y-2 text-[var(--ink)] opacity-90">
            <li><strong>Time Reclaimed:</strong> Saved 10+ hours per week of manual messages drafting and spreadsheet management.</li>
            <li><strong>Privacy Guarantee:</strong> Zero donor PII transmitted to third-party cloud AI vendors by self-hosting local LLM inferencing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-[var(--ink)]">Lesson learned</h2>
          <p className="text-[var(--ink)] opacity-90 leading-relaxed">
            The key to effective automated outreach isn't just generating text, it's establishing tight system prompts and human-in-the-loop review for high-stakes interactions.
          </p>
        </section>
      </article>

      {/* Footer link */}
      <div className="pt-8 mt-12 border-t border-[var(--line)] flex justify-between items-center text-sm">
        <button
          type="button"
          onClick={handleBack}
          className="text-[var(--muted)] hover:text-[var(--ink)] transition-colors cursor-pointer"
        >
          ← back to work
        </button>
        <a
          href="https://github.com/TienNguyen93/hvac-n8n"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:underline font-medium"
        >
          view on github →
        </a>
      </div>
    </div>
  );
};

export default DonorSegmentationDetail;
