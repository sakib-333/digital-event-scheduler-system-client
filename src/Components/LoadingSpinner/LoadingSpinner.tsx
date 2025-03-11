const LoadingSpinner = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <span className="loading loading-spinner loading-xl"></span>
      <h1 className="text-primary">Loading...</h1>
    </div>
  );
};

export default LoadingSpinner;
