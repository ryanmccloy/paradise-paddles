function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-off-white "
    >
      {children}
    </a>
  );
}

export default SocialIcon;
