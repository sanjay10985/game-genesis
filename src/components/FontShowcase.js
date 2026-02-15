// Font Showcase Component - Demo of Nova Flat Typography

export default function FontShowcase() {
  return (
    <div className="bg-main-bg min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl text-primary-pink mb-4 tracking-wider uppercase">
            Nova Flat
          </h1>
          <p className="text-2xl text-primary-cyan tracking-wide">
            Game Genesis Typography System
          </p>
        </div>

        {/* Heading Sizes */}
        <section className="bg-section-bg rounded-lg p-8 mb-8">
          <h2 className="text-3xl text-white mb-6 tracking-wide">
            Heading Sizes
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400 mb-2">H1 - text-6xl</p>
              <h1 className="text-6xl text-primary-pink tracking-wider">
                The Quick Brown Fox
              </h1>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">H2 - text-5xl</p>
              <h2 className="text-5xl text-primary-cyan tracking-wider">
                The Quick Brown Fox
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">H3 - text-4xl</p>
              <h3 className="text-4xl text-primary-pink tracking-wide">
                The Quick Brown Fox
              </h3>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">H4 - text-3xl</p>
              <h4 className="text-3xl text-primary-cyan tracking-wide">
                The Quick Brown Fox
              </h4>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">H5 - text-2xl</p>
              <h5 className="text-2xl text-white tracking-wide">
                The Quick Brown Fox
              </h5>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">H6 - text-xl</p>
              <h6 className="text-xl text-white tracking-wide">
                The Quick Brown Fox
              </h6>
            </div>
          </div>
        </section>

        {/* Body Text Sizes */}
        <section className="bg-section-bg rounded-lg p-8 mb-8">
          <h2 className="text-3xl text-white mb-6 tracking-wide">
            Body Text Sizes
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400 mb-2">text-lg (18px)</p>
              <p className="text-lg text-gray-300">
                The quick brown fox jumps over the lazy dog. Nova Flat is a
                geometric display font.
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">
                text-base (16px) - Default
              </p>
              <p className="text-base text-gray-300">
                The quick brown fox jumps over the lazy dog. Nova Flat is a
                geometric display font.
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">text-sm (14px)</p>
              <p className="text-sm text-gray-300">
                The quick brown fox jumps over the lazy dog. Nova Flat is a
                geometric display font.
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">text-xs (12px)</p>
              <p className="text-xs text-gray-300">
                The quick brown fox jumps over the lazy dog. Nova Flat is a
                geometric display font.
              </p>
            </div>
          </div>
        </section>

        {/* Letter Spacing */}
        <section className="bg-section-bg rounded-lg p-8 mb-8">
          <h2 className="text-3xl text-white mb-6 tracking-wide">
            Letter Spacing
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400 mb-2">tracking-normal</p>
              <p className="text-2xl text-primary-pink tracking-normal">
                GAME GENESIS
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">
                tracking-wide (Recommended)
              </p>
              <p className="text-2xl text-primary-cyan tracking-wide">
                GAME GENESIS
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">
                tracking-wider (Best for Headings)
              </p>
              <p className="text-2xl text-primary-pink tracking-wider">
                GAME GENESIS
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">tracking-widest</p>
              <p className="text-2xl text-primary-cyan tracking-widest">
                GAME GENESIS
              </p>
            </div>
          </div>
        </section>

        {/* Uppercase vs Normal */}
        <section className="bg-section-bg rounded-lg p-8 mb-8">
          <h2 className="text-3xl text-white mb-6 tracking-wide">
            Case Styles
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400 mb-2">Normal Case</p>
              <p className="text-3xl text-primary-pink tracking-wide">
                Game Genesis Studio
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">
                Uppercase (Recommended for Headings)
              </p>
              <p className="text-3xl text-primary-cyan tracking-wider uppercase">
                Game Genesis Studio
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">Lowercase</p>
              <p className="text-3xl text-white tracking-wide lowercase">
                Game Genesis Studio
              </p>
            </div>
          </div>
        </section>

        {/* Color Combinations */}
        <section className="bg-section-bg rounded-lg p-8 mb-8">
          <h2 className="text-3xl text-white mb-6 tracking-wide">
            Color Combinations
          </h2>
          <div className="space-y-4">
            <div className="bg-main-bg p-6 rounded-lg">
              <h3 className="text-4xl text-primary-pink tracking-wider mb-2">
                PRIMARY PINK
              </h3>
              <p className="text-lg text-gray-300">
                Perfect for main headings and important CTAs
              </p>
            </div>
            <div className="bg-main-bg p-6 rounded-lg">
              <h3 className="text-4xl text-primary-cyan tracking-wider mb-2">
                PRIMARY CYAN
              </h3>
              <p className="text-lg text-gray-300">
                Great for subheadings and secondary elements
              </p>
            </div>
            <div className="bg-card-1 p-6 rounded-lg">
              <h3 className="text-4xl text-white tracking-wider mb-2">
                WHITE ON CARD
              </h3>
              <p className="text-lg text-gray-300">
                Clean and readable on card backgrounds
              </p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="bg-section-bg rounded-lg p-8 mb-8">
          <h2 className="text-3xl text-white mb-6 tracking-wide">
            Button Typography
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary-cta hover:bg-cta-hover text-white px-8 py-4 rounded-lg text-lg tracking-wide uppercase transition-colors">
              Get Started
            </button>
            <button className="bg-secondary-cta hover:bg-primary-cyan text-main-bg px-8 py-4 rounded-lg text-lg tracking-wide uppercase transition-colors">
              Learn More
            </button>
            <button className="border-2 border-primary-pink text-primary-pink hover:bg-primary-pink hover:text-white px-8 py-4 rounded-lg text-lg tracking-wide uppercase transition-all">
              Contact Us
            </button>
          </div>
        </section>

        {/* Cards with Typography */}
        <section className="bg-section-bg rounded-lg p-8 mb-8">
          <h2 className="text-3xl text-white mb-6 tracking-wide">
            Card Typography
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card-1 rounded-lg p-6 border border-subtle-border hover:border-hover-border transition-colors">
              <h3 className="text-2xl text-primary-pink mb-3 tracking-wide uppercase">
                Game Dev
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Full-cycle game development from concept to launch with expert
                team
              </p>
            </div>
            <div className="bg-card-1 rounded-lg p-6 border border-subtle-border hover:border-hover-border transition-colors">
              <h3 className="text-2xl text-primary-cyan mb-3 tracking-wide uppercase">
                3D Art
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Stunning visuals and smooth animations that bring games to life
              </p>
            </div>
            <div className="bg-card-1 rounded-lg p-6 border border-subtle-border hover:border-hover-border transition-colors">
              <h3 className="text-2xl text-primary-pink mb-3 tracking-wide uppercase">
                Design
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Engaging gameplay mechanics and compelling narratives
              </p>
            </div>
          </div>
        </section>

        {/* Line Height */}
        <section className="bg-section-bg rounded-lg p-8 mb-8">
          <h2 className="text-3xl text-white mb-6 tracking-wide">
            Line Height
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-400 mb-2">leading-normal</p>
              <p className="text-lg text-gray-300 leading-normal max-w-2xl">
                Nova Flat is a geometric display font that works great for
                gaming and tech brands. It has a futuristic feel that pairs well
                with modern design aesthetics.
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">
                leading-relaxed (Recommended)
              </p>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                Nova Flat is a geometric display font that works great for
                gaming and tech brands. It has a futuristic feel that pairs well
                with modern design aesthetics.
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">leading-loose</p>
              <p className="text-lg text-gray-300 leading-loose max-w-2xl">
                Nova Flat is a geometric display font that works great for
                gaming and tech brands. It has a futuristic feel that pairs well
                with modern design aesthetics.
              </p>
            </div>
          </div>
        </section>

        {/* Full Example */}
        <section className="bg-section-bg rounded-lg p-8">
          <h2 className="text-3xl text-white mb-6 tracking-wide">
            Complete Example
          </h2>
          <div className="bg-main-bg rounded-lg p-8">
            <h1 className="text-5xl text-primary-pink mb-4 tracking-wider uppercase">
              Welcome to Game Genesis
            </h1>
            <h2 className="text-3xl text-primary-cyan mb-6 tracking-wide">
              Creating Immersive Gaming Experiences
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-3xl">
              We are a cutting-edge game development studio dedicated to
              creating unforgettable gaming experiences. With a team of
              passionate developers, designers, and storytellers, we bring
              innovative ideas to life.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary-cta hover:bg-cta-hover text-white px-8 py-4 rounded-lg text-lg tracking-wide uppercase transition-colors">
                View Portfolio
              </button>
              <button className="border-2 border-primary-cyan text-primary-cyan hover:bg-primary-cyan hover:text-main-bg px-8 py-4 rounded-lg text-lg tracking-wide uppercase transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
