import { useState } from "react";
import { Mail, Phone, Linkedin, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "rakeshkushwaha7139@gmail.com",
    href: "mailto:rakeshkushwaha7139@gmail.com"
  }, {
    icon: Phone,
    label: "Phone",
    value: "81770 97139",
    href: "tel:+918177097139"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rakesh-kushwaha7139",
    href: "https://linkedin.com/in/arjun-verma-ce"
  }, {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null
  }];
  return <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in discussing opportunities or have questions? 
            I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        
      </div>
    </section>;
};
export default ContactSection;