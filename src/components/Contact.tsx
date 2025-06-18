import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: 'Sitting Mandir',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setSubmitStatus('validation');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Using EmailJS for frontend-only email sending
      // You need to install: npm install @emailjs/browser
      // And set up your EmailJS account with Gmail
      
      // For demonstration, we'll simulate the email sending
      // Replace this with actual EmailJS code after setup
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success (replace with actual EmailJS implementation)
      const success = Math.random() > 0.2; // 80% success rate for demo
      
      if (success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          interest: 'Sitting Mandir',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
      
      
      // ACTUAL EMAILJS IMPLEMENTATION (uncomment after setup):
      
      const emailjs = await import('@emailjs/browser');
      
      const templateParams = {
        from_firstName: formData.firstName,
        from_lastName: formData.lastName,
        from_email: formData.email,
        from_phone: formData.phone,
        from_interest: formData.interest,
        from_message: formData.message,
        from_time: new Date().toLocaleString()
      };

      const result = await emailjs.send(
        'service_gc7fezl',  // Replace with your EmailJS service ID
        'template_jlb6hbp', // Replace with your EmailJS template ID
        templateParams,
        'ELQD3lHvZcffk647k'   // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: 'Sitting Mandir',
        message: ''
      });
      
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-gold/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-gradient">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring a sacred space into your home? Contact us for custom orders, 
            consultations, or any questions about our mandirs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-foreground">Contact Information</h3>
              
              <div className="space-y-6">
                <Card className="hover-lift bg-card border-gold/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                        <Phone className="text-gold" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Phone</h4>
                        <p className="text-muted-foreground">+61 406305555</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift bg-card border-gold/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                        <Mail className="text-gold" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Email</h4>
                        <p className="text-muted-foreground">abhimistry907@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift bg-card border-gold/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                        <MapPin className="text-gold" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Location</h4>
                        <p className="text-muted-foreground">Australia</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift bg-card border-gold/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                        <Clock className="text-gold" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Business Hours</h4>
                        <p className="text-muted-foreground">Mon-Sat: 9AM-6PM PST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Card className="bg-card border-gold/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold mb-6 text-foreground">Send us a Message</h3>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </div>
                )}
                
                {submitStatus === 'validation' && (
                  <div className="mb-6 p-4 bg-yellow-100 border border-yellow-300 text-yellow-700 rounded-lg">
                    Please fill in all required fields (First Name, Last Name, Email, and Message).
                  </div>
                )}
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                      <input 
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 bg-background"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <input 
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 bg-background"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 bg-background"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 bg-background"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Interest</label>
                    <select 
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 bg-background"
                    >
                      <option value="Sitting Mandir">Sitting Mandir</option>
                      <option value="Standing Mandir">Standing Mandir</option>
                      <option value="Custom Design">Custom Design</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 bg-background"
                      placeholder="Tell us about your vision for your sacred space..."
                    ></textarea>
                  </div>
                  
                  <button 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold/90 disabled:bg-gold/50 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;