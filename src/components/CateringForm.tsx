import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Users, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  Heart, 
  GraduationCap, 
  Cake, 
  PartyPopper,
  UtensilsCrossed,
  Loader2
} from 'lucide-react';

interface CateringFormProps {
  lang: 'fr' | 'en';
}

const FORMSUBMIT_URL = "https://formsubmit.co/ajax/info@1001nuit.com";

export default function CateringForm({ lang }: CateringFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: 'marriage',
    eventDate: '',
    guestCount: '25',
    serviceType: 'catering_delivery',
    notes: ''
  });

  // Calculate minimum selectable date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOccasionSelect = (occasionValue: string) => {
    setFormData(prev => ({ ...prev, occasion: occasionValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const occasionLabels: Record<string, { en: string; fr: string }> = {
      marriage: { en: 'Marriage / Wedding', fr: 'Mariage / Fiançailles' },
      graduation: { en: 'Graduation Celebration', fr: 'Remise de diplôme' },
      birthday: { en: 'Birthday Party', fr: 'Fête d’anniversaire' },
      corporate: { en: 'Corporate / Business Event', fr: 'Événement d’entreprise' },
      family: { en: 'Family Celebration', fr: 'Fête de famille' },
      other: { en: 'Other Special Celebration', fr: 'Autre célébration spéciale' }
    };

    const serviceLabels: Record<string, { en: string; fr: string }> = {
      catering_delivery: { en: 'Catering & Food Delivery', fr: 'Service traiteur / Livraison' },
      private_dining: { en: 'Private Dining at Restaurant', fr: 'Salle privée au restaurant' },
      buffet_platters: { en: 'Custom Buffet & Trays', fr: 'Buffet & plateaux sur mesure' },
      sushi_boats: { en: 'Sushi Boats & Specialty Platters', fr: 'Bateaux de sushis & plateaux de fête' }
    };

    const payload = {
      _subject: lang === 'fr' 
        ? `[1001 Nuits] Demande de Traiteur pour ${occasionLabels[formData.occasion]?.fr || formData.occasion} - ${formData.name}`
        : `[1001 Nuits] Catering Request for ${occasionLabels[formData.occasion]?.en || formData.occasion} - ${formData.name}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: formData.email,
      'Client Name / Nom': formData.name,
      'Email / Courriel': formData.email,
      'Phone / Téléphone': formData.phone,
      'Occasion / Événement': lang === 'fr' ? occasionLabels[formData.occasion]?.fr : occasionLabels[formData.occasion]?.en,
      'Event Date / Date': formData.eventDate || (lang === 'fr' ? 'À confirmer' : 'To be confirmed'),
      'Estimated Guests / Nombre d’invités': formData.guestCount,
      'Service Type / Type de service': lang === 'fr' ? serviceLabels[formData.serviceType]?.fr : serviceLabels[formData.serviceType]?.en,
      'Special Requests & Dietary / Demandes & Régimes': formData.notes || (lang === 'fr' ? 'Aucune note' : 'None provided'),
      'Submitted At': new Date().toLocaleString()
    };

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || data.message)) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(
          data.message || (lang === 'fr' 
            ? "Une erreur s'est produite lors de l'envoi. Veuillez vérifier vos informations ou nous appeler directement." 
            : "An error occurred while sending. Please verify your details or call us directly.")
        );
      }
    } catch (err) {
      console.error('Catering Form Submit Error:', err);
      setStatus('error');
      setErrorMessage(
        lang === 'fr'
          ? "Impossible de contacter le serveur d'envoi. Veuillez réessayer ou nous joindre par téléphone au (514) 421-1114."
          : "Unable to reach the submission server. Please try again or call us at (514) 421-1114."
      );
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({
      name: '',
      email: '',
      phone: '',
      occasion: 'marriage',
      eventDate: '',
      guestCount: '25',
      serviceType: 'catering_delivery',
      notes: ''
    });
  };

  const occasions = [
    {
      id: 'marriage',
      icon: Heart,
      titleEn: 'Marriage / Wedding',
      titleFr: 'Mariage / Fiançailles'
    },
    {
      id: 'graduation',
      icon: GraduationCap,
      titleEn: 'Graduation',
      titleFr: 'Remise de Diplôme'
    },
    {
      id: 'birthday',
      icon: Cake,
      titleEn: 'Birthday',
      titleFr: 'Anniversaire'
    },
    {
      id: 'other',
      icon: PartyPopper,
      titleEn: 'Any Celebration',
      titleFr: 'Autre Célébration'
    }
  ];

  return (
    <div id="catering-form" className="w-full bg-[#141513] border border-[#cfbe91]/30 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
      {/* Decorative Gold Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#cfbe91]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#cfbe91]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="relative z-10">
        {/* Form Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#cfbe91]/15 border border-[#cfbe91]/30 text-[#cfbe91] text-xs uppercase tracking-widest font-bold mb-4">
            <UtensilsCrossed size={14} />
            <span>{lang === 'fr' ? 'Service Traiteur & Réceptions' : 'Catering & Special Events'}</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl text-[#efe7d2] mb-3 leading-tight">
            {lang === 'fr' ? 'Commandez pour votre Jour Spécial' : 'Order Food for Your Special Day'}
          </h3>

          <p className="text-sm sm:text-base text-[#efe7d2]/70 leading-relaxed font-sans">
            {lang === 'fr'
              ? 'Mariage, remise de diplôme, anniversaire ou réception privée : transmettez-nous vos informations et recevez une proposition sur mesure préparée avec notre cuisine 100% halal.'
              : 'Marriage, graduation, birthday, or private celebration: share your event details with us and our culinary team will curate the perfect 100% Halal feast for your guests.'}
          </p>
        </div>

        {/* Occasion Quick-Select Pills */}
        <div className="mb-8">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#cfbe91] mb-3 text-center sm:text-left">
            {lang === 'fr' ? '1. Choisissez votre type d’occasion' : '1. Choose your special occasion'}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {occasions.map((occ) => {
              const Icon = occ.icon;
              const isSelected = formData.occasion === occ.id;
              return (
                <button
                  key={occ.id}
                  type="button"
                  onClick={() => handleOccasionSelect(occ.id)}
                  className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border transition-all duration-300 text-center gap-2 ${
                    isSelected
                      ? 'bg-[#cfbe91] text-[#0a0b0a] border-[#cfbe91] shadow-lg shadow-[#cfbe91]/20 font-bold scale-[1.02]'
                      : 'bg-[#1a1c19]/80 text-[#efe7d2]/80 border-[#333330] hover:border-[#cfbe91]/50 hover:bg-[#1a1c19]'
                  }`}
                >
                  <Icon size={20} className={isSelected ? 'text-[#0a0b0a]' : 'text-[#cfbe91]'} />
                  <span className="text-xs font-medium">
                    {lang === 'fr' ? occ.titleFr : occ.titleEn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Success State */}
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#1a1c19] border border-[#cfbe91]/60 rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto shadow-2xl"
            >
              <div className="w-20 h-20 bg-[#cfbe91]/20 border border-[#cfbe91] rounded-full flex items-center justify-center mx-auto mb-6 text-[#cfbe91]">
                <CheckCircle2 size={40} />
              </div>

              <h4 className="font-serif text-3xl text-[#efe7d2] mb-3">
                {lang === 'fr' ? 'Demande reçue avec succès !' : 'Request Received Successfully!'}
              </h4>

              <p className="text-sm sm:text-base text-[#efe7d2]/80 leading-relaxed font-sans mb-4">
                {lang === 'fr'
                  ? `Merci ${formData.name || ''}. Votre demande de service traiteur pour votre événement a bien été transmise à notre équipe (info@1001nuit.com).`
                  : `Thank you ${formData.name || ''}! Your catering inquiry for your special day has been sent to our team (info@1001nuit.com).`}
              </p>

              <p className="text-xs text-[#cfbe91] font-medium mb-8">
                {lang === 'fr'
                  ? 'Nous examinerons vos besoins et vous recontacterons très rapidement pour confirmer le menu.'
                  : 'We will review your requirements and reach out to you promptly to finalize your menu.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-[#cfbe91] text-[#0a0b0a] font-bold text-xs uppercase tracking-wider hover:bg-[#d8c89c] transition-colors"
                >
                  {lang === 'fr' ? 'Faire une autre demande' : 'Submit Another Request'}
                </button>

                <a
                  href="tel:+15144211114"
                  className="px-6 py-3 rounded-xl border border-[#efe7d2]/30 text-[#efe7d2] font-bold text-xs uppercase tracking-wider hover:border-[#cfbe91] hover:text-[#cfbe91] transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone size={14} />
                  <span>(514) 421-1114</span>
                </a>
              </div>
            </motion.div>
          ) : (
            /* The Interactive Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#cfbe91] mb-2">
                {lang === 'fr' ? '2. Coordonnées & Détails de l’événement' : '2. Contact Information & Event Details'}
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#efe7d2]/80 flex items-center gap-2">
                    <User size={14} className="text-[#cfbe91]" />
                    <span>{lang === 'fr' ? 'Nom complet *' : 'Full Name *'}</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={lang === 'fr' ? 'Ex: Sarah Tremblay' : 'Ex: Sarah Jenkins'}
                    className="w-full bg-[#1f211e] border border-[#333330] rounded-xl px-4 py-3.5 text-[#efe7d2] placeholder:text-[#efe7d2]/30 focus:border-[#cfbe91] focus:outline-none focus:ring-1 focus:ring-[#cfbe91] transition-all text-sm"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#efe7d2]/80 flex items-center gap-2">
                    <Mail size={14} className="text-[#cfbe91]" />
                    <span>{lang === 'fr' ? 'Adresse courriel *' : 'Email Address *'}</span>
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={lang === 'fr' ? 'sarah@exemple.com' : 'sarah@example.com'}
                    className="w-full bg-[#1f211e] border border-[#333330] rounded-xl px-4 py-3.5 text-[#efe7d2] placeholder:text-[#efe7d2]/30 focus:border-[#cfbe91] focus:outline-none focus:ring-1 focus:ring-[#cfbe91] transition-all text-sm"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#efe7d2]/80 flex items-center gap-2">
                    <Phone size={14} className="text-[#cfbe91]" />
                    <span>{lang === 'fr' ? 'Numéro de téléphone *' : 'Phone Number *'}</span>
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(514) 123-4567"
                    className="w-full bg-[#1f211e] border border-[#333330] rounded-xl px-4 py-3.5 text-[#efe7d2] placeholder:text-[#efe7d2]/30 focus:border-[#cfbe91] focus:outline-none focus:ring-1 focus:ring-[#cfbe91] transition-all text-sm"
                  />
                </div>

                {/* Event Date */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#efe7d2]/80 flex items-center gap-2">
                    <Calendar size={14} className="text-[#cfbe91]" />
                    <span>{lang === 'fr' ? 'Date de l’événement' : 'Event Date'}</span>
                  </label>
                  <input
                    type="date"
                    min={minDate}
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full bg-[#1f211e] border border-[#333330] rounded-xl px-4 py-3.5 text-[#efe7d2] focus:border-[#cfbe91] focus:outline-none focus:ring-1 focus:ring-[#cfbe91] transition-all text-sm"
                  />
                </div>

                {/* Guest Count */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#efe7d2]/80 flex items-center gap-2">
                    <Users size={14} className="text-[#cfbe91]" />
                    <span>{lang === 'fr' ? 'Nombre d’invités estimé' : 'Estimated Guest Count'}</span>
                  </label>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="w-full bg-[#1f211e] border border-[#333330] rounded-xl px-4 py-3.5 text-[#efe7d2] focus:border-[#cfbe91] focus:outline-none focus:ring-1 focus:ring-[#cfbe91] transition-all text-sm cursor-pointer"
                  >
                    <option value="10-20">10 – 20 {lang === 'fr' ? 'personnes' : 'guests'}</option>
                    <option value="20-50">20 – 50 {lang === 'fr' ? 'personnes' : 'guests'}</option>
                    <option value="50-100">50 – 100 {lang === 'fr' ? 'personnes' : 'guests'}</option>
                    <option value="100-200">100 – 200 {lang === 'fr' ? 'personnes' : 'guests'}</option>
                    <option value="200+">200+ {lang === 'fr' ? 'personnes (Grand événement)' : 'guests (Large gathering)'}</option>
                  </select>
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#efe7d2]/80 flex items-center gap-2">
                    <Sparkles size={14} className="text-[#cfbe91]" />
                    <span>{lang === 'fr' ? 'Formule de service souhaitée' : 'Preferred Service Style'}</span>
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full bg-[#1f211e] border border-[#333330] rounded-xl px-4 py-3.5 text-[#efe7d2] focus:border-[#cfbe91] focus:outline-none focus:ring-1 focus:ring-[#cfbe91] transition-all text-sm cursor-pointer"
                  >
                    <option value="catering_delivery">
                      {lang === 'fr' ? 'Traiteur & Livraison sur les lieux' : 'Catering & Venue Delivery'}
                    </option>
                    <option value="private_dining">
                      {lang === 'fr' ? 'Salle privée au restaurant 1001 Nuits' : 'Private Dining Room at 1001 Nuits'}
                    </option>
                    <option value="buffet_platters">
                      {lang === 'fr' ? 'Grands plateaux buffet & plats chauds' : 'Large Buffet Trays & Hot Specialties'}
                    </option>
                    <option value="sushi_boats">
                      {lang === 'fr' ? 'Bateaux de sushis & assortiments signatures' : 'Sushi Boats & Signature Platters'}
                    </option>
                  </select>
                </div>

                {/* Special Requests / Notes */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-semibold text-[#efe7d2]/80 flex items-center gap-2">
                    <MessageSquare size={14} className="text-[#cfbe91]" />
                    <span>
                      {lang === 'fr'
                        ? 'Détails, préférences culinaires ou restrictions'
                        : 'Food Preferences, Special Requests or Dietary Needs'}
                    </span>
                  </label>
                  <textarea
                    rows={3}
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder={
                      lang === 'fr'
                        ? 'Décrivez vos envies de menu (bœuf, poulet, sushis, végétarien), allergies ou demandes particulières…'
                        : 'Describe your menu ideas (beef, chicken, sushi platters, vegetarian options), allergies, or specific schedule…'
                    }
                    className="w-full bg-[#1f211e] border border-[#333330] rounded-xl px-4 py-3 text-[#efe7d2] placeholder:text-[#efe7d2]/30 focus:border-[#cfbe91] focus:outline-none focus:ring-1 focus:ring-[#cfbe91] transition-all text-sm resize-none"
                  />
                </div>
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-200 p-4 rounded-xl flex items-start gap-3 text-xs sm:text-sm">
                  <AlertCircle size={18} className="shrink-0 text-red-400 mt-0.5" />
                  <div className="flex-1">
                    <p>{errorMessage}</p>
                    <p className="mt-1 opacity-80">
                      {lang === 'fr' ? 'Vous pouvez nous joindre directement au :' : 'You can also reach us directly at:'}{' '}
                      <a href="tel:+15144211114" className="underline font-bold text-[#cfbe91]">
                        (514) 421-1114
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-[#efe7d2]/50 order-2 sm:order-1 text-center sm:text-left">
                  {lang === 'fr'
                    ? '🔒 Les demandes sont envoyées directement à info@1001nuit.com.'
                    : '🔒 Inquiries are delivered directly to info@1001nuit.com.'}
                </p>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-3 order-1 sm:order-2 ${
                    status === 'submitting'
                      ? 'bg-[#cfbe91]/50 text-[#0a0b0a] cursor-not-allowed'
                      : 'bg-[#cfbe91] text-[#0a0b0a] hover:bg-[#dbcb9d] hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]'
                  }`}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>{lang === 'fr' ? 'Envoi en cours…' : 'Sending Inquiry…'}</span>
                    </>
                  ) : (
                    <>
                      <span>{lang === 'fr' ? 'Envoyer la demande traiteur' : 'Send Catering Inquiry'}</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
