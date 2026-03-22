// src/lib/config.ts

export const DACODA_CONFIG = {
  phone: '+40 785 225 446',
  phoneFix: '+40 21 326 86 58',
  phoneHref: 'tel:+40785225446',
  email: 'oritaluca@gmail.com',
  emailHref: 'mailto:oritaluca@gmail.com',
  whatsappHref:
    'https://wa.me/40785225446?text=Buna%20ziua%2C%20doresc%20o%20oferta%20pentru%20transport',
  cui: '4989577',
  addresses: {
    bucuresti: 'Str. Vespasian nr. 41A, et. 1, Sector 1, București',
    cluj: 'Str. Croitorilor nr. 16, Cluj-Napoca',
  },
  schedule: 'Luni–Vineri, 8:30–17:30',
  formspree: {
    cerere: 'myknappl',
    contact: 'xbdzekal',
  },
} as const;

// Funcție helper: trimite date la Formspree și returnează succes/eroare
// Folosită de toate formularele din site
export async function submitToFormspree(
  formId: string,
  data: Record<string, string | undefined>,
): Promise<{ ok: boolean }> {
  if (!formId) return { ok: false };
  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify({ ...data, _gotcha: '' }),
    });
    return { ok: response.ok };
  } catch {
    return { ok: false };
  }
}
