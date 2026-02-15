import React, { useState, useEffect } from 'react';
import './Portfolio1.css';

// Import des icônes
import { 
  Code2, 
  Database, 
  Brain, 
  Users, 
  BarChart3, 
  Layout, 
  Github, 
  Linkedin, 
  Mail,
  ChevronRight,
  Award,
  Briefcase,
  Sparkles,
  Rocket,
  Zap,
  Heart,
  Terminal,
  Server,
  Send,
  MessageCircle,
  Phone,
  Share2,
  Copy,
  Check,
  Download,
  Calendar,
  MapPin,
  ExternalLink,
  Smartphone,
  Globe,
  Layers,
  Cpu,
  FileCode,
  Coffee,
  Star,
  Clock,
  Target,
  Trophy,
  BookOpen,
  GitBranch,
  Camera,
  Languages
} from 'lucide-react';

const PortfolioHamza = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showContactPlay, setShowContactPlay] = useState(false);
  const [activeContact, setActiveContact] = useState(null);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [activeProject, setActiveProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);
  const [activeLang, setActiveLang] = useState('fr'); // 'fr', 'en', 'ar'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Traductions
  const translations = {
    fr: {
      available: "Disponible pour des missions",
      developer: "Développeur Full Stack",
      bio: "Développeur passionné avec 2 ans d'expérience dans la création d'applications web et desktop. Expert en architectures MVC, APIs REST et optimisation de bases de données. Amoureux du code propre et des solutions innovantes.",
      exp_years: "Ans d'expérience",
      projects_count: "Projets réalisés",
      tech_count: "Technologies",
      download_cv: "Télécharger CV",
      skills: "Compétences Techniques",
      skills_sub: "Les technologies que je maîtrise",
      my_projects: "Mes Projets",
      projects_sub: "7+ projets réalisés avec passion",
      experience: "Parcours Professionnel",
      experience_sub: "2 ans d'expérience dans le développement",
      contact: "Restons en Contact",
      contact_sub: "N'hésitez pas à me contacter pour vos projets",
      discuss: "Discutons de votre projet",
      discuss_text: "Je suis toujours ouvert aux nouvelles opportunités et collaborations. Que vous ayez une idée de projet ou besoin d'un développeur, je suis là pour vous aider !",
      email: "Email",
      phone: "Téléphone",
      location: "Localisation",
      remote: "Maroc (Disponible pour remote)",
      freelance: "Disponible pour des missions freelance",
      freelance_text: "Actuellement ouvert aux opportunités de collaboration",
      contact_me: "Me contacter",
      footer: "Développeur Full Stack",
      rights: "Tous droits réservés",
      created: "Créé avec",
      by: "par",
      fullstack: "Full Stack",
      exp: "ans exp",
      projects: "projets"
    },
    en: {
      available: "Available for missions",
      developer: "Full Stack Developer",
      bio: "Passionate developer with 2 years of experience in creating web and desktop applications. Expert in MVC architectures, REST APIs and database optimization. Lover of clean code and innovative solutions.",
      exp_years: "Years experience",
      projects_count: "Projects completed",
      tech_count: "Technologies",
      download_cv: "Download CV",
      skills: "Technical Skills",
      skills_sub: "Technologies I master",
      my_projects: "My Projects",
      projects_sub: "7+ projects done with passion",
      experience: "Professional Journey",
      experience_sub: "2 years of development experience",
      contact: "Let's Connect",
      contact_sub: "Feel free to contact me for your projects",
      discuss: "Let's discuss your project",
      discuss_text: "I'm always open to new opportunities and collaborations. Whether you have a project idea or need a developer, I'm here to help!",
      email: "Email",
      phone: "Phone",
      location: "Location",
      remote: "Morocco (Available for remote)",
      freelance: "Available for freelance missions",
      freelance_text: "Currently open to collaboration opportunities",
      contact_me: "Contact me",
      footer: "Full Stack Developer",
      rights: "All rights reserved",
      created: "Created with",
      by: "by",
      fullstack: "Full Stack",
      exp: "years exp",
      projects: "projects"
    },
    ar: {
      available: "متاح للمهام",
      developer: "مطور ويب شامل",
      bio: "مطور شغوف لديه سنتان من الخبرة في إنشاء تطبيقات الويب وتطبيقات سطح المكتب. خبير في هياكل MVC وواجهات برمجة التطبيقات REST وتحسين قواعد البيانات. محب للكود النظيف والحلول المبتكرة.",
      exp_years: "سنوات خبرة",
      projects_count: "مشروع مكتمل",
      tech_count: "تقنية",
      download_cv: "تحميل السيرة",
      skills: "المهارات التقنية",
      skills_sub: "التقنيات التي أتقنها",
      my_projects: "مشاريعي",
      projects_sub: "7+ مشاريع أنجزت بشغف",
      experience: "المسيرة المهنية",
      experience_sub: "سنتان من الخبرة في التطوير",
      contact: "تواصل معي",
      contact_sub: "لا تتردد في الاتصال بي لمشاريعك",
      discuss: "لنتناقش حول مشروعك",
      discuss_text: "أنا دائمًا مفتوح للفرص الجديدة والتعاون. سواء كانت لديك فكرة مشروع أو تحتاج إلى مطور، أنا هنا للمساعدة!",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
      remote: "المغرب (متاح للعمل عن بعد)",
      freelance: "متاح لمهام العمل الحر",
      freelance_text: "حاليًا مفتوح لفرص التعاون",
      contact_me: "اتصل بي",
      footer: "مطور ويب شامل",
      rights: "جميع الحقوق محفوظة",
      created: "أنشئ بـ",
      by: "بواسطة",
      fullstack: "مطور شامل",
      exp: "سنوات خبرة",
      projects: "مشروع"
    }
  };

  const t = translations[activeLang];

  const contactMethods = {
    linkedin: {
      icon: <Linkedin className="icon" />,
      label: 'LinkedIn',
      handle: 'hamza-nadir-760881340',
      url: 'https://www.linkedin.com/in/hamza-nadir-760881340',
      character: '👔',
      message: activeLang === 'fr' ? "Connect with me professionally!" : 
               activeLang === 'en' ? "Connect with me professionally!" : 
               "تواصل معي مهنيًا!"
    },
    whatsapp: {
      icon: <MessageCircle className="icon" />,
      label: 'WhatsApp',
      handle: '+212 767084789',
      url: 'https://wa.me/212767084789',
      character: '💬',
      message: activeLang === 'fr' ? "Let's chat! I usually respond within an hour." :
               activeLang === 'en' ? "Let's chat! I usually respond within an hour." :
               "دعنا نتحدث! عادة ما أرد خلال ساعة."
    },
    email: {
      icon: <Mail className="icon" />,
      label: 'Email',
      handle: 'hamzaNadir.dev@gmail.com',
      url: 'mailto:hamzaNadir.dev@gmail.com',
      character: '📧',
      message: activeLang === 'fr' ? "Send me an email for collaborations." :
               activeLang === 'en' ? "Send me an email for collaborations." :
               "أرسل لي بريدًا إلكترونيًا للتعاون."
    },
    github: {
      icon: <Github className="icon" />,
      label: 'GitHub',
      handle: '/hamza-nadir',
      url: 'https://github.com/hamza-nadir',
      character: '🐙',
      message: activeLang === 'fr' ? "Check out my code repositories!" :
               activeLang === 'en' ? "Check out my code repositories!" :
               "اطلع على مستودعات الكود الخاصة بي!"
    }
  };

  const skills = {
    frontend: ['React.js', 'HTML/CSS', 'JavaScript', 'TailwindCSS'],
    backend: ['Laravel', 'Python', 'Flask', 'PHP', 'Node.js'],
    database: ['MySQL', 'SQLite3', 'PostgreSQL', 'MongoDB'],
    desktop: ['Python', 'Tkinter', 'PyQt', 'SQLite3'],
    architecture: ['MVC', 'REST APIs', 'Microservices', 'UML'],
    tools: ['Git', 'JIRA', 'Agile', 'Scrum']
  };

  const experiences = [
    {
      title: activeLang === 'fr' ? 'Full Stack Developer' : 
              activeLang === 'en' ? 'Full Stack Developer' : 
              'مطور ويب شامل',
      company: activeLang === 'fr' ? 'Freelance' : 
               activeLang === 'en' ? 'Freelance' : 
               'عمل حر',
      period: '2024 - ' + (activeLang === 'fr' ? 'Présent' : 
                           activeLang === 'en' ? 'Present' : 
                           'الحاضر'),
      description: [
        activeLang === 'fr' ? 'Développement d\'applications web full-stack avec Laravel et React' :
        activeLang === 'en' ? 'Full-stack web development with Laravel and React' :
        'تطوير تطبيقات الويب الكاملة باستخدام Laravel و React',
        activeLang === 'fr' ? 'Création d\'APIs REST et gestion d\'authentification sécurisée' :
        activeLang === 'en' ? 'Creating REST APIs and secure authentication management' :
        'إنشاء واجهات برمجة تطبيقات REST وإدارة المصادقة الآمنة',
        activeLang === 'fr' ? 'Optimisation des bases de données et traitement des données clients' :
        activeLang === 'en' ? 'Database optimization and customer data processing' :
        'تحسين قواعد البيانات ومعالجة بيانات العملاء',
        activeLang === 'fr' ? 'Collaboration avec les clients pour comprendre leurs besoins' :
        activeLang === 'en' ? 'Collaborating with clients to understand their needs' :
        'التعاون مع العملاء لفهم احتياجاتهم'
      ],
      icon: <Briefcase className="icon" />,
      achievements: [
        activeLang === 'fr' ? '5+ projets livrés' : 
        activeLang === 'en' ? '5+ projects delivered' : 
        '5+ مشاريع مسلمة',
        activeLang === 'fr' ? '100% satisfaction client' : 
        activeLang === 'en' ? '100% client satisfaction' : 
        '٪100 رضا العملاء',
        activeLang === 'fr' ? 'Délais respectés' : 
        activeLang === 'en' ? 'Deadlines respected' : 
        'المواعيد النهائية محترمة'
      ]
    },
    {
      title: activeLang === 'fr' ? 'Développeur Junior' : 
              activeLang === 'en' ? 'Junior Developer' : 
              'مطور مبتدئ',
      company: activeLang === 'fr' ? 'Stage & Projets Personnels' : 
               activeLang === 'en' ? 'Internship & Personal Projects' : 
               'تدريب ومشاريع شخصية',
      period: '2022 - 2024',
      description: [
        activeLang === 'fr' ? 'Développement d\'applications desktop avec Python et Tkinter' :
        activeLang === 'en' ? 'Desktop application development with Python and Tkinter' :
        'تطوير تطبيقات سطح المكتب باستخدام Python و Tkinter',
        activeLang === 'fr' ? 'Création de sites e-commerce avec PHP, HTML, CSS, JS' :
        activeLang === 'en' ? 'E-commerce website creation with PHP, HTML, CSS, JS' :
        'إنشاء مواقع التجارة الإلكترونية باستخدام PHP و HTML و CSS و JS',
        activeLang === 'fr' ? 'Implémentation d\'architectures MVC avec Flask et SQLite3' :
        activeLang === 'en' ? 'Implementation of MVC architectures with Flask and SQLite3' :
        'تنفيذ هياكل MVC باستخدام Flask و SQLite3',
        activeLang === 'fr' ? 'Participation à des projets open source' :
        activeLang === 'en' ? 'Participation in open source projects' :
        'المشاركة في مشاريع مفتوحة المصدر'
      ],
      icon: <Award className="icon" />,
      achievements: [
        activeLang === 'fr' ? '10+ projets' : 
        activeLang === 'en' ? '10+ projects' : 
        '10+ مشاريع',
        activeLang === 'fr' ? '3 projets majeurs' : 
        activeLang === 'en' ? '3 major projects' : 
        '3 مشاريع رئيسية',
        activeLang === 'fr' ? 'Autodidacte' : 
        activeLang === 'en' ? 'Self-taught' : 
        'تعلم ذاتي'
      ]
    }
  ];

  const projects = [
    {
      title: activeLang === 'fr' ? 'Application CRM Web' : 
              activeLang === 'en' ? 'CRM Web Application' : 
              'تطبيق CRM للويب',
      tech: ['React', 'Laravel', 'MySQL', 'REST API'],
      description: activeLang === 'fr' ? 'Développement d\'une application CRM complète avec gestion des clients, authentification et traitement optimisé des données.' :
                   activeLang === 'en' ? 'Development of a complete CRM application with customer management, authentication and optimized data processing.' :
                   'تطوير تطبيق CRM كامل مع إدارة العملاء والمصادقة والمعالجة المحسنة للبيانات.',
      features: [
        activeLang === 'fr' ? 'APIs REST sécurisées' :
        activeLang === 'en' ? 'Secure REST APIs' :
        'واجهات برمجة تطبيقات REST آمنة',
        activeLang === 'fr' ? 'Authentification JWT' :
        activeLang === 'en' ? 'JWT Authentication' :
        'مصادقة JWT',
        activeLang === 'fr' ? 'Gestion et optimisation des données clients' :
        activeLang === 'en' ? 'Customer data management and optimization' :
        'إدارة وتحسين بيانات العملاء',
        activeLang === 'fr' ? 'Interface responsive' :
        activeLang === 'en' ? 'Responsive interface' :
        'واجهة متجاوبة'
      ],
      gradient: 'blue-to-purple',
      icon: <Users />
    },
    {
      title: activeLang === 'fr' ? 'Architecture MVC - Flask' : 
              activeLang === 'en' ? 'MVC Architecture - Flask' : 
              'هندسة MVC - Flask',
      tech: ['Python', 'Flask', 'SQLite3', 'MVC'],
      description: activeLang === 'fr' ? 'Application web en architecture MVC avec gestion complète des données et interfaces simples.' :
                   activeLang === 'en' ? 'Web application in MVC architecture with complete data management and simple interfaces.' :
                   'تطبيق ويب بهندسة MVC مع إدارة كاملة للبيانات وواجهات بسيطة.',
      features: [
        activeLang === 'fr' ? 'Architecture MVC pure' :
        activeLang === 'en' ? 'Pure MVC architecture' :
        'هندسة MVC نقية',
        activeLang === 'fr' ? 'CRUD complet avec SQLite3' :
        activeLang === 'en' ? 'Complete CRUD with SQLite3' :
        'CRUD كامل مع SQLite3',
        activeLang === 'fr' ? 'Interfaces utilisateur intuitives' :
        activeLang === 'en' ? 'Intuitive user interfaces' :
        'واجهات مستخدم بديهية',
        activeLang === 'fr' ? 'Gestion des données optimisée' :
        activeLang === 'en' ? 'Optimized data management' :
        'إدارة محسنة للبيانات'
      ],
      gradient: 'green-to-blue',
      icon: <Layers />
    },
    {
      title: activeLang === 'fr' ? 'Application Desktop - Gestion École' : 
              activeLang === 'en' ? 'Desktop Application - School Management' : 
              'تطبيق سطح مكتب - إدارة مدرسية',
      tech: ['Python', 'SQLite3', 'Tkinter', 'Desktop'],
      description: activeLang === 'fr' ? 'Application desktop pour la gestion scolaire avec interface graphique et base de données locale.' :
                   activeLang === 'en' ? 'Desktop application for school management with graphical interface and local database.' :
                   'تطبيق سطح مكتب لإدارة المدارس بواجهة رسومية وقاعدة بيانات محلية.',
      features: [
        activeLang === 'fr' ? 'Interface graphique Tkinter' :
        activeLang === 'en' ? 'Tkinter graphical interface' :
        'واجهة رسومية Tkinter',
        activeLang === 'fr' ? 'Base de données SQLite3' :
        activeLang === 'en' ? 'SQLite3 database' :
        'قاعدة بيانات SQLite3',
        activeLang === 'fr' ? 'Gestion des élèves et enseignants' :
        activeLang === 'en' ? 'Students and teachers management' :
        'إدارة الطلاب والمعلمين',
        activeLang === 'fr' ? 'Génération de rapports' :
        activeLang === 'en' ? 'Report generation' :
        'توليد التقارير'
      ],
      gradient: 'orange-to-red',
      icon: <Smartphone />
    },
    {
      title: activeLang === 'fr' ? 'Plateforme Location Voitures' : 
              activeLang === 'en' ? 'Car Rental Platform' : 
              'منصة تأجير السيارات',
      tech: ['Laravel', 'React', 'MySQL', 'REST API'],
      description: activeLang === 'fr' ? 'Plateforme complète de gestion de réservation de location de voitures.' :
                   activeLang === 'en' ? 'Complete car rental reservation management platform.' :
                   'منصة كاملة لإدارة حجوزات تأجير السيارات.',
      features: [
        activeLang === 'fr' ? 'Système de réservation' :
        activeLang === 'en' ? 'Reservation system' :
        'نظام حجز',
        activeLang === 'fr' ? 'Gestion de flotte' :
        activeLang === 'en' ? 'Fleet management' :
        'إدارة الأسطول',
        activeLang === 'fr' ? 'Paiements intégrés' :
        activeLang === 'en' ? 'Integrated payments' :
        'مدفوعات مدمجة',
        activeLang === 'fr' ? 'Tableau de bord admin' :
        activeLang === 'en' ? 'Admin dashboard' :
        'لوحة تحكم المشرف'
      ],
      gradient: 'purple-to-pink',
      icon: <Cpu />
    },
    {
      title: activeLang === 'fr' ? 'Application Syndic' : 
              activeLang === 'en' ? 'Syndic Application' : 
              'تطبيق إدارة المباني',
      tech: ['Laravel', 'React', 'PostgreSQL', 'WebSockets'],
      description: activeLang === 'fr' ? 'Application de gestion pour syndics de copropriété avec fonctionnalités collaboratives.' :
                   activeLang === 'en' ? 'Management application for co-ownership trustees with collaborative features.' :
                   'تطبيق إدارة لأمناء الملكية المشتركة مع ميزات تعاونية.',
      features: [
        activeLang === 'fr' ? 'Gestion des copropriétés' :
        activeLang === 'en' ? 'Co-ownership management' :
        'إدارة الملكية المشتركة',
        activeLang === 'fr' ? 'Communication en temps réel' :
        activeLang === 'en' ? 'Real-time communication' :
        'اتصال فوري',
        activeLang === 'fr' ? 'Documents partagés' :
        activeLang === 'en' ? 'Shared documents' :
        'مستندات مشتركة',
        activeLang === 'fr' ? 'Notifications' :
        activeLang === 'en' ? 'Notifications' :
        'إشعارات'
      ],
      gradient: 'red-to-yellow',
      icon: <FileCode />
    },
    {
      title: activeLang === 'fr' ? 'Site E-commerce' : 
              activeLang === 'en' ? 'E-commerce Website' : 
              'موقع تجارة إلكترونية',
      tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      description: activeLang === 'fr' ? 'Site e-commerce complet avec panier, authentification et gestion de produits.' :
                   activeLang === 'en' ? 'Complete e-commerce site with cart, authentication and product management.' :
                   'موقع تجارة إلكترونية كامل مع سلة ومصادقة وإدارة منتجات.',
      features: [
        activeLang === 'fr' ? 'Panier d\'achat' :
        activeLang === 'en' ? 'Shopping cart' :
        'سلة التسوق',
        activeLang === 'fr' ? 'Authentification utilisateur' :
        activeLang === 'en' ? 'User authentication' :
        'مصادقة المستخدم',
        activeLang === 'fr' ? 'Gestion de produits' :
        activeLang === 'en' ? 'Product management' :
        'إدارة المنتجات',
        activeLang === 'fr' ? 'Paiement simulé' :
        activeLang === 'en' ? 'Simulated payment' :
        'دفع محاكي'
      ],
      gradient: 'blue-to-cyan',
      icon: <Globe />
    },
    {
      title: activeLang === 'fr' ? 'Centre de Formation' : 
              activeLang === 'en' ? 'Training Center' : 
              'مركز تدريب',
      tech: ['Laravel', 'React', 'MySQL', 'Tailwind'],
      description: activeLang === 'fr' ? 'Plateforme de gestion et d\'inscription pour centre de formation avec modules d\'apprentissage.' :
                   activeLang === 'en' ? 'Management and registration platform for training center with learning modules.' :
                   'منصة إدارة وتسجيل لمركز تدريب مع وحدات تعليمية.',
      features: [
        activeLang === 'fr' ? 'Inscriptions en ligne' :
        activeLang === 'en' ? 'Online registration' :
        'تسجيل عبر الإنترنت',
        activeLang === 'fr' ? 'Gestion des cours' :
        activeLang === 'en' ? 'Course management' :
        'إدارة الدورات',
        activeLang === 'fr' ? 'Suivi des étudiants' :
        activeLang === 'en' ? 'Student tracking' :
        'تتبع الطلاب',
        activeLang === 'fr' ? 'Certificats générés' :
        activeLang === 'en' ? 'Generated certificates' :
        'شهادات مولدة'
      ],
      gradient: 'indigo-to-purple',
      icon: <BookOpen />
    }
  ];

  const handleContactClick = (method) => {
    setActiveContact(method);
    setShowContactPlay(true);
    
    if (contactMethods[method].url) {
      window.open(contactMethods[method].url, '_blank');
    }
    
    setTimeout(() => {
      setShowContactPlay(false);
    }, 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hamzaNadir.dev@gmail.com');
    setCopied(true);
    showNotification(activeLang === 'fr' ? 'Email copié dans le presse-papiers !' : 
                     activeLang === 'en' ? 'Email copied to clipboard!' : 
                     'تم نسخ البريد الإلكتروني إلى الحافظة!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('0767074789');
    setCopied(true);
    showNotification(activeLang === 'fr' ? 'Téléphone copié !' : 
                     activeLang === 'en' ? 'Phone copied!' : 
                     'تم نسخ الهاتف!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCV = () => {
    showNotification(activeLang === 'fr' ? 'Téléchargement du CV...' : 
                     activeLang === 'en' ? 'Downloading CV...' : 
                     'جاري تحميل السيرة...');
    setTimeout(() => {
      showNotification(activeLang === 'fr' ? 'CV téléchargé avec succès !' : 
                       activeLang === 'en' ? 'CV downloaded successfully!' : 
                       'تم تحميل السيرة بنجاح!');
    }, 1500);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: '' }), 3000);
  };

  return (
    <div className="portfolio-container light-theme" dir={activeLang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Code Background Lines */}
      <div className="code-background">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="code-line"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            {`const ${['project', 'data', 'user', 'api', 'app'][i % 5]} = ${['{}', '[]', '()', 'null'][i % 4]};`}
          </div>
        ))}
      </div>

      {/* Professional Bubbles */}
      <div className="professional-bubble" style={{ top: '10%', left: '5%', width: '300px', height: '300px' }}></div>
      <div className="professional-bubble" style={{ bottom: '20%', right: '10%', width: '400px', height: '400px' }}></div>
      <div className="professional-bubble" style={{ top: '50%', left: '80%', width: '250px', height: '250px' }}></div>

      {/* Particules d'arrière-plan */}
      <div className="particles-container">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`
            }}
          />
        ))}
      </div>

      {/* Notification */}
      {notification.show && (
        <div className={`notification-toast ${notification.type}`}>
          {notification.type === 'success' ? <Check className="icon-small" /> : <Send className="icon-small" />}
          <p>{notification.message}</p>
        </div>
      )}

      {/* Modal de contact */}
      {showContactPlay && activeContact && (
        <div className="modal-overlay">
          <div className="modal-backdrop"></div>
          <div className="modal-content">
            <div className="modal-avatar">
              <div className={`avatar-circle contact-${activeContact}`}>
                {contactMethods[activeContact].character}
              </div>
            </div>
            
            <div className="modal-body">
              <h3>{contactMethods[activeContact].label}</h3>
              <p className="modal-message">{contactMethods[activeContact].message}</p>
              
              <div className={`contact-details contact-${activeContact}-bg`}>
                <div className="contact-handle">
                  <span className={`handle-text contact-${activeContact}-text`}>
                    {contactMethods[activeContact].handle}
                  </span>
                  {activeContact === 'email' && (
                    <button onClick={handleCopyEmail} className="copy-button">
                      {copied ? <Check className="icon-tiny success" /> : <Copy className="icon-tiny" />}
                    </button>
                  )}
                  {activeContact === 'whatsapp' && (
                    <button onClick={handleCopyPhone} className="copy-button">
                      {copied ? <Check className="icon-tiny success" /> : <Copy className="icon-tiny" />}
                    </button>
                  )}
                </div>
              </div>
              
              <div className="modal-actions">
                <button 
                  onClick={() => {
                    window.open(contactMethods[activeContact].url, '_blank');
                    showNotification(activeLang === 'fr' ? `Ouverture de ${contactMethods[activeContact].label}...` : 
                                     activeLang === 'en' ? `Opening ${contactMethods[activeContact].label}...` : 
                                     `جاري فتح ${contactMethods[activeContact].label}...`);
                  }} 
                  className="btn-primary"
                >
                  {activeLang === 'fr' ? `Continuer vers ${contactMethods[activeContact].label}` : 
                   activeLang === 'en' ? `Continue to ${contactMethods[activeContact].label}` : 
                   `استمر إلى ${contactMethods[activeContact].label}`}
                </button>
                <button onClick={() => setShowContactPlay(false)} className="btn-secondary">
                  {activeLang === 'fr' ? 'Fermer' : 
                   activeLang === 'en' ? 'Close' : 
                   'إغلاق'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <div className="nav-left">
            <div className="logo-container">
              <div className="logo-glow"></div>
              <div className="logo">
                H<span className="logo-light">N</span>
              </div>
            </div>
            <Sparkles className="sparkles-icon" />
          </div>
          
          {/* Sélecteur de langue avec icônes */}
          <div className="language-selector">
            <button 
              className={`lang-btn ${activeLang === 'fr' ? 'active' : ''}`}
              onClick={() => setActiveLang('fr')}
            >
              <span className="lang-icon">🇫🇷</span>
              <span className="lang-text">FR</span>
            </button>
            <button 
              className={`lang-btn ${activeLang === 'en' ? 'active' : ''}`}
              onClick={() => setActiveLang('en')}
            >
              <span className="lang-icon">🇬🇧</span>
              <span className="lang-text">EN</span>
            </button>
            <button 
              className={`lang-btn ${activeLang === 'ar' ? 'active' : ''}`}
              onClick={() => setActiveLang('ar')}
            >
              <span className="lang-icon">🇸🇦</span>
              <span className="lang-text">عربي</span>
            </button>
          </div>

          <div className="nav-right">
            <button onClick={() => handleContactClick('linkedin')} className="contact-icon linkedin">
              <Linkedin />
            </button>
            <button onClick={() => handleContactClick('whatsapp')} className="contact-icon whatsapp">
              <MessageCircle />
            </button>
            <button onClick={() => handleContactClick('email')} className="contact-icon email">
              <Mail />
            </button>
            <button onClick={() => handleContactClick('github')} className="contact-icon github">
              <Github />
            </button>
          </div>
        </div>
      </nav>

      {/* Section Hero avec Image de Profil */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="availability-badge">
                <Sparkles className="badge-icon" />
                <span>{t.available}</span>
              </div>
              
              <h1 className="hero-title">
                <span className="gradient-text">Hamza Nadir</span>
                <br />
                <span className="hero-subtitle-text">{t.developer}</span>
              </h1>
              
              <p className="hero-description">
                <Terminal className="subtitle-icon" />
                <span>Laravel • React • Python • Flask • SQLite3 • PHP</span>
              </p>
              
              <p className="hero-bio">
                {t.bio}
              </p>

              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">{t.exp_years}</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-number">7+</div>
                  <div className="stat-label">{t.projects_count}</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">{t.tech_count}</div>
                </div>
              </div>

              <div className="hero-actions">
                <button onClick={handleDownloadCV} className="btn-download">
                  <Download className="btn-icon" />
                  <span>{t.download_cv}</span>
                </button>
                
                <button onClick={() => handleContactClick('linkedin')} className="btn-linkedin">
                  <Linkedin className="btn-icon" />
                  <span>LinkedIn</span>
                </button>
                
                <button onClick={() => handleContactClick('whatsapp')} className="btn-whatsapp">
                  <MessageCircle className="btn-icon" />
                  <span>WhatsApp</span>
                </button>
              </div>

              <div className="quick-info">
                <div className="info-chip">
                  <Mail className="chip-icon" />
                  <span>hamzaNadir.dev@gmail.com</span>
                  <button onClick={handleCopyEmail} className="chip-copy">
                    {copied ? <Check className="icon-tiny" /> : <Copy className="icon-tiny" />}
                  </button>
                </div>
                <div className="info-chip">
                  <Phone className="chip-icon" />
                  <span>0767074789</span>
                  <button onClick={handleCopyPhone} className="chip-copy">
                    {copied ? <Check className="icon-tiny" /> : <Copy className="icon-tiny" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              {/* Image de profil */}
              <div className="profile-image-container">
                <div className="profile-glow"></div>
                <div className="profile-image-wrapper">
                  {!imageError ? (
                    <img 
                      src="/img.jpeg"
                      alt="Hamza Nadir"  
                      className="profile-image"
                      onError={handleImageError}
                    />
                  ) : (
                    <div className="profile-placeholder">
                      <Camera className="placeholder-icon" />
                      <span>Hamza Nadir</span>
                    </div>
                  )}
                </div>
                <div className="profile-badges">
                  <div className="profile-badge">
                    <Code2 className="badge-icon-small" />
                    <span>{t.fullstack}</span>
                  </div>
                  <div className="profile-badge">
                    <Brain className="badge-icon-small" />
                    <span>2 {t.exp}</span>
                  </div>
                  <div className="profile-badge">
                    <Star className="badge-icon-small" />
                    <span>7+ {t.projects}</span>
                  </div>
                </div>
              </div>
              
              <div className="floating-techs">
                <div className="tech-bubble laravel">Laravel</div>
                <div className="tech-bubble react">React</div>
                <div className="tech-bubble python">Python</div>
                <div className="tech-bubble flask">Flask</div>
                <div className="tech-bubble sqlite">SQLite3</div>
                <div className="tech-bubble php">PHP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <div className="header-icon">
              <Brain />
            </div>
            <h2>{t.skills}</h2>
            <p>{t.skills_sub}</p>
          </div>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3><Code2 /> Frontend</h3>
              <div className="skill-items">
                {skills.frontend.map(skill => (
                  <div key={skill} className="skill-item">
                    <span>{skill}</span>
                    <div className="skill-level">
                      <div className="level-fill" style={{width: '85%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3><Server /> Backend</h3>
              <div className="skill-items">
                {skills.backend.map(skill => (
                  <div key={skill} className="skill-item">
                    <span>{skill}</span>
                    <div className="skill-level">
                      <div className="level-fill" style={{width: '80%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3><Database /> Base de données</h3>
              <div className="skill-items">
                {skills.database.map(skill => (
                  <div key={skill} className="skill-item">
                    <span>{skill}</span>
                    <div className="skill-level">
                      <div className="level-fill" style={{width: '75%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3><Smartphone /> Desktop</h3>
              <div className="skill-items">
                {skills.desktop.map(skill => (
                  <div key={skill} className="skill-item">
                    <span>{skill}</span>
                    <div className="skill-level">
                      <div className="level-fill" style={{width: '70%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3><Layers /> Architecture</h3>
              <div className="skill-items">
                {skills.architecture.map(skill => (
                  <div key={skill} className="skill-item">
                    <span>{skill}</span>
                    <div className="skill-level">
                      <div className="level-fill" style={{width: '85%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3><GitBranch /> Outils & Méthodes</h3>
              <div className="skill-items">
                {skills.tools.map(skill => (
                  <div key={skill} className="skill-item">
                    <span>{skill}</span>
                    <div className="skill-level">
                      <div className="level-fill" style={{width: '80%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <div className="header-icon">
              <Rocket />
            </div>
            <h2>{t.my_projects}</h2>
            <p>{t.projects_sub}</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`project-card ${project.gradient}`}
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="project-glow"></div>
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-icon-wrapper">
                      {project.icon}
                    </div>
                    <div className="project-tech-badges">
                      {project.tech.slice(0, 3).map(tech => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="tech-badge">+{project.tech.length - 3}</span>
                      )}
                    </div>
                  </div>
                  
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features">
                    {project.features.map((feature, i) => (
                      <div key={i} className="project-feature">
                        <ChevronRight className="feature-icon" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="project-footer">
                    <button className="project-details-btn">
                      {activeLang === 'fr' ? 'Voir détails' : 
                       activeLang === 'en' ? 'See details' : 
                       'عرض التفاصيل'} <ExternalLink className="icon-small" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Expérience */}
      <section className="experience-section">
        <div className="container">
          <div className="section-header">
            <div className="header-icon">
              <Briefcase />
            </div>
            <h2>{t.experience}</h2>
            <p>{t.experience_sub}</p>
          </div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="exp-card">
                    <div className="exp-period">{exp.period}</div>
                    <div className="exp-header">
                      <div className="exp-icon">
                        {exp.icon}
                      </div>
                      <div>
                        <h3>{exp.title}</h3>
                        <p className="exp-company">{exp.company}</p>
                      </div>
                    </div>
                    
                    <ul className="exp-description">
                      {exp.description.map((item, i) => (
                        <li key={i}>
                          <Zap className="bullet-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="exp-achievements">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="achievement-chip">
                          <Trophy className="chip-icon-small" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-showcase">
            <div className="showcase-item">
              <div className="showcase-icon"><Code2 /></div>
              <div className="showcase-text">Clean Code</div>
            </div>
            <div className="showcase-item">
              <div className="showcase-icon"><Target /></div>
              <div className="showcase-text">Solution-oriented</div>
            </div>
            <div className="showcase-item">
              <div className="showcase-icon"><Clock /></div>
              <div className="showcase-text">Respect des délais</div>
            </div>
            <div className="showcase-item">
              <div className="showcase-icon"><Users /></div>
              <div className="showcase-text">Travail d'équipe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="contact-section">
        <div className="container">
          <div className="section-header light">
            <div className="header-icon">
              <Share2 />
            </div>
            <h2>{t.contact}</h2>
            <p>{t.contact_sub}</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-card">
              <h3>{t.discuss}</h3>
              <p>{t.discuss_text}</p>
              
              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <Mail className="detail-icon" />
                  <div>
                    <div className="detail-label">{t.email}</div>
                    <div className="detail-value">hamzaNadir.dev@gmail.com</div>
                  </div>
                  <button onClick={handleCopyEmail} className="detail-copy">
                    {copied ? <Check /> : <Copy />}
                  </button>
                </div>
                
                <div className="contact-detail-item">
                  <Phone className="detail-icon" />
                  <div>
                    <div className="detail-label">{t.phone}</div>
                    <div className="detail-value">0767074789</div>
                  </div>
                  <button onClick={handleCopyPhone} className="detail-copy">
                    {copied ? <Check /> : <Copy />}
                  </button>
                </div>
                
                <div className="contact-detail-item">
                  <MapPin className="detail-icon" />
                  <div>
                    <div className="detail-label">{t.location}</div>
                    <div className="detail-value">{t.remote}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-social-grid">
              {Object.entries(contactMethods).map(([key, method]) => (
                <div 
                  key={key}
                  className="contact-social-card"
                  onClick={() => handleContactClick(key)}
                >
                  <div className={`social-card-glow ${key}`}></div>
                  <div className="social-card-content">
                    <div className={`social-avatar ${key}-bg`}>
                      <span className={`social-avatar-text ${key}-text`}>
                        {method.character}
                      </span>
                    </div>
                    <h4>{method.label}</h4>
                    <p className="social-handle">{method.handle}</p>
                    <p className="social-message">{method.message}</p>
                    <div className={`social-indicator ${key}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="availability-banner">
            <div className="banner-content">
              <Coffee className="banner-icon" />
              <div>
                <h3>{t.freelance}</h3>
                <p>{t.freelance_text}</p>
              </div>
              <button className="btn-schedule" onClick={() => handleContactClick('whatsapp')}>
                <MessageCircle className="btn-icon" />
                <span>{t.contact_me}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">
                H<span>N</span>
              </div>
              <span className="separator">|</span>
              <span>{t.footer}</span>
            </div>
            
            <div className="footer-social">
              <a href="#" onClick={(e) => { e.preventDefault(); handleContactClick('linkedin'); }} className="social-link linkedin">
                <Linkedin />
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleContactClick('github'); }} className="social-link github">
                <Github />
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleContactClick('whatsapp'); }} className="social-link whatsapp">
                <MessageCircle />
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleContactClick('email'); }} className="social-link email">
                <Mail />
              </a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>
              {t.created} <Heart className="heart-icon" /> {t.by} Hamza Nadir
              <span className="dot">•</span>
              <span>© 2024 {t.rights}</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioHamza;