"use client";

import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Briefcase,
  Users,
  Download,
  Server,
  Award,
  Heart,
  ChevronDown,
  ExternalLink,
  CheckCircle2,
  GraduationCap,
  Globe,
  Calendar,
  Building2,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Image from 'next/image';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white/10 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo/Nom */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-lg md:text-xl font-bold transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            Arnaud Elphège
          </button>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium transition-colors hover:text-white ${
                isScrolled ? 'text-foreground hover:text-[#4A90E2]' : 'text-white/90'
              }`}
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection('expertise')}
              className={`text-sm font-medium transition-colors hover:text-white ${
                isScrolled ? 'text-foreground hover:text-[#4A90E2]' : 'text-white/90'
              }`}
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`text-sm font-medium transition-colors hover:text-white ${
                isScrolled ? 'text-foreground hover:text-[#4A90E2]' : 'text-white/90'
              }`}
            >
              Expérience
            </button>
            <button
              onClick={() => scrollToSection('formation')}
              className={`text-sm font-medium transition-colors hover:text-white ${
                isScrolled ? 'text-foreground hover:text-[#4A90E2]' : 'text-white/90'
              }`}
            >
              Formation
            </button>
            <Button
              size="sm"
              className={`${
                isScrolled
                  ? 'bg-gradient-to-r from-[#4A90E2] to-[#8B7EC8]'
                  : 'bg-white/20 hover:bg-white/30'
              } text-white`}
              asChild
            >
              <a href="mailto:arnaud.elphege@email.fr">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </a>
            </Button>
          </nav>

          {/* Burger Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden flex flex-col gap-1.5 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            <span className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-foreground' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-foreground' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-foreground' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-4 pb-4">
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium text-left transition-colors ${
                isScrolled ? 'text-foreground hover:text-[#4A90E2]' : 'text-white/90 hover:text-white'
              }`}
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection('expertise')}
              className={`text-sm font-medium text-left transition-colors ${
                isScrolled ? 'text-foreground hover:text-[#4A90E2]' : 'text-white/90 hover:text-white'
              }`}
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`text-sm font-medium text-left transition-colors ${
                isScrolled ? 'text-foreground hover:text-[#4A90E2]' : 'text-white/90 hover:text-white'
              }`}
            >
              Expérience
            </button>
            <button
              onClick={() => scrollToSection('formation')}
              className={`text-sm font-medium text-left transition-colors ${
                isScrolled ? 'text-foreground hover:text-[#4A90E2]' : 'text-white/90 hover:text-white'
              }`}
            >
              Formation
            </button>
            <Button
              size="sm"
              className={`${
                isScrolled
                  ? 'bg-gradient-to-r from-[#4A90E2] to-[#8B7EC8]'
                  : 'bg-white/20 hover:bg-white/30'
              } text-white w-full`}
              asChild
            >
              <a href="mailto:arnaud.elphege@email.fr">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function HeroSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#4A90E2] via-[#8B7EC8] to-[#3DBCB8] px-6 py-20 md:px-8">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div
        ref={ref}
        className={`relative mx-auto w-full max-w-5xl transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="flex flex-col items-center justify-center gap-8 text-center md:flex-row md:gap-16 md:text-left">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-white/20 blur-xl" />
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white/30 bg-gradient-to-br from-white/30 to-white/10 shadow-2xl md:h-72 md:w-72">
                <Image
                  src="/photo.png"
                  alt="Adrien Escande"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-2xl flex-1 text-white">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              Arnaud Elphège
            </h1>
            <p className="mb-4 text-xl font-medium text-white/90 md:text-2xl">
              Chef de Projet SAP S/4HANA Senior | Consultant IT
            </p>
            <p className="mb-8 text-base leading-relaxed text-white/80 md:text-lg text-pretty">
              Expert en intégration SAP S/4HANA, transformation digitale et
              conduite du changement
            </p>

            {/* CTA Buttons */}
            <div className="mb-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Button
                size="lg"
                className="bg-white text-[#4A90E2] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <a href="mailto:arnaud.elphege@email.fr">
                  <Mail className="mr-2 h-5 w-5" />
                  Me contacter
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white hover:bg-white/20 font-semibold"
                asChild
              >
                <a href="/cv-arnaud-elphege.pdf" download="cv-arnaud-elphege.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger mon CV
                </a>
              </Button>
            </div>

            {/* Contact Info - Horizontal */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/90 md:justify-start md:text-base">
              <a
                href="mailto:arnaud.elphege@email.fr"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <Mail className="h-5 w-5" />
                <span>arnaud.elphege@email.fr</span>
              </a>
              <a
                href="tel:+33695985807"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <Phone className="h-5 w-5" />
                <span>+33 6 95 98 58 07</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/60" />
      </div>
    </section>
  );
}

function SocialLinksSection() {
  const { ref, isInView } = useInView();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/arnaudelphege",
      image: "/linkedin1.png",
      description: "Profil professionnel",
    },
    {
      name: "Malt",
      url: "https://malt.fr/profile/arnaudelphege",
      image: "/malt.png",
      description: "Freelance marketplace",
    },
    {
      name: "Collective",
      url: "https://collective.work/profile/arnaud-elphege",
      image: "/collective.png",
      description: "Réseau de consultants",
    },
  ];

  return (
    <section className="bg-card py-12">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] via-[#8B7EC8] to-[#3DBCB8] opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-transparent p-2 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#4A90E2] group-hover:to-[#8B7EC8]">
                  <img
                    src={link.image}
                    alt={link.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">
                    {link.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>
                <ExternalLink className="ml-4 h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="bg-background py-20" id="about">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          À propos
        </h2>
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Chef de projet IT senior avec{" "}
            <span className="font-semibold text-primary">
              5 ans d&apos;expérience
            </span>{" "}
            spécialisé en gestion de projets SAP S/4HANA et transformation
            digitale. Expert en pilotage de projets d&apos;intégration, conduite
            du changement et refonte de processus métier. Leadership technique
            avec coordination d&apos;équipes internationales et gestion de
            budgets importants{" "}
            <span className="font-semibold text-primary">(1,5M€)</span>. Forte
            capacité de collaboration inter-équipes, mentoring et accompagnement
            au changement.
          </p>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { ref, isInView } = useInView();

  const stats = [
    { value: 5, suffix: "+", label: "Années d'expérience", icon: Award, colorClass: "text-[#4A90E2]" },
    { value: 10, suffix: "+", label: "Projets majeurs pilotés", icon: Briefcase, colorClass: "text-[#8B7EC8]" },
    { value: 300, suffix: "+", label: "Projets accompagnés", icon: Users, colorClass: "text-[#3DBCB8]" },
    { value: 5, suffix: "", label: "Pays (coordination internationale)", icon: Globe, colorClass: "text-[#4A90E2]" },
  ];

  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="group border border-border bg-gradient-to-br from-muted/50 to-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#4A90E2]/10 via-[#8B7EC8]/10 to-[#3DBCB8]/10 ${stat.colorClass} transition-transform duration-300 group-hover:scale-110`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
                <p className="mb-2 text-4xl font-bold text-foreground">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  const { ref, isInView } = useInView();

  const expertises = [
    {
      icon: Server,
      title: "SAP S/4HANA & Intégration SI",
      description:
        "Maîtrise complète des projets d'intégration SAP S/4HANA avec pilotage d'interfaces entre multiples outils (Salesforce, SuccessFactors, Kyriba). Expert en conception de Core Model Interfaces et coordination internationale de chantiers complexes.",
    },
    {
      icon: Award,
      title: "Leadership technique & Gestion de projet",
      description:
        "Expérience avérée en team leadership avec gestion de projets IT end-to-end incluant pilotage de planning, charge et budget. Capacité de mentoring des équipes, coordination internationale et collaboration inter-équipes. Certifications PRINCE2 et PSPO.",
    },
    {
      icon: Heart,
      title: "Conduite du changement & Accompagnement",
      description:
        "Spécialiste de l'accompagnement au changement avec expertise en définition de plans de communication, rédaction de supports de formation et animation d'ateliers. Approche orientée satisfaction client et amélioration continue.",
    },
  ];

  return (
    <section className="bg-background py-20" id="expertise">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          Domaines d&apos;expertise
        </h2>
        <div
          ref={ref}
          className={`grid gap-8 md:grid-cols-3 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {expertises.map((expertise, index) => (
            <Card
              key={expertise.title}
              className="group border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#4A90E2] to-[#8B7EC8] text-white transition-transform duration-300 group-hover:scale-110">
                  <expertise.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-card-foreground">
                  {expertise.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground text-pretty">
                  {expertise.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const { ref, isInView } = useInView();

  const skillCategories = [
    {
      title: "SAP & ERP",
      skills: [
        "SAP S/4HANA",
        "SAP Interfaces",
        "Core Model Interfaces",
        "Comptabilité SAP",
        "Contrôle de gestion",
        "Trésorerie",
      ],
    },
    {
      title: "Intégration & Outils",
      skills: [
        "Salesforce",
        "SuccessFactors",
        "Kyriba",
        "Expensya",
        "ADP",
        "Kimble",
        "APIs",
        "Webservices",
        "Streamline",
        "BTP/CPI",
      ],
    },
    {
      title: "Gestion de projet",
      skills: [
        "PRINCE2",
        "PSPO",
        "Planning et budget",
        "Team leadership",
        "Reporting",
        "Cadrage",
        "Coordination internationale",
      ],
    },
    {
      title: "Conduite du changement",
      skills: [
        "Change management",
        "Formation",
        "Ateliers",
        "Communication",
        "Stakeholder management",
        "E-learning",
      ],
    },
  ];

  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          Compétences techniques
        </h2>
        <div
          ref={ref}
          className={`grid gap-8 md:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-card text-card-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Experience {
  company: string;
  department?: string;
  period: string;
  role: string;
  location: string;
  context: string;
  achievements: string[];
  technologies: string[];
  featured?: boolean;
}

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const { ref, isInView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`h-full transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card
        className="group relative flex h-full flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] via-[#8B7EC8] to-[#3DBCB8] opacity-0 transition-opacity duration-500 group-hover:opacity-5" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4A90E2] via-[#8B7EC8] to-[#3DBCB8] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <CardContent className="relative flex flex-1 flex-col p-6">
          {/* Header Section */}
          <div className="mb-4">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4A90E2] to-[#8B7EC8] text-white shadow-lg">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    {experience.company}
                  </h3>
                  {experience.department && (
                    <p className="text-xs text-muted-foreground">
                      {experience.department}
                    </p>
                  )}
                </div>
              </div>
              {experience.featured && (
                <Badge className="flex-shrink-0 bg-gradient-to-r from-[#4A90E2] to-[#3DBCB8] text-xs text-white">
                  Mission phare
                </Badge>
              )}
            </div>

            <h4 className="mb-2 text-lg font-semibold text-foreground">
              {experience.role}
            </h4>

            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Context Section - Full text display */}
          <div className="mb-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {experience.context}
            </p>
          </div>

          {/* Achievements Section - All achievements displayed */}
          <div className="mb-4 flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground">
              Réalisations clés
            </p>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#3DBCB8]" />
                  <span className="text-sm leading-relaxed text-card-foreground">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Section - All badges displayed */}
          <div className="mt-auto border-t border-border pt-4">
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-muted px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-gradient-to-r hover:from-[#4A90E2] hover:to-[#8B7EC8] hover:text-white"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ExperienceSection() {
  const { ref, isInView } = useInView();

  const experiences: Experience[] = [
    {
      company: "Talan",
      department: "DSI",
      period: "Mars 2024 – Janvier 2026",
      role: "Senior SAP Integration Project Manager",
      location: "Paris, France",
      context:
        "Talan est un cabinet de conseil comptant plus de 6000 consultants dans 20 pays. Pilotage du déploiement international de SAP S/4HANA pour l'ensemble des entités du groupe (France, UK, Canada, USA, Suisse) visant l'amélioration des processus comptables et la dématérialisation des factures.",
      achievements: [
        "Pilotage du planning, charge et budget de 1,5M€/an avec réduction des coûts de 15%",
        "Coordination internationale du chantier Interfaces (5 pays, 21 entités légales)",
        "Déploiement du Core Model Interfaces entre Salesforce, SuccessFactors, Kyriba, Expensya et SAP",
        "Encadrement de 8 développeurs avec validation specs et quality monitoring",
        "15 interfaces SAP mises en place avec réduction du time-to-market de 20%",
      ],
      technologies: [
        "SAP S/4HANA",
        "Salesforce",
        "SuccessFactors",
        "Kyriba",
        "Expensya",
        "ADP",
        "Kimble",
        "APIs",
      ],
      featured: true,
    },
    {
      company: "Metpark",
      department: "Direction Marketing",
      period: "Janvier 2024 – Mars 2024",
      role: "Digital Strategy Consultant",
      location: "Bordeaux, France",
      context:
        "Metpark, gestionnaire du réseau de stationnement de Bordeaux Métropole. Mission de refonte de la stratégie de digitalisation pour optimiser les parcours client front-office et back-office.",
      achievements: [
        "Analyse stratégique avec benchmark des concurrents",
        "Customer journey mapping via interviews et ateliers de co-construction",
        "Définition du parcours client cible et macro-fonctionnalités",
        "Roadmap value-oriented avec priorisation des actions à fort impact business",
      ],
      technologies: [
        "Customer Journey Mapping",
        "Benchmark",
        "Strategic Analysis",
        "Digital Transformation",
      ],
    },
    {
      company: "SNCF Réseau",
      department: "Service Réclamations et Sinistres",
      period: "Février 2023 – Septembre 2023",
      role: "Business Process Consultant",
      location: "Paris, France",
      context:
        "SNCF Réseau, gestionnaire du réseau ferré national français avec plus de 42 clients. Optimisation du service Réclamations et Sinistres traitant les contestations et indemnisations clients.",
      achievements: [
        "Optimisation des processus avec amélioration de l'efficacité de 30%",
        "Rédaction de modes opératoires sur SI et processus métier",
        "Gestion des réclamations grands comptes (contestations et indemnisations)",
        "Suivi et analyse des KPI pour amélioration continue",
      ],
      technologies: [
        "Process Optimization",
        "KPI Monitoring",
        "Stakeholder Management",
        "Documentation",
      ],
    },
    {
      company: "Urssaf Caisse Nationale",
      department: "Direction Transferts - CRPCEN",
      period: "Septembre 2021 – Janvier 2023",
      role: "Change Management Consultant",
      location: "Paris, France",
      context:
        "Transfert du recouvrement des cotisations de la CRPCEN (Caisse de retraite des clercs et employés de notaires) vers les Urssaf au 1er janvier 2023. Accompagnement au changement majeur pour acculturer les gestionnaires.",
      achievements: [
        "Plan d'accompagnement complet pour transfert CRPCEN vers régime général",
        "Identification des partenaires et actions de facilitation du transfert",
        "Rédaction de supports de formation pour référents Urssaf et partenaires",
        "Ateliers bi-mensuels pour suivi d'avancement et gestion anomalies",
        "Documentation complète (cahiers des charges, modes opératoires, FAQ)",
      ],
      technologies: [
        "Change Management",
        "Training",
        "Stakeholder Management",
        "Workshop Facilitation",
      ],
    },
    {
      company: "Urssaf Caisse Nationale",
      department: "Direction Transferts - Bonus-Malus",
      period: "Septembre 2021 – Janvier 2023",
      role: "Change Management & Training Consultant",
      location: "Paris, France",
      context:
        "Dispositif Bonus-Malus de l'Assurance chômage visant à lutter contre le recours abusif aux contrats courts. Accompagnement au changement avec formation des référents et gestion des contestations.",
      achievements: [
        "Conception d'un e-learning suite au recueil des besoins agents Urssaf",
        "Plan d'accompagnement et webinaires bi-mensuels pour 150+ référents",
        "Suivi qualitatif et quantitatif des contestations (classification, réponses, anomalies)",
        "Documentation complète (modes opératoires IHM Pora, scripts téléphoniques)",
        "Réduction des délais de 25%",
      ],
      technologies: [
        "E-learning",
        "IHM Pora",
        "Webinaires",
        "Quality Monitoring",
        "Change Management",
      ],
    },
    {
      company: "Ministère des Armées",
      department: "DIRISI",
      period: "Avril 2021 – Août 2021",
      role: "Project Management Office Consultant",
      location: "Paris, France",
      context:
        "Direction Interarmées des Réseaux d'Infrastructure et des Systèmes d'Information. Appui au pilotage de la réorganisation interne avec accompagnement de 300+ projets IT dans leurs passages de jalons.",
      achievements: [
        "Pilotage de 300+ projets IT avec reporting structuré aux directions",
        "Organisation des COMEP pour passages de jalons (pré-production, production, exploitation)",
        "Refonte des processus internes suite aux instructions ministérielles",
        "Formalisation de templates et mise à disposition pour COMEP",
        "Mentoring des chefs de projet avec suivi individuel",
      ],
      technologies: [
        "PMO",
        "Project Governance",
        "Process Optimization",
        "Reporting",
        "Defense Sector",
      ],
    },
    {
      company: "Ministère de la Justice",
      department: "Direction de l'Administration Pénitentiaire",
      period: "Mai 2020 – Octobre 2020",
      role: "Business Analyst Junior",
      location: "Paris, France",
      context:
        "Direction de l'Administration Pénitentiaire. Refonte du SI APPI visant le suivi et l'insertion des Personnes Placées Sous Main de Justice (PPSMJ) pour améliorer l'utilisation du système.",
      achievements: [
        "Recueil des besoins via ateliers avec utilisateurs métier",
        "Rédaction des études d'opportunité pour validation stratégique",
        "Définition des processus métier optimisés et macro-fonctionnalités",
        "Accompagnement au changement pour adoption du nouveau SI",
      ],
      technologies: [
        "Requirements Gathering",
        "Business Case",
        "Process Design",
        "Change Management",
      ],
    },
    {
      company: "Ministère des Armées",
      department: "Direction Générale de l'Armement",
      period: "Septembre 2020 – Octobre 2020",
      role: "Strategic Analyst Junior",
      location: "Paris, France",
      context:
        "Étude comparative entre la BITD (Base Industrielle et Technologique de Défense) américaine et française pour protéger et renforcer la BITD nationale avec recommandations à la DGA.",
      achievements: [
        "Cartographie des dispositifs de protection de la BITD française",
        "Analyse comparée BITD américaine et française avec identification des best practices",
        "Entretiens avec industriels de la défense pour recueil des enjeux",
        "Recommandations stratégiques pour la DGA",
      ],
      technologies: [
        "Strategic Analysis",
        "Benchmark",
        "Stakeholder Interviews",
        "Defense Sector",
      ],
    },
    {
      company: "Interface Sciences Po Toulouse Junior Conseil",
      period: "Janvier 2019 – Décembre 2019",
      role: "Quality & Audit Manager",
      location: "Toulouse, France",
      context:
        "Junior entreprise de Sciences Po Toulouse. Formalisation des processus de suivi d'études pour améliorer le fonctionnement et la qualité des missions avec préparation de l'audit annuel.",
      achievements: [
        "Formalisation des processus de suivi d'études pour amélioration qualité",
        "Rédaction et contrôle de l'ensemble des documents de mission",
        "Accompagnement de 15 consultants lors des missions",
        "Préparation et organisation de l'audit annuel",
        "Prospection commerciale et formation sur cadre légal",
      ],
      technologies: [
        "Quality Management",
        "Process Optimization",
        "Audit",
        "Mentoring",
      ],
    },
    {
      company: "Toulouse Métropole",
      department: "Évaluation des Politiques Publiques",
      period: "Septembre 2018 – Mai 2019",
      role: "Public Policy Analyst Junior",
      location: "Toulouse, France",
      context:
        "Plan Climat Air et Énergie Territoriale (PCAET) de Toulouse Métropole (2018-2023). Suivi et évaluation du PCAET via la définition d'indicateurs et construction d'un tableau de bord de pilotage.",
      achievements: [
        "Élaboration d'un tableau de bord de suivi du PCAET",
        "Définition d'indicateurs avec 20 chefs de projet via ateliers collaboratifs",
        "Étude comparative sur la participation citoyenne dans l'évaluation PCAET",
        "Recommandations stratégiques pour amélioration du suivi",
      ],
      technologies: [
        "Performance Monitoring",
        "KPI Definition",
        "Workshop Facilitation",
        "Public Policy",
      ],
    },
  ];

  return (
    <section className="bg-muted py-20" id="experience">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`mb-12 text-center transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Expérience professionnelle
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Plus de 5 ans d&apos;expérience en gestion de projets IT, transformation digitale et conduite du changement
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2" style={{ gridAutoRows: "1fr" }}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.department || ''}-${experience.period}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReferencesSection() {
  const { ref, isInView } = useInView();

  const references = [
    "Talan",
    "SNCF Réseau",
    "Urssaf Caisse Nationale",
    "Ministère des Armées (DIRISI)",
    "Ministère de la Justice",
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          Références clés
        </h2>
        <div
          ref={ref}
          className={`mx-auto flex max-w-4xl flex-wrap justify-center gap-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {references.map((reference, index) => (
            <Card
              key={reference}
              className="border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="flex h-24 items-center justify-center p-6">
                <p className="text-center font-semibold text-card-foreground">
                  {reference}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  const { ref, isInView } = useInView();

  const education = [
    {
      degree: "Master 2 Conseil et Expertise en Action Publique",
      institution: "Sciences Po Toulouse",
      year: "2020",
    },
    {
      degree: "Programme Erasmus",
      institution: "University of Jyväskylä, Finlande",
      year: "2018",
    },
    {
      degree: "Bachelor Sciences Politiques",
      institution: "Sciences Po Toulouse",
      year: "2018",
    },
  ];

  return (
    <section className="bg-muted py-20" id="formation">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          Formation
        </h2>
        <div
          ref={ref}
          className={`mx-auto grid max-w-3xl gap-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {education.map((edu, index) => (
            <Card
              key={edu.degree}
              className="border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4A90E2] to-[#8B7EC8] text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-card-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                </div>
                <Badge variant="secondary" className="bg-card">
                  {edu.year}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function LanguagesSection() {
  const { ref, isInView } = useInView();

  const languages = [
    { name: "Français", level: 100, description: "Langue maternelle" },
    { name: "Anglais", level: 90, description: "Professionnel à fluent" },
    { name: "Espagnol", level: 70, description: "Avancé" },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          Langues
        </h2>
        <div
          ref={ref}
          className={`mx-auto max-w-2xl space-y-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {languages.map((lang, index) => (
            <div
              key={lang.name}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">
                    {lang.name}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {lang.description}
                </span>
              </div>
              <Progress value={isInView ? lang.level : 0} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AvailabilitySection() {
  const { ref, isInView } = useInView();

  const availabilityItems = [
    { icon: Briefcase, label: "TJM", value: "700€" },
    { icon: MapPin, label: "Mode de travail", value: "Full Remote exclusivement" },
    {
      icon: Calendar,
      label: "Disponibilité",
      value: "Temps plein",
    },
    {
      icon: Target,
      label: "Types de missions",
      value: "Création, Refonte, Maintenance évolutive, Intégration équipe",
    },
    {
      icon: Building2,
      label: "Secteurs",
      value: "DSI, ESN, Grandes entreprises",
    },
  ];

  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          Disponibilité & Préférences
        </h2>
        <div
          ref={ref}
          className={`mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {availabilityItems.map((item, index) => (
            <Card
              key={item.label}
              className="border border-border bg-card"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#4A90E2] to-[#3DBCB8] text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="font-semibold text-card-foreground">
                    {item.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="bg-gradient-to-br from-[#1a1f3c] via-[#2d2655] to-[#1e3a4c] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-balance">
            Démarrons votre projet
          </h2>

          <p className="mb-8 text-lg text-white/80">
            Disponible pour de nouvelles missions dès maintenant
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-[#4A90E2] hover:bg-white/90 font-semibold"
              asChild
            >
              <a
                href="https://calendly.com/votre-lien-calendly"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Réserver un rendez-vous
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 font-semibold"
              asChild
            >
              <a href="mailto:arnaud.elphege@email.fr">
                <Mail className="mr-2 h-5 w-5" />
                M'envoyer un email
              </a>
            </Button>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-6 text-white/80">
            <a
              href="mailto:arnaud.elphege@email.fr"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-5 w-5" />
              <span>arnaud.elphege@email.fr</span>
            </a>

            <a
              href="tel:+33695985807"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-5 w-5" />
              <span>+33 6 95 98 58 07</span>
            </a>
          </div>

          <div className="mb-8 flex justify-center gap-4">
            <a
              href="https://linkedin.com/in/arnaudelphege"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <img
                src="/linkedin1.png"
                alt="LinkedIn"
                className="h-5 w-5"
              />
            </a>

            <a
              href="https://malt.fr/profile/arnaudelphege"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <img
                src="/malt.png"
                alt="Malt"
                className="h-5 w-5"
              />
            </a>

            <a
              href="https://collective.work/profile/arnaud-elphege"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <img
                src="/collective.png"
                alt="Collective"
                className="h-5 w-5"
              />
            </a>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-sm text-white/60">
              © 2026 Arnaud Elphège. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SocialLinksSection />
      <AboutSection />
      <StatsSection />
      <ExpertiseSection />
      <SkillsSection />
      <ExperienceSection />
      <ReferencesSection />
      <EducationSection />
      <LanguagesSection />
      <AvailabilitySection />
      <FooterSection />
    </main>
  );
}
