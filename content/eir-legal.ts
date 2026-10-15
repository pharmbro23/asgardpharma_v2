// Eir Count privacy policy, terms of use and support pages:
// /eir/privacy/, /eir/terms/, /eir/support/ and their French versions under /fr/.
//
// THE PRIVACY POLICY AND THE TERMS ARE DRAFTS awaiting the lawyer's review. Each page's text is
// one Markdown file in content/eir-legal/. To put a final, approved text live:
//   1. Replace that page's file (for example content/eir-legal/privacy-en.md) with the final text.
//   2. Change the page's `status` below from 'draft' to 'final'. That removes the
//      "Draft, not yet in effect" notice and the noindex tag.
//   3. Run `npx vitest run`: it fails if a final text still has [placeholders] or reviewer notes.
// The support page stays noindex until every legal text here is final.

export type EirLang = 'en' | 'fr'
export type EirLegalSlug = 'privacy' | 'terms'
export type EirInfoSlug = EirLegalSlug | 'support'

export interface EirLegalDoc {
  file: string
  status: 'draft' | 'final'
  metaTitle: string
  description: string
}

export const eirLegalDocs: Record<EirLegalSlug, Record<EirLang, EirLegalDoc>> = {
  privacy: {
    en: {
      file: 'privacy-en.md',
      status: 'draft',
      metaTitle: 'Eir Count privacy policy',
      description: 'How the Eir Count app handles photos, counts and other information.',
    },
    fr: {
      file: 'privacy-fr.md',
      status: 'draft',
      metaTitle: "Politique de confidentialité d'Eir Count",
      description: "Comment l'application Eir Count traite les photos, les décomptes et les autres renseignements.",
    },
  },
  terms: {
    en: {
      file: 'terms-en.md',
      status: 'draft',
      metaTitle: 'Eir Count terms of use',
      description: 'The end user licence agreement for the Eir Count app.',
    },
    fr: {
      file: 'terms-fr.md',
      status: 'draft',
      metaTitle: "Conditions d'utilisation d'Eir Count",
      description: "Le contrat de licence d'utilisateur final de l'application Eir Count.",
    },
  },
}

export const eirSupportIndexable = Object.values(eirLegalDocs).every((langs) =>
  Object.values(langs).every((doc) => doc.status === 'final')
)

// The privacy policy and terms pages are held back until the lawyer-approved texts are in (owner, 2026-10-15).
// This repository is public: commit only FINAL texts to content/eir-legal/ (the drafts live on the owner's machine,
// local branch eir-launch-fixes, and in the Counter project's docs/legal and docs/store). Until every
// text above is 'final', nothing links to them and their routes are left out of the site (app/eir/privacy/ and
// app/eir/terms/ are not in this branch). To publish: put the final texts in, set them to 'final', and restore the four route
// files from commit bc60f7f (branch eir-launch-fixes), e.g. `git checkout bc60f7f -- app/eir/privacy app/eir/terms`.
export const eirLegalPagesLive = eirSupportIndexable

export const eirVisibleInfoSlugs: EirInfoSlug[] = eirLegalPagesLive ? ['privacy', 'terms', 'support'] : ['support']

export function eirInfoHref(slug: EirInfoSlug, lang: EirLang): string {
  return lang === 'fr' ? `/eir/${slug}/fr/` : `/eir/${slug}/`
}

// Words around the texts (page chrome), in both languages
export const eirInfoChrome: Record<
  EirLang,
  {
    back: string
    switchLabel: string
    switchLang: EirLang
    draftTitle: string
    draftText: string
    draftTag: string
    related: string
    labels: Record<EirInfoSlug, string>
    aside: string
  }
> = {
  en: {
    back: 'Eir Count',
    switchLabel: 'Français',
    switchLang: 'fr',
    draftTitle: 'Draft, not yet in effect',
    draftText:
      'This text is a draft under legal review. It does not apply yet and will change before Eir Count launches. Highlighted text in [square brackets] is still to be completed.',
    draftTag: 'Draft',
    related: 'Eir Count help and policies',
    labels: { privacy: 'Privacy policy', terms: 'Terms of use', support: 'Support' },
    aside: 'Eir Count is a counting aid. The pharmacist verifies every count.',
  },
  fr: {
    back: 'Eir Count',
    switchLabel: 'English',
    switchLang: 'en',
    draftTitle: 'Projet, pas encore en vigueur',
    draftText:
      "Ce texte est un projet en cours de révision juridique. Il ne s'applique pas encore et changera avant le lancement d'Eir Count. Le texte surligné entre [crochets] reste à compléter.",
    draftTag: 'Projet',
    related: "Aide et politiques d'Eir Count",
    labels: { privacy: 'Politique de confidentialité', terms: "Conditions d'utilisation", support: 'Soutien' },
    aside: 'Eir Count est une aide au comptage. Le pharmacien vérifie chaque décompte.',
  },
}
