

const Footer = () => {


    return (
        <footer className="bg-black text-gray-400 px-6 py-10 text-sm mb-0 mb-0">
            <div className="max-w-6xl mx-auto">
                <p className="mb-6">Questions? Call <a href="tel:000-800-919-1694" className="underline hover:text-white">000-800-919-1694</a></p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                    {[
                        "FAQ", "Help Centre", "Account", "Media Centre",
                        "Investor Relations", "Jobs", "Ways to Watch", "Terms of Use",
                        "Privacy", "Cookie Preferences", "Corporate Information", "Contact Us",
                        "Speed Test", "Legal Notices", "Only on Netflix"
                    ].map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="hover:underline hover:text-white transition-colors duration-200"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="mt-4">
                    <p className="text-gray-500">Netflix India</p>
                </div>
            </div>
        </footer>

    )
}


export default Footer;