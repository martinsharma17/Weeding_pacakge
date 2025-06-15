
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Heart, Menu } from "lucide-react";

const Index = () => {
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
            <a href="#packages" className="hover:text-rose-500 transition-colors">Packages</a>
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

        {/* Popular Packages Section */}
        <section id="packages" className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-2">Popular Wedding Packages</h2>
            <p className="text-muted-foreground mb-12">Choose from our curated packages or build your own.</p>
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
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-stone-100">
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
