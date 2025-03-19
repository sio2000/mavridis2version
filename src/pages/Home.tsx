import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Calculator, Building, Ruler, FileText, CheckCircle, ChevronLeft, ChevronRight, ArrowRight, X, Award, Users } from 'lucide-react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import t2 from '../assets/images/t2.jpg';
import architecturalDesign from '../assets/images/architectural-design.jpg';
import img77 from '../assets/images/77.jpg';
import imgRt5 from '../assets/images/rt5.jpg';
import t1 from '../assets/images/t1.jpg';
import t3 from '../assets/images/t3.jpg';
import t4 from '../assets/images/t4.jpg';
import t5 from '../assets/images/t5.jpg';
import t6 from '../assets/images/t6.jpg';
import t7 from '../assets/images/t7.jpg';
import t8 from '../assets/images/t8.jpg';
import t9 from '../assets/images/t9.jpg';
import t10 from '../assets/images/t10.jpg';
import q1 from '../assets/images/q1.jpg';
import q2 from '../assets/images/q2.jpg';
import q3 from '../assets/images/q3.jpg';
import q4 from '../assets/images/q4.jpg';
import q5 from '../assets/images/q5.jpg';
import q6 from '../assets/images/q6.jpg';
import q7 from '../assets/images/q7.jpg';
import q8 from '../assets/images/q8.jpg';
import q9 from '../assets/images/q9.jpg';
import r1 from '../assets/images/r1.jpg';
import r2 from '../assets/images/r2.jpg';
import r3 from '../assets/images/r3.jpg';
import r4 from '../assets/images/r4.jpg';
import r5 from '../assets/images/r5.jpg';
import r6 from '../assets/images/r6.jpg';
import r7 from '../assets/images/r7.jpg';
import r8 from '../assets/images/r8.jpg';
import r9 from '../assets/images/r9.jpg';
import r10 from '../assets/images/r10.jpg';
import r11 from '../assets/images/r11.jpg';
import d1 from '../assets/images/d1.jpg';
import d2 from '../assets/images/d2.jpg';
import d4 from '../assets/images/d4.jpg';
import d5 from '../assets/images/d5.jpg';
import d6 from '../assets/images/d6.jpg';
import d7 from '../assets/images/d7.jpg';
import d8 from '../assets/images/d8.jpg';
import d9 from '../assets/images/d9.jpg';
import as from '../assets/images/as.jpg';
import to from '../assets/images/to.png';
import to1 from '../assets/images/to1.jpg';
import f1 from '../assets/images/f1.jpg';
import f2 from '../assets/images/f2.jpg';
import f3 from '../assets/images/f3.jpg';
import con1 from '../assets/images/con1.jpg';
import con2 from '../assets/images/con2.jpg';
import con3 from '../assets/images/con3.jpg';
import con4 from '../assets/images/con4.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import full7 from '../assets/images/full7.jpg';
import spiti4 from '../assets/images/spiti4.jpg';
import { CheckCircle2 } from 'lucide-react';
import qq3 from '../assets/images/qq3.jpg';
import aa1 from '../assets/images/aa1.jpg';
import ee3 from '../assets/images/ee3.jpg';
import house2 from '../assets/images/house2.jpg';
import pou3 from '../assets/images/pou3.jpg';
import full5 from '../assets/images/full5.jpg';
import qq5 from '../assets/images/qq5.jpg';
import tt1 from '../assets/images/tt1.jpg';
import ik4 from '../assets/images/ik4.jpg';

interface FeatureItem {
  title: string;
  description: string;
}

