import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">CONTACT US</h1>
          <p className="text-xl text-gray-400">Let's build a solid foundation together.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-6">Head Office</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase tracking-wide text-sm mb-1">Address</h4>
                    <p className="text-gray-600">G-12, Industrial Area, Phase III,<br />Beawar, Rajasthan - 305901<br />India</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase tracking-wide text-sm mb-1">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210<br />+91 12345 67890</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase tracking-wide text-sm mb-1">Email</h4>
                    <p className="text-gray-600">sales@indusmin.com<br />info@indusmin.com</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase tracking-wide text-sm mb-1">Business Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 h-64 w-full flex items-center justify-center text-gray-400">
               {/* Map placeholder */}
               <div className="text-center">
                 <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
                 <span className="text-sm font-bold uppercase tracking-wider">Map Embed Placeholder</span>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white border border-gray-200 p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-display font-bold text-primary mb-2">Send an Inquiry</h2>
            <p className="text-gray-500 mb-8">Fill out the form below and our team will respond within 24 hours.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
