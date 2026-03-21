#!/usr/bin/env npx ts-node
/**
 * Generator articole blog pentru DACODA SRL
 *
 * Folosire:
 *   npx ts-node scripts/generate-blog-post.ts
 *     → generează primul articol din TOPICS ca demo
 *
 *   npx ts-node scripts/generate-blog-post.ts --all
 *     → generează toate articolele din TOPICS
 *
 *   npx ts-node scripts/generate-blog-post.ts --topic "Titlul meu" --category "Rute"
 *     → generează un articol cu titlu specificat
 */

import Anthropic from '@anthropic-ai/sdk';
import dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

// Încarcă variabilele din .env.local (Next.js nu le expune în afara framework-ului)
dotenv.config({ path: '.env.local' });

// Verifică că ANTHROPIC_API_KEY e setat
if (!process.env.ANTHROPIC_API_KEY) {
  console.error('❌ ANTHROPIC_API_KEY lipsă din .env.local');
  process.exit(1);
}

const client = new Anthropic();

// Context complet despre Dacoda — injectat în fiecare prompt
const DACODA_CONTEXT = `
DACODA SRL este o casă de expediții fondată în 1993, capital 100% românesc, din Timișoara, România.
Servicii: transport rutier internațional FTL/LTL/grupaj, ADR (cls 3-6, 8, 9), frigorific, agabaritic, aerian și maritim.
Acoperire: Europa (toate țările UE), CSI (Ucraina, Kazakhstan, Georgia, Armenia, Azerbaidjan, Belarus, Rusia), Orient Mijlociu (Turcia, Iran, Liban, EAU), Asia (aerian/maritim).
Cifre: 32 ani experiență, ~8.400 curse/an, 1.100+ clienți activi, 3.500+ transportatori parteneri, 40+ țări.
Contact: +40 785 225 446 | comercial@dacoda.ro | dacoda.ro
Ton: profesional dar accesibil, fără jargon inutil, fără superlative
`;

// Imagini Unsplash potrivite per categorie
const CATEGORY_IMAGES: Record<string, { url: string; alt: string }> = {
  'Ghiduri practice': {
    url: 'https://images.unsplash.com/photo-1568096889942-6eedde686635?w=800&q=75',
    alt: 'Documente transport internațional',
  },
  Rute: {
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75',
    alt: 'Autostradă transport internațional',
  },
  Legislație: {
    url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=75',
    alt: 'Legislație transport rutier',
  },
  'Transport special': {
    url: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=75',
    alt: 'Transport special marfă',
  },
};

// Lista articolelor de generat — în ordine de prioritate SEO
const TOPICS = [
  // TOFU — Awareness (oameni care caută informații generale)
  {
    topic:
      'Ce este o casă de expediții și cum te ajută să îți trimiți marfa',
    category: 'Ghiduri practice',
    keywords:
      'casa expeditii, expeditor marfa, intermediar transport, organizare transport international',
  },
  {
    topic: 'Transport grupaj — când este cea mai bună alegere față de FTL',
    category: 'Ghiduri practice',
    keywords:
      'transport grupaj, LTL, grupaj international, transport partial camion',
  },
  {
    topic:
      'Asigurarea mărfii în transport internațional — ce acoperă CMR și ce nu',
    category: 'Legislație',
    keywords:
      'asigurare marfa transport, CMR asigurare, responsabilitate transportator',
  },
  // MOFU — Consideration (oameni care compară opțiuni)
  {
    topic:
      'Transport România–Spania: documente, rute, timp de tranzit 2025',
    category: 'Rute',
    keywords:
      'transport Romania Spania, expeditii Romania Spania, ruta Romania Spania camion',
  },
  {
    topic:
      'Transport România–Turcia: ghid complet pentru expeditori 2025',
    category: 'Rute',
    keywords:
      'transport Romania Turcia, expeditii Romania Turcia, ruta TIR Romania Turcia',
  },
  {
    topic: 'Rute CSI 2025 — transport în Ucraina, Kazakhstan și Georgia',
    category: 'Rute',
    keywords:
      'transport CSI, transport Ucraina, transport Kazakhstan, expeditii tari CSI',
  },
  // Diferențiatori Dacoda
  {
    topic:
      'Transport agabaritic — cum se organizează și ce documente sunt necesare',
    category: 'Transport special',
    keywords:
      'transport agabaritic Romania, marfa supradimensionata transport, autorizatie transport special',
  },
  {
    topic:
      'Transport ADR clasa 3 — lichide inflamabile, reguli complete 2025',
    category: 'Transport special',
    keywords:
      'transport ADR clasa 3, lichide inflamabile transport, marfuri periculoase ADR',
  },
];

