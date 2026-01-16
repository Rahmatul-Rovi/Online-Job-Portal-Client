import React from "react";
import { FaLaptopCode, FaPalette, FaChartLine, FaTools } from "react-icons/fa";

const Stat = () => {
  return (
    <div className="bg-[#fcfcfd]">
      {/* 1. Statistics Section */}
      <div className="max-w-7xl mx-auto py-24 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight">
            Your Future Starts <span className="text-[#6366f1]">Here</span>
          </h2>
          <p className="text-[#6b7280] mt-4 text-lg max-w-2xl mx-auto">
            Connecting the best talent with the top companies worldwide through a seamless and modern hiring experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2rem] border border-[#f3f4f6] overflow-hidden">
          <div className="p-10 text-center border-b md:border-b-0 md:border-r border-[#f3f4f6] hover:bg-[#f9fafb] transition-colors group">
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#9ca3af] mb-2">Active Jobs</div>
            <div className="text-5xl font-black text-[#6366f1] mb-2 group-hover:scale-110 transition-transform">12.5K</div>
            <div className="text-[#10b981] text-sm font-bold flex items-center justify-center gap-1">
              <span>↑ 12%</span> <span className="text-[#9ca3af] font-medium text-xs">this month</span>
            </div>
          </div>
          
          <div className="p-10 text-center border-b md:border-b-0 md:border-r border-[#f3f4f6] hover:bg-[#f9fafb] transition-colors group">
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#9ca3af] mb-2">Companies</div>
            <div className="text-5xl font-black text-[#1a1a1a] mb-2 group-hover:scale-110 transition-transform">480+</div>
            <div className="text-[#6366f1] text-sm font-bold uppercase">Top MNCs Trusted</div>
          </div>

          <div className="p-10 text-center hover:bg-[#f9fafb] transition-colors group">
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#9ca3af] mb-2">Hired Talents</div>
            <div className="text-5xl font-black text-[#6366f1] mb-2 group-hover:scale-110 transition-transform">9.2K</div>
            <div className="text-[#9ca3af] text-sm font-medium italic">Across 20+ Sectors</div>
          </div>
        </div>
      </div>

      {/* 2. Trusted By Section */}
      <div className="py-16 bg-gradient-to-b from-[#fcfcfd] to-[#f3f4ff] border-y border-[#e5e7eb]">
  <div className="max-w-7xl mx-auto px-4 text-center">
    {/* Sub-header with a little dot for style */}
    <div className="flex items-center justify-center gap-2 mb-10">
      <span className="w-2 h-2 rounded-full bg-[#6366f1]"></span>
      <p className="text-[11px] font-extrabold text-[#6366f1] uppercase tracking-[0.4em]">
        Trusted by the world's most innovative teams
      </p>
      <span className="w-2 h-2 rounded-full bg-[#6366f1]"></span>
    </div>

    {/* Brand Names with Individual Modern Colors on Hover */}
    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60">
      <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#1f2937] hover:text-[#4285F4] transition-all duration-300 cursor-default">
        GOOGLE
      </span>
      <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#1f2937] hover:text-[#00A4EF] transition-all duration-300 cursor-default">
        MICROSOFT
      </span>
      <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#1f2937] hover:text-[#FF9900] transition-all duration-300 cursor-default">
        AMAZON
      </span>
      <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#1f2937] hover:text-[#E50914] transition-all duration-300 cursor-default">
        NETFLIX
      </span>
      <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#1f2937] hover:text-[#0668E1] transition-all duration-300 cursor-default">
        META
      </span>
    </div>
  </div>
</div>

      {/* 3. Popular Categories */}
      <div className="max-w-7xl text-center mx-auto py-24 px-4">
       <div className="flex flex-col items-center justify-center mb-16 gap-4">
  <div className="text-center">
    {/* Headline with a little spacing adjustment */}
    <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight">
      Explore by <span className="text-[#6366f1]">Category</span>
    </h2>
    {/* Description centered with a max-width for better readability */}
    <p className="text-[#6b7280] mt-4 text-lg max-w-lg mx-auto leading-relaxed">
      Find the perfect career path that fits your specific skill set and expertise.
    </p>
    {/* Small decorative line for a pro look */}
    <div className="w-20 h-1.5 bg-[#6366f1] mx-auto mt-6 rounded-full opacity-20"></div>
  </div>
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <FaLaptopCode />, title: "Software Eng.", jobs: "1.2k+ Jobs", color: "#6366f1", bg: "#eef2ff" },
            { icon: <FaPalette />, title: "Design & Creative", jobs: "800+ Jobs", color: "#a855f7", bg: "#f5f3ff" },
            { icon: <FaChartLine />, title: "Marketing", jobs: "500+ Jobs", color: "#10b981", bg: "#ecfdf5" },
            { icon: <FaTools />, title: "Engineering", jobs: "300+ Jobs", color: "#f59e0b", bg: "#fffbeb" },
          ].map((cat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[2rem] border border-[#f3f4f6] hover:border-[#6366f1] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              <div 
                style={{ backgroundColor: cat.bg, color: cat.color }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform"
              >
                {cat.icon}
              </div>
              <h3 className="font-bold text-xl text-[#1a1a1a] mb-2">{cat.title}</h3>
              <p className="text-[#9ca3af] font-medium">{cat.jobs}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Testimonials */}
      <div className="bg-[#f9fafb] py-24 border-y border-[#f3f4f6]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-16 text-center italic">"What our community says"</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-[#f3f4f6] relative hover:shadow-xl transition-shadow">
                <span className="text-8xl text-[#6366f1]/10 absolute top-6 left-6 font-serif leading-none">“</span>
                <p className="text-lg text-[#4b5563] leading-relaxed relative z-10 mb-8 font-medium italic">
                  {i === 1 
                    ? "I found my dream job as a MERN stack developer within just 2 weeks of joining this platform. The experience was truly seamless!" 
                    : "The interface is so clean and the job matching algorithm actually works. I got multiple interview calls in my first week."}
                </p>
                <div className="flex items-center gap-4 border-t border-[#f3f4f6] pt-6">
                  <img className="w-14 h-14 rounded-full border-2 border-[#6366f1]" src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  <div>
                    <h4 className="font-black text-[#1a1a1a]">{i === 1 ? "Anik Rahman" : "Sara Khan"}</h4>
                    <p className="text-xs text-[#9ca3af] font-bold uppercase tracking-wider">{i === 1 ? "SWE at Google" : "Product Designer"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="bg-[#111827] rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Ready to grow your <span className="text-[#6366f1]">Career?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Join 50,000+ professionals getting weekly job alerts directly in their inbox.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-white/5 p-2 rounded-2xl md:rounded-full max-w-lg mx-auto border border-white/10 backdrop-blur-md">
              <input
                type="email"
                placeholder="name@company.com"
                className="bg-transparent w-full px-6 py-3 text-white focus:outline-none placeholder:text-gray-500"
              />
              <button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-3 rounded-xl md:rounded-full font-bold transition-all w-full sm:w-auto whitespace-nowrap active:scale-95">
                Get Started
              </button>
            </div>
          </div>
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6366f1]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Stat;