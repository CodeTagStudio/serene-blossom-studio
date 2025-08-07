import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  treatment: string;
  rating: number;
  comment: string;
  image?: string;
}

const TestimonialCard = ({ name, treatment, rating, comment, image }: TestimonialCardProps) => {
  return (
    <div className="beauty-card text-center max-w-md mx-auto">
      {image && (
        <div className="w-20 h-20 mx-auto mb-6 overflow-hidden rounded-full border-4 border-primary/20">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="flex justify-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-amber-400 fill-current" : "text-muted-foreground/30"
            }`}
          />
        ))}
      </div>
      
      <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
        "{comment}"
      </blockquote>
      
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{treatment}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;