async function generateBlogPost(
  topic: string,
  category: string,
  keywords: string,
): Promise<void> {
  console.log(`\n📝 Generez: "${topic}"`);

  const response = await client.messages.create({
    model: 'claude-sonnet-4-5',
    max_tokens: 3500,
    messages: [
      {
        role: 'user',
        content: `Ești un expert în transport internațional care scrie pentru blogul DACODA SRL.

Context despre DACODA:
${DACODA_CONTEXT}

Scrie un articol de blog COMPLET în română despre:
"${topic}"

Categorie: ${category}
Cuvinte cheie de inclus natural: ${keywords}

CERINȚE STRICTE:
1. Lungime: 700-1000 cuvinte în corpul articolului
2. Structură: H2 pentru secțiuni principale, H3 pentru sub-secțiuni
3. Include date concrete: timpi, distanțe, documente, prețuri orientative dacă sunt relevante
4. Menționează DACODA natural de 1-2 ori — nu forțat
5. Termină cu un paragraf "Concluzie" și unul "Contactează DACODA" cu numărul de tel
6. Ton: profesional dar accesibil, ca un sfătuitor, nu ca un comerciant
7. Nu folosi superlative: "cel mai bun", "nr. 1", "unic"
8. Primul rând = titlul H1, fără frontmatter

Returnează DOAR conținutul articolului în Markdown.
Primul rând: # [Titlul complet al articolului]
`,
      },
    ],
  });

  const content =
    response.content[0].type === 'text' ? response.content[0].text : '';

  // Extrage titlul din H1
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].replace(/['"]/g, '') : topic;

  // Generează slug SEO-friendly din titlu
  const slug = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // elimină diacritice
    .replace(/[șțȘȚ]/g, (c) => (c === 'ș' || c === 'Ș' ? 's' : 't'))
    .replace(/[ăâ]/g, 'a')
    .replace(/[îí]/g, 'i')
    .replace(/[^a-z0-9\s-]/g, '') // elimină caractere speciale
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 80); // max 80 caractere în slug

  // Calculează timp de citire (medie 200 cuvinte/minut)
  const wordCount = content.split(/\s+/).length;
  const readTime = `${Math.max(3, Math.ceil(wordCount / 200))} min citire`;

  // Imagine per categorie
  const img =
    CATEGORY_IMAGES[category] ?? CATEGORY_IMAGES['Ghiduri practice'];

  // Data curentă
  const date = new Date().toISOString().split('T')[0];

  // Excerpt: primele 160 caractere din primul paragraf (după H1)
  const firstPara = content
    .replace(/^#.+\n+/, '')
    .replace(/^#{2,}.+\n+/m, '')
    .trim()
    .substring(0, 160)
    .replace(/\n/g, ' ');
  const excerpt = firstPara.endsWith('.') ? firstPara : firstPara + '...';

  // Asamblează frontmatter + conținut
  const frontmatter = `---
title: "${title}"
excerpt: "${excerpt}"
category: "${category}"
date: "${date}"
readTime: "${readTime}"
image: "${img.url}"
imageAlt: "${img.alt}"
keywords: "${keywords}"
---

`;

  const fullContent = frontmatter + content;

  // Salvează fișierul MDX
  const filePath = path.join(process.cwd(), 'src', 'blog', `${slug}.mdx`);

  // Nu suprascrie dacă există deja
  if (fs.existsSync(filePath)) {
    console.log(`⚠️  Există deja: src/blog/${slug}.mdx — skip`);
    return;
  }

  fs.writeFileSync(filePath, fullContent, 'utf-8');

  console.log(`✅ Salvat: src/blog/${slug}.mdx`);
  console.log(`   Titlu: ${title}`);
  console.log(`   Slug: ${slug}`);
  console.log(`   Cuvinte: ${wordCount} (~${readTime})`);
}

// Main — parsează argumentele din linia de comandă
async function main() {
  const args = process.argv.slice(2);

  if (args[0] === '--all') {
    console.log(`🚀 Generez ${TOPICS.length} articole...`);
    for (const { topic, category, keywords } of TOPICS) {
      await generateBlogPost(topic, category, keywords);
      // Pauză 2s între requesturi (rate limiting)
      await new Promise((r) => setTimeout(r, 2000));
    }
    console.log('\n✅ Toate articolele au fost generate!');
  } else if (args[0] === '--topic' && args[1]) {
    const category = args[2] ?? 'Ghiduri practice';
    const keywords = args[3] ?? '';
    await generateBlogPost(args[1], category, keywords);
  } else {
    // Demo: generează primul articol
    console.log('🎯 Demo: generez primul articol din listă...');
    const { topic, category, keywords } = TOPICS[0];
    await generateBlogPost(topic, category, keywords);
    console.log(
      '\nPentru toate articolele: npx ts-node scripts/generate-blog-post.ts --all',
    );
  }
}

main().catch((err) => {
  console.error('❌ Eroare:', err.message);
  process.exit(1);
});