const certifications = {
  el: {
    column1: [
      '<strong>Πιστοποιημένος Ελεγκτής Δόμησης</strong>. Για έργα της μεγαλύτερης κατηγορίας.',
      '<strong>Πιστοποιημένος Επιθεωρητής Καταλυμάτων</strong>. Για κατηγοριοποίηση ξενοδοχειακών μονάδων (αστεροποίηση) και ενοικιαζόμενων δωματίων (κλειδιά) από την <strong>TÜV Austria</strong>.',
      'Εμπειρία στις <strong>Εκτιμήσεις Ακινήτων</strong>, με συνεργασίες με διάφορες τράπεζες (Πανελλήνια, Ασπίς, Αγροτική, Πειραιώς).',
      '<strong>Πιστοποίηση ISO/IEC 17024</strong>.',
      'Διεκπεραίωση προγράμματος <strong>"Εξοικονομώ κατ\' Οίκον"</strong>.',
      '<strong>Expert Valuer in Real Estate Property (REV) – TEGoVA</strong>.',
      '<strong>Πιστοποιημένη Εκτιμήτρια Ακινήτων</strong>, διεξάγοντας εκτιμήσεις σύμφωνα με τα Ευρωπαϊκά Πρότυπα.'
    ],
    column2: [
      '<strong>ΜΕΛΟΣ ΕΠΑΓΓΕΛΜΑΤΙΚΩΝ ΟΡΓΑΝΙΣΜΩΝ</strong>',
      'Εξειδίκευση σε <strong>Ενεργειακές Μελέτες και Επιθεωρήσεις</strong> βάσει <strong>ΚΕΝΑΚ</strong>.',
      '<strong>Μέλος του Συλλόγου Εκτιμητών Ελλάδος (Σ.ΕΚ.Ε.)</strong>.',
      '<strong>Συμμετοχή στην TEGoVA</strong>.',
      '<strong>Εντεταλμένος Χορηγός REV της TEGoVA</strong>.'
    ]
  },
  en: {
    column1: [
      '<strong>Certified Building Inspector</strong> for large-scale projects.',
      '<strong>Certified Accommodation Inspector</strong> for the classification of <strong>hotel units</strong> (star rating) and <strong>rental rooms</strong> (keys) by <strong>TÜV Austria</strong>.',
      'Expertise in <strong>Real Estate Valuations</strong>, with collaborations with various banks (Panellinia, Aspis, Agricultural Bank, Piraeus Bank).',
      'Specialization in <strong>Energy Studies and Inspections</strong> based on <strong>KENAK</strong>.',
      'Execution of programs such as <strong>"Exoikonomo kat\' Oikon"</strong>.',
      '<strong>Expert Valuer in Real Estate Property (REV) – TEGoVA</strong>.',
      '<strong>Certified Real Estate Appraiser</strong>, conducting valuations in accordance with European Standards.'
    ],
    column2: [
      '<strong>MEMBERSHIP IN PROFESSIONAL ORGANIZATIONS</strong>',
      '<strong>ISO/IEC 17024 Certification</strong>.',
      '<strong>Member of the Hellenic Association of Valuers (Σ.ΕΚ.Ε.)</strong>.',
      '<strong>Participation in TEGoVA</strong>.',
      '<strong>Designated REV Sponsor of TEGoVA</strong>.'
    ]
  }
};

const slides = {
  el: [
    {
      title: 'Αρχιτεκτονικές λύσεις - Διακόσμηση χώρων',
      description: 'Αδειοδοτήσεις, Καταστημάτων, Καταλυμάτων, Επιχειρήσεων',
      buttonText: 'Επισκόπηση',
      buttonLink: '/interior-design',
      image: spiti4
    },
    {
      title: 'Χτίζουμε το Μέλλον, Σχεδιάζουμε τα Όνειρά σας',
      description: 'Καινοτόμες αρχιτεκτονικές λύσεις και άριστη κατασκευαστική ποιότητα για κάθε έργο',
      buttonText: 'Ανακαλύψτε τα κατασκευαστικά μας έργα',
      buttonLink: '/blog',
      image: t2
    },
    {
      image: full7,
      title: 'Δηλώσεις - Βεβαιώσεις αυθαίρετων',
      description: 'Αρχιτεκτονικός σχεδιασμός, Έκδοση αδειών, Επαγγελματικών χώρων, Τουριστικών καταλυμάτων, Επιχειρήσεων',
      buttonText: 'Δείτε τις αρχιτεκτονικές μας λύσεις',
      link: '/architectural-design'
    }
  ],
  en: [
    {
      title: 'Architectural Solutions - Interior Design',
      description: 'Licensing, Stores, Accommodations, Businesses',
      buttonText: 'Overview',
      buttonLink: '/interior-design',
      image: spiti4
    },
    {
      title: 'Building the Future, Designing Your Dreams',
      description: 'Innovative architectural solutions and excellent construction quality for every project',
      buttonText: 'Discover our construction projects',
      buttonLink: '/blog',
      image: t2
    },
    {
      image: full7,
      title: 'Declarations - Certificates of unauthorized buildings',
      description: 'Architectural design, Licensing, Commercial spaces, Tourist accommodations, Businesses',
      buttonText: 'View our architectural solutions',
      link: '/architectural-design'
    }
  ]
};

