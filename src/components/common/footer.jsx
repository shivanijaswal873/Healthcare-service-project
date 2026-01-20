import {
    Phone,
    Mail,
    MapPin,
    Send,
} from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaPinterestP,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#1e2128] text-gray-300">
            <div className="max-w-7xl mx-auto px-5 py-16 grid gap-12 lg:grid-cols-3">

                <div>
                    <h3 className="text-white text-xl font-semibold mb-4">
                        About Us
                    </h3>
                    <p className="text-sm leading-relaxed">
                        We work with physicians’ groups and hospitals to streamline
                        their revenue cycle and create insightful documentation.
                        Our solutions allow doctors to focus on what matters the most –
                        their patients.
                    </p>

                    {/* Newsletter */}
                    <h4 className="text-white text-lg font-semibold mt-8 mb-3">
                        Newsletter
                    </h4>
                    <div className="flex items-center bg-[#2a2d36] rounded-full overflow-hidden">
                        <input
                            type="email"
                            placeholder="Enter your e-mail"
                            className="bg-transparent px-4 py-3 w-full outline-none text-sm"
                        />
                        <button className="bg-red-600 p-4 text-white">
                            <Send size={18} />
                        </button>
                    </div>
                </div>

                <div>
                    <h3 className="text-white text-xl font-semibold mb-4">
                        Latest Blogs
                    </h3>

                    <ul className="space-y-4 text-sm">
                        <li className="flex gap-3">
                            <FaTwitter className="text-red-500 mt-1" />
                            <span>
                                Preventing Denials and Delays in Neurology Billing and
                                Provider Credentialing
                            </span>
                        </li>

                        <li className="flex gap-3">
                            <FaTwitter className="text-red-500 mt-1" />
                            <span>
                                Essential Point-of-Care (POC) Documentation Tips for
                                Better Clinical Workflow
                            </span>
                        </li>

                        <li className="flex gap-3">
                            <FaTwitter className="text-red-500 mt-1" />
                            <span>
                                Improve Chiropractic Collections with Accurate Coding &
                                Smart Billing Practices
                            </span>
                        </li>
                    </ul>

                </div>

                <div>
                    <h3 className="text-white text-xl font-semibold mb-4">
                        Contact Us
                    </h3>

                    <ul className="space-y-4 text-sm">
                        <li className="flex items-center gap-3">
                            <Phone className="text-red-500" size={18} />
                            <span>+18667960858</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="text-red-500" size={18} />
                            <span>info@unifyrcm.com</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin className="text-red-500 mt-1" size={18} />
                            <span>
                                353 Middlestone Way<br />
                                Cuyahoga Falls, OH 44223
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-sm">

                    <div className="flex flex-wrap gap-5">
                        <a href="#">States We Cover</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Career</a>
                    </div>

                    <div className="flex gap-4 text-red-500 text-lg">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaPinterestP />
                        <FaTwitter />
                        <FaLinkedinIn />
                        <FaYoutube />
                    </div>
                </div>
            </div>
        </footer>
    );
}
