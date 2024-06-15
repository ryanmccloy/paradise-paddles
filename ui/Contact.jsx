function Contact({ icon, name }) {
  return (
    <div className="flex gap-[20px] items-center">
      {icon}
      {name}
    </div>
  );
}

export default Contact;
