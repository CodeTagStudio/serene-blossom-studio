import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Heart, Shield, Sparkles, Clock, MapPin, Phone, Mail } from "lucide-react";

// Import images
import heroImage from "@/assets/hero-spa-room.jpg";
import facialImage from "@/assets/facial-treatment.jpg";
import skincareImage from "@/assets/skincare-products.jpg";
import receptionImage from "@/assets/clinic-reception.jpg";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const services = [
    {
      title: "Signature Facial",
      description: "Customized facial treatment designed for your unique skin needs with premium products and relaxing techniques.",
      price: "$180",
      duration: "90 minutes",
      image: facialImage,
      features: [
        "Deep cleansing & exfoliation",
        "Customized mask treatment",
        "Facial massage & moisturizing",
        "LED light therapy"
      ]
    },
    {
      title: "Premium Skincare",
      description: "Advanced skincare treatment using cutting-edge technology and medical-grade products for visible results.",
      price: "$250",
      duration: "120 minutes",
      image: skincareImage,
      features: [
        "Microdermabrasion",
        "Chemical peel options",
        "Vitamin C infusion",
        "Collagen boost therapy"
      ]
    },
    {
      title: "Wellness Consultation",
      description: "Comprehensive skin analysis and personalized treatment plan with our expert aestheticians.",
      price: "$120",
      duration: "60 minutes",
      image: receptionImage,
      features: [
        "Skin analysis & assessment",
        "Personalized treatment plan",
        "Product recommendations",
        "Follow-up guidance"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      treatment: "Signature Facial",
      rating: 5,
      comment: "The most relaxing and effective facial I've ever had. My skin has never looked better, and the staff made me feel so comfortable."
    },
    {
      name: "Emma Chen",
      treatment: "Premium Skincare",
      rating: 5,
      comment: "Absolutely transformative experience! The results were visible immediately, and the clinic has such a peaceful, luxurious atmosphere."
    },
    {
      name: "Maria Rodriguez",
      treatment: "Wellness Consultation",
      rating: 5,
      comment: "The personalized approach and expert advice I received has completely changed my skincare routine. Highly recommend!"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/30"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Discover Your
              <span className="text-gradient block">Natural Beauty</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience luxury skincare treatments in our serene clinic, where your wellness and beauty journey begins.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="beauty-button-primary text-lg px-10 py-6"
              >
                Explore Services
              </Button>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="text-lg px-10 py-6 border-2 border-foreground/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="beauty-section bg-secondary/30">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              About Serenity
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              At Serenity Beauty Clinic, we believe that true beauty comes from within. Our expert team combines 
              cutting-edge technology with time-honored wellness practices to help you achieve your most radiant self.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="beauty-card text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Personalized Care</h3>
                <p className="text-muted-foreground">Every treatment is tailored to your unique skin needs and wellness goals.</p>
              </div>
              
              <div className="beauty-card text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-muted-foreground">Our certified aestheticians bring years of experience and passion to every service.</p>
              </div>
              
              <div className="beauty-card text-center">
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Premium Products</h3>
                <p className="text-muted-foreground">We use only the finest, clinically-proven products for optimal results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="beauty-section">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Indulge in our carefully curated treatments designed to enhance your natural beauty and promote deep relaxation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="beauty-section bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from our valued clients who trust us with their beauty journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="contact" className="beauty-section">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Book Your Appointment
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to begin your beauty journey? Send us a message and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="h-12"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-12"
                  />
                  <Input
                    placeholder="Preferred Service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="h-12"
                  />
                </div>
                
                <Textarea
                  placeholder="Tell us about your beauty goals or any specific concerns..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="h-32 resize-none"
                />
                
                <Button type="submit" className="beauty-button-primary w-full text-lg py-6">
                  Send Booking Request
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="animate-fade-in">
              <div className="beauty-card">
                <h3 className="text-2xl font-semibold text-foreground mb-8">Visit Our Clinic</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">123 Wellness Avenue<br />Beverly Hills, CA 90210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 7:00 PM<br />
                        Saturday: 10:00 AM - 6:00 PM<br />
                        Sunday: 11:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">(555) 123-BEAUTY</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">hello@serenitybeauty.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <span className="text-background font-bold text-xl">S</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Serenity</h3>
              <p className="text-sm opacity-80">Beauty Clinic</p>
            </div>
          </div>
          
          <p className="text-background/80 mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of luxury, wellness, and expert care at Serenity Beauty Clinic. 
            Your journey to radiant beauty starts here.
          </p>
          
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/60">
              © 2024 Serenity Beauty Clinic. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;