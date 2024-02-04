import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Recipe = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Carousel
        className="w-full max-w-lg bg-transparent "
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="shadow-inner shadow-white  rounded-2xl h-96 flex justify-center items-center w-11/12 bg-gray-50">
                <CardContent className=" px-2 py-5 flex  flex-col items-center justify-center gap-5 ">
                  {index + 1}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Recipe;
