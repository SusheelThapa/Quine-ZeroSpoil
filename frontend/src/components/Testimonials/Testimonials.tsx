import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import SJ from "@/assets/img/avatar/SJ.png";
import MG from "@/assets/img/avatar/MG.png";
import EY from "@/assets/img/avatar/EY.png";
import AB from "@/assets/img/avatar/AB.png";
import LG from "@/assets/img/avatar/LG.png";

import { partners } from "@/assets/json/testimonials.json";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const avatarImage = (avatar: string) => {
    switch (avatar) {
      case "SJ":
        return SJ;
      case "MG":
        return MG;
      case "EY":
        return EY;
      case "AB":
        return AB;
      case "LG":
        return LG;
    }
  };
  return (
    <div className="my-24 flex justify-center items-center ">
      <div className="ml-20 w-2/5 flex justify-center items-start gap-6 flex-col">
        <h1 className="text-5xl">Testimonials</h1>
        <p className="text-base text-gray-400">
          Dive into the ZeroSpoil experience through the eyes of our community.
          Discover stories of culinary joy, sustainable living, and the impact
          of sharing, as our users share their heartfelt testimonials. Join the
          conversation and be inspired by the real experiences of those who have
          embraced the ZeroSpoil journey.
        </p>
      </div>
      <div className=" w-3/5 flex justify-center items-center">
        <Carousel
          className="w-full max-w-lg "
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {Array.from({ length: partners.length }).map((_, index) => (
              <CarouselItem key={index}>
                <Card className="shadow-lg m-6 p-5 rounded-2xl">
                  <CardContent className=" px-2 py-5 flex  flex-col items-start justify-center gap-5 ">
                    <div className="flex justify-center items-center  gap-2">
                      <Avatar className="w-28 h-28">
                        <AvatarImage
                          src={avatarImage(partners[index].avatar)}
                        />
                        <AvatarFallback>
                          {partners[index].avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-xl text-gray-600">
                        <p>{partners[index].full_name}</p>
                        <p className="text-sm text-gray-400">
                          {partners[index].position}
                        </p>
                      </div>
                    </div>
                    <div className="ml-4 text-base text-gray-500">
                      {partners[index].review}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
