const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-8 border-white border-t-transparent"></div>
    </div>
  );
};

export default Loader;
