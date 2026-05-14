const FOOTER_LINKS = [
  {
    heading: "Account",
    links: ["FAQ", "Help Centre", "Account", "Ways to Watch"],
  },
  {
    heading: "Company",
    links: ["Media Centre", "Investor Relations", "Jobs", "Contact Us"],
  },
  {
    heading: "Legal",
    links: ["Terms of Use", "Privacy", "Cookie Preferences", "Legal Notices"],
  },
  {
    heading: "More",
    links: ["Speed Test", "Corporate Information", "Only on Netflix"],
  },
];

const SOCIAL_LINKS = [
  {
    label: "Twitter",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 4l16 16M4 20L20 4" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/[0.06] text-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="flex items-start justify-between flex-wrap gap-6 mb-10">
          <div>
            <p className="text-xs text-white/30 mb-2 tracking-wide">Need help?</p>
            <button
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              000-800-919-1694
            </button>
          </div>

          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((s) => (
              <button
                key={s.label}
                aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-white/40 hover:text-white hover:border-white/25 transition-all duration-200"
              >
                {s.icon}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 mb-10">
          {FOOTER_LINKS.map((section) => (
            <div key={section.heading}>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/25 mb-4">
                {section.heading}
              </p>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <button
                      className="text-white/45 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.07] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-white/20 text-xs">Netflix India</span>
          <span className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} StreamApp. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
