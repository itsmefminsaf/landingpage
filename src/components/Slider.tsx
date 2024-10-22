const Slider = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} bg-gradient-to-b from-transparent to-black`}>
      <div
        className={`bg-center bottom bg-cover w-full h-full duration-500 bg-[url('03.jpg')]`}
      ></div>
    </div>
  );
};

export default Slider;
