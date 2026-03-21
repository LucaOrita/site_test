// src/lib/config.ts

export const DACODA_CONFIG = {
  phone: '+40 785 225 446',
  phoneHref: 'tel:+40785225446',
  email: 'oritaluca@gmail.com',
  emailHref: 'mailto:oritaluca@gmail.com',
  whatsappHref:
    'https://wa.me/40785225446?text=Buna%20ziua%2C%20doresc%20o%20oferta%20pentru%20transport',
  formspree: {
    cerere: 'myknappl',
    contact: 'xbdzekal',
  },
} as const;

// Funcție helper — trimite date la Formspree și returnează succes/eroare
// Folosită de toate formularele din site
export async function submitToFormspree(
  formId: string,
  data: Record<string, string | undefined>,
): Promise<{ ok: boolean }> {
  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });
    return { ok: response.ok };
  } catch {
    return { ok: false };
  }
}
