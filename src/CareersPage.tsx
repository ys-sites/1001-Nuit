import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Briefcase,
  CheckCircle2,
  AlertCircle,
  Clock,
  MapPin,
  Send,
  Loader2,
  Sparkles,
  Utensils,
  Coffee,
  ShieldAlert,
  Flame,
  UserCheck,
  Check,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import { cn } from "./lib/utils";

const FORMSUBMIT_URL = "https://formsubmit.co/ajax/info@1001nuit.com";
const RESTAURANT_ADDRESS = "11602 A Bd de Salaberry, Dollard-des-Ormeaux, QC H9B 2R8";
const RESTAURANT_PHONE = "(514) 421-1114";
const RESTAURANT_EMAIL = "info@1001nuit.com";

type JobId = "sushi-trainee" | "kitchen-grill" | "server" | "dishwasher" | "busboy";

interface JobOpening {
  id: JobId;
  title: { en: string; fr: string };
  badge: { en: string; fr: string };
  schedule: { en: string; fr: string };
  summary: { en: string; fr: string };
  highlights: { en: string[]; fr: string[] };
  requirements: { en: string[]; fr: string[] };
  icon: React.ElementType;
}

const JOB_OPENINGS: JobOpening[] = [
  {
    id: "sushi-trainee",
    title: {
      en: "Sushi Trainee / Apprentice",
      fr: "Stagiaire / Apprenti Sushi",
    },
    badge: {
      en: "No Experience Needed • Training Provided",
      fr: "Sans expérience requise • Formation assurée",
    },
    schedule: {
      en: "Full-Time / Part-Time",
      fr: "Temps plein / Temps partiel",
    },
    summary: {
      en: "No extensive culinary experience is required! We will teach you authentic knife skills, prep, and sushi rolling. You should be reliable, eager to learn, and able to work well in a fast-paced restaurant environment.",
      fr: "Aucune expérience approfondie n'est requise ! Nous vous formerons aux techniques de découpe, de préparation et de confection des sushis. Vous devez être fiable, motivé(e) et capable d'évoluer dans un rythme soutenu.",
    },
    highlights: {
      en: [
        "Hands-on training directly under experienced sushi chefs",
        "Learn ingredients prep, knife handling, nigiri & maki rolling",
        "Opportunity to grow into a junior sushi chef position",
        "Supportive, high-energy kitchen atmosphere",
      ],
      fr: [
        "Formation pratique directe aux côtés de chefs sushi expérimentés",
        "Apprentissage de la découpe, préparation des ingrédients, nigiri et makis",
        "Possibilité d'évolution rapide vers un poste de chef sushi",
        "Ambiance de travail stimulante, collaborative et respectueuse",
      ],
    },
    requirements: {
      en: [
        "Reliable, punctual, and strong work ethic",
        "Eagerness to learn Japanese culinary craft",
        "Ability to thrive in a fast-paced kitchen during peak rushes",
        "Must be currently living in Quebec with valid local work permit",
      ],
      fr: [
        "Fiabilité, ponctualité et rigueur professionnelle",
        "Désir sincère d'apprendre l'art culinaire du sushi",
        "Capacité à travailler avec cadence lors des coups de feu",
        "Résidence actuelle au Québec avec autorisation légale de travail",
      ],
    },
    icon: Sparkles,
  },
  {
    id: "kitchen-grill",
    title: {
      en: "Kitchen Grill Specialist & Line Cook",
      fr: "Chef Grilladin & Cuisinier de Ligne",
    },
    badge: {
      en: "Hot Kitchen & Grill Station • Full-Time / Part-Time",
      fr: "Poste Grillades & Ligne Chaude • Temps plein / partiel",
    },
    schedule: {
      en: "Full-Time / Part-Time (Evenings & Weekends)",
      fr: "Temps plein / Temps partiel (Soirs et fins de semaine)",
    },
    summary: {
      en: "Take command of our high-heat culinary station. Expertly prepare our signature sizzling plates, AAA Angus beef ribs, lamb chops, and hot Asian specialties to exact temperature, sear, and presentation standards.",
      fr: "Prenez les commandes de notre station de cuisson à haute température. Maîtrisez la préparation de nos plaques grésillantes réputées, côtes de bœuf Angus AAA, côtelettes d'agneau et spécialités chaudes asiatiques selon des standards rigoureux de cuisson et de présentation.",
    },
    highlights: {
      en: [
        "Command the grill, flattop, and hot culinary line with precision searing, timing, and plating",
        "Showcase premium halal meats, sizzling platters, skewers, and wok specialties",
        "Collaborate closely with head chefs in a well-equipped, fast-moving kitchen brigade",
        "Competitive hourly compensation with tip sharing, staff meals, and growth opportunities",
      ],
      fr: [
        "Maîtrise de la cuisson sur grill, plancha et ligne chaude avec précision et rapidité",
        "Mise en valeur de viandes halal de première qualité, plats grésillants et spécialités au wok",
        "Collaboration étroite avec les chefs au sein d'une brigade de cuisine moderne et dynamique",
        "Rémunération compétitive avec partage des pourboires, repas fournis et perspectives d'évolution",
      ],
    },
    requirements: {
      en: [
        "Prior experience on a commercial grill, flattop, or hot restaurant line",
        "Sound knowledge of meat temperatures, cooking times, and food safety standards (MAPAQ)",
        "High stamina, speed, and composure during busy dinner and weekend rushes",
        "Must be currently residing in Quebec with valid local work authorization",
      ],
      fr: [
        "Expérience préalable sur grill commercial, plancha ou ligne de cuisson chaude",
        "Solide connaissance des températures de cuisson et des normes de salubrité (MAPAQ)",
        "Excellente endurance, rapidité d'exécution et sang-froid durant les heures de pointe",
        "Résidence actuelle au Québec avec autorisation de travail locale en règle",
      ],
    },
    icon: Flame,
  },
  {
    id: "server",
    title: {
      en: "Server / Waitstaff",
      fr: "Serveur / Serveuse",
    },
    badge: {
      en: "Front of House Hospitality",
      fr: "Service en salle & Hospitalité",
    },
    schedule: {
      en: "Full-Time / Part-Time (Evenings & Weekends)",
      fr: "Temps plein / Temps partiel (Soirs et fins de semaine)",
    },
    summary: {
      en: "Be the warm, inviting face of 1001 Nuits. Guide guests through our extensive Asian & sushi menu, take orders accurately, deliver food and drinks promptly, and create memorable dining experiences.",
      fr: "Soyez le visage accueillant de 1001 Nuits. Conseillez nos clients sur notre carte asiatique et sushi, prenez les commandes avec précision et assurez un service attentionné et mémorable.",
    },
    highlights: {
      en: [
        "Fast-paced dining room with generous tips",
        "Friendly, multilingual guest base in West Island",
        "Staff meal discounts and scheduling flexibility",
      ],
      fr: [
        "Salle de restaurant animée avec excellents pourboires",
        "Clientèle agréable et cosmopolite du West Island",
        "Rabais repas employé et horaires flexibles",
      ],
    },
    requirements: {
      en: [
        "Warm, polite, and customer-focused personality",
        "Ability to multitask calmly during busy services",
        "Basic conversational English & French communication",
        "Must reside in Quebec with legal work authorization",
      ],
      fr: [
        "Attitude chaleureuse, courtoise et sens du service client",
        "Capacité à gérer plusieurs tables efficacement pendant les rushs",
        "Aisance relationnelle (anglais et français parlés)",
        "Résidence actuelle au Québec avec permis de travail valide",
      ],
    },
    icon: Utensils,
  },
  {
    id: "dishwasher",
    title: {
      en: "Dishwasher / Kitchen Porter",
      fr: "Plongeur / Aide-cuisine",
    },
    badge: {
      en: "Essential Kitchen Backbone",
      fr: "Pilier indispensable de la cuisine",
    },
    schedule: {
      en: "Full-Time / Part-Time",
      fr: "Temps plein / Temps partiel",
    },
    summary: {
      en: "Keep our kitchen and dining room moving seamlessly. Operate commercial dishwashing machinery, sanitize cookware, organize utensils, and ensure culinary stations remain fully equipped.",
      fr: "Garantissez le roulement fluide de la vaisselle et des équipements. Fonctionnement de la plonge industrielle, désinfection du matériel et maintien d'une propreté irréprochable en cuisine.",
    },
    highlights: {
      en: [
        "Stable hours in a respectful, team-first kitchen",
        "No prior experience needed — straightforward onboarding",
        "Complimentary staff meals during scheduled shifts",
      ],
      fr: [
        "Heures régulières au sein d'une équipe soudée et respectueuse",
        "Aucune expérience requise — intégration et formation rapides",
        "Repas du personnel inclus lors des quarts de travail",
      ],
    },
    requirements: {
      en: [
        "Strong stamina and dependability",
        "Fast pace and attention to kitchen hygiene standards",
        "Team player ready to assist kitchen staff when needed",
        "Must reside in Quebec with valid work status",
      ],
      fr: [
        "Bonne endurance physique, ponctualité et sérieux",
        "Efficacité et respect strict des normes de propreté et salubrité",
        "Esprit d'équipe pour prêter main-forte aux cuisiniers",
        "Résidence actuelle au Québec et autorisation de travail locale",
      ],
    },
    icon: Coffee,
  },
  {
    id: "busboy",
    title: {
      en: "Busboy / Commis Débarrasseur",
      fr: "Aide-serveur / Commis débarrasseur",
    },
    badge: {
      en: "Dining Room Floor Support",
      fr: "Soutien actif en salle",
    },
    schedule: {
      en: "Part-Time / Full-Time (Peak Hours)",
      fr: "Temps partiel / Temps plein (Heures de pointe)",
    },
    summary: {
      en: "Clear and reset tables quickly, refill water, assist servers during rushes, and keep dining areas immaculate so incoming guests are seated without delay.",
      fr: "Débarrassez et redressez rapidement les tables, servez l'eau, assistez les serveurs pendant les coups de feu et veillez à la propreté de la salle pour accueillir les clients sans attente.",
    },
    highlights: {
      en: [
        "Fast-paced environment with tip sharing / tip pool",
        "Great stepping stone into restaurant service & bartending",
        "Supportive, friendly management and team members",
      ],
      fr: [
        "Environnement dynamique avec partage équitable des pourboires",
        "Excellente opportunité pour débuter et évoluer en restauration",
        "Équipe chaleureuse, dynamique et accompagnement bienveillant",
      ],
    },
    requirements: {
      en: [
        "Energetic, detail-oriented, and attentive",
        "Quick on your feet and comfortable moving with trays",
        "Courteous demeanor around dining guests",
        "Must be living in Quebec with local working authorization",
      ],
      fr: [
        "Énergie, sens de l'observation et réactivité",
        "Aisance physique et rapidité d'exécution",
        "Comportement courtois et discret auprès des clients",
        "Résidence au Québec avec statut légal de travail en règle",
      ],
    },
    icon: Briefcase,
  },
];

