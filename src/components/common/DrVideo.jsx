import heroVideo from "@/assets/dr.mp4";

const DrVideo = () => {
  return (
    <section className="relative w-full">
      <div className="relative h-[90vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Medical Billing Experts You Can Trust
          </h1>

          <p className="max-w-2xl text-base md:text-lg mb-6">
            We provide end to end medical billing services to physicians helping
            maximize reimbursement and streamline practical operations
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-900 hover:bg-blue-700 px-8 py-3 rounded-lg">
              Get in Touch
            </button>
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-20 -mt-16 md:-mt-32 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 ">
          
          <div className="bg-red-600 text-white p-6 md:p-10 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Online Appointment
            </h3>
            <p className="mb-6 text-sm md:text-base">
              Follow the simple steps below and get your appointment fixed online
            </p>
            <button className="border border-white px-6 py-2 rounded">
              Make an appointment
            </button>
          </div>

          <div className="bg-blue-700 text-white p-6 md:p-10 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              24/7 Operation Reliability
            </h3>
            <p className="mb-6 text-sm md:text-base">
              Our quick turnaround and 24/7 support provide great operational
              reliability. Call us today.
            </p>
            <p className="text-2xl md:text-3xl font-bold">
              1800 - 333 555 78
            </p>
          </div>

          <div className="bg-red-600 text-white p-6 md:p-10 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Qualified Professionals
            </h3>
            <p className="mb-6 text-sm md:text-base">
              Our expertise and specialty specific experience improve your
              facility’s financial health.
            </p>
            <button className="border border-white px-6 py-2 rounded">
              Get in touch
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DrVideo;
