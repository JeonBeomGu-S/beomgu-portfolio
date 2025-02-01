export default function PageNotFound() {
  return (
    <>
      <div className="flex justify-center items-center bg-primary h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light">
              Sorry, we can't find that page. You'll find lots to explore on the home page.{' '}
            </p>
            <a href="/" type="button" className="btn-backhome">
              Back to Homepage
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
