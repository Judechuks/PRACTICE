import "./loader.css";

const Loader = (prop) => {
  return (
    <main className="fixed inset-0 bg-dark-title grid place-content-center h-lvh z-[10000000]">
      <article className="loader-container">
        <div className="loader"></div>
        {prop.message && (
          <p className="mt-4.5 text-center text-xl text-white">
            {prop.message}
          </p>
        )}
      </article>
    </main>
  );
};

export default Loader;
