// URL base del backend (solo necesario si se reactiva el backend PHP)
export const URLBASE =
  import.meta.env.MODE === "production"
    ? "https://neidashop.codelium.cl/public"
    : "http://localhost:8000";

// Endpoints del backend PHP (actualmente no utilizados - la app funciona sin backend)
// Se mantienen por si se desea reactivar la funcionalidad de BD en el futuro
export const ENDPOINT = {
  // submitEmail: `${URLBASE}/submit_email.php`,    // Newsletter - ahora usa FormSubmit.co
  // submitContact: `${URLBASE}/submit_contact.php`, // Contacto - ahora usa FormSubmit.co
  instagramEmbed: `${URLBASE}/instagram_embed.php`, // Carrusel - tiene fallback a imágenes locales
};
