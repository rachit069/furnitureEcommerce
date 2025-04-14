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
        title: 'Error',
        description: 'Please enter your name',
        variant: 'destructive',
      });
      return;
    }

    if (!email.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter your email address',
        variant: 'destructive',
      });
      return;
    }

    if (!isValidEmail(email)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Success!',
      description: 'Thank you for subscribing to our newsletter!',
    });

    setSubscribed(true);

    setTimeout(() => {
      setName('');
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mb-3 md:mb-4">
                Furni. Newsletter
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Stay updated with the latest furniture arrivals, exclusive offers, and inspiring design trends.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="flex items-center justify-center mb-4 md:mb-6">
                <div className="bg-[#2F5D62]/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-[#2F5D62]" />
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-medium text-center mb-4 md:mb-6 text-gray-800">
                Unlock Exclusive Content
              </h2>

              {subscribed ? (
                <div className="text-center py-6 md:py-8">
                  <div className="flex justify-center mb-3 md:mb-4">
                    <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-500" />
                  </div>
                  <h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2 text-green-600">Success!</h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    You're all set! Keep an eye on your inbox for exciting news and updates.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4 md:mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F5D62]/50 focus:border-[#2F5D62]"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-4 md:mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your e-mail"
                      className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F5D62]/50 focus:border-[#2F5D62]"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-4 md:mb-6">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        className="rounded border-gray-400 text-[#2F5D62] mt-0.5 mr-2"
                        required
                      />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        I agree to receive emails from Furni. about new products, promotions, and design inspiration.
                        Unsubscribe anytime.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2F5D62] text-white py-2.5 md:py-3 px-4 rounded-md hover:bg-[#2F5D62]/90 transition duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Subscribe Now</span>
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </form>
              )}

              <div className="mt-6 md:mt-8 text-sm text-gray-600 text-center leading-relaxed">
                <p>Your privacy is our priority. We'll never share your email address.</p>
              </div>
            </div>

            <div className="mt-8 md:mt-10 bg-gray-100 p-4 md:p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3 md:mb-4 text-gray-800">Subscriber Benefits</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#2F5D62] flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Early access to exclusive collections</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#2F5D62] flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Special discounts and promotions</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#2F5D62] flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Expert interior design advice</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#2F5D62] flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Invitations to VIP events</span>
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
