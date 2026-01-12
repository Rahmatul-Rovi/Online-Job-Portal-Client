import React from "react";

const Stat = () => {
  return (
    <div className="bg-base-200">
      {/* 1. Statistics Section */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-base-content">
            Your Future Starts Here
          </h2>
          <p className="text-gray-500 mt-3">
            Connecting the best talent with the top companies worldwide.
          </p>
        </div>

        <div className="stats stats-vertical lg:stats-horizontal shadow-2xl w-full bg-base-100 border border-primary/5">
          <div className="stat place-items-center py-8">
            <div className="stat-title text-sm uppercase tracking-widest">
              Active Jobs
            </div>
            <div className="stat-value text-primary">12.5K</div>
            <div className="stat-desc text-success font-bold">↘︎ 90 (2%)</div>
          </div>
          <div className="stat place-items-center py-8 border-x border-base-200">
            <div className="stat-title text-sm uppercase tracking-widest">
              Companies
            </div>
            <div className="stat-value text-secondary">480+</div>
            <div className="stat-desc text-secondary font-bold">Top MNCs</div>
          </div>
          <div className="stat place-items-center py-8">
            <div className="stat-title text-sm uppercase tracking-widest">
              Hired Talents
            </div>
            <div className="stat-value text-accent">9.2K</div>
            <div className="stat-desc text-accent font-bold">
              Across 20+ Sectors
            </div>
          </div>
        </div>
      </div>

      {/* 2. Trusted By Section */}
      <div className="bg-base-100 py-10 border-y border-base-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Trusted by 500+ world-class companies
          </p>
          <div className="flex flex-wrap justify-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-bold italic">GOOGLE</span>
            <span className="text-2xl font-bold italic">MICROSOFT</span>
            <span className="text-2xl font-bold italic">AMAZON</span>
            <span className="text-2xl font-bold italic">NETFLIX</span>
            <span className="text-2xl font-bold italic">META</span>
          </div>
        </div>
      </div>

      {/* 3. Popular Categories */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold">Explore by Category</h2>
            <p className="text-gray-500 mt-2">
              Browse through the most in-demand roles in the market right now.
            </p>
          </div>
          <button className="btn btn-primary btn-outline px-8">
            See All Categories
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Category Item */}
          {[
            {
              icon: "💻",
              title: "Software Eng.",
              jobs: "1.2k+ Jobs",
              bg: "bg-blue-50",
            },
            {
              icon: "🎨",
              title: "Design & Creative",
              jobs: "800+ Jobs",
              bg: "bg-purple-50",
            },
            {
              icon: "📈",
              title: "Marketing",
              jobs: "500+ Jobs",
              bg: "bg-green-50",
            },
            {
              icon: "🛠️",
              title: "Engineering",
              jobs: "300+ Jobs",
              bg: "bg-orange-50",
            },
          ].map((cat, index) => (
            <div
              key={index}
              className="card bg-base-100 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer shadow-sm border border-base-300 p-8 group"
            >
              <div
                className={`w-14 h-14 ${cat.bg} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-white/20`}
              >
                {cat.icon}
              </div>
              <h3 className="font-bold text-xl">{cat.title}</h3>
              <p className="opacity-60 mt-2">{cat.jobs}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Testimonials (What users say) */}
      <div className="bg-primary/5 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-base-100 p-8 rounded-3xl shadow-lg relative">
              <span className="text-6xl text-primary/20 absolute top-4 left-4">
                “
              </span>
              <p className="text-lg italic relative z-10 text-gray-600">
                "I found my dream job as a MERN stack developer within just 2
                weeks of joining this platform. Highly recommended!"
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="avatar">
                  <div className="w-12 rounded-full ring ring-primary ring-offset-2">
                    <img src="https://i.pravatar.cc/150?u=1" alt="user" />
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="font-bold">Anik Rahman</h4>
                  <p className="text-xs opacity-60">
                    Software Engineer at Google
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-base-100 p-8 rounded-3xl shadow-lg relative">
              <span className="text-6xl text-primary/20 absolute top-4 left-4">
                “
              </span>
              <p className="text-lg italic relative z-10 text-gray-600">
                "The interface is so clean and the job matching algorithm
                actually works. I got multiple interview calls."
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="avatar">
                  <div className="w-12 rounded-full ring ring-primary ring-offset-2">
                    <img src="https://i.pravatar.cc/150?u=2" alt="user" />
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="font-bold">Sara Khan</h4>
                  <p className="text-xs opacity-60">Product Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Final CTA / Newsletter */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-primary rounded-[3rem] p-10 md:p-20 text-center text-primary-content relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Never miss a new job!
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest job openings
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-md text-base-content"
              />
              <button className="btn btn-secondary px-10">Subscribe Now</button>
            </div>
          </div>
          {/* Background Decorative Circles */}
          <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
