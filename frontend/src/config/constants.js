export const URLBASE =
  import.meta.env.MODE === "production"
    ? "https://codelium.cl/cuenta_pruebas/neidashop/public"
    : "http://localhost:8000";

/*   TODO: Cambiar esos valores para el deploy final */

export const ENDPOINT = {
  submitEmail: `${URLBASE}/submit_email.php`,
  submitContact: `${URLBASE}/submit_contact.php`,
  instagramEmbed: `${URLBASE}/instagram_embed.php`,
};
