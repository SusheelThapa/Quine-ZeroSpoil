import donateFive from "@/assets/img/donate-food/donate-five.jpg";
import donateFour from "@/assets/img/donate-food/donate-four.jpg";
import donateOne from "@/assets/img/donate-food/donate-one.jpg";
import donateThree from "@/assets/img/donate-food/donate-three.jpg";
import donateTwo from "@/assets/img/donate-food/donate-two.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

interface DonateFoodHeroProps {
  className?: string;
}

const DonateFoodHero: React.FC<DonateFoodHeroProps> = ({ className }) => {
  const images = [donateOne, donateTwo, donateThree, donateFour, donateFive];

  return (
    <Carousel
      className={`w-full max-w-4xl ${className}`}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-3 m-10">
              <Card className="shadow-none border-none overflow-hidden">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full aspect-square bg-cover rounded-3xl "
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default DonateFoodHero;
