const Banner = ({children}) => {
  return (
    <div className="banner rounded-2xl flex items-center px-16 mb-8">
      <h1 className="text-8xl text-white font-bold">{children}</h1>
    </div>
  );
};

export default Banner;
