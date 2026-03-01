import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import { Card, CardContent } from "./card";

interface CarouselSizeProps {
  images: string[];
}

export function CarouselSize({ images }: Readonly<CarouselSizeProps>) {
  if (!images || images.length === 0) return null;

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-1/2 lg:basis-1/3"
          >
            <div className="p-2">
              <Card className="bg-transparent border-0 shadow-none">
                <CardContent className="flex items-center justify-center p-0">
                  <Image
                    src={src}
                    alt={`Project screenshot ${index + 1}`}
                    width={500}
                    height={800}
                    className="w-full h-auto rounded-xl object-contain drop-shadow-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-black" />
      <CarouselNext className="text-black" />
    </Carousel>
  );
}
