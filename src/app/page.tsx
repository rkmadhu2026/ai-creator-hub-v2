export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 font-sans dark:from-gray-900 dark:to-indigo-950">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center py-20 px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="rounded-2xl bg-indigo-100 p-4 dark:bg-indigo-900/50">
            <svg
              className="h-12 w-12 text-indigo-600 dark:text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            AI Creator Hub
          </h1>

          <p className="max-w-lg text-xl leading-8 text-gray-600 dark:text-gray-300">
            Your AI-powered content creation platform. Generate, edit, and
            publish creative content with the power of artificial intelligence.
          </p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
              Get Started
            </button>
            <button className="rounded-full border border-gray-300 px-8 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 transition-colors">
              Learn More
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Generate
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Create text, images, and videos with AI assistance.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Collaborate
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Work together with your team in real-time.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Publish
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Share your creations across multiple platforms.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
