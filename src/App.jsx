import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Search, Mail, Zap, Clock, Filter, CheckCircle, X, ChevronDown, Moon, Sun, Sparkles, Shield, CreditCard, TrendingUp, AlertCircle, Loader2, Star, Users, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Link } from 'react-router-dom'


const WalrusSearchLanding = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [searchText, setSearchText] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);

  // Email submission handler
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // OPTION 1: Web3Forms (FREE, NO BACKEND NEEDED)
    // Sign up at https://web3forms.com to get your access key
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '58aebf1f-7dc2-44d8-9f01-4144fea6df4b', // Get from web3forms.com
          email: email,
          subject: 'New WalrusSearch Waitlist Signup',
          from_name: 'WalrusSearch Landing Page'
        })
      });

      if (response.ok) {
        setSubmitMessage('🎉 You\'re on the list! Check your email.');
        setEmail('');
      } else {
        setSubmitMessage('❌ Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('❌ Error submitting. Please try again.');
    }

    /* OPTION 2: YOUR OWN BACKEND API
    try {
      const response = await fetch('https://your-api.com/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        setSubmitMessage('🎉 You\'re on the list! Check your email.');
        setEmail('');
      }
    } catch (error) {
      setSubmitMessage('❌ Error submitting. Please try again.');
    }
    */

    /* OPTION 3: GOOGLE SHEETS via Zapier/Make.com
    // 1. Create a Zapier webhook or Make.com scenario
    // 2. Connect it to Google Sheets
    // 3. Replace the URL below with your webhook URL
    try {
      await fetch('https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK/', {
        method: 'POST',
        body: JSON.stringify({ email })
      });
      setSubmitMessage('🎉 You\'re on the list! Check your email.');
      setEmail('');
    } catch (error) {
      setSubmitMessage('❌ Error submitting. Please try again.');
    }
    */

    setIsSubmitting(false);
  };

  const searchQueries = [
    {
      text: "people complaining about expense tracking for tours",
      threads: [
        {
          title: "Band tour expense tracking is a nightmare - what tools do you use?",
          subreddit: "r/WeAreTheMusicMakers",
          upvotes: 234,
          comments: 67,
          relevance: 98,
          snippet: "Every tour we lose track of receipts. Looking for something better than spreadsheets...",
          author: "u/tourmanager_mike"
        },
        {
          title: "Frustrated with expense management on the road",
          subreddit: "r/TouringMusicians",
          upvotes: 156,
          comments: 43,
          relevance: 95,
          snippet: "Our current system is so clunky. Hotel receipts, gas, meals - it's chaos...",
          author: "u/drummerdan"
        },
        {
          title: "Why is tour accounting so complicated?",
          subreddit: "r/bandmembers",
          upvotes: 189,
          comments: 52,
          relevance: 92,
          snippet: "Three months into tour and we have no idea what we actually spent...",
          author: "u/bassplayer_tours"
        }
      ],
      irrelevant: [
        "Best expense tracking apps 2024",
        "How to track business expenses",
        "Expense tracking for freelancers"
      ]
    },
    {
      text: "struggling to find good project management for remote teams",
      threads: [
        {
          title: "Remote team coordination is killing our productivity",
          subreddit: "r/startups",
          upvotes: 312,
          comments: 89,
          relevance: 97,
          snippet: "We've tried Asana, Monday, Trello... nothing works for our distributed team...",
          author: "u/startup_founder"
        },
        {
          title: "Anyone else find PM tools too complicated for remote work?",
          subreddit: "r/remotework",
          upvotes: 267,
          comments: 74,
          relevance: 94,
          snippet: "My team is across 4 timezones and we can't stay synced. Need something simpler...",
          author: "u/remote_manager"
        },
        {
          title: "Project management software that actually works for distributed teams?",
          subreddit: "r/projectmanagement",
          upvotes: 198,
          comments: 61,
          relevance: 91,
          snippet: "Everything assumes we're in the same office. We need better async tools...",
          author: "u/pm_professional"
        }
      ],
      irrelevant: [
        "Best project management tools 2025",
        "Top PM software reviews",
        "Project management certification"
      ]
    },
    {
      text: "frustrated with email marketing deliverability issues",
      threads: [
        {
          title: "Our emails keep landing in spam - losing customers",
          subreddit: "r/EmailMarketing",
          upvotes: 289,
          comments: 103,
          relevance: 96,
          snippet: "Deliverability dropped from 90% to 45% in 2 months. Desperate for solutions...",
          author: "u/marketing_director"
        },
        {
          title: "Why is email deliverability so hard in 2025?",
          subreddit: "r/marketing",
          upvotes: 221,
          comments: 78,
          relevance: 93,
          snippet: "We follow all best practices but still end up in spam folders...",
          author: "u/email_marketer"
        },
        {
          title: "Lost $50k in sales due to spam folder placement",
          subreddit: "r/ecommerce",
          upvotes: 376,
          comments: 142,
          relevance: 90,
          snippet: "Our abandoned cart emails aren't reaching customers. Revenue is tanking...",
          author: "u/ecommerce_owner"
        }
      ],
      irrelevant: [
        "Email marketing best practices",
        "How to write email subject lines",
        "Email marketing statistics"
      ]
    }
  ];

  const currentQuery = searchQueries[currentQueryIndex];
  const fullSearchText = currentQuery.text;
  
  useEffect(() => {
    if (isTyping && searchText.length < fullSearchText.length) {
      const timeout = setTimeout(() => {
        setSearchText(fullSearchText.slice(0, searchText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else if (isTyping && searchText.length === fullSearchText.length) {
      setTimeout(() => setShowResults(true), 800);
      // After showing results, wait 5 seconds then reset to next query
      setTimeout(() => {
        setShowResults(false);
        setSearchText('');
        setIsTyping(false);
        setCurrentQueryIndex((prev) => (prev + 1) % searchQueries.length);
      }, 7000);
    }
  }, [searchText, isTyping, fullSearchText]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [currentQueryIndex]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-purple-900/10 via-gray-950 to-blue-900/10' : 'bg-gradient-to-br from-purple-50 via-white to-blue-50'}`} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${darkMode ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.05)'} 0%, transparent 50%)`,
        }} />
        
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={darkMode ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.05)'} strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${darkMode ? 'bg-purple-500/30' : 'bg-purple-400/40'}`}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-purple-500/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                WalrusSearch
              </span>
            </motion.div>
            
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">AI-Powered Reddit Intelligence</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Find Relevant Reddit
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Discussions Without the Noise
              </span>
            </motion.h1>

            <motion.p 
              className={`text-xl md:text-2xl mb-16 max-w-3xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AI-powered search that <span className="text-purple-400 font-semibold">understands context</span>. 
              Stop wasting time on irrelevant keyword matches.
            </motion.p>
          </div>

          {/* Animated Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <div className={`rounded-2xl border ${darkMode ? 'bg-gray-900/50 border-purple-500/20' : 'bg-white border-purple-200'} backdrop-blur-xl shadow-2xl overflow-hidden`}>
              {/* Search Bar */}
              <div className={`p-6 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className={`flex items-center space-x-4 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} px-6 py-4`}>
                  <Search className="w-5 h-5 text-purple-400" />
                  <input
                    type="text"
                    value={searchText}
                    readOnly
                    className="flex-1 bg-transparent outline-none text-lg"
                    placeholder="Enter your search query..."
                  />
                  {isTyping && searchText.length < fullSearchText.length && (
                    <motion.div
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="w-0.5 h-6 bg-purple-400"
                    />
                  )}
                </div>
              </div>

              {/* Loading State */}
              {isTyping && searchText.length === fullSearchText.length && !showResults && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-12 text-center"
                >
                  <Loader2 className="w-12 h-12 text-purple-400 animate-spin mx-auto mb-4" />
                  <p className="text-lg text-purple-400 font-medium">AI analyzing 10,000+ Reddit threads...</p>
                  <p className={`text-sm mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Filtering out keyword noise</p>
                </motion.div>
              )}

              {/* Results */}
              {showResults && (
                <div className="p-6 space-y-4">
                  {/* Irrelevant Results Being Filtered */}
                  <div className="space-y-2 -mb-2">
                    {currentQuery.irrelevant.map((thread, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0.6, x: 0, height: 'auto' }}
                        animate={{ opacity: 0, x: -100, height: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={`p-4 rounded-lg ${darkMode ? 'bg-red-900/20 border border-red-500/30' : 'bg-red-50 border border-red-200'} flex items-center justify-between overflow-hidden mb-2`}
                      >
                        <span className={`text-sm ${darkMode ? 'text-gray-400 line-through' : 'text-gray-500 line-through'}`}>{thread}</span>
                        <X className="w-4 h-4 text-red-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Relevant Results */}
                  {currentQuery.threads.map((thread, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                      className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800/50 border-green-500/30 hover:border-green-500/50' : 'bg-white border-green-200 hover:border-green-300'} transition-all cursor-pointer group`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className={`text-xs font-medium px-2 py-1 rounded ${darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                              {thread.subreddit}
                            </span>
                            <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                              {thread.author}
                            </span>
                          </div>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-400 transition-colors">
                            {thread.title}
                          </h3>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
                            {thread.snippet}
                          </p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>
                              ↑ {thread.upvotes}
                            </span>
                            <span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>
                              💬 {thread.comments}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.7 + i * 0.15 }}
                            className="flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1"
                          >
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-sm font-semibold text-green-400">{thread.relevance}% match</span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className={`text-center text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'} pt-4`}
                  >
                    ✨ AI filtered out 9,847 irrelevant threads in 2.3 seconds
                  </motion.p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Tired of <span className="text-red-400">Wasting Time</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-xl text-center mb-16 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Traditional Reddit search tools are broken. Here's why:
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: "F5Bot Floods Your Inbox",
                description: "Wake up to 50+ notifications. 90% are false positives. Spend hours filtering noise instead of finding customers.",
                color: "red"
              },
              {
                icon: Clock,
                title: "Manual Search Takes Hours",
                description: "Browse subreddit by subreddit. Scroll endlessly. Miss relevant discussions. Your competitors are already there.",
                color: "yellow"
              },
              {
                icon: AlertCircle,
                title: "Keywords Miss Context",
                description: "Search \"expense tracking\" and get posts about personal budgeting. Completely irrelevant to your B2B software.",
                color: "orange"
              }
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-8 rounded-2xl border ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'} backdrop-blur-sm`}
              >
                <div className={`w-14 h-14 rounded-xl bg-${problem.color}-500/10 flex items-center justify-center mb-6`}>
                  <problem.icon className={`w-7 h-7 text-${problem.color}-400`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Urgency Builder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Alert className={`max-w-2xl mx-auto ${darkMode ? 'bg-purple-900/20 border-purple-500/30' : 'bg-purple-50 border-purple-200'}`}>
              <TrendingUp className="h-5 w-5 text-purple-400" />
              <AlertDescription className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                While you manually search, your competitors are finding and converting Reddit leads <span className="font-semibold text-purple-400">right now</span>.
              </AlertDescription>
            </Alert>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-xl text-center mb-16 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            From query to qualified leads in under 3 minutes
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                number: "01",
                title: "Enter Your Search",
                description: "Describe what you're looking for in plain English. No complex Boolean operators needed.",
                icon: Search
              },
              {
                number: "02",
                title: "AI Filters Thousands",
                description: "Our AI reads every thread like a human would, understanding context and intent beyond keywords.",
                icon: Filter
              },
              {
                number: "03",
                title: "Get Relevant Results",
                description: "Receive only highly relevant discussions with relevance scores. Start engaging immediately.",
                icon: CheckCircle
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                {i < 2 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent" />
                )}
                <div className={`relative p-8 rounded-2xl border ${darkMode ? 'bg-gray-900/50 border-purple-500/20' : 'bg-white border-purple-200'} backdrop-blur-sm`}>
                  <div className="text-6xl font-bold text-purple-500/20 mb-4">{step.number}</div>
                  <div className={`w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6`}>
                    <step.icon className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Banner */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <div className={`rounded-2xl border ${darkMode ? 'bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/20' : 'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200'} backdrop-blur-sm p-8`}>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: Shield, text: "30-Day Money-Back Guarantee" },
                { icon: CreditCard, text: "Secure Stripe Payments" },
                { icon: Zap, text: "No Subscriptions Required" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center space-y-3"
                >
                  <item.icon className="w-8 h-8 text-purple-400" />
                  <span className="font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <section id="pricing-section" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-xl text-center mb-16 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Launch day is <span className="text-purple-400 font-semibold">November 30, 2025</span> - Join now or become a founding member
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Waitlist - Left Card (Free) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`p-8 rounded-2xl border ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'} backdrop-blur-sm`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Join Waitlist</h3>
                <div className="flex items-end justify-center space-x-2 mb-2">
                  <span className="text-5xl font-bold text-green-400">Free</span>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Get instant access on launch day
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "1 free search on launch day",
                  "Launch: November 30, 2025",
                  "No credit card required",
                  "Early access to features",
                  "Launch day email notification"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 focus:border-purple-500' : 'bg-gray-50 border-gray-200 focus:border-purple-400'} outline-none transition-colors`}
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className={`w-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-900 hover:bg-gray-800'} text-white font-bold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span>{isSubmitting ? 'Joining...' : 'Join Waitlist (Free)'}</span>
                  {!isSubmitting && <Mail className="w-5 h-5" />}
                </motion.button>
                {submitMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-sm text-center ${submitMessage.includes('🎉') ? 'text-green-400' : 'text-red-400'}`}
                  >
                    {submitMessage}
                  </motion.p>
                )}
              </form>

              <p className={`text-xs text-center mt-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                ⚡ 247+ people already on the list
              </p>
            </motion.div>

            {/* Founding Member - Right Card (Primary) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative p-8 rounded-2xl border-2 ${darkMode ? 'bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500' : 'bg-gradient-to-br from-purple-50 to-blue-50 border-purple-400'} backdrop-blur-sm shadow-2xl`}
            >
              {/* Limited Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  🔥 Limited to First 100
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Founding Member</h3>
                <div className="flex items-end justify-center space-x-2 mb-2">
                  <span className="text-5xl font-bold">$28</span>
                  <span className={`text-lg mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>one-time</span>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Unlimited searches for 3 months
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited AI searches for 3 months",
                  "Get instant access on launch day",
                  "Then only $19/month (can cancel)",
                  "Priority support & feedback",
                  "Founding member badge",
                  "Early access to all new features"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="https://buy.stripe.com/7sY6oHdeLegP2Jo5Cg0Fi02"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
              >
                <span>Become a Founding Member</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <p className={`text-xs text-center mt-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                🔒 Secure payment. Access on November 30, 2025.
              </p>

              <div className={`mt-6 p-4 rounded-lg border ${darkMode ? 'bg-purple-900/20 border-purple-500/30' : 'bg-purple-50 border-purple-200'}`}>
                <p className={`text-sm text-center ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                  💎 <span className="font-semibold">Value:</span> $171 for just $28 (84% off)
                </p>
              </div>

              {/* Spots Remaining Indicator */}
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-xs font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Founding Member Spots
                  </span>
                  <span className="text-xs font-semibold text-orange-400">
                    63/100 taken
                  </span>
                </div>
                <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} overflow-hidden`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '63%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                  />
                </div>
                <p className={`text-xs text-center mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  ⚡ Spots filling fast - secure yours now
                </p>
              </div>
            </motion.div>
          </div>

          {/* Urgency Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Alert className={`max-w-2xl mx-auto ${darkMode ? 'bg-orange-900/20 border-orange-500/30' : 'bg-orange-50 border-orange-200'}`}>
              <Clock className="h-5 w-5 text-orange-400" />
              <AlertDescription className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Launch in <span className="font-bold text-orange-400">1 month</span> (November 30, 2025). Founding member spots filling fast - only <span className="font-bold text-orange-400">37 spots left</span>.
              </AlertDescription>
            </Alert>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {[
              {
                question: "How is this different from F5Bot?",
                answer: "F5Bot sends you EVERY mention of your keywords, flooding your inbox with 90% irrelevant posts. ContextSearch uses AI to understand the actual context and intent behind discussions, filtering out noise before it reaches you. You get only high-quality, relevant threads with relevance scores."
              },
              {
                question: "What happens after the 3-month founding member period?",
                answer: "After 3 months of unlimited searches, your founding membership converts to just $19/month (you can cancel anytime). Regular pricing will be $29/month, so you'll save $10/month forever as a founding member. You're locked into this special rate for life."
              },
              {
                question: "When does this launch?",
                answer: "November 30, 2025 - exactly 1 month away! Both waitlist members and founding members get instant access on launch day. Founding member spots are limited to the first 100 people, and we're already 63% full."
              },
              {
                question: "What if I join the waitlist instead of becoming a founding member?",
                answer: "Waitlist members get 1 free search on launch day and can purchase individual searches or subscribe at regular pricing ($29/month). Founding members get unlimited searches for 3 months + lifetime discount pricing. The founding offer expires when we hit 100 members."
              },
              {
                question: "How long does a search take?",
                answer: "Most searches complete in under 3 minutes. Our AI analyzes thousands of Reddit threads in real-time, understanding context just like a human would read each post. You'll get an email when your results are ready."
              },
              {
                question: "What kind of searches work best?",
                answer: "ContextSearch excels at finding discussions about problems, pain points, and needs. Examples: 'people struggling with X', 'complaints about Y', 'looking for alternatives to Z'. The more specific about context you are, the better the results."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`border rounded-xl ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'} overflow-hidden`}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-purple-500/5 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: expandedFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-purple-400" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === i ? 'auto' : 0,
                    opacity: expandedFaq === i ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className={`px-6 pb-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className={`rounded-2xl border-2 ${darkMode ? 'bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/50' : 'bg-gradient-to-br from-purple-50 to-blue-50 border-purple-300'} backdrop-blur-sm p-12`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stop Wasting Time on
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Irrelevant Reddit Threads
              </span>
            </h2>
            <p className={`text-xl mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Launch in <span className="font-bold text-orange-400">1 month</span> - November 30, 2025
            </p>
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Only <span className="font-bold text-purple-400">37 founding member spots</span> remaining
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://buy.stripe.com/7sY6oHdeLegP2Jo5Cg0Fi02"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
              >
                <span>Become Founding Member - $28</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.button
                onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} font-bold py-4 px-8 rounded-xl text-lg border ${darkMode ? 'border-gray-700' : 'border-gray-300'} transition-all`}
              >
                Join Waitlist (Free)
              </motion.button>
            </div>
            <p className={`text-sm mt-6 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              ✓ Unlimited searches for 3 months  •  ✓ Then only $19/month  •  ✓ Launch day access
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className={`relative z-10 border-t ${darkMode ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-gray-50'} py-12 px-4`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold">WalrusSearch</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            <Link
              to="/privacy"
              className={`text-sm ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}
            >
              Privacy Policy
            </Link>
            <span className={`text-sm ${darkMode ? 'text-gray-700' : 'text-gray-300'}`}>|</span>
            <Link
              to="/terms"
              className={`text-sm ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}
            >
              Terms of Service
            </Link>
            <span className={`text-sm ${darkMode ? 'text-gray-700' : 'text-gray-300'}`}>|</span>
            <a 
              href="mailto:support@walrussearch.ai" 
              className={`text-sm ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}
            >
              Contact: support@walrussearch.ai
            </a>
          </div>
          
          <p className={`text-sm text-center ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            © 2025 WalrusSearch. Find relevant Reddit discussions with AI.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default WalrusSearchLanding;