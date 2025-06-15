
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Heart, Menu, Camera, Sparkles, Sprout } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1542042161-d19f5a542445?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515934751635-481eff6749cf?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522040409943-306142a78103?q=80&w=2070&auto=format&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-stone-100 text-gray-800 font-sans">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-rose-500 flex items-center">
            <Heart className="mr-2" />
            Blissful Vows
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="hover:text-rose-500 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-rose-500 transition-colors">Gallery</a>
            <a href="#testimonials" className="hover:text-rose-500 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-rose-500 transition-colors">Contact</a>
            <Button variant="outline" className="text-rose-500 border-rose-500 hover:bg-rose-500 hover:text-white">Vendor Login</Button>
            <Button className="bg-rose-500 hover:bg-rose-600 text-white">Plan Your Wedding</Button>
          </nav>
          <Button variant="ghost" className="md:hidden">
            <Menu />
          </Button>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section with a background image and call to action */}
        <section
          className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523438097201-512ae7d59c44?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-white p-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight" style={{fontFamily: 'serif'}}>
              Your Dream Wedding, Perfectly Planned
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
              From "Yes" to "I do", we handle every detail so you can enjoy every moment.
            </p>
            <Button size="lg" className="mt-8 bg-rose-500 hover:bg-rose-600 text-white">
              Explore Packages
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-2">Our Services</h2>
            <p className="text-muted-foreground mb-12">Crafting your once-in-a-lifetime event with precision and care.</p>
            <Tabs defaultValue="full-packages" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mx-auto max-w-2xl mb-12 bg-rose-50 rounded-lg">
                <TabsTrigger value="full-packages" className="data-[state=active]:bg-rose-500 data-[state=active]:text-white rounded-md">Full Packages</TabsTrigger>
                <TabsTrigger value="photography" className="data-[state=active]:bg-rose-500 data-[state=active]:text-white rounded-md">Photography</TabsTrigger>
                <TabsTrigger value="makeup" className="data-[state=active]:bg-rose-500 data-[state=active]:text-white rounded-md">Makeup</TabsTrigger>
                <TabsTrigger value="venues" className="data-[state=active]:bg-rose-500 data-[state=active]:text-white rounded-md">Venues</TabsTrigger>
              </TabsList>
              
              <TabsContent value="full-packages">
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden text-left">
                    <img src="https://images.unsplash.com/photo-1511285560921-4c9A9cf33ad4?q=80&w=2070&auto=format&fit=crop" alt="The Classic" className="w-full h-48 object-cover" />
                    <CardHeader>
                      <CardTitle className="text-rose-500">The Classic</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">An elegant and timeless wedding experience.</p>
                      <p className="text-2xl font-bold mb-4">$5,000</p>
                      <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">View Details</Button>
                    </CardContent>
                  </Card>
                  <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden text-left">
                    <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" alt="The Grandeur" className="w-full h-48 object-cover" />
                    <CardHeader>
                      <CardTitle className="text-rose-500">The Grandeur</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">A luxurious celebration for a grand statement.</p>
                      <p className="text-2xl font-bold mb-4">$15,000</p>
                      <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">View Details</Button>
                    </CardContent>
                  </Card>
                  <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden text-left">
                    <img src="https://images.unsplash.com/photo-1597986084282-e9c8553f064f?q=80&w=2070&auto=format&fit=crop" alt="The Intimate" className="w-full h-48 object-cover" />
                    <CardHeader>
                      <CardTitle className="text-rose-500">The Intimate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">A cozy and personal affair with your closest ones.</p>
                      <p className="text-2xl font-bold mb-4">$2,500</p>
                      <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">View Details</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="photography">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1511285560921-4c9A9cf33ad4?q=80&w=2070&auto=format&fit=crop" alt="Timeless Photography" className="w-full h-48 object-cover" />
                    <CardHeader><CardTitle className="flex items-center text-rose-500"><Camera className="mr-2 h-5 w-5"/>Timeless Photography</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground mb-4">Capture every precious moment with our professional wedding photographers.</p><p className="text-2xl font-bold">Starting from $1,800</p></CardContent>
                  </Card>
                  <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1542042161-d19f5a542445?q=80&w=2070&auto=format&fit=crop" alt="Cinematic Videography" className="w-full h-48 object-cover" />
                    <CardHeader><CardTitle className="flex items-center text-rose-500"><Camera className="mr-2 h-5 w-5"/>Cinematic Videography</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground mb-4">A beautiful film of your wedding day to cherish forever.</p><p className="text-2xl font-bold">Starting from $2,500</p></CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="makeup">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1620912189837-e04f77df3c9d?q=80&w=1964&auto=format&fit=crop" alt="Bridal Glam" className="w-full h-48 object-cover" />
                    <CardHeader><CardTitle className="flex items-center text-rose-500"><Sparkles className="mr-2 h-5 w-5"/>Bridal Glam</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground mb-4">Look your absolute best with our expert makeup artists.</p><p className="text-2xl font-bold">Starting from $500</p></CardContent>
                  </Card>
                  <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1595393499216-b153b64c185b?q=80&w=1974&auto=format&fit=crop" alt="Hair Styling" className="w-full h-48 object-cover" />
                    <CardHeader><CardTitle className="flex items-center text-rose-500"><Sparkles className="mr-2 h-5 w-5"/>Elegant Hairstyling</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground mb-4">Stunning hairstyles for you and your bridesmaids.</p><p className="text-2xl font-bold">Starting from $300</p></CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="venues">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2070&auto=format&fit=crop" alt="Garden Venues" className="w-full h-48 object-cover" />
                    <CardHeader><CardTitle className="flex items-center text-rose-500"><Sprout className="mr-2 h-5 w-5"/>Garden Venues</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground mb-4">Exchange vows in a beautiful, natural setting.</p><p className="text-xl font-bold">Venue fees apply</p></CardContent>
                  </Card>
                  <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" alt="Ballroom Venues" className="w-full h-48 object-cover" />
                    <CardHeader><CardTitle className="flex items-center text-rose-500"><Sprout className="mr-2 h-5 w-5"/>Ballroom Venues</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground mb-4">Grand and elegant ballrooms for a classic wedding.</p><p className="text-xl font-bold">Venue fees apply</p></CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-stone-100">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-2">Wedding Stories</h2>
            <p className="text-muted-foreground mb-12">Glimpses from our beautifully crafted weddings.</p>
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent>
                {galleryImages.map((src, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden rounded-lg">
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <img src={src} alt={`Wedding gallery image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-14" />
              <CarouselNext className="mr-14" />
            </Carousel>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-2">Words of Love</h2>
            <p className="text-muted-foreground mb-12">See what our happy couples have to say.</p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <Card className="bg-white p-6 rounded-lg shadow-md">
                <CardContent className="p-0">
                  <div className="flex text-amber-400 mb-4">
                    <Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" />
                  </div>
                  <p className="text-muted-foreground mb-4">"Blissful Vows made our dream wedding a reality. Every detail was perfect, and we didn't have to worry about a thing!"</p>
                  <p className="font-bold">- Jessica & Tom</p>
                </CardContent>
              </Card>
              <Card className="bg-white p-6 rounded-lg shadow-md">
                <CardContent className="p-0">
                  <div className="flex text-amber-400 mb-4">
                    <Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" />
                  </div>
                  <p className="text-muted-foreground mb-4">"The team was incredible! Professional, creative, and so supportive throughout the entire planning process."</p>
                  <p className="font-bold">- Emily & David</p>
                </CardContent>
              </Card>
              <Card className="bg-white p-6 rounded-lg shadow-md">
                <CardContent className="p-0">
                  <div className="flex text-amber-400 mb-4">
                    <Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" />
                  </div>
                  <p className="text-muted-foreground mb-4">"We couldn't have asked for a better experience. Our wedding day was magical, all thanks to Blissful Vows."</p>
                  <p className="font-bold">- Sarah & Michael</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer id="contact" className="bg-gray-800 text-white py-10">
          <div className="container mx-auto text-center">
            <div className="text-3xl font-bold text-rose-400 flex items-center justify-center mb-4">
              <Heart className="mr-2" />
              Blissful Vows
            </div>
            <p className="mb-4">Planning the perfect day, together.</p>
            <div className="flex justify-center space-x-4 mb-4">
              <a href="#" className="hover:text-rose-400">Facebook</a>
              <a href="#" className="hover:text-rose-400">Instagram</a>
              <a href="#" className="hover:text-rose-400">Pinterest</a>
            </div>
            <p className="text-sm text-gray-400">&copy; 2025 Blissful Vows. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
