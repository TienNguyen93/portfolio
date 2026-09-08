import React, { useState } from 'react';

interface FooterProps {
  isContactOpen: boolean;
  onOpenContact: () => void;
  onCloseContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  isContactOpen,
  onOpenContact,
  onCloseContact,
}) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', subject: '', message: '' });
        onCloseContact();
      }, 1800);
    }, 1000);
  };

  return (
    <>
      <footer className="w-full border-t py-10 mt-20 transition-colors" style={{ borderColor: 'var(--line)', backgroundColor: 'var(--bg)' }}>
        <div className="max-w-[1000px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          {/* Signature */}
          <div style={{ color: 'var(--muted)' }} className="font-mono text-xs">
            designed + coded with <span style={{ color: 'var(--accent)' }}>&hearts;</span> by tien nguyen &copy; {new Date().getFullYear()}
          </div>

          {/* External Links & Email Popover Trigger */}
          <div className="flex items-center gap-6 font-medium">
            <a
              href="https://linkedin.com/in/tiennguyen93"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
              style={{ color: 'var(--text)' }}
            >
              linkedin
            </a>
            <a
              href="https://github.com/TienNguyen93"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
              style={{ color: 'var(--text)' }}
            >
              github
            </a>
            <button
              onClick={onOpenContact}
              className="hover:underline transition-colors focus:outline-none"
              style={{ color: 'var(--accent)' }}
            >
              email
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
              style={{ color: 'var(--text)' }}
            >
              r&eacute;sum&eacute;
            </a>
          </div>
        </div>
      </footer>

      {/* Interactive Contact Popover Modal */}
      {isContactOpen && (
        <div className="modal-backdrop" onClick={onCloseContact}>
          <div
            className="modal-card relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onCloseContact}
              className="absolute top-4 right-4 p-1 rounded-md text-sm hover:opacity-70 transition-opacity"
              style={{ color: 'var(--muted)' }}
              aria-label="Close modal"
            >
              &times;
            </button>

            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>
              get in touch
            </h3>
            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              Send me a message for AI/ML roles, data engineering collaborations, or project inquiries.
            </p>

            {status === 'sent' ? (
              <div className="py-8 text-center space-y-2">
                <div className="text-2xl">&check;</div>
                <p className="font-bold text-lg" style={{ color: 'var(--accent)' }}>
                  Message Sent!
                </p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Thanks for reaching out. I'll respond as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono mb-1" style={{ color: 'var(--muted)' }}>
                    name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg text-sm border focus:outline-none focus:ring-1"
                    style={{
                      backgroundColor: 'var(--chip)',
                      borderColor: 'var(--line)',
                      color: 'var(--text)',
                    }}
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono mb-1" style={{ color: 'var(--muted)' }}>
                    email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg text-sm border focus:outline-none focus:ring-1"
                    style={{
                      backgroundColor: 'var(--chip)',
                      borderColor: 'var(--line)',
                      color: 'var(--text)',
                    }}
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono mb-1" style={{ color: 'var(--muted)' }}>
                    subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg text-sm border focus:outline-none focus:ring-1"
                    style={{
                      backgroundColor: 'var(--chip)',
                      borderColor: 'var(--line)',
                      color: 'var(--text)',
                    }}
                    placeholder="AI Project / Role Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono mb-1" style={{ color: 'var(--muted)' }}>
                    message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg text-sm border focus:outline-none focus:ring-1 resize-none"
                    style={{
                      backgroundColor: 'var(--chip)',
                      borderColor: 'var(--line)',
                      color: 'var(--text)',
                    }}
                    placeholder="Hi Tien, I'd like to discuss..."
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onCloseContact}
                    className="btn-outline text-sm"
                  >
                    cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-accent text-sm flex items-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="animate-spin text-xs">&empty;</span>
                        sending...
                      </>
                    ) : (
                      'send message →'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
