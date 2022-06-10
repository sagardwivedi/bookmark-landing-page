const ContactUs = () => {
  return (
    <div className="bg-soft-blue py-16 text-center">
      <div className="mx-auto flex w-[85%] flex-col space-y-5">
        <h5 className="text-white">35,000+ ALREADY JOINED</h5>
        <h1 className="text-white">
          Stay up-to-date with what we&#39;re doing
        </h1>
        <input
          type={"email"}
          className="rounded-md p-4 placeholder:text-grayish-blue"
          placeholder="Enter your email address"
        />
        <button className="btn-primary bg-soft-red">Contact Us</button>
      </div>
    </div>
  );
};

export default ContactUs;