export default function CareersPage() {
  const navigate = useNavigate();
  const [lang, setLang] = useState<"en" | "fr">("en");
  const [selectedRole, setSelectedRole] = useState<string>("sushi-trainee");

  // Form State — Simplified to Name, Phone, Email, Position, and CV Attachment
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "Sushi Trainee / Apprentice",
  });

  const handleRoleSelection = (roleId: JobId) => {
    setSelectedRole(roleId);
    const job = JOB_OPENINGS.find((j) => j.id === roleId);
    if (job) {
      setFormData((prev) => ({
        ...prev,
        position: lang === "fr" ? job.title.fr : job.title.en,
      }));
    }

    // Smooth scroll to application form
    const formEl = document.getElementById("application-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const payload = new FormData();
    payload.append(
      "_subject",
      lang === "fr"
        ? `[1001 Nuits - Candidature Emploi] ${formData.position} - ${formData.name}`
        : `[1001 Nuits - Job Application] ${formData.position} - ${formData.name}`
    );
    payload.append("_template", "table");
    payload.append("_captcha", "false");
    payload.append("_cc", "qinxuxin@gmail.com");
    payload.append("_replyto", formData.email);
    payload.append("Applicant Name / Nom", formData.name);
    payload.append("Phone / Téléphone", formData.phone);
    payload.append("Email / Courriel", formData.email);
    payload.append("Position Applied For / Poste", formData.position);
    payload.append("Submitted At", new Date().toLocaleString());

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          // Note: Do not set Content-Type header when body is FormData
        },
        body: payload,
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true || data.message)) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          data.message ||
            (lang === "fr"
              ? "Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou nous joindre directement."
              : "An error occurred while submitting your application. Please try again or reach out directly.")
        );
      }
    } catch (err) {
      console.error("Job Application Submit Error:", err);
      setStatus("error");
      setErrorMessage(
        lang === "fr"
          ? `Impossible de joindre le serveur d'envoi. Veuillez nous contacter au ${RESTAURANT_PHONE} ou par courriel à ${RESTAURANT_EMAIL}.`
          : `Unable to connect to the submission server. Please call us at ${RESTAURANT_PHONE} or email ${RESTAURANT_EMAIL}.`
      );
    }
  };

  const t = {
    en: {
      backHome: "Back to Home",
      navMenu: "Menu",
      navCatering: "Catering",
      navReservation: "Reservation",
      heroBadge: "Careers at 1001 Nuits",
      heroTitle: "Join Our Culinary Family",
      heroSubtitle:
        "Passionate about Japanese cuisine and outstanding hospitality? We are growing our team at our Dollard-des-Ormeaux restaurant. Explore open roles and apply below.",

      // Eligibility Notice
      eligibilityTitle: "Important Hiring Policy — Quebec Candidates Only",
      eligibilityText:
        "We’re only looking to hire people who are already in Quebec and available to work locally. We are not recruiting or sponsoring candidates from overseas.",
      eligibilityBadge: "Local Hiring Only",

      // Open positions
      openPositionsTitle: "Featured Open Positions",
      openPositionsSubtitle: "Find the position that matches your enthusiasm and career goals.",
      applyBtn: "Apply for this role",
      highlightsTitle: "What you’ll do & learn:",
      requirementsTitle: "Requirements:",

      // Simplified Application Form (Theme Color Background)
      formBadge: "Simple Quick Application",
      formTitle: "Submit Your Application",
      formSubtitle: "Enter your details below. We will review your application and get in touch.",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "e.g., Sarah Tremblay",
      phoneLabel: "Phone Number",
      phonePlaceholder: "(514) 000-0000",
      emailLabel: "Email Address",
      emailPlaceholder: "sarah.tremblay@example.com",
      positionLabel: "Position Applying For",
      submitBtn: "Submit Application",
      submittingBtn: "Sending Application...",

      // Success screen
      successTitle: "Application Received!",
      successMessage:
        "Thank you for your application to 1001 Nuits. Our management team will review your application and contact you promptly.",
      cvNoticeTitle: "Important Next Step — Send Your CV / Resume",
      cvNoticeText: "Please send your CV / resume directly by email to info@1001nuit.com (cc: qinxuxin@gmail.com) with your full name and position in the subject line.",
      cvNoticeBtn: "Click Here to Email Your CV Now",
      submitAnotherBtn: "Submit Another Application",
      returnHomeBtn: "Return to Homepage",

      // Why work with us
      perksTitle: "Why Work With Us?",
      perk1Title: "Skill Development & Training",
      perk1Desc: "Learn traditional sushi techniques, kitchen management, and hospitality from experienced chefs.",
      perk2Title: "Competitive Pay & Gratuities",
      perk2Desc: "Fair hourly wages, generous tips, and consistent scheduling tailored to work-life balance.",
      perk3Title: "Positive Team Culture",
      perk3Desc: "A supportive, multicultural environment where hard work and positive energy are rewarded.",
      perk4Title: "Staff Dining Privileges",
      perk4Desc: "Enjoy delicious shift meals and generous staff discounts across our Asian dining offerings.",

      // Location card
      locationTitle: "Restaurant Location & Contact",
      locationAddress: RESTAURANT_ADDRESS,
      galleryTitle: "Atmosphere & Kitchen Life",
    },
    fr: {
      backHome: "Retour à l'accueil",
      navMenu: "Menu",
      navCatering: "Service Traiteur",
      navReservation: "Réservation",
      heroBadge: "Carrières chez 1001 Nuits",
      heroTitle: "Rejoignez Notre Famille Culinaire",
      heroSubtitle:
        "Passionné(e) par la cuisine asiatique, les sushis et le service client ? Nous agrandissons notre brigade à Dollard-des-Ormeaux. Découvrez nos postes ouverts et postulez ci-dessous.",

      // Eligibility Notice
      eligibilityTitle: "Politique de Recrutement — Candidats au Québec Uniquement",
      eligibilityText:
        "Nous recrutons exclusivement des candidats qui résident déjà au Québec et sont disponibles pour travailler sur place. Nous ne recrutons pas de candidats de l'étranger.",
      eligibilityBadge: "Embauche locale uniquement",

      // Open positions
      openPositionsTitle: "Postes Actuellement Ouverts",
      openPositionsSubtitle: "Trouvez le rôle qui correspond à votre enthousiasme et à vos ambitions.",
      applyBtn: "Postuler pour ce rôle",
      highlightsTitle: "Ce que vous ferez & apprendrez :",
      requirementsTitle: "Exigences :",

      // Simplified Application Form (Theme Color Background)
      formBadge: "Candidature Rapide",
      formTitle: "Formulaire de Candidature",
      formSubtitle: "Renseignez vos coordonnées ci-dessous. Notre équipe étudiera votre dossier sous peu.",
      fullNameLabel: "Nom Complet",
      fullNamePlaceholder: "ex. : Sarah Tremblay",
      phoneLabel: "Numéro de Téléphone",
      phonePlaceholder: "(514) 000-0000",
      emailLabel: "Adresse Courriel",
      emailPlaceholder: "sarah.tremblay@example.com",
      positionLabel: "Poste Souhaité",
      submitBtn: "Envoyer ma Candidature",
      submittingBtn: "Envoi de la candidature...",

      // Success screen
      successTitle: "Candidature Bien Reçue !",
      successMessage:
        "Merci pour votre candidature chez 1001 Nuits. Notre équipe de gestion étudiera votre dossier et vous contactera dans les meilleurs délais.",
      cvNoticeTitle: "Étape Suivante Importante — Envoi de votre CV",
      cvNoticeText: "Veuillez envoyer votre CV directement par courriel à info@1001nuit.com (cc : qinxuxin@gmail.com) en indiquant votre nom et le poste convoité dans l'objet.",
      cvNoticeBtn: "Cliquez ici pour envoyer votre CV par courriel",
      submitAnotherBtn: "Envoyer une autre candidature",
      returnHomeBtn: "Retour à l'accueil",

      // Why work with us
      perksTitle: "Pourquoi Travailler Avec Nous ?",
      perk1Title: "Formation & Montée en Compétences",
      perk1Desc: "Apprenez les techniques de découpe et confection de sushi auprès de chefs chevronnés.",
      perk2Title: "Rémunération & Pourboires Attractifs",
      perk2Desc: "Salaire juste, excellents pourboires et horaires stables respectant votre équilibre de vie.",
      perk3Title: "Esprit d'Équipe Bienveillant",
      perk3Desc: "Un environnement inclusif, multiculturel et énergique où le dévouement est valorisé.",
      perk4Title: "Avantages Repas & Rabais",
      perk4Desc: "Repas savoureux fournis lors de vos quarts de travail et rabais généreux sur toute la carte.",

      // Location card
      locationTitle: "Emplacement du Restaurant & Contact",
      locationAddress: RESTAURANT_ADDRESS,
      galleryTitle: "Aperçu de l'Ambiance & Cuisine",
    },
  }[lang];

  return (
    <div className="min-h-screen bg-[#0a0b0a] text-[#efe7d2] flex flex-col font-sans selection:bg-[#cfbe91] selection:text-[#0a0b0a]">
      {/* ── Top Navigation Bar ────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0b0a]/80 border-b border-[#333330]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Left: Back & Brand */}
          <div className="flex items-center gap-4 md:gap-8">
            <Link
              to="/"
              className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-[#efe7d2]/70 hover:text-[#cfbe91] transition-colors group"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span>{t.backHome}</span>
            </Link>

            <div className="h-4 w-[1px] bg-[#333330] hidden sm:block" />

            <Link
              to="/"
              className="font-serif text-lg md:text-xl tracking-[0.2em] uppercase text-[#efe7d2] hover:text-[#cfbe91] transition-colors flex items-baseline gap-1"
            >
              <span className="lining-nums">1001</span> <span>NUITS</span>
            </Link>
          </div>

          {/* Right Navigation & Language */}
          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="hidden md:flex items-center gap-6 text-[12px] font-bold tracking-[0.15em] uppercase text-[#efe7d2]/80">
              <Link to="/#menu" className="hover:text-[#cfbe91] transition-colors">
                {t.navMenu}
              </Link>
              <Link to="/#private-events" className="hover:text-[#cfbe91] transition-colors">
                {t.navCatering}
              </Link>
              <Link to="/#reservation" className="hover:text-[#cfbe91] transition-colors">
                {t.navReservation}
              </Link>
            </nav>

            {/* Language Switcher */}
            <div className="flex items-center bg-[#1a1c19] border border-[#333330] rounded-full p-0.5 text-[10px] tracking-widest font-bold">
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "px-2.5 py-1 rounded-full uppercase transition-all",
                  lang === "en" ? "bg-[#cfbe91] text-[#0a0b0a]" : "text-[#efe7d2]/70 hover:text-[#efe7d2]"
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLang("fr")}
                className={cn(
                  "px-2.5 py-1 rounded-full uppercase transition-all",
                  lang === "fr" ? "bg-[#cfbe91] text-[#0a0b0a]" : "text-[#efe7d2]/70 hover:text-[#efe7d2]"
                )}
              >
                FR
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Main Content Area ────────────────────────────────────────── */}
      <main className="flex-1">
        {/* ── Hero Section (Text Only, No Large Images at the Top) ─────── */}
        <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-[#cfbe91]/5 blur-[140px] pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a1c19] border border-[#cfbe91]/30 text-[#cfbe91] text-xs font-semibold tracking-widest uppercase mb-6"
            >
              <Sparkles size={14} />
              <span>{t.heroBadge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#efe7d2] tracking-wide leading-tight mb-6"
            >
              {t.heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#efe7d2]/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
            >
              {t.heroSubtitle}
            </motion.p>

            {/* ── Mandatory Quebec Residency Notice ────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-left bg-gradient-to-r from-[#1c1d1a] to-[#161815] border-2 border-[#cfbe91]/60 rounded-2xl p-5 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#cfbe91]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                <div className="p-3 rounded-xl bg-[#cfbe91]/10 border border-[#cfbe91]/30 text-[#cfbe91] shrink-0 mt-0.5">
                  <ShieldAlert size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#cfbe91]/20 border border-[#cfbe91]/40 text-[#cfbe91] text-[10px] font-bold tracking-wider uppercase">
                      {t.eligibilityBadge}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-[#efe7d2] font-semibold">
                      {t.eligibilityTitle}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#efe7d2]/90 leading-relaxed">
                    {t.eligibilityText}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Open Positions Section ──────────────────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#333330]/70 bg-[#0d0e0c]/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#efe7d2] tracking-wide mb-3">
                {t.openPositionsTitle}
              </h2>
              <p className="text-[#efe7d2]/60 text-sm sm:text-base">
                {t.openPositionsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {JOB_OPENINGS.map((job) => {
                const Icon = job.icon;
                const isSelected = selectedRole === job.id;

                return (
                  <motion.div
                    key={job.id}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className={cn(
                      "flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 relative border",
                      isSelected
                        ? "bg-[#161815] border-[#cfbe91] shadow-[0_16px_40px_rgba(207,190,145,0.12)]"
                        : "bg-[#121311] border-[#333330] hover:border-[#cfbe91]/50"
                    )}
                  >
                    <div>
                      {/* Header Info */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="p-3 rounded-2xl bg-[#1f211c] border border-[#333330] text-[#cfbe91]">
                          <Icon size={24} />
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#1f211c] text-[#cfbe91] border border-[#cfbe91]/30">
                            {lang === "fr" ? job.badge.fr : job.badge.en}
                          </span>
                          <div className="text-xs text-[#efe7d2]/50 mt-1 flex items-center justify-end gap-1.5">
                            <Clock size={12} />
                            <span>{lang === "fr" ? job.schedule.fr : job.schedule.en}</span>
                          </div>
                        </div>
                      </div>

                      <h3 className="font-serif text-2xl text-[#efe7d2] mb-3">
                        {lang === "fr" ? job.title.fr : job.title.en}
                      </h3>

                      <p className="text-sm text-[#efe7d2]/75 leading-relaxed mb-6">
                        {lang === "fr" ? job.summary.fr : job.summary.en}
                      </p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#cfbe91] mb-3">
                          {t.highlightsTitle}
                        </h4>
                        <ul className="space-y-2">
                          {(lang === "fr" ? job.highlights.fr : job.highlights.en).map(
                            (point, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#efe7d2]/80">
                                <Check size={14} className="text-[#cfbe91] shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Requirements */}
                      <div className="mb-6 pt-4 border-t border-[#333330]/50">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#efe7d2]/50 mb-2.5">
                          {t.requirementsTitle}
                        </h4>
                        <ul className="space-y-1.5">
                          {(lang === "fr" ? job.requirements.fr : job.requirements.en).map(
                            (req, i) => (
                              <li key={i} className="text-xs text-[#efe7d2]/60 flex items-start gap-2">
                                <span className="text-[#cfbe91]">•</span>
                                <span>{req}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="pt-4 mt-auto">
                      <button
                        onClick={() => handleRoleSelection(job.id)}
                        className={cn(
                          "w-full py-3 px-5 rounded-xl font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer",
                          isSelected
                            ? "bg-[#cfbe91] text-[#0a0b0a] hover:bg-[#d8caa5]"
                            : "bg-[#1f211c] text-[#efe7d2] hover:bg-[#cfbe91] hover:text-[#0a0b0a] border border-[#333330]"
                        )}
                      >
                        <span>{t.applyBtn}</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Interactive Application Section (THEME COLOR BACKGROUND: #faf8f5 / Cream Ivory) ── */}
        <section
          id="application-form"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f5] text-[#1a1c19] relative overflow-hidden border-t border-b border-[#1a1c19]/10"
        >
          {/* Subtle Background Watermark / Accent Glow */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#cfbe91]/15 blur-[120px]" />
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-widest uppercase text-[#8a7a4a] mb-2 inline-block px-3.5 py-1 rounded-full bg-[#cfbe91]/25 border border-[#cfbe91]/40">
                {t.formBadge}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1c19] mb-3 mt-3">
                {t.formTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#1a1c19]/70 max-w-lg mx-auto leading-relaxed">
                {t.formSubtitle}
              </p>
            </div>

            {/* Form Card (Theme Light Card with Gold Accents) */}
            <div className="bg-white/95 backdrop-blur-md border border-[#cfbe91]/40 rounded-3xl p-6 sm:p-10 shadow-[0_16px_50px_rgba(26,28,25,0.06)] relative">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-10 text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#cfbe91]/20 text-[#8a7a4a] flex items-center justify-center mb-6 border border-[#cfbe91]/50">
                      <CheckCircle2 size={36} />
                    </div>

                    <h3 className="font-serif text-3xl text-[#1a1c19] mb-3">
                      {t.successTitle}
                    </h3>

                    <p className="text-sm sm:text-base text-[#1a1c19]/70 max-w-md mb-8 leading-relaxed">
                      {t.successMessage}
                    </p>

                    <div className="p-5 rounded-2xl bg-[#f8f6f0] border border-[#cfbe91]/30 text-xs text-[#1a1c19]/80 mb-6 max-w-md w-full text-left space-y-2">
                      <p>
                        <strong className="text-[#8a7a4a]">{t.positionLabel}:</strong>{" "}
                        {formData.position}
                      </p>
                      <p>
                        <strong className="text-[#8a7a4a]">{t.fullNameLabel}:</strong>{" "}
                        {formData.name}
                      </p>
                      <p>
                        <strong className="text-[#8a7a4a]">{t.phoneLabel}:</strong>{" "}
                        {formData.phone}
                      </p>
                      <p>
                        <strong className="text-[#8a7a4a]">{t.emailLabel}:</strong>{" "}
                        {formData.email}
                      </p>
                    </div>

                    {/* CV Email Next Step Notice */}
                    <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#fdfbf7] border-2 border-[#cfbe91]/50 text-left max-w-md w-full shadow-sm">
                      <div className="flex items-center gap-2 mb-2 text-[#8a7a4a] font-bold text-xs sm:text-sm uppercase tracking-wider">
                        <Mail size={18} className="text-[#cfbe91]" />
                        <span>{t.cvNoticeTitle}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#1a1c19]/85 leading-relaxed mb-4">
                        {t.cvNoticeText}
                      </p>
                      <a
                        href={`mailto:info@1001nuit.com?cc=qinxuxin@gmail.com&subject=${encodeURIComponent(`[CV / Resume] ${formData.position} - ${formData.name}`)}&body=${encodeURIComponent(lang === "fr" ? `Bonjour équipe 1001 Nuits,\n\nVeuillez trouver ci-joint mon CV pour le poste de ${formData.position}.\n\nNom: ${formData.name}\nTéléphone: ${formData.phone}\nCourriel: ${formData.email}\n\nMerci,\n${formData.name}` : `Hello 1001 Nuits Team,\n\nPlease find attached my CV / Resume for the ${formData.position} position.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nThank you,\n${formData.name}`)}`}
                        className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl bg-[#1a1c19] text-[#efe7d2] hover:bg-[#cfbe91] hover:text-[#0a0b0a] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                      >
                        <Mail size={16} />
                        <span>{t.cvNoticeBtn}</span>
                      </a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                      <button
                        onClick={() => {
                          setStatus("idle");
                          setFormData({
                            name: "",
                            phone: "",
                            email: "",
                            position: "Sushi Trainee / Apprentice",
                          });
                        }}
                        className="py-3 px-6 rounded-xl border border-[#1a1c19]/20 text-xs font-bold uppercase tracking-widest text-[#1a1c19] hover:bg-[#f3efe4] transition-colors"
                      >
                        {t.submitAnotherBtn}
                      </button>
                      <button
                        onClick={() => navigate("/")}
                        className="py-3 px-6 rounded-xl bg-[#1a1c19] text-[#efe7d2] hover:bg-[#cfbe91] hover:text-[#0a0b0a] text-xs font-bold uppercase tracking-widest transition-colors shadow-md"
                      >
                        {t.returnHomeBtn}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    {/* Error Notice */}
                    {status === "error" && errorMessage && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
                        <AlertCircle size={20} className="shrink-0 mt-0.5 text-red-500" />
                        <div>{errorMessage}</div>
                      </div>
                    )}

                    {/* 1. Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19]/70 mb-2">
                        {t.fullNameLabel} <span className="text-[#cfbe91]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t.fullNamePlaceholder}
                        className="w-full bg-[#f8f6f0] border border-[#1a1c19]/15 rounded-xl px-4 py-3 text-sm text-[#1a1c19] placeholder-[#1a1c19]/35 focus:outline-none focus:ring-2 focus:ring-[#cfbe91] focus:bg-white transition-all"
                      />
                    </div>

                    {/* 2. Phone Number & 3. Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19]/70 mb-2">
                          {t.phoneLabel} <span className="text-[#cfbe91]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={t.phonePlaceholder}
                          className="w-full bg-[#f8f6f0] border border-[#1a1c19]/15 rounded-xl px-4 py-3 text-sm text-[#1a1c19] placeholder-[#1a1c19]/35 focus:outline-none focus:ring-2 focus:ring-[#cfbe91] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19]/70 mb-2">
                          {t.emailLabel} <span className="text-[#cfbe91]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={t.emailPlaceholder}
                          className="w-full bg-[#f8f6f0] border border-[#1a1c19]/15 rounded-xl px-4 py-3 text-sm text-[#1a1c19] placeholder-[#1a1c19]/35 focus:outline-none focus:ring-2 focus:ring-[#cfbe91] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* 4. Position Applied For */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19]/70 mb-2">
                        {t.positionLabel} <span className="text-[#cfbe91]">*</span>
                      </label>
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full bg-[#f8f6f0] border border-[#1a1c19]/15 rounded-xl px-4 py-3 text-sm text-[#1a1c19] focus:outline-none focus:ring-2 focus:ring-[#cfbe91] focus:bg-white transition-all cursor-pointer"
                      >
                        <option value={lang === "fr" ? "Stagiaire / Apprenti Sushi" : "Sushi Trainee / Apprentice"}>
                          {lang === "fr" ? "Stagiaire / Apprenti Sushi" : "Sushi Trainee / Apprentice"}
                        </option>
                        <option value={lang === "fr" ? "Chef Grilladin & Cuisinier de Ligne" : "Kitchen Grill Specialist & Line Cook"}>
                          {lang === "fr" ? "Chef Grilladin & Cuisinier de Ligne" : "Kitchen Grill Specialist & Line Cook"}
                        </option>
                        <option value={lang === "fr" ? "Serveur / Serveuse" : "Server / Waitstaff"}>
                          {lang === "fr" ? "Serveur / Serveuse" : "Server / Waitstaff"}
                        </option>
                        <option value={lang === "fr" ? "Plongeur / Aide-cuisine" : "Dishwasher / Kitchen Porter"}>
                          {lang === "fr" ? "Plongeur / Aide-cuisine" : "Dishwasher / Kitchen Porter"}
                        </option>
                        <option value={lang === "fr" ? "Aide-serveur / Commis Débarrasseur" : "Busboy / Commis Débarrasseur"}>
                          {lang === "fr" ? "Aide-serveur / Commis Débarrasseur" : "Busboy / Commis Débarrasseur"}
                        </option>
                        <option value={lang === "fr" ? "Candidature Générale" : "General Application"}>
                          {lang === "fr" ? "Candidature Générale" : "General Application"}
                        </option>
                      </select>
                    </div>



                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full py-4 px-6 rounded-xl bg-[#1a1c19] text-[#efe7d2] hover:bg-[#cfbe91] hover:text-[#0a0b0a] font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            <span>{t.submittingBtn}</span>
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            <span>{t.submitBtn}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ── Why Work With Us Section ────────────────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#333330]/70 bg-[#0d0e0c]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#efe7d2] mb-3">
                {t.perksTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: t.perk1Title, desc: t.perk1Desc, icon: Flame },
                { title: t.perk2Title, desc: t.perk2Desc, icon: UserCheck },
                { title: t.perk3Title, desc: t.perk3Desc, icon: Sparkles },
                { title: t.perk4Title, desc: t.perk4Desc, icon: Utensils },
              ].map((perk, idx) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#141513] border border-[#333330] flex flex-col gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1f211c] text-[#cfbe91] flex items-center justify-center border border-[#cfbe91]/20">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-serif text-lg text-[#efe7d2] font-semibold">
                      {perk.title}
                    </h3>
                    <p className="text-xs text-[#efe7d2]/60 leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Location & Contact Info */}
            <div className="mt-12 p-6 rounded-2xl bg-[#141513] border border-[#333330] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#cfbe91] shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-base text-[#efe7d2] font-semibold">
                    {t.locationTitle}
                  </h4>
                  <p className="text-xs text-[#efe7d2]/60">{t.locationAddress}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#efe7d2]/80">
                <a
                  href={`tel:${RESTAURANT_PHONE.replace(/[^\d]/g, "")}`}
                  className="flex items-center gap-1.5 hover:text-[#cfbe91] transition-colors"
                >
                  <Phone size={14} className="text-[#cfbe91]" />
                  <span>{RESTAURANT_PHONE}</span>
                </a>
                <span className="text-[#333330]">•</span>
                <a
                  href={`mailto:${RESTAURANT_EMAIL}`}
                  className="flex items-center gap-1.5 hover:text-[#cfbe91] transition-colors"
                >
                  <Mail size={14} className="text-[#cfbe91]" />
                  <span>{RESTAURANT_EMAIL}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Compact Gallery Showcase (Small Format, At the Very Bottom) ── */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0a0b0a]">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#cfbe91]">
                {t.galleryTitle}
              </span>
              <span className="text-[10px] text-[#efe7d2]/40 tracking-wider">
                1001 Nuits • Dollard-des-Ormeaux
              </span>
            </div>

            {/* Small format thumbnails — subtle and noticeable without being oversized */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                { src: "/HeroShot.webp", label: lang === "fr" ? "Salle & Ambiance" : "Dining Ambiance" },
                { src: "/catering-events.jpg", label: lang === "fr" ? "Plateaux & Sushis" : "Culinary Offerings" },
                { src: "/heritage-dish.webp", label: lang === "fr" ? "Cuisine & Équipe" : "Kitchen Craft" },
                { src: "/hero.webp", label: lang === "fr" ? "Saveurs Halal" : "100% Halal Craft" },
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-xl overflow-hidden border border-[#333330] bg-[#141513] aspect-[4/3]"
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                  <span className="absolute bottom-2 left-2 right-2 text-[10px] font-semibold text-[#efe7d2] truncate">
                    {img.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="bg-[#0a0b0a] text-[#efe7d2] py-12 border-t border-[#333330] text-center">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            to="/"
            className="font-serif text-3xl tracking-[0.2em] uppercase text-[#efe7d2] hover:text-[#cfbe91] transition-colors inline-block mb-4"
          >
            <span className="lining-nums">1001</span> <span>NUITS</span>
          </Link>

          <p className="text-xs text-[#efe7d2]/60 mb-2">
            {RESTAURANT_ADDRESS} • {RESTAURANT_PHONE}
          </p>

          <p className="text-[10px] uppercase tracking-widest text-[#efe7d2]/40">
            © {new Date().getFullYear()} 1001 Nuits.{" "}
            {lang === "fr" ? "Tous droits réservés." : "All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  );
}
