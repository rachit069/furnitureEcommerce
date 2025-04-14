import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import Footer from './Footer';

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { toast } = useToast();

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive"
      });
      return;
    }

    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    if (!isValidEmail(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!",
    });

    setSubscribed(true);

    setTimeout(() => {
      setName('');
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-serif font-semibold text-gray-900 mb-4">
                Furni. Newsletter
              </h1>
              <p className="text-lg text-gray-600">
                Subscribe to our newsletter to receive updates on new furniture collections, 
                exclusive offers, and interior design tips.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-100">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-[#2F5D62]/10 p-3 rounded-full">
                  <Mail className="w-8 h-8 text-[#2F5D62]" />
                </div>
              </div>

              <h2 className="text-2xl font-medium text-center mb-6">
                Subscribe to Newsletter
              </h2>

              {subscribed ? (
                <div className="text-center py-8">
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Thank you for subscribing!</h3>
                  <p className="text-gray-600">
                    You've been successfully added to our newsletter.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F5D62]/50 focus:border-[#2F5D62]"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your e-mail"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F5D62]/50 focus:border-[#2F5D62]"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-6">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-[#2F5D62] mt-1 mr-2"
                        required
                      />
                      <span className="text-sm text-gray-600">
                        I agree to receive emails from Furni. about new products, promotions, and design ideas.
                        You can unsubscribe at any time.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2F5D62] text-white py-3 px-4 rounded-md hover:bg-[#2F5D62]/90 transition duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Subscribe Now</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}

              <div className="mt-8 text-sm text-gray-500 text-center">
                <p>We respect your privacy and will never share your information.</p>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-lg font-medium mb-4">Newsletter Benefits</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-[#2F5D62] flex-shrink-0" />
                  <span>Early access to new furniture collections</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-[#2F5D62] flex-shrink-0" />
                  <span>Exclusive discounts and promotional offers</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-[#2F5D62] flex-shrink-0" />
                  <span>Interior design tips and inspiration</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-[#2F5D62] flex-shrink-0" />
                  <span>Invitations to special events and product launches</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Newsletter;
