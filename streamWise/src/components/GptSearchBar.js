
return (
  <div className="w-full flex justify-center px-4">
    <div className="w-full max-w-4xl">
      
      <div className="relative group">
        
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>

        <div className="relative flex items-center bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          
          <div className="pl-5 text-gray-400">
            <Search size={22} />
          </div>

          <input
            ref={searchText}
            type="text"
            placeholder={lang[langkey].gptSearchPlaceholder}
            className="
              w-full
              bg-transparent
              px-4
              py-5
              text-white
              placeholder-gray-400
              text-lg
              focus:outline-none
            "
          />

          <button
            type="button"
            onClick={handleGptSearchClick}
            className="
              mr-2
              px-6
              py-3
              rounded-2xl
              bg-red-600
              hover:bg-red-700
              active:scale-95
              transition-all
              duration-300
              font-semibold
              shadow-lg
            "
          >
            Search
          </button>
        </div>
      </div>

      <p className="text-center text-gray-400 text-sm mt-4">
        Try: "Mind bending sci-fi movies" or "Feel good comedy movies"
      </p>
    </div>
  </div>
);
