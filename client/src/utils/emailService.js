import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Send notification to admin (you)
export const sendAdminEmail = (templateParams) => {
  return emailjs.send(
    SERVICE_ID,
    ADMIN_TEMPLATE_ID,
    {
      from_name: templateParams.from_name,
      from_email: templateParams.from_email,
      phone: templateParams.phone || "Not provided",
      subject: templateParams.subject,
      message: templateParams.message,
      reply_to: templateParams.from_email,
    },
    PUBLIC_KEY
  );
};

// Send auto-reply to user
export const sendAutoReply = (templateParams) => {
  return emailjs.send(
    SERVICE_ID,
    AUTO_REPLY_TEMPLATE_ID,
    {
      to_name: templateParams.to_name,
      to_email: templateParams.to_email,
      type: templateParams.type,
    },
    PUBLIC_KEY
  );
};