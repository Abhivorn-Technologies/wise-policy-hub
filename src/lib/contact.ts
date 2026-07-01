export const CONTACT = {
  phone: import.meta.env.VITE_CONTACT_PHONE?.replace(/\s+/g, "") || "+919502923262",
  phoneDisplay: import.meta.env.VITE_CONTACT_PHONE || "+91 95029 23262",
  whatsapp: import.meta.env.VITE_CONTACT_PHONE?.replace(/\D/g, "") || "919502923262",
  email: import.meta.env.VITE_CONTACT_EMAIL || "info@sreeinsurance.com",
  claimsEmail: import.meta.env.VITE_CLAIMS_EMAIL || "claims@sreeinsurance.com",
  address: import.meta.env.VITE_OFFICE_ADDRESS || "Shanthi Nilayam, MIG 648, KPHB Phase 2, Kukatpally, Hyderabad, Telangana 500072",
};

export const whatsappLink = (msg = "Hi, I'd like to know more about your insurance services.") =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${CONTACT.phone}`;
export const mailLink = `mailto:${CONTACT.email}`;