const Home = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Ορισμός title και meta description για SEO
    document.title = language === 'el' 
      ? 'IN-MAVRIDIS | Αρχιτεκτονικό Γραφείο & Τεχνικές Υπηρεσίες στην Κομοτηνή'
      : 'IN-MAVRIDIS | Architectural Office & Technical Services in Komotini';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'el'
        ? 'Το γραφείο IN-MAVRIDIS προσφέρει ολοκληρωμένες αρχιτεκτονικές και τεχνικές υπηρεσίες στην Κομοτηνή. Αρχιτεκτονικές μελέτες, κατασκευές, ανακαινίσεις, ενεργειακές επιθεωρήσεις και εκτιμήσεις ακινήτων.'
        : 'IN-MAVRIDIS office offers comprehensive architectural and technical services in Komotini, Greece. Architectural studies, construction, renovations, energy inspections and real estate valuations.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = language === 'el'
        ? 'Το γραφείο IN-MAVRIDIS προσφέρει ολοκληρωμένες αρχιτεκτονικές και τεχνικές υπηρεσίες στην Κομοτηνή. Αρχιτεκτονικές μελέτες, κατασκευές, ανακαινίσεις, ενεργειακές επιθεωρήσεις και εκτιμήσεις ακινήτων.'
        : 'IN-MAVRIDIS office offers comprehensive architectural and technical services in Komotini, Greece. Architectural studies, construction, renovations, energy inspections and real estate valuations.';
      document.head.appendChild(meta);
    }

    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 1;
        return next >= slides[language].length ? 0 : next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [language]);

  const services = [
    {
      icon: Building2,
      title: t('home.services.architectural.title'),
      description: t('home.services.architectural.description'),
      link: '/architectural-office'
    },
    {
      icon: Building,
      title: t('home.services.engineering.title'),
      description: t('home.services.engineering.description'),
      link: '/engineering-services'
    },
    {
      icon: FileText,
      title: language === 'el' ? 'Το Ιστολόγιο μας' : 'Our Blog',
      description: language === 'el' 
        ? 'Ανακαλύψτε τα τελευταία νέα, άρθρα και συμβουλές σχετικά με την αρχιτεκτονική και τις κατασκευές. Μείνετε ενημερωμένοι για τις τελευταίες τάσεις και εξελίξεις στον κλάδο.'
        : 'Discover our latest news, articles and tips about architecture and construction. Stay updated with the latest trends and developments in the industry.',
      link: '/blog',
      buttonText: language === 'el' ? 'Μάθετε περισσότερα...' : 'Learn more...'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const popUpVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1]
      }
    }
  };

  const cardContentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.4
      }
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      return next >= slides[language].length ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev - 1;
      return next < 0 ? slides[language].length - 1 : next;
    });
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    nextArrow: <button className="slick-next"><ChevronRight className="w-6 h-6" /></button>,
    prevArrow: <button className="slick-prev"><ChevronLeft className="w-6 h-6" /></button>,
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] md:h-[90vh] bg-cover bg-center">
        <div className="absolute inset-0">
          <div className="relative h-full">
            {slides[language].map((slide, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-1000 ease-in-out`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
                    <motion.h1
                      className="text-3xl md:text-5xl font-bold text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Link
                        to={slide.buttonLink}
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-base md:text-lg font-semibold z-10 relative"
                      >
                        {slide.buttonText}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Navigation Buttons */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 md:px-8 pointer-events-none">
              <button
                onClick={prevSlide}
                className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 md:p-3 rounded-full transform transition-transform hover:scale-110 focus:outline-none pointer-events-auto"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 md:p-3 rounded-full transform transition-transform hover:scale-110 focus:outline-none pointer-events-auto"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
              {slides[language].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Balkans Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {language === 'el' ? 'Βαλκάνια' : 'Balkans'}
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {language === 'el' 
                ? 'Ανακαλύψτε τις μοναδικές ευκαιρίες ανάπτυξης και επενδύσεων στη Θράκη. Με στρατηγική τοποθεσία, δίπλα σε Βουλγαρία και Τουρκία, και πρόσβαση σε ανερχόμενες τουριστικές αγορές, η περιοχή μας προσφέρει αμέτρητες δυνατότητες.'
                : 'Discover unique development and investment opportunities in Thrace. With a strategic location next to Bulgaria and Turkey, and access to emerging tourist markets, our region offers countless possibilities.'}
            </p>
            <Link
              to="/whyinterested"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {language === 'el' ? 'Μάθετε περισσότερα!' : 'Learn more!'}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Project Management Section */}
      <div 
        className="py-16 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${qq3})` }}
      >
        {/* Προσθήκη overlay για καλύτερη αναγνωσιμότητα */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === 'el' 
                ? 'Ολοκληρωμένη Διαχείριση Έργων & Αρχιτεκτονικός Σχεδιασμός' 
                : 'Comprehensive Project & Architectural Management'}
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              {language === 'el'
                ? 'Από τον σχεδιασμό έως την υλοποίηση, προσφέρουμε ολοκληρωμένες λύσεις διαχείρισης έργων με επαγγελματική ακρίβεια και αξιοπιστία.'
                : 'From planning to execution, we offer comprehensive project management solutions with professional precision and reliability.'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Construction Management Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">
                  {language === 'el' 
                    ? 'Διαχείριση Εργοταξίου & Έργων' 
                    : 'Construction Site & Project Management'}
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  language === 'el' ? 'Κοστολόγηση ανά στάδιο' : 'Stage-based cost estimation',
                  language === 'el' ? 'Χρονοπρογραμματισμός (Project Management)' : 'Time scheduling (Project Management)',
                  language === 'el' ? 'Επίβλεψη & στατικές ενισχύσεις' : 'Supervision & structural reinforcements'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Architectural Design Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Ruler className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">
                  {language === 'el' 
                    ? 'Αρχιτεκτονικός Σχεδιασμός & Άδειες' 
                    : 'Architectural Design & Permits'}
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  language === 'el' ? 'Συμβουλευτική σε θέματα ακινήτων' : 'Consulting on property matters',
                  language === 'el' ? 'Άδειες για όλους τους τύπους έργων' : 'Permits for all project types',
                  language === 'el' ? 'Αρχιτεκτονικός σχεδιασμός & υλοποίηση' : 'Architectural design & implementation'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {language === 'el' ? 'Επικοινωνήστε μαζί μας' : 'Contact us'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Projects Showcase Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {language === 'el' ? 'Οι Δημιουργίες μας!' : 'Our Creations!'}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2"
          >
            {[t1, t3, full5, t5, t6, qq5, t7, aa1, q1, tt1, ee3, house2, pou3, con2, t4, ik4].map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square group cursor-pointer overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {language === 'el' ? 'Δείτε όλα τα έργα μας' : 'View all our projects'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Fullscreen Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
            onClick={closeFullscreen}
          >
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              onClick={(e) => {
                e.stopPropagation();
                const images = [t1, t3, full5, t5, t6, qq5, t7, aa1, q1, tt1, ee3, house2, pou3, con2, t4, ik4];
                const currentIndex = images.indexOf(selectedImage);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
                setSelectedImage(images[prevIndex]);
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <img 
              src={selectedImage} 
              alt="" 
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              onClick={(e) => {
                e.stopPropagation();
                const images = [t1, t3, full5, t5, t6, qq5, t7, aa1, q1, tt1, ee3, house2, pou3, con2, t4, ik4];
                const currentIndex = images.indexOf(selectedImage);
                const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
                setSelectedImage(images[nextIndex]);
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={closeFullscreen}
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        )}
      </div>

      {/* Services Section */}
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={serviceCardVariants}
                className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <motion.div variants={cardContentVariants}>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                      {service.description}
                    </p>
                    <Link
                      to={service.link}
                      className="inline-block text-blue-600 hover:text-blue-700 font-medium group relative"
                    >
                      <span className="flex items-center">
                        {service.buttonText || (language === 'el' ? 'Μάθετε περισσότερα...' : 'Learn more...')}
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('home.certifications.title')}
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Certifications Cards */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">
                  {language === 'el' ? 'Επαγγελματικές Πιστοποιήσεις' : 'Professional Certifications'}
                </h3>
              </div>
              <ul className="space-y-4">
                {certifications[language].column1.map((cert, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start space-x-3 text-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: cert }}></span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Memberships Card */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">
                  {language === 'el' ? 'Επαγγελματικές Συμμετοχές' : 'Professional Memberships'}
                </h3>
              </div>
              <ul className="space-y-4">
                {certifications[language].column2.map((cert, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start space-x-3 text-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: cert }}></span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {language === 'el' ? 'Μάθετε περισσότερα για εμάς' : 'Learn more about us'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;