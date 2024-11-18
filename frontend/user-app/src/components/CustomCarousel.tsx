import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export const CustomCarousel = ({ images }: any) => {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true
      }}
    >
      <CarouselContent>
        {images &&
          images.map((image: any) => (
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <img
                    className="h-full w-full rounded-lg"
                    alt=""
                    src={image}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="left-1 border-none opacity-0 hover:scale-105 transition-all group-hover:opacity-50 next-prev" />
      <CarouselNext className="right-1 border-none opacity-0 hover:scale-105 transition group-hover:opacity-50 next-prev" />
    </Carousel>
  );
};
