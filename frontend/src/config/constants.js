export const URLBASE =
  import.meta.env.MODE === "production"
    ? "https://neidashop.codelium.cl/public"
    : "http://localhost:8000";

export const ENDPOINT = {
  submitEmail: `${URLBASE}/submit_email.php`,
  submitContact: `${URLBASE}/submit_contact.php`,
  instagramEmbed: `${URLBASE}/instagram_embed.php`,
};
