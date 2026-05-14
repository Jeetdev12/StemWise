import { backgroundURL } from "../utils/constants";
import { Sparkles } from "lucide-react";

const HeroSection = ({ handleBtnClick, onGetStarted }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-[#0a0a0a]">
            <img
                src={backgroundURL}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
            <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-green-600/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] rounded-full bg-green-600/8 blur-3xl pointer-events-none" />
            <div className="absolute top-[40%] left-[60%] w-[200px] h-[200px] rounded-full bg-green-600/6 blur-2xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto px-4">
                <div className="inline-flex items-center gap-2 bg-green-600/10 border border-green-600/30 rounded-full px-4 py-1.5 mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-medium tracking-widest uppercase text-green-400">
                        Now Streaming
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-5">
                    Unlimited movies,{" "}
                    <span className="text-green-400">TV shows</span>
                    {" "}and more.
                </h1>

                <p className="text-base md:text-lg text-white/50 mb-10 leading-relaxed">
                    Watch anywhere. Cancel anytime. Start your free trial today.
                </p>

                <div className="flex items-center justify-center gap-3 flex-wrap">
                    <button
                        onClick={onGetStarted}
                        className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Get Started
                    </button>
                    <button
                        onClick={handleBtnClick}
                        className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <span className="flex items-center gap-2 relative z-10">
                            <Sparkles size={20} />
                            GPT Movie Search
                        </span>

                    
                    </button>

                    {/* <Link
                        to="/gptmovies"
                        className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        GPT Movie Search
                    </Link> */}
                </div>

                <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-white/[0.07]">
                    {[
                        { value: "10K+", label: "Movies" },
                        { value: "5K+", label: "TV Shows" },
                        { value: "4K", label: "Ultra HD" },
                    ].map((stat, i, arr) => (
                        <div key={stat.label} className="flex items-center gap-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs text-white/40 mt-0.5 tracking-wide">{stat.label}</div>
                            </div>
                            {i < arr.length - 1 && (
                                <div className="w-px h-8 bg-white/10" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
