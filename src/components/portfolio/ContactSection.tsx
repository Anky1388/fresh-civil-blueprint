// import { useState } from "react";
// import { Mail, Phone, Linkedin, Send, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
// const ContactSection = () => {
//   const {
//     toast
//   } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     toast({
//       title: "Message Sent!",
//       description: "Thank you for reaching out. I'll get back to you soon."
//     });
//     setFormData({
//       name: "",
//       email: "",
//       subject: "",
//       message: ""
//     });
//     setIsSubmitting(false);
//   };
//   const contactInfo = [{
//     icon: Mail,
//     label: "Email",
//     value: "rakeshkushwaha7139@gmail.com",
//     href: "mailto:rakeshkushwaha7139@gmail.com"
//   }, {
//     icon: Phone,
//     label: "Phone",
//     value: "81770 97139",
//     href: "tel:+918177097139"
//   }, {
//     icon: Linkedin,
//     label: "LinkedIn",
//     value: "linkedin.com/in/rakesh-kushwaha7139",
//     href: "https://linkedin.com/in/arjun-verma-ce"
//   }, {
//     icon: MapPin,
//     label: "Location",
//     value: "India",
//     href: null
//   }];
//   return <section id="contact" className="py-20 md:py-28 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
//             Get In Touch
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             Let's Connect
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Interested in discussing opportunities or have questions? 
//             I'd love to hear from you. Send me a message and I'll respond as soon as possible.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-5xl px-0 mx-0">
//           {/* Contact Info */}
//           <div>
//             <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
//               Contact Information
//             </h3>

//             <div className="space-y-4 mb-8">
//               {contactInfo.map((info, index) => <div key={index} className="p-4 rounded-xl bg-card border border-border flex items-start justify-start gap-[18px]">
//                   <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
//                     <info.icon className="w-5 h-5 text-primary" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-muted-foreground">{info.label}</p>
//                     {info.href ? <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined} className="font-medium text-foreground hover:text-primary transition-colors text-justify font-sans">
//                         {info.value}
//                       </a> : <p className="font-medium text-foreground">{info.value}</p>}
//                   </div>
//                 </div>)}
//             </div>

//             <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
//               <h4 className="font-semibold text-foreground mb-2">
//                 Open for Opportunities
//               </h4>
//               <p className="text-sm text-muted-foreground">
//                 I am currently seeking entry-level positions and internship opportunities 
//                 in structural design, construction, and BIM roles.
//               </p>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-card rounded-2xl p-8 border border-border">
//             <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
//               Send a Message
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid sm:grid-cols-2 gap-5">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                     Full Name
//                   </label>
//                   <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                     Email Address
//                   </label>
//                   <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
//                   Subject
//                 </label>
//                 <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" required />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                   Message
//                 </label>
//                 <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message..." rows={5} required />
//               </div>

//               <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
//                 {isSubmitting ? "Sending..." : <>
//                     <Send className="w-4 h-4" />
//                     Send Message
//                   </>}
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>;
// };
// export default ContactSection;



import { useEffect, useState } from "react";
import { Mail, Phone, Linkedin, Send, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
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

  // Configure EmailJS identifiers here (replace with your own)
  const SERVICE_ID = 'service_da2lbx7';
  const TEMPLATE_ID = 'template_61euiwk';
  const PUBLIC_KEY = 'VnOHY3tr4pPBkY-Sf';

  useEffect(() => {
    try {
      emailjs.init(PUBLIC_KEY);
      // eslint-disable-next-line no-console
      console.debug('EmailJS initialized with public key');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to initialize EmailJS', err);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - Replace with your actual IDs from https://www.emailjs.com/
      // 1. Sign up at https://www.emailjs.com/
      // 2. Create an email service (Gmail, Outlook, etc.)
      // 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}, {{to_email}}
      // 4. Get your Service ID, Template ID, and Public Key from the dashboard
      const serviceId = 'service_da2lbx7'; // e.g., 'service_123456'
      const templateId = 'template_61euiwk'; // e.g., 'template_abcdef'
      const publicKey = 'VnOHY3tr4pPBkY-Sf'; // e.g., 'abcdefghijklmnop'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'rakeshkushwaha7139@gmail.com' // The recipient email
      };

      // Send the email. We initialized EmailJS above so we don't need to pass the public key here.
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

      // EmailJS returns a status and text; log for debugging
      // eslint-disable-next-line no-console
      console.debug('EmailJS send result:', result);

      if (result?.status === 200) {
        toast({
          title: 'Message Sent!',
          description: "Thank you for reaching out. I'll get back to you soon."
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(`EmailJS responded with status ${result?.status}: ${result?.text}`);
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      // eslint-disable-next-line no-console
      console.error('Contact form submission error:', err);
      const errorMessage = err instanceof Error ? err.message : JSON.stringify(err);
      toast({
        title: 'Failed to send',
        description: errorMessage || 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rakeshkushwaha7139@gmail.com",
      href: "mailto:rakeshkushwaha7139@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "8177097139",
      href: "tel:+918177097139"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rakesh-kushwaha7139",
      href: "https://linkedin.com/in/rakesh-kushwaha7139"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in discussing opportunities or have questions? I'd love to hear
            from you. Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl px-0 mx-0">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Contact Information
            </h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => {
                const isExternal = !!info.href && info.href.startsWith("http");
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-card border border-border flex items-start justify-start gap-[18px]"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="font-medium text-foreground"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Open for Opportunities</h4>
              <p className="text-sm text-muted-foreground">
                I am currently seeking entry-level positions and internship opportunities in
                structural design, construction, and BIM roles.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" aria-busy={isSubmitting}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                className="w-full gap-2"
                disabled={isSubmitting}
                aria-live="polite"
                aria-disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
