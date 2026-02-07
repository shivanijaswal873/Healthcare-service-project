import doc from "@/assets/image-dr.png";

const AboutUnify = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-6">
            Leading the Way in Medical Excellence
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Unify has been a leader in revenue cycle management and we provide
            comprehensive medical billing services to streamline revenue cycle
            and create insightful clinical documentation for healthcare
            providers.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our solutions allow doctors to focus on what matters most – their
            patients. We understand that financial health lies in getting
            adequate reimbursement.
          </p>

          <p className="text-gray-600 leading-relaxed mb-10">
            With excellence, we remove the administrative burden and ease the
            process of medical billing. We take medical billing one step at a
            time to embark on precision and prevent errors.
          </p>

          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md inline-flex items-center gap-2">
            Read More
            
          </button>
        </div>

        <div className="relative">
          <img
            src={doc}
            alt="Medical Excellence"
            className="rounded-xl shadow-xl w-full object-cover"
          />

        </div>

      </div>
    </section>
  );
};

export default AboutUnify;
