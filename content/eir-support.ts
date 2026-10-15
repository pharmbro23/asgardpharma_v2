import type { EirLang } from '@/content/eir-legal'

// Eir Count support page (/eir/support/ and /eir/support/fr/)

export const eirSupportEmail = 'info@asgardpharma.ca'

export interface EirStoreSteps {
  store: string
  steps: string[]
  link: { text: string; href: string }
}

export interface EirSupportContent {
  metaTitle: string
  description: string
  title: string
  intro: string
  contact: { label: string; button: string; subject: string; note: string }
  include: { heading: string; items: string[]; caution: string }
  cancel: { heading: string; intro: string; stores: EirStoreSteps[]; inApp: string; after: string }
}

export const eirSupport: Record<EirLang, EirSupportContent> = {
  en: {
    metaTitle: 'Eir Count support',
    description: 'Get help with Eir Count, or cancel an Eir Count subscription in the App Store or Google Play.',
    title: 'Eir Count support',
    intro: 'Questions, problems or feedback about Eir Count? Email us and a person at Asgard Pharma will answer.',
    contact: {
      label: 'Email',
      button: 'Email support',
      subject: 'Eir Count support',
      note: 'Pharmacy and group licences are priced per store: email us for a quote.',
    },
    include: {
      heading: 'What to include',
      items: [
        'Your phone model, the Eir Count version and the iOS or Android version. Eir Count shows all three on one line in Settings.',
        'What you were doing, what you expected and what happened. For a count, say how many units were on the tray and what Eir Count showed.',
        "A screenshot, if it helps. For a counting problem you can also use Settings › Send to support (photos & logs). It attaches the counts' photos and the app's technical log, and leaves out Rx numbers, initials and notes unless you choose to include them.",
      ],
      caution:
        'Please keep patient information out of anything you send us: no patient names, health numbers or prescription labels in emails, screenshots or photos.',
    },
    cancel: {
      heading: 'Cancel your subscription',
      intro:
        'Subscriptions are billed by Apple or Google, so you cancel in your App Store or Google Play account. Deleting the app does not cancel a subscription.',
      stores: [
        {
          store: 'iPhone (App Store)',
          steps: [
            'Open the Settings app and tap your name.',
            'Tap Subscriptions, then Eir Count.',
            'Tap Cancel Subscription.',
          ],
          link: { text: 'Open App Store subscriptions', href: 'https://apps.apple.com/account/subscriptions' },
        },
        {
          store: 'Android (Google Play)',
          steps: [
            'Open the Google Play Store app and tap your profile picture.',
            'Tap Payments & subscriptions, then Subscriptions.',
            'Choose Eir Count and tap Cancel subscription.',
          ],
          link: { text: 'Open Google Play subscriptions', href: 'https://play.google.com/store/account/subscriptions' },
        },
      ],
      inApp: 'The subscription screen in Eir Count also links to these pages.',
      after:
        'After you cancel, the subscription stops renewing and you can keep counting until the end of the period you have paid for. Refunds are decided by Apple or Google under their own policies.',
    },
  },
  fr: {
    metaTitle: 'Soutien Eir Count',
    description:
      "Obtenir de l'aide avec Eir Count, ou annuler un abonnement Eir Count dans l'App Store ou Google Play.",
    title: 'Soutien Eir Count',
    intro:
      "Une question, un problème ou un commentaire au sujet d'Eir Count? Écrivez-nous : une personne d'Asgard Pharma vous répondra.",
    contact: {
      label: 'Courriel',
      button: 'Écrire au soutien',
      subject: 'Soutien Eir Count',
      note: 'Les licences de pharmacie et de groupe sont établies par magasin : écrivez-nous pour obtenir un prix.',
    },
    include: {
      heading: 'Quoi inclure',
      items: [
        "Le modèle de votre téléphone, la version d'Eir Count et la version d'iOS ou d'Android. Eir Count affiche les trois sur une seule ligne dans ses Réglages.",
        "Ce que vous faisiez, ce que vous attendiez et ce qui s'est produit. Pour un décompte, indiquez le nombre d'unités sur le plateau et le résultat affiché par Eir Count.",
        "Une capture d'écran, si elle est utile. Pour un problème de comptage, vous pouvez aussi utiliser Réglages › Envoyer au soutien (photos et journaux). Les photos des décomptes et le journal technique de l'application sont joints; les numéros d'ordonnance, les initiales et les notes sont exclus, sauf si vous choisissez de les inclure.",
      ],
      caution:
        "Ne nous envoyez aucun renseignement sur les patients : ni nom, ni numéro d'assurance maladie, ni étiquette d'ordonnance dans vos courriels, captures d'écran ou photos.",
    },
    cancel: {
      heading: 'Annuler votre abonnement',
      intro:
        "Les abonnements sont facturés par Apple ou Google : vous les annulez donc dans votre compte App Store ou Google Play. La suppression de l'application n'annule pas l'abonnement.",
      stores: [
        {
          store: 'iPhone (App Store)',
          steps: [
            "Ouvrez l'app Réglages et touchez votre nom.",
            'Touchez Abonnements, puis Eir Count.',
            "Touchez Annuler l'abonnement.",
          ],
          link: { text: "Ouvrir les abonnements de l'App Store", href: 'https://apps.apple.com/account/subscriptions' },
        },
        {
          store: 'Android (Google Play)',
          steps: [
            "Ouvrez l'application Google Play Store et touchez votre photo de profil.",
            'Touchez Paiements et abonnements, puis Abonnements.',
            "Choisissez Eir Count et touchez Annuler l'abonnement.",
          ],
          link: {
            text: 'Ouvrir les abonnements Google Play',
            href: 'https://play.google.com/store/account/subscriptions',
          },
        },
      ],
      inApp: "L'écran d'abonnement d'Eir Count mène aussi à ces pages.",
      after:
        "Après l'annulation, l'abonnement n'est plus renouvelé et vous pouvez continuer à compter jusqu'à la fin de la période payée. Les remboursements sont décidés par Apple ou Google selon leurs propres politiques.",
    },
  },
}
