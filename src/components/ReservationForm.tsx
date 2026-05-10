import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, GlassWater } from 'lucide-react';

interface ReservationFormProps {
  lang: 'fr' | 'en';
}

const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/o7aUwpKbtkP4AOP0pEjC/webhook-trigger/57c2af5a-fa80-4563-ba86-b2cf036df995";

export default function ReservationForm({ lang }: ReservationFormProps) {
  const [bookingType, setBookingType] = useState<'dining' | 'event'>('dining');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    eventType: '',
    requests: ''
  });

  useEffect(() => {
    const handleSetBookingType = (e: any) => {
      if (e.detail === 'event' || e.detail === 'dining') {
        setBookingType(e.detail);
        setFormData(prev => ({ ...prev, guests: e.detail === 'event' ? '40' : '2' }));
      }
    };
    document.addEventListener('set-booking-type', handleSetBookingType);
    return () => document.removeEventListener('set-booking-type', handleSetBookingType);
  }, []);

  // Calculate tomorrow's date for the min date attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          bookingType,
          language: lang,
          submittedAt: new Date().toISOString()
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '2',
          eventType: '',
          requests: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const minGuests = bookingType === 'dining' ? 1 : 40;
  const maxGuests = bookingType === 'dining' ? 100 : 500;


  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="bg-green-50 text-green-900 p-8 rounded-2xl text-center border border-green-200"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl font-serif mb-2">
          {lang === 'fr' ? 'Demande envoyée avec succès' : 'Request sent successfully'}
        </h3>
        <p className="opacity-80">
          {lang === 'fr' 
            ? 'Nous vous contacterons bientôt pour confirmer votre réservation.' 
            : 'We will contact you shortly to confirm your reservation.'}
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-bold uppercase tracking-wider text-green-700 hover:text-green-900"
        >
          {lang === 'fr' ? 'Faire une autre réservation' : 'Make another reservation'}
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#1a1c19]/5 max-w-2xl mx-auto text-left relative z-10">
      
      {/* Type Selector */}
      <div className="flex bg-[#f3f0e8] p-1 rounded-full mb-8">
        <button
          type="button"
          onClick={() => {
            setBookingType('dining');
            setFormData(prev => ({ ...prev, guests: '2' }));
          }}
          className={`flex-1 py-3 px-6 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
            bookingType === 'dining' 
              ? 'bg-[#cfbe91] text-black shadow-md' 
              : 'text-[#1a1c19]/60 hover:text-[#1a1c19]'
          }`}
        >
          {lang === 'fr' ? 'Souper' : 'Dining In'}
        </button>
        <button
          type="button"
          onClick={() => {
            setBookingType('event');
            setFormData(prev => ({ ...prev, guests: '40' }));
          }}
          className={`flex-1 py-3 px-6 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
            bookingType === 'event' 
              ? 'bg-[#cfbe91] text-black shadow-md' 
              : 'text-[#1a1c19]/60 hover:text-[#1a1c19]'
          }`}
        >
          {lang === 'fr' ? 'Événement' : 'Event Booking'}
        </button>
      </div>

      <p className="text-sm text-[#1a1c19]/80 text-center mb-8 border border-[#cfbe91]/30 bg-[#f8f6f0] p-4 rounded-xl leading-relaxed">
        {lang === 'fr' 
          ? 'Pour vérifier s\'il y a une réservation disponible aujourd\'hui, vous pouvez toujours nous appeler au '
          : 'If you ever want to know if there is a reservation today, you can always call us to verify at '}
        <a href="tel:+15141234567" className="font-bold text-[#1a1c19] border-b-2 border-[#cfbe91] hover:text-[#cfbe91] transition-colors inline-block whitespace-nowrap">
          (514) 123-4567
        </a>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Name */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#1a1c19]/60 flex items-center gap-2">
              <User size={14} />
              {lang === 'fr' ? 'Nom complet' : 'Full Name'}
            </label>
            <input 
              type="text" required name="name" value={formData.name} onChange={handleInputChange}
              className="w-full bg-[#f8f6f0] border-none rounded-xl px-4 py-3 text-[#1a1c19] focus:ring-2 focus:ring-[#cfbe91] transition-shadow placeholder:text-[#1a1c19]/30"
              placeholder={lang === 'fr' ? 'Jean-Paul' : 'John Doe'}
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#1a1c19]/60 flex items-center gap-2">
              <Phone size={14} />
              {lang === 'fr' ? 'Téléphone' : 'Phone Number'}
            </label>
            <input 
              type="tel" required name="phone" value={formData.phone} onChange={handleInputChange}
              className="w-full bg-[#f8f6f0] border-none rounded-xl px-4 py-3 text-[#1a1c19] focus:ring-2 focus:ring-[#cfbe91] transition-shadow placeholder:text-[#1a1c19]/30"
              placeholder="(514) 123-4567"
            />
          </div>

          {/* Email (Full Width) */}
          {bookingType === 'event' && (
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#1a1c19]/60 flex items-center gap-2">
                <Mail size={14} />
                {lang === 'fr' ? 'Courriel' : 'Email Address'}
              </label>
              <input 
                type="email" required name="email" value={formData.email} onChange={handleInputChange}
                className="w-full bg-[#f8f6f0] border-none rounded-xl px-4 py-3 text-[#1a1c19] focus:ring-2 focus:ring-[#cfbe91] transition-shadow placeholder:text-[#1a1c19]/30"
                placeholder={lang === 'fr' ? 'jean@exemple.com' : 'john@example.com'}
              />
            </div>
          )}

          {/* Date */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#1a1c19]/60 flex items-center gap-2">
              <Calendar size={14} />
              {lang === 'fr' ? 'Date' : 'Date'}
            </label>
            <input 
              type="date" required min={minDate} name="date" value={formData.date} onChange={handleInputChange}
              className="w-full bg-[#f8f6f0] border-none rounded-xl px-4 py-3 text-[#1a1c19] focus:ring-2 focus:ring-[#cfbe91] transition-shadow"
            />
            <p className="text-[10px] text-[#1a1c19]/50 mt-1">
              {lang === 'fr' ? 'Réservations à partir de demain' : 'Reservations starting tomorrow'}
            </p>
          </div>

          {/* Time */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#1a1c19]/60 flex items-center gap-2">
              <Clock size={14} />
              {lang === 'fr' ? 'Heure' : 'Time'}
            </label>
            <select 
              required name="time" value={formData.time} onChange={handleInputChange}
              className="w-full bg-[#f8f6f0] border-none rounded-xl px-4 py-3 text-[#1a1c19] focus:ring-2 focus:ring-[#cfbe91] transition-shadow appearance-none"
            >
              <option value="" disabled>-- : --</option>
              <option value="17:00">17:00 (5:00 PM)</option>
              <option value="17:30">17:30 (5:30 PM)</option>
              <option value="18:00">18:00 (6:00 PM)</option>
              <option value="18:30">18:30 (6:30 PM)</option>
              <option value="19:00">19:00 (7:00 PM)</option>
              <option value="19:30">19:30 (7:30 PM)</option>
              <option value="20:00">20:00 (8:00 PM)</option>
              <option value="20:30">20:30 (8:30 PM)</option>
              <option value="21:00">21:00 (9:00 PM)</option>
              <option value="21:30">21:30 (9:30 PM)</option>
            </select>
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#1a1c19]/60 flex items-center gap-2">
              <Users size={14} />
              {lang === 'fr' ? 'Invités' : 'Guests'}
            </label>
            <input 
              type="number" required min={minGuests} max={maxGuests} name="guests" value={formData.guests} onChange={handleInputChange}
              className="w-full bg-[#f8f6f0] border-none rounded-xl px-4 py-3 text-[#1a1c19] focus:ring-2 focus:ring-[#cfbe91] transition-shadow"
            />
            <p className="text-[10px] text-[#1a1c19]/50 mt-1">
              {lang === 'fr' 
                ? `${minGuests === 1 ? 'Maximum' : 'De '+minGuests+' à'} ${maxGuests} personnes` 
                : `${minGuests === 1 ? 'Maximum' : 'From '+minGuests+' to'} ${maxGuests} people`}
            </p>
          </div>

          {/* Event Type (Only if event booking) */}
          {bookingType === 'event' && (
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#1a1c19]/60 flex items-center gap-2">
                <GlassWater size={14} />
                {lang === 'fr' ? "Type d'événement" : 'Event Type'}
              </label>
              <select 
                required name="eventType" value={formData.eventType} onChange={handleInputChange}
                className="w-full bg-[#f8f6f0] border-none rounded-xl px-4 py-3 text-[#1a1c19] focus:ring-2 focus:ring-[#cfbe91] transition-shadow appearance-none"
              >
                <option value="" disabled>{lang === 'fr' ? 'Sélectionner...' : 'Select...'}</option>
                <option value="birthday">{lang === 'fr' ? 'Anniversaire' : 'Birthday'}</option>
                <option value="corporate">{lang === 'fr' ? 'Événement corporatif' : 'Corporate Event'}</option>
                <option value="wedding">{lang === 'fr' ? 'Mariage / Fiançailles' : 'Wedding / Engagement'}</option>
                <option value="other">{lang === 'fr' ? 'Autre' : 'Other'}</option>
              </select>
            </div>
          )}

          {/* Special Requests (Full Width) */}
          <div className={`space-y-2 ${bookingType === 'dining' ? 'md:col-span-1' : 'md:col-span-2'}`}>
            <label className="text-xs font-bold uppercase tracking-wider text-[#1a1c19]/60 flex items-center gap-2">
              <MessageSquare size={14} />
              {lang === 'fr' ? 'Demandes spéciales' : 'Special Requests'}
            </label>
            <textarea 
              name="requests" value={formData.requests} onChange={handleInputChange} rows={1}
              className="w-full bg-[#f8f6f0] border-none rounded-xl px-4 py-3 text-[#1a1c19] focus:ring-2 focus:ring-[#cfbe91] transition-shadow placeholder:text-[#1a1c19]/30 resize-none"
              placeholder={lang === 'fr' ? 'Allergies, chaises hautes, etc.' : 'Allergies, high chairs, etc.'}
            />
          </div>
        </div>

        {status === 'error' && (
          <p className="text-red-600 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-100">
            {lang === 'fr' 
              ? 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.' 
              : 'An error occurred while sending. Please try again.'}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`w-full py-4 px-8 rounded-xl font-bold tracking-widest uppercase transition-all duration-300 shadow-xl ${
            status === 'submitting' 
              ? 'bg-[#1a1c19]/50 text-white cursor-not-allowed' 
              : 'bg-[#cfbe91] text-black hover:bg-[#bda871] hover:-translate-y-1 hover:shadow-2xl'
          }`}
        >
          {status === 'submitting' 
            ? (lang === 'fr' ? 'Envoi en cours...' : 'Sending...') 
            : (lang === 'fr' ? 'Confirmer la réservation' : 'Confirm Booking')}
        </button>
      </form>
    </div>
  );
}
