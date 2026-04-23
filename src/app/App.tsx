import { useState, useEffect } from 'react';
import { Moon, Sun, ChevronRight, Award, Users, Star, Instagram, Facebook, Twitter, Mail, Phone, MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const beersData = [
  { 
    name: 'BULL STRONG', 
    abv: '8.0%', 
    notes: 'Bold & Powerful', 
    color: 'from-amber-600 to-amber-800',
    description: 'A robust and full-bodied strong beer crafted for those who prefer an intense flavor profile. Brewed with premium malts and a special blend of hops.',
    ingredients: 'Malted Barley, Hops, Yeast, Pure Water',
    pairing: 'Spicy food, grilled meats, strong cheeses'
  },
  { 
    name: 'BULL ULTRA', 
    abv: '9.5%', 
    notes: 'Maximum Strength', 
    color: 'from-amber-500 to-orange-600',
    description: 'Our most powerful brew, delivering maximum strength without compromising on smoothness. A true testament to the art of high-gravity brewing.',
    ingredients: 'Extra Pale Malt, Special Hop Blend, High-Gravity Yeast',
    pairing: 'Barbecue, smoked brisket, dark chocolate desserts'
  },
  { 
    name: 'BULL PREMIUM', 
    abv: '7.5%', 
    notes: 'Smooth & Rich', 
    color: 'from-yellow-600 to-amber-700',
    description: 'A perfectly balanced premium lager with a rich golden color and a exceptionally smooth finish. The ideal choice for extended celebrations.',
    ingredients: 'Premium Pilsner Malt, Noble Hops, Lager Yeast',
    pairing: 'Seafood, mild curries, roasted poultry'
  },
  { 
    name: 'BULL LEGEND', 
    abv: '10.0%', 
    notes: 'Ultimate Power', 
    color: 'from-orange-500 to-red-600',
    description: 'A legendary brew pushing the boundaries of strength and flavor. Rich caramel notes give way to a surprisingly clean and warming finish.',
    ingredients: 'Roasted Cara Malt, Bittering Hops, Special Ale Yeast',
    pairing: 'Aged steaks, rich stews, sharp cheddar'
  },
];

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [selectedBeer, setSelectedBeer] = useState<typeof beersData[0] | null>(null);
  const [isDistributorModalOpen, setIsDistributorModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleDistributorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setIsDistributorModalOpen(false);
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      {/* Theme Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-md border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:scale-110"
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-amber-500" />
        ) : (
          <Moon className="w-6 h-6 text-gray-800" />
        )}
      </motion.button>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-black/50 backdrop-blur-lg border-b border-gray-200/20 dark:border-amber-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <span className="font-bold text-black dark:text-amber-500" style={{ fontSize: '28px', letterSpacing: '3px' }}>BULLBERG</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex gap-8"
          >
            {['BEERS', 'STORY', 'LIFESTYLE', 'CONTACT'].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-bold text-sm text-black dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                style={{ letterSpacing: '1.5px' }}
              >
                {item}
              </a>
            ))}
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1627149977771-fb690f97dc85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVyJTIwYm90dGxlcyUyMGRhcmslMjBiYWNrZ3JvdW5kJTIwcHJlbWl1bXxlbnwxfHx8fDE3NzY4NDAzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Premium Beer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80 dark:from-black/90 dark:via-black/80 dark:to-black/90"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-700/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-2xl shadow-amber-500/50">
              <span className="text-6xl">🐂</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-bold text-white mb-6"
            style={{ fontSize: '72px', letterSpacing: '4px', lineHeight: '1.1' }}
          >
            UNLEASH THE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              STRENGTH WITHIN
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
          >
            Premium strong beer crafted for bold experiences. Embrace the power of celebration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-6 justify-center flex-wrap"
          >
            <a href="#beers" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              EXPLORE BEERS
              <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#story" className="px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-md border-2 border-amber-500/50 text-white dark:text-amber-500 font-bold rounded-full hover:bg-amber-500/10 transition-all duration-300 hover:scale-105 flex items-center justify-center">
              OUR STORY
            </a>
          </motion.div>
        </div>


      </section>

      {/* Featured Products */}
      <section id="beers" className="py-24 bg-gray-50 dark:bg-gray-950/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-gray-900 dark:text-white mb-4" style={{ fontSize: '48px', letterSpacing: '3px' }}>
              OUR BEERS
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beersData.map((beer, index) => (
              <motion.div
                key={beer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-gray-200 dark:border-amber-500/20 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-full h-64 mb-6 rounded-2xl overflow-hidden relative">
                      <img
                        src="https://images.unsplash.com/photo-1627149977771-fb690f97dc85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVyJTIwYm90dGxlcyUyMGRhcmslMjBiYWNrZ3JvdW5kJTIwcHJlbWl1bXxlbnwxfHx8fDE3NzY4NDAzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt={beer.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${beer.color} opacity-30 mix-blend-multiply`}></div>
                    </div>

                    <h3 className="font-bold text-gray-900 dark:text-amber-500 mb-2" style={{ fontSize: '24px', letterSpacing: '2px' }}>
                      {beer.name}
                    </h3>

                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-1 bg-amber-500/20 dark:bg-amber-500/10 border border-amber-500/50 rounded-full text-amber-700 dark:text-amber-400 font-bold">
                        {beer.abv} ABV
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6">{beer.notes}</p>

                    <button 
                      onClick={() => setSelectedBeer(beer)}
                      className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 transform group-hover:scale-105"
                    >
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section id="story" className="py-24 bg-white dark:bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="text-9xl">🐂</div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1775642675008-b73184710886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwZHJpbmtpbmclMjBiZWVyJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc2ODQwMzYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Beer Celebration"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-bold text-gray-900 dark:text-white mb-6" style={{ fontSize: '48px', letterSpacing: '3px' }}>
                THE LEGEND OF<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  THE BULL
                </span>
              </h2>

              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg">
                <p>
                  Born from the spirit of strength and celebration, BULL represents the untamed power within every individual. Our beer is crafted for those who dare to be bold, who embrace life's challenges with unwavering courage.
                </p>
                <p>
                  Each bottle is a testament to brotherhood, tradition, and the relentless pursuit of excellence. From ancient celebrations to modern gatherings, BULL has been the companion of warriors, dreamers, and champions.
                </p>
                <p>
                  We believe in the power of unity, the strength of character, and the joy of shared moments. When you raise a BULL, you're not just drinking a beer—you're unleashing your inner strength.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6">
                {[
                  { icon: Award, label: 'PREMIUM QUALITY' },
                  { icon: Users, label: 'BROTHERHOOD' },
                  { icon: Star, label: 'EXCELLENCE' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-black" />
                    </div>
                    <p className="text-sm font-bold text-gray-700 dark:text-amber-500" style={{ letterSpacing: '1px' }}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section id="lifestyle" className="py-24 bg-gray-50 dark:bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-gray-900 dark:text-white mb-4" style={{ fontSize: '48px', letterSpacing: '3px' }}>
              LIVE THE EXPERIENCE
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'CELEBRATION NIGHTS',
                desc: 'Unforgettable moments with friends',
                img: 'https://images.unsplash.com/photo-1758272133603-7016fbf946dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBjZWxlYnJhdGluZyUyMHBhcnR5JTIwYmVlcnxlbnwxfHx8fDE3NzY4NDAzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                title: 'FESTIVAL VIBES',
                desc: 'Cultural celebrations & traditions',
                img: 'https://images.unsplash.com/photo-1758272134220-f83e4d75326e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwZW9wbGUlMjBjZWxlYnJhdGluZyUyMHBhcnR5JTIwYmVlcnxlbnwxfHx8fDE3NzY4NDAzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                title: 'VICTORY TOASTS',
                desc: 'Honoring achievements together',
                img: 'https://images.unsplash.com/photo-1775642675008-b73184710886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwZHJpbmtpbmclMjBiZWVyJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc2ODQwMzYzfDA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                title: 'ROOFTOP SESSIONS',
                desc: 'Premium urban experiences',
                img: 'https://images.unsplash.com/photo-1758272133699-3178c910fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmcmllbmRzJTIwZHJpbmtpbmclMjBiZWVyJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc2ODQwMzYzfDA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                title: 'BROTHERHOOD',
                desc: 'Bonds forged over bold flavors',
                img: 'https://images.unsplash.com/photo-1764525702397-f2b58668cb56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmcmllbmRzJTIwZHJpbmtpbmclMjBiZWVyJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc2ODQwMzYzfDA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                title: 'PARTY LEGENDS',
                desc: 'Making memories that last',
                img: 'https://images.unsplash.com/photo-1758272134196-1ab895629bce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxmcmllbmRzJTIwZHJpbmtpbmclMjBiZWVyJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc2ODQwMzYzfDA&ixlib=rb-4.1.0&q=80&w=1080'
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                  <div className="absolute inset-0 flex items-end p-8">
                    <div>
                      <h3 className="font-bold text-white mb-2" style={{ fontSize: '24px', letterSpacing: '2px' }}>
                        {item.title}
                      </h3>
                      <p className="text-amber-300">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-gray-900 dark:text-white mb-4" style={{ fontSize: '48px', letterSpacing: '3px' }}>
              WHAT LEGENDS SAY
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'RAJESH K.', review: 'The strongest and smoothest beer I\'ve ever had. BULL is now my go-to for every celebration!', rating: 5 },
              { name: 'VIKRAM S.', review: 'Premium quality that matches its bold branding. Perfect for those who appreciate strength and flavor.', rating: 5 },
              { name: 'ARJUN M.', review: 'BULL has redefined beer culture in India. It\'s not just a drink, it\'s an experience of power and brotherhood.', rating: 5 },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-gray-200 dark:border-amber-500/20 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.review}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                    <span className="text-black font-bold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-amber-500" style={{ letterSpacing: '1px' }}>
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Verified Customer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black dark:bg-gray-950 border-t border-amber-500/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-bold text-amber-500" style={{ fontSize: '28px', letterSpacing: '3px' }}>BULLBERG</span>
              </div>
              <p className="text-gray-400">
                Unleash the strength within. Premium strong beer for bold experiences.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-amber-500 mb-4" style={{ letterSpacing: '1.5px' }}>QUICK LINKS</h4>
              <ul className="space-y-2">
                {['About Us', 'Our Beers', 'Events', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-amber-500 mb-4" style={{ letterSpacing: '1.5px' }}>CONTACT</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4 text-amber-500" />
                  +91 98765 43210
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4 text-amber-500" />
                  info@bullbeer.com
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  Mumbai, India
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-amber-500 mb-4" style={{ letterSpacing: '1.5px' }}>FOLLOW US</h4>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="https://www.instagram.com/bullburgbeer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-amber-500/20 flex items-center justify-center hover:bg-amber-500/10 hover:border-amber-500/50 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-amber-500" />
                  </a>
                ))}
              </div>

              <button 
                onClick={() => setIsDistributorModalOpen(true)}
                className="mt-6 w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
              >
                DISTRIBUTOR INQUIRY
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-amber-500/20 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 BULL Premium Beer. All rights reserved. | Drink Responsibly. Must be 21+
            </p>
          </div>
        </div>
      </footer>

      {/* Beer Details Modal */}
      <AnimatePresence>
        {selectedBeer && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBeer(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-amber-500/20 z-10 flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedBeer(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-full hover:bg-amber-500/20 text-gray-800 dark:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-gray-100 dark:bg-black flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1627149977771-fb690f97dc85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVyJTIwYm90dGxlcyUyMGRhcmslMjBiYWNrZ3JvdW5kJTIwcHJlbWl1bXxlbnwxfHx8fDE3NzY4NDAzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={selectedBeer.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedBeer.color} opacity-50 mix-blend-multiply`}></div>
              </div>
              
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-1 bg-amber-500/20 border border-amber-500/50 rounded-full text-amber-600 dark:text-amber-500 font-bold text-sm mb-6 self-start tracking-wider">
                  {selectedBeer.abv} ABV • {selectedBeer.notes}
                </div>
                
                <h3 className="font-bold text-gray-900 dark:text-white mb-6" style={{ fontSize: '36px', letterSpacing: '2px', lineHeight: '1.2' }}>
                  {selectedBeer.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  {selectedBeer.description}
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-amber-500 text-sm tracking-wider mb-2">INGREDIENTS</h4>
                    <p className="text-gray-600 dark:text-gray-400">{selectedBeer.ingredients}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-amber-500 text-sm tracking-wider mb-2">BEST PAIRED WITH</h4>
                    <p className="text-gray-600 dark:text-gray-400">{selectedBeer.pairing}</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedBeer(null)}
                  className="mt-10 w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  CLOSE DETAILS
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Distributor Inquiry Modal */}
      <AnimatePresence>
        {isDistributorModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDistributorModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-amber-500/20 z-10 p-8 md:p-12 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setIsDistributorModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-gray-100 dark:bg-black/40 backdrop-blur-md rounded-full hover:bg-amber-500/20 text-gray-800 dark:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-bold text-gray-900 dark:text-white mb-2" style={{ fontSize: '32px', letterSpacing: '1px' }}>
                BECOME A PARTNER
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                Join the BULLBERG legacy. Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Request Received!</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">Thank you for your interest. We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleDistributorSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 tracking-wide">FIRST NAME</label>
                      <input required type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-gray-900 dark:text-white transition-all" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 tracking-wide">LAST NAME</label>
                      <input required type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-gray-900 dark:text-white transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 tracking-wide">COMPANY NAME</label>
                    <input required type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-gray-900 dark:text-white transition-all" placeholder="Acme Beverages Ltd" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 tracking-wide">EMAIL</label>
                      <input required type="email" className="w-full px-4 py-3 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-gray-900 dark:text-white transition-all" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 tracking-wide">PHONE NUMBER</label>
                      <input required type="tel" className="w-full px-4 py-3 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-gray-900 dark:text-white transition-all" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 tracking-wide">ADDITIONAL DETAILS</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-gray-900 dark:text-white transition-all resize-none" placeholder="Tell us about your distribution network..."></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 mt-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                        SUBMITTING...
                      </>
                    ) : (
                      'SUBMIT INQUIRY'
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
