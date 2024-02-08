import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RecipeResponse } from "@/pages/RecipeGenerator/RecipeGenerator";

interface Props {
  result: RecipeResponse | null;
}
const Recipe = ({ result }: Props) => {
  return (
    <div className="w-full flex justify-center items-center">
      <Carousel
        className="w-full max-w-lg bg-transparent "
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <Card className="shadow-inner shadow-white  rounded-[3rem] h-[26rem] flex justify-center items-center w-11/12 bg-gray-50">
              <CardContent className=" px-5  flex  py-3  flex-col items-center justify-center gap-5 ">
                <div className="text-4xl text-blue-600 font-extrabold underline">
                  Recipe Name
                </div>
                <div className="text-green-400 text-4xl tracking-wider w-full text-center font-extrabold">
                  {result?.recipe}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          {Array.from({ length: result?.instructions.length || 1 }).map(
            (_, index) => (
              <CarouselItem key={index}>
                <Card className="shadow-inner shadow-white  rounded-[3rem] h-[26rem] flex justify-center items-center w-11/12 bg-gray-50">
                  <CardContent className=" px-2 pb-10  flex text-2xl h-40  flex-col items-center justify-start gap-10 ">
                    <div className="text-4xl text-blue-600 font-extrabold underline">
                      Step {index + 1}
                    </div>
                    <div className="text-green-500 tracking-wider w-full text-center">
                      {result?.instructions[index]}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        {result && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default Recipe;
