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
        n8n × donor segmentation &amp; personalized communication
      </h1>
      <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed font-normal">
        automating rfm donor scoring and personalized outreach workflows with local llms.
      </p>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 my-6 border-y border-[var(--line)] text-sm">
        <div>
          <div className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-1">role</div>
          <div className="font-medium text-[var(--ink)]">ai &amp; automation engineer</div>
        </div>
        <div>
          <div className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-1">timeline</div>
          <div className="font-medium text-[var(--ink)]">feb 2026 – present</div>
        </div>
        <div>
          <div className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-1">skills &amp; tools</div>
          <div className="font-medium text-[var(--ink)]">n8n, ollama (llama 3.1), google sheets, notion api, gmail api</div>
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
            built an automated outreach pipeline using n8n and local llms (ollama) to classify donors via RFM (recency, frequency, monetary) scoring and draft personalized thank-you notes, cutting acknowledgment turnaround time from 24+ hours to under 2 minutes while maintaining 100% on-premise data privacy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-[var(--ink)] lowercase">overview</h2>
          <p className="text-[var(--ink)] opacity-90 leading-relaxed">
            nonprofit fundraising teams often face massive operational overhead when processing recurring donations. manually reviewing donor histories, calculating gift frequencies, and drafting individual thank-you notes takes dozens of hours each month, delaying follow-ups and reducing donor retention.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-[var(--ink)] lowercase">problem</h2>
          <p className="text-[var(--ink)] opacity-90 leading-relaxed">
            staff spent 10+ hours every week manually cross-referencing intake spreadsheets and typing custom emails. high-value donors often received generic auto-replies while staff worked through the backlogs, resulting in missed stewardship opportunities.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-[var(--ink)] lowercase">opportunity / gap</h2>
          <p className="text-[var(--ink)] opacity-90 leading-relaxed">
            off-the-shelf email marketing tools lack dynamic RFM tiering and contextual message generation, while third-party cloud AI solutions posed strict data privacy concerns regarding sensitive donor contribution records.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-[var(--ink)] lowercase">solution &amp; architecture</h2>
          <p className="text-[var(--ink)] opacity-90 leading-relaxed mb-6">
            built an automated n8n workflow that ingests donor transactions, calculates RFM scores to categorize donors into tiers (VIP, Sustaining, At-Risk, First-Time), and passes donor context to a local Ollama LLM instance (Llama 3.1) to draft warm, personalized emails before syncing records to Notion CRM and Gmail.
          </p>

          {/* Visual Canvas Diagram */}
          <div className="p-6 rounded-xl border border-[var(--line)] bg-[var(--chip-bg)] my-6 overflow-x-auto">
            <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-4 text-center">n8n workflow pipeline</p>
            <div className="min-w-[640px] flex items-center justify-between gap-3 text-xs">
              <div className="p-3 rounded-lg border border-[var(--line)] bg-[var(--bg)] text-center flex-1">
                <span className="font-bold block text-[var(--ink)]">1. Webhook / Intake</span>
                <span className="text-[var(--muted)]">Google Form Trigger</span>
              </div>
              <span className="text-[var(--muted)] font-mono">→</span>
              <div className="p-3 rounded-lg border border-[var(--line)] bg-[var(--bg)] text-center flex-1">
                <span className="font-bold block text-[var(--ink)]">2. RFM Engine</span>
                <span className="text-[var(--muted)]">Scoring &amp; Tiering</span>
              </div>
              <span className="text-[var(--muted)] font-mono">→</span>
              <div className="p-3 rounded-lg border border-[var(--line)] bg-[var(--bg)] text-center flex-1">
                <span className="font-bold block text-[var(--ink)]">3. Local Ollama LLM</span>
                <span className="text-[var(--muted)]">Llama 3.1 Prompt</span>
              </div>
              <span className="text-[var(--muted)] font-mono">→</span>
              <div className="p-3 rounded-lg border border-[var(--line)] bg-[var(--bg)] text-center flex-1">
                <span className="font-bold block text-[var(--ink)]">4. Dispatch &amp; Log</span>
                <span className="text-[var(--muted)]">Gmail API &amp; Notion</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-[var(--ink)] lowercase">actionable output</h2>
          <ul className="list-disc pl-5 space-y-2 text-[var(--ink)] opacity-90">
            <li><strong>VIP Major Donor Alert:</strong> Automated Slack notification sent to leadership whenever a contribution exceeds $1,000, attached with an executive summary.</li>
            <li><strong>At-Risk Intervention:</strong> Donors unengaged for &gt;180 days are flagged with customized re-engagement drafts for staff review.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-[var(--ink)] lowercase">outcome &amp; impact</h2>
          <ul className="list-disc pl-5 space-y-2 text-[var(--ink)] opacity-90">
            <li><strong>Turnaround Time:</strong> Reduced donor acknowledgment turnaround from 24–48 hours to under 2 minutes.</li>
            <li><strong>Time Reclaimed:</strong> Saved 10+ hours per week of manual drafting and spreadsheet management.</li>
            <li><strong>Privacy Guarantee:</strong> Zero donor PII transmitted to third-party cloud AI vendors by self-hosting local LLM inferencing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-[var(--ink)] lowercase">lesson learned</h2>
          <p className="text-[var(--ink)] opacity-90 leading-relaxed">
            the key to effective automated outreach isn't just generating text—it's establishing tight system prompts, fail-safe schema validation, and human-in-the-loop triggers for high-stakes interactions.
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
