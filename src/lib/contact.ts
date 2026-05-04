export const CONTACT = {
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "info@sreeinsurance.com",
  address: "MG Road, Bengaluru, Karnataka 560001",
};

export const whatsappLink = (msg = "Hi, I'd like to know more about your insurance services.") =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${CONTACT.phone}`;
export const mailLink = `mailto:${CONTACT.email}`;
