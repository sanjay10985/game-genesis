// Color Showcase Component - Demo of Game Genesis Color System
// This component demonstrates all the colors in action

export default function ColorShowcase() {
  return (
    <div className="bg-main-bg min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary-pink mb-4">
            Game Genesis Color System
          </h1>
          <p className="text-xl text-primary-cyan">
            A showcase of our custom color palette
          </p>
        </div>

        {/* Primary Colors */}
        <section className="bg-section-bg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Primary Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary-pink rounded-lg p-8 text-center">
              <p className="text-white font-bold text-xl">Primary Pink</p>
              <p className="text-white/80">#FF8FA3</p>
            </div>
            <div className="bg-primary-cyan rounded-lg p-8 text-center">
              <p className="text-main-bg font-bold text-xl">Primary Cyan</p>
              <p className="text-main-bg/80">#9CDBDB</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="bg-section-bg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary-cta hover:bg-cta-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Primary Button
            </button>
            <button className="bg-secondary-cta hover:bg-primary-cyan text-main-bg px-6 py-3 rounded-lg font-semibold transition-colors">
              Secondary Button
            </button>
            <button className="border-2 border-primary-pink text-primary-pink hover:bg-primary-pink hover:text-white px-6 py-3 rounded-lg font-semibold transition-all">
              Outline Button
            </button>
            <button className="border-2 border-primary-cyan text-primary-cyan hover:bg-primary-cyan hover:text-main-bg px-6 py-3 rounded-lg font-semibold transition-all">
              Outline Cyan
            </button>
          </div>
        </section>

        {/* Cards */}
        <section className="bg-section-bg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Cards & Panels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card-1 border border-subtle-border hover:border-hover-border rounded-lg p-6 transition-colors">
              <h3 className="text-primary-pink text-xl font-bold mb-2">
                Card Level 1
              </h3>
              <p className="text-gray-300">Basic card with subtle border</p>
            </div>
            <div className="bg-card-2 border border-subtle-border hover:border-hover-border rounded-lg p-6 transition-colors">
              <h3 className="text-primary-cyan text-xl font-bold mb-2">
                Card Level 2
              </h3>
              <p className="text-gray-300">Medium depth card</p>
            </div>
            <div className="bg-card-3 border border-subtle-border hover:border-hover-border rounded-lg p-6 transition-colors">
              <h3 className="text-primary-pink text-xl font-bold mb-2">
                Card Level 3
              </h3>
              <p className="text-gray-300">Deepest card level</p>
            </div>
          </div>
        </section>

        {/* Nested Cards */}
        <section className="bg-section-bg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Nested Cards</h2>
          <div className="bg-card-1 rounded-lg p-6">
            <h3 className="text-primary-cyan text-xl font-bold mb-4">
              Outer Card
            </h3>
            <div className="bg-card-2 rounded-lg p-6">
              <h4 className="text-primary-pink text-lg font-bold mb-4">
                Middle Card
              </h4>
              <div className="bg-card-3 rounded-lg p-6">
                <p className="text-gray-300">
                  Inner Card - Creates depth hierarchy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hover Effects */}
        <section className="bg-section-bg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Hover Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card-1 rounded-lg p-6 hover:shadow-xl hover:shadow-primary-pink/30 transition-shadow duration-300 cursor-pointer">
              <h3 className="text-primary-pink text-xl font-bold mb-2">
                Pink Glow
              </h3>
              <p className="text-gray-300">Hover to see pink glow effect</p>
            </div>
            <div className="bg-card-1 rounded-lg p-6 hover:shadow-xl hover:shadow-primary-cyan/30 transition-shadow duration-300 cursor-pointer">
              <h3 className="text-primary-cyan text-xl font-bold mb-2">
                Cyan Glow
              </h3>
              <p className="text-gray-300">Hover to see cyan glow effect</p>
            </div>
            <div className="bg-card-1 rounded-lg p-6 hover:scale-105 hover:shadow-xl hover:shadow-hover-glow/30 transition-all duration-300 cursor-pointer">
              <h3 className="text-white text-xl font-bold mb-2">
                Scale & Glow
              </h3>
              <p className="text-gray-300">Hover to scale and glow</p>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="bg-section-bg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Form Elements</h2>
          <div className="space-y-4 max-w-2xl">
            <input
              type="text"
              className="w-full bg-card-1 border border-subtle-border focus:border-primary-cyan rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-cyan/50 transition-all"
              placeholder="Text input with cyan focus"
            />
            <input
              type="email"
              className="w-full bg-card-1 border border-subtle-border focus:border-primary-pink rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-pink/50 transition-all"
              placeholder="Email input with pink focus"
            />
            <textarea
              className="w-full bg-card-1 border border-subtle-border focus:border-primary-cyan rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-cyan/50 transition-all"
              rows="4"
              placeholder="Textarea with cyan focus"
            />
          </div>
        </section>

        {/* Badges */}
        <section className="bg-section-bg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Badges</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-block bg-primary-pink text-white px-4 py-2 rounded-full text-sm font-semibold">
              New
            </span>
            <span className="inline-block bg-primary-cyan text-main-bg px-4 py-2 rounded-full text-sm font-semibold">
              Featured
            </span>
            <span className="inline-block bg-card-2 text-primary-cyan border border-primary-cyan px-4 py-2 rounded-full text-sm font-semibold">
              Game Design
            </span>
            <span className="inline-block bg-card-2 text-primary-pink border border-primary-pink px-4 py-2 rounded-full text-sm font-semibold">
              3D Art
            </span>
            <span className="inline-block bg-active-state text-main-bg px-4 py-2 rounded-full text-sm font-semibold">
              Active
            </span>
          </div>
        </section>

        {/* Gradients */}
        <section className="bg-section-bg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Gradients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-primary-pink to-primary-cyan rounded-lg p-8 text-center">
              <p className="text-white font-bold text-xl">Pink to Cyan</p>
            </div>
            <div className="bg-gradient-to-br from-card-1 to-card-3 rounded-lg p-8 text-center">
              <p className="text-primary-cyan font-bold text-xl">
                Card Gradient
              </p>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="bg-section-bg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Links</h2>
          <div className="space-y-4">
            <p>
              <a
                href="#"
                className="text-primary-cyan hover:text-primary-pink transition-colors underline"
              >
                Cyan link with pink hover
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-primary-pink hover:text-primary-cyan transition-colors underline"
              >
                Pink link with cyan hover
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-gray-300 hover:text-primary-cyan transition-colors"
              >
                Gray link with cyan hover
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
