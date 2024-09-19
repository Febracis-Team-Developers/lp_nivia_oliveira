import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const videoLinks = [
    "https://youtu.be/ybovbqhaILs",
    "https://youtu.be/GfoAc4ZR0To",
    "https://youtu.be/UUv9BprLNyc",
    "https://youtu.be/cXML84x9AlM"
];
const Section3Mobile = () => {
    return ( 
        <div className="flex justify-center gradient-backgroundS3">
            <div className="flex flex-col items-center">
                <h1 className="h1">Histórias de transformação</h1>
                
                <div className="py-12">
                <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {videoLinks.map((link, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">
                                            <iframe 
                                                width="100%" 
                                                height="315" 
                                                src={link.replace("youtu.be", "youtube.com/embed")} 
                                                title="YouTube video player" 
                                                frameBorder="0" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                allowFullScreen>
                                            </iframe>
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                </Carousel>
                </div>
            </div>
            
        </div>
     );
}
 
export default Section3Mobile;