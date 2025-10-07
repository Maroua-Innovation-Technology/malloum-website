import React from 'react';
import { Bot, Database, GraduationCap, Brain, Smartphone, Clock, Languages, BarChart } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: Bot,
      title: "Intelligence Artificielle ChatGPT",
      description: "Intégration de ChatGPT pour comprendre et répondre aux questions des élèves en langage naturel.",
      details: [
        "Compréhension contextuelle avancée",
        "Réponses adaptées au niveau de l'élève",
        "Génération de contenu pédagogique",
      ],
    },
    {
      icon: Database,
      title: "Banque de Cours",
      description: "Une base de données complète contenant tous les cours du programme national camerounais.",
      details: [
        "Tous les niveaux du secondaire",
        "Toutes les matières principales",
        "Contenu aligné au curriculum",
      ],
    },
    {
      icon: GraduationCap,
      title: "Banque d'Examens",
      description: "Collection d'examens passés et d'exercices pratiques pour la préparation aux évaluations.",
      details: [
        "Examens officiels passés",
        "Exercices de pratique",
        "Corrections détaillées",
      ],
    },
    {
      icon: Brain,
      title: "Machine Learning Adaptatif",
      description: "Algorithmes qui apprennent des interactions pour améliorer la précision des réponses.",
      details: [
        "Apprentissage continu",
        "Personnalisation des réponses",
        "Optimisation des performances",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: Smartphone,
      title: "Accessible par SMS",
      description: "Fonctionne sur n'importe quel téléphone, même sans connexion Internet.",
    },
    {
      icon: Clock,
      title: "Disponible 24/7",
      description: "Réponses instantanées à toute heure du jour et de la nuit.",
    },
    {
      icon: Languages,
      title: "Support Multilingue",
      description: "Réponses en français et en anglais, adaptation aux langues locales prévue.",
    },
    {
      icon: BarChart,
      title: "Suivi des Progrès",
      description: "Analyse des questions pour identifier les domaines à améliorer.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-white/20 text-white">Fonctionnalités</Badge>
          <h1 className="text-5xl md:text-6xl font-bold">
            Une Technologie Puissante et Simple
          </h1>
          <p className="text-xl text-blue-100">
            Découvrez comment Malloum combine intelligence artificielle avancée et simplicité d'utilisation 
            pour offrir une expérience éducative exceptionnelle.
          </p>
        </div>
      </section>

      {/* Fonctionnalités Principales */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fonctionnalités Principales
            </h2>
            <p className="text-xl text-gray-600">
              Les technologies qui font la force de Malloum
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fonctionnalités Additionnelles */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Et Bien Plus Encore...
            </h2>
            <p className="text-xl text-gray-600">
              Des fonctionnalités pensées pour l'expérience utilisateur
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture Technique */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Architecture Technique
            </h2>
            <p className="text-xl text-gray-600">
              Comment Malloum traite vos questions
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Réception de la Question",
                  description: "L'élève envoie une question par SMS. Notre système reçoit et analyse le message.",
                },
                {
                  step: "2",
                  title: "Analyse par IA",
                  description: "ChatGPT analyse la question et identifie le contexte, la matière et le niveau.",
                },
                {
                  step: "3",
                  title: "Recherche dans les Bases",
                  description: "Le système consulte la banque de cours et d'examens pour trouver le contenu pertinent.",
                },
                {
                  step: "4",
                  title: "Génération de la Réponse",
                  description: "L'IA génère une réponse personnalisée adaptée au niveau de l'élève.",
                },
                {
                  step: "5",
                  title: "Apprentissage",
                  description: "Les algorithmes de ML enregistrent l'interaction pour améliorer les futures réponses.",
                },
                {
                  step: "6",
                  title: "Envoi de la Réponse",
                  description: "La réponse est envoyée par SMS à l'élève en quelques secondes.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">
            Prêt à découvrir Malloum ?
          </h2>
          <p className="text-xl text-blue-100">
            Rejoignez les milliers d'élèves qui utilisent déjà Malloum pour améliorer leurs résultats scolaires.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all">
            Commencer Maintenant
          </button>
        </div>
      </section>
    </div>
  );
}