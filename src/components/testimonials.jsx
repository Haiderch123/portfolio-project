import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function Testimonials() {
  return (
    <div
      style={{ backgroundColor: "rgb(45,45,45)" }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <Carousel className="w-full max-w-xl md:max-w-2xl">
        <CarouselContent>
          {[
            {
              name: "Haider Ali",
              role: "Front End Developer",
              img: "/src/assets/Mr Haider Ali.png",
            },
            {
              name: "Alastair Cook",
              role: "Front End Developer",
              img: "https://thumbs.dreamstime.com/b/portrait-handsome-young-man-standing-field-33895778.jpg",
            },
            {
              name: "Mr George",
              role: "Back End Developer",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUu4ScrMJ_AaD35H0pykC2v24oqgFx2n_yag&s",
            },
            {
              name: "Ian Bell",
              role: "Custom Developer",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZFfE0h5v2_ysBtYuYuGllJMlW72XcXkt21qCj4weuRQQHTneKi63famk&s",
            },
          ].map((item, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col items-center text-center gap-4 px-2 sm:px-6">


                <img
                  src="/src/assets/logo.png"
                  alt=""
                  className="w-32 sm:w-40"
                />


                <p className="text-white text-sm font-bold sm:text-base leading-relaxed max-w-md">
                  Bachelors in Computer Science, The Islamia University of Bahawalpur
                </p>

                <div className="border-4 border-amber-300 rounded-full p-1">
                  <img
                    src={item.img}
                    alt=""
                    className="w-20 h-20 sm:w-28 sm:h-28 rounded-full "
                  />
                </div>


                <h1 className="font-medium text-white">
                  {item.name}
                </h1>


                <p className="text-yellow-400 text-sm">
                  {item.role}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
}

export default Testimonials;
