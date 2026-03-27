import { useState } from "react";
import { profileData } from "@/data/portfolio.js";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Temple = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent successfully! ✨");
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Contact info */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {[
          { icon: Mail, label: profileData.email, href: `mailto:${profileData.email}` },
          { icon: Phone, label: profileData.phone, href: `tel:${profileData.phone}` },
          { icon: Linkedin, label: "LinkedIn", href: profileData.linkedin },
          { icon: Github, label: "GitHub", href: profileData.github },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="treasure-card rounded-lg px-4 py-3 flex items-center gap-2 text-sm text-brown hover:text-gold transition-colors"
          >
            <item.icon size={16} />
            <span className="font-subheading">{item.label}</span>
          </a>
        ))}
      </div>

      {/* Contact form */}
      {submitted ? (
        <div className="text-center py-12">
          <CheckCircle className="mx-auto text-forest mb-4 animate-glow" size={48} />
          <p className="font-subheading text-lg text-brown-dark">Message Received!</p>
          <p className="text-muted-foreground mt-2">The temple guardian will respond soon ✨</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
          {[
            { key: "name", label: "Your Name", type: "text" },
            { key: "email", label: "Your Email", type: "email" },
          ].map((field) => (
            <div key={field.key}>
              <label className="font-subheading text-sm text-brown-dark mb-1 block">{field.label}</label>
              <input
                type={field.type}
                value={formData[field.key]}
                onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-parchment border-2 border-border focus:border-gold focus:outline-none transition-colors font-body text-foreground"
                maxLength={field.key === "email" ? 255 : 100}
              />
            </div>
          ))}
          <div>
            <label className="font-subheading text-sm text-brown-dark mb-1 block">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              maxLength={1000}
              className="w-full px-4 py-3 rounded-lg bg-parchment border-2 border-border focus:border-gold focus:outline-none transition-colors font-body text-foreground resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-brown text-primary-foreground font-subheading flex items-center justify-center gap-2 hover:bg-brown-dark transition-colors"
          >
            <Send size={16} /> Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Temple;
