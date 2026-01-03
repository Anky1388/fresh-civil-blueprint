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
    value: "arjun.verma.ce@example.com",
    href: "mailto:arjun.verma.ce@example.com"
  }, {
    icon: Phone,
    label: "Phone",
    value: "+91-9XXXXXXXXX",
    href: "tel:+919XXXXXXXXX"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/arjun-verma-ce",
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined} className="font-medium text-foreground hover:text-primary transition-colors text-justify font-sans">
                        {info.value}
                      </a> : <p className="font-medium text-foreground">{info.value}</p>}
                  </div>
                </div>)}
            </div>

            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">
                Open for Opportunities
              </h4>
              <p className="text-sm text-muted-foreground">
                I am currently seeking entry-level positions and internship opportunities 
                in structural design, construction, and BIM roles.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          
        </div>
      </div>
    </section>;
};
export default ContactSection;