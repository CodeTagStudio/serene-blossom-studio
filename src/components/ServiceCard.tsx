import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  features: string[];
}

const ServiceCard = ({ title, description, price, duration, image, features }: ServiceCardProps) => {
  return (
    <div className="beauty-card group hover:scale-105 transition-transform duration-500">
      <div className="aspect-square overflow-hidden rounded-xl mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{duration}</span>
          <span className="text-2xl font-semibold text-primary">{price}</span>
        </div>
        
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
              {feature}
            </div>
          ))}
        </div>
        
        <Button className="w-full beauty-button-secondary mt-6">
          Book Treatment
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;