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
  MapPin,
  Truck,
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
    deliveryLocation: '',
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
      catering_delivery: { en: 'Catering Delivery to Venue / Celebration', fr: 'Livraison de repas sur le lieu de l’événement' },
      buffet_platters: { en: 'Custom Hot Buffet & Party Trays', fr: 'Grands plateaux buffet & plats chauds traiteur' },
      sushi_boats: { en: 'Sushi Boats & Signature Platters', fr: 'Bateaux de sushis & assortiments signatures' },
      full_catering: { en: 'Complete Celebration Feast (Hot Dishes + Sushi Platters)', fr: 'Formule complète (Plats chauds + Plateaux de sushis)' }
    };

    const payload = {
      _subject: lang === 'fr' 
        ? `[1001 Nuits] Demande de Devis Traiteur (${occasionLabels[formData.occasion]?.fr || formData.occasion}) - ${formData.name}`
        : `[1001 Nuits] Catering Food Inquiry (${occasionLabels[formData.occasion]?.en || formData.occasion}) - ${formData.name}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: formData.email,
      'Client Name / Nom': formData.name,
      'Email / Courriel': formData.email,
      'Phone / Téléphone': formData.phone,
      'Occasion / Événement': lang === 'fr' ? occasionLabels[formData.occasion]?.fr : occasionLabels[formData.occasion]?.en,
      'Event Date / Date de l’événement': formData.eventDate || (lang === 'fr' ? 'À confirmer' : 'To be confirmed'),
      'Delivery Location / Lieu de livraison': formData.deliveryLocation || (lang === 'fr' ? 'Non spécifié' : 'Not specified'),
      'Estimated Guests / Nombre d’invités': formData.guestCount,
      'Food Style / Formule de repas': lang === 'fr' ? serviceLabels[formData.serviceType]?.fr : serviceLabels[formData.serviceType]?.en,
      'Special Requests & Dietary / Préférences & Régimes': formData.notes || (lang === 'fr' ? 'Aucune note' : 'None provided'),
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
      deliveryLocation: '',
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
            <Truck size={14} />
            <span>{lang === 'fr' ? 'Service Traiteur • Livraison sur vos Lieux' : 'Catering Service • Delivery to Your Venue'}</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl text-[#efe7d2] mb-3 leading-tight">
            {lang === 'fr' ? 'Demande de Devis Traiteur pour votre Fête' : 'Inquire for Food Delivery to Your Celebration'}
          </h3>

          <p className="text-sm sm:text-base text-[#efe7d2]/70 leading-relaxed font-sans">
            {lang === 'fr'
              ? 'Mariage, remise de diplôme, anniversaire ou célébration : transmettez-nous les détails de votre événement et faites livrer un délicieux festin 100% halal directement sur le lieu de votre célébration.'
              : 'Marriage, graduation, birthday, or private gathering: tell us about your event and our culinary team will deliver fresh, tailored 100% Halal feast platters directly to your venue or celebration.'}
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
                {lang === 'fr' ? 'Demande de traiteur reçue !' : 'Catering Inquiry Received!'}
              </h4>

              <p className="text-sm sm:text-base text-[#efe7d2]/80 leading-relaxed font-sans mb-4">
                {lang === 'fr'
                  ? `Merci ${formData.name || ''}. Votre demande de devis traiteur pour livraison sur votre lieu d'événement (${formData.deliveryLocation || 'lieu de réception'}) a bien été transmise à notre équipe (info@1001nuit.com).`
                  : `Thank you ${formData.name || ''}! Your catering inquiry for food delivery to your venue (${formData.deliveryLocation || 'event location'}) has been delivered to our team (info@1001nuit.com).`}
              </p>

              <p className="text-xs text-[#cfbe91] font-medium mb-8">
                {lang === 'fr'
                  ? 'Notre chef traiteur examinera votre demande et vous contactera rapidement pour confirmer le menu et le devis.'
                  : 'Our catering chef will review your request and reach out promptly with a custom quote and menu breakdown.'}
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
                {lang === 'fr' ? '2. Coordonnées & Lieu de Livraison' : '2. Contact & Delivery Details'}
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

                {/* Venue / Delivery Location */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#efe7d2]/80 flex items-center gap-2">
                    <MapPin size={14} className="text-[#cfbe91]" />
                    <span>{lang === 'fr' ? 'Lieu ou ville de livraison / réception *' : 'Venue / Delivery Location or City *'}</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={handleInputChange}
                    placeholder={lang === 'fr' ? 'Ex: DDO, Montréal, Laval, ou adresse de la salle' : 'Ex: DDO, Montreal, Laval, or venue address'}
                    className="w-full bg-[#1f211e] border border-[#333330] rounded-xl px-4 py-3.5 text-[#efe7d2] placeholder:text-[#efe7d2]/30 focus:border-[#cfbe91] focus:outline-none focus:ring-1 focus:ring-[#cfbe91] transition-all text-sm"
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

                {/* Preferred Food / Service Style */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-semibold text-[#efe7d2]/80 flex items-center gap-2">
                    <Sparkles size={14} className="text-[#cfbe91]" />
                    <span>{lang === 'fr' ? 'Formule de repas souhaitée' : 'Preferred Food Style'}</span>
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full bg-[#1f211e] border border-[#333330] rounded-xl px-4 py-3.5 text-[#efe7d2] focus:border-[#cfbe91] focus:outline-none focus:ring-1 focus:ring-[#cfbe91] transition-all text-sm cursor-pointer"
                  >
                    <option value="catering_delivery">
                      {lang === 'fr' ? 'Livraison traiteur sur le lieu de l’événement' : 'Catering Food Delivery to Venue / Celebration'}
                    </option>
                    <option value="buffet_platters">
                      {lang === 'fr' ? 'Grands plateaux buffet & plats chauds traiteur' : 'Large Hot Food Buffet & Party Trays'}
                    </option>
                    <option value="sushi_boats">
                      {lang === 'fr' ? 'Bateaux de sushis & assortiments signatures' : 'Sushi Boats & Signature Platters'}
                    </option>
                    <option value="full_catering">
                      {lang === 'fr' ? 'Formule festin complète (Plats chauds + Plateaux de sushis)' : 'Complete Celebration Feast (Hot Dishes + Sushi Platters)'}
                    </option>
                  </select>
                </div>

                {/* Special Requests / Notes */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-semibold text-[#efe7d2]/80 flex items-center gap-2">
                    <MessageSquare size={14} className="text-[#cfbe91]" />
                    <span>
                      {lang === 'fr'
                        ? 'Envies de menu, préférences culinaires ou restrictions'
                        : 'Menu Ideas, Food Preferences or Dietary Needs'}
                    </span>
                  </label>
                  <textarea
                    rows={3}
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder={
                      lang === 'fr'
                        ? 'Décrivez vos envies de menu (poulet général tao, bœuf, sushis, nouilles, végétarien), allergies ou heure de livraison souhaitée…'
                        : 'Describe your food ideas (general tao chicken, beef ribs, sushi platters, noodles, vegetarian dishes), allergies, or desired delivery time…'
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
                      {lang === 'fr' ? 'Vous pouvez également nous joindre directement au :' : 'You can also reach our catering line directly at:'}{' '}
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
                    ? '🔒 Les demandes de devis sont envoyées directement à info@1001nuit.com.'
                    : '🔒 Catering inquiries are delivered directly to info@1001nuit.com.'}
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
                      <span>{lang === 'fr' ? 'Envoi du devis…' : 'Sending Inquiry…'}</span>
                    </>
                  ) : (
                    <>
                      <span>{lang === 'fr' ? 'Demander un devis traiteur' : 'Send Catering Inquiry'}</span>
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
