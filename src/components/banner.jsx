const Banner = ({img= "banner.jpg" ,children}) => {
  // const bg = `bg-[url(${img})]`;
  return (
    <section className={`py-[133px] bg-center bg-cover bg-[url(banner.jpg)]`}>
      <span className="block font-bold text-[40px] text-white text-center">
       {children}
      </span>
    </section>
  )
};

export default Banner;
