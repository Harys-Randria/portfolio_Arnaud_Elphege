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
import type { TranslationsType } from '@/lib/translations';
import LanguageSwitcher from "./LanguageSwitcher";

interface PortfolioProps {
  t: TranslationsType;
}

function Header({ t }: PortfolioProps) {
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
            {t.hero.name}
          </button>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium transition-colors hover:text-white ${
                isScrolled ? 'text-foreground hover:text-[#4A90E2]' : 'text-white/90'
              }`}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('expertise')}
              className={`text-sm font-medium transition-colors hover:text-white ${
                isScrolled ? 'text-foreground hover:text-[#4A90E2]' : 'text-white/90'
              }`}
            >
              {t.nav.expertise}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`text-sm font-medium transition-colors hover:text-white ${
                isScrolled ? 'text-foreground hover:text-[#4A90E2]' : 'text-white/90'
              }`}
            >
              {t.nav.experience}
            </button>
            <button
              onClick={() => scrollToSection('formation')}
              className={`text-sm font-medium transition-colors hover:text-white ${
                isScrolled ? 'text-foreground hover:text-[#4A90E2]' : 'text-white/90'
              }`}
            >
              {t.nav.formation}
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
              <a href={`mailto:${t.hero.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                {t.nav.contact}
              </a>
            </Button>
            <LanguageSwitcher />
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
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('expertise')}
              className={`text-sm font-medium text-left transition-colors ${
                isScrolled ? 'text-foreground hover:text-[#4A90E2]' : 'text-white/90 hover:text-white'
              }`}
            >
              {t.nav.expertise}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`text-sm font-medium text-left transition-colors ${
                isScrolled ? 'text-foreground hover:text-[#4A90E2]' : 'text-white/90 hover:text-white'
              }`}
            >
              {t.nav.experience}
            </button>
            <button
              onClick={() => scrollToSection('formation')}
              className={`text-sm font-medium text-left transition-colors ${
                isScrolled ? 'text-foreground hover:text-[#4A90E2]' : 'text-white/90 hover:text-white'
              }`}
            >
              {t.nav.formation}
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
              <a href={`mailto:${t.hero.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                {t.nav.contact}
              </a>
            </Button>
            <LanguageSwitcher />
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

function HeroSection({ t }: PortfolioProps) {
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
                  alt={t.hero.name}
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
              {t.hero.name}
            </h1>
            <p className="mb-4 text-xl font-medium text-white/90 md:text-2xl">
              {t.hero.title}
            </p>
            <p className="mb-8 text-base leading-relaxed text-white/80 md:text-lg text-pretty">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="mb-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Button
                size="lg"
                className="bg-white text-[#4A90E2] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <a href={`mailto:${t.hero.email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  {t.hero.contactMe}
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
                  {t.hero.downloadCV}
                </a>
              </Button>
            </div>

            {/* Contact Info - Horizontal */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/90 md:justify-start md:text-base">
              <a
                href={`mailto:${t.hero.email}`}
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <Mail className="h-5 w-5" />
                <span>{t.hero.email}</span>
              </a>
              <a
                href={`tel:${t.hero.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <Phone className="h-5 w-5" />
                <span>{t.hero.phone}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{t.hero.location}</span>
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

function SocialLinksSection({ t }: PortfolioProps) {
  const { ref, isInView } = useInView();

  const socialLinks = [
    {
      name: t.social.linkedin.name,
      url: t.social.linkedin.url,
      image: "/linkedin1.png",
      description: t.social.linkedin.description,
    },
    {
      name: t.social.malt.name,
      url: t.social.malt.url,
      image: "/malt.png",
      description: t.social.malt.description,
    },
    {
      name: t.social.collective.name,
      url: t.social.collective.url,
      image: "/collective.png",
      description: t.social.collective.description,
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

function AboutSection({ t }: PortfolioProps) {
  const { ref, isInView } = useInView();

  return (
    <section className="bg-background py-20" id="about">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          {t.about.title}
        </h2>
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.about.intro}{" "}
            <span className="font-semibold text-primary">
              {t.about.yearsExperience}
            </span>{" "}
            {t.about.content}{" "}
            <span className="font-semibold text-primary">{t.about.budget}</span>
            {t.about.closing}
          </p>
        </div>
      </div>
    </section>
  );
}

function StatsSection({ t }: PortfolioProps) {
  const { ref, isInView } = useInView();

  const stats = [
    { 
      value: t.stats.years.value, 
      suffix: t.stats.years.suffix, 
      label: t.stats.years.label, 
      icon: Award, 
      colorClass: "text-[#4A90E2]" 
    },
    { 
      value: t.stats.golive.value, 
      suffix: t.stats.golive.suffix, 
      label: t.stats.golive.label, 
      icon: Briefcase, 
      colorClass: "text-[#8B7EC8]" 
    },
    { 
      value: t.stats.projects.value, 
      suffix: t.stats.projects.suffix, 
      label: t.stats.projects.label, 
      icon: Users, 
      colorClass: "text-[#3DBCB8]" 
    },
    { 
      value: t.stats.countries.value, 
      suffix: t.stats.countries.suffix, 
      label: t.stats.countries.label, 
      icon: Globe, 
      colorClass: "text-[#4A90E2]" 
    },
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

function ExpertiseSection({ t }: PortfolioProps) {
  const { ref, isInView } = useInView();

  const expertises = [
    {
      icon: Server,
      title: t.expertise.sap.title,
      description: t.expertise.sap.description,
    },
    {
      icon: Award,
      title: t.expertise.leadership.title,
      description: t.expertise.leadership.description,
    },
    {
      icon: Heart,
      title: t.expertise.change.title,
      description: t.expertise.change.description,
    },
  ];

  return (
    <section className="bg-background py-20" id="expertise">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          {t.expertise.title}
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

function SkillsSection({ t }: PortfolioProps) {
  const { ref, isInView } = useInView();

  const skillCategories = [
    {
      title: t.skills.categories.sap.title,
      skills: t.skills.categories.sap.skills,
    },
    {
      title: t.skills.categories.integration.title,
      skills: t.skills.categories.integration.skills,
    },
    {
      title: t.skills.categories.project.title,
      skills: t.skills.categories.project.skills,
    },
    {
      title: t.skills.categories.change.title,
      skills: t.skills.categories.change.skills,
    },
  ];

  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          {t.skills.title}
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

function ExperienceCard({ experience, index, t }: { experience: Experience; index: number; t: TranslationsType }) {
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
                  {t.experience.featuredBadge}
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

          {/* Context Section */}
          <div className="mb-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {experience.context}
            </p>
          </div>

          {/* Achievements Section */}
          <div className="mb-4 flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground">
              {t.experience.keyAchievements}
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

          {/* Technologies Section */}
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

function ExperienceSection({ t }: PortfolioProps) {
  const { ref, isInView } = useInView();

  const experiences = Object.values(t.experience.experiences);

  return (
    <section className="bg-muted py-20" id="experience">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`mb-12 text-center transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            {t.experience.title}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2" style={{ gridAutoRows: "1fr" }}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.department || ''}-${experience.period}`}
              experience={experience}
              index={index}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReferencesSection({ t }: PortfolioProps) {
  const { ref, isInView } = useInView();

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          {t.references.title}
        </h2>
        <div
          ref={ref}
          className={`mx-auto flex max-w-4xl flex-wrap justify-center gap-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {t.references.list.map((reference, index) => (
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

function EducationSection({ t }: PortfolioProps) {
  const { ref, isInView } = useInView();

  return (
    <section className="bg-muted py-20" id="formation">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          {t.education.title}
        </h2>
        <div
          ref={ref}
          className={`mx-auto grid max-w-3xl gap-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {t.education.degrees.map((edu, index) => (
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

function LanguagesSection({ t }: PortfolioProps) {
  const { ref, isInView } = useInView();

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          {t.languages.title}
        </h2>
        <div
          ref={ref}
          className={`mx-auto max-w-2xl space-y-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {t.languages.list.map((lang, index) => (
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

function AvailabilitySection({ t }: PortfolioProps) {
  const { ref, isInView } = useInView();

  const availabilityItems = t.availability.items.map((item, index) => {
    const icons = [Briefcase, MapPin, Calendar, Target, Building2];
    return {
      icon: icons[index] || Briefcase,
      label: item.label,
      value: item.value,
    };
  });

  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          {t.availability.title}
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

function FooterSection({ t }: PortfolioProps) {
  return (
    <footer className="bg-gradient-to-br from-[#1a1f3c] via-[#2d2655] to-[#1e3a4c] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-balance">
            {t.footer.title}
          </h2>

          <p className="mb-8 text-lg text-white/80">
            {t.footer.subtitle}
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-[#4A90E2] hover:bg-white/90 font-semibold"
              asChild
            >
              <a
                href={t.footer.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-5 w-5" />
                {t.footer.bookCall}
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 font-semibold"
              asChild
            >
              <a href={`mailto:${t.hero.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                {t.footer.sendEmail}
              </a>
            </Button>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-6 text-white/80">
            <a
              href={`mailto:${t.hero.email}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-5 w-5" />
              <span>{t.hero.email}</span>
            </a>

            <a
              href={`tel:${t.hero.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-5 w-5" />
              <span>{t.hero.phone}</span>
            </a>
          </div>

          <div className="mb-8 flex justify-center gap-4">
            <a
              href={t.social.linkedin.url}
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
              href={t.social.malt.url}
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
              href={t.social.collective.url}
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
              {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio({ t }: PortfolioProps) {
  return (
    <main className="min-h-screen">
      <Header t={t} />
      <HeroSection t={t} />
      <SocialLinksSection t={t} />
      <AboutSection t={t} />
      <StatsSection t={t} />
      <ExpertiseSection t={t} />
      <SkillsSection t={t} />
      <ExperienceSection t={t} />
      <ReferencesSection t={t} />
      <EducationSection t={t} />
      <LanguagesSection t={t} />
      <AvailabilitySection t={t} />
      <FooterSection t={t} />
    </main>
  );
}