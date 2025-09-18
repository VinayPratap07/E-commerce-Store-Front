function CommitmentSection() {
  return (
    <div className="bg-[#212121] text-white font-inter py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">
          Why Shop With Velora?
        </h2>

        {/* Section Description */}
        <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed mb-12">
          At Velora, we're dedicated to providing an unparalleled shopping
          experience. From our curated collections of clothing and electronics
          to our customer-first policies, every detail is designed with you in
          mind.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start space-y-3"
            >
              {feature.icon}
              <span className="text-sm font-medium text-gray-300">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <button className="font-poppins bg-transparent border border-gray-400 text-white rounded-full py-3 px-8 text-base font-medium cursor-pointer transition-all hover:bg-white hover:text-gray-900">
          Learn More About Our Mission
        </button>
      </div>
    </div>
  );
}

export default CommitmentSection;

const TruckIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="1" y="3" width="15" height="13"></rect>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
    <circle cx="5.5" cy="18.5" r="2.5"></circle>
    <circle cx="18.5" cy="18.5" r="2.5"></circle>
  </svg>
);

const ShieldIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const BadgeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
  </svg>
);

const BoxIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const HeadsetIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
  </svg>
);

const features = [
  { icon: <TruckIcon className="h-8 w-8 mx-auto" />, text: "Fast Delivery" },
  { icon: <ShieldIcon className="h-8 w-8 mx-auto" />, text: "Secure Payments" },
  {
    icon: <BadgeIcon className="h-8 w-8 mx-auto" />,
    text: "Quality Guarantee",
  },
  { icon: <BoxIcon className="h-8 w-8 mx-auto" />, text: "Easy Returns" },
  { icon: <HeadsetIcon className="h-8 w-8 mx-auto" />, text: "24/7 Support" },
];
