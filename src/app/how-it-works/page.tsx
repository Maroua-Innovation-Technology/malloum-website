import React from 'react';
import { Send, Bot, CheckCircle, HelpCircle, Smartphone } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { STEPS } from '@/lib/constants';

export default function HowItWorksPage() {
  const detailedSteps = [
    {
      number: "01",
      title: "Envoyez votre question par SMS",
      description: "Depuis n'importe quel téléphone portable, même le plus basique, envoyez votre question académique par SMS au numéro de Malloum.",
      example: "Exemple : 'Comment calculer l'aire d'un triangle ?'",
      icon: Send,
    },
    {
      number: "02",
      title: "Malloum analyse votre question",
      description: "Notre intelligence artificielle reçoit votre message, identifie la matière, le sujet et votre niveau scolaire.",
      details: [
        "Analyse du contexte de la question",
        "Identification de la matière",
        "Détermination du niveau scolaire",
      ],
      icon: Bot,
    },
    {
      number: "03",
      title: "Recherche dans nos bases de données",
      description: "Le système consulte la banque de cours et d'examens pour trouver les informations les plus pertinentes.",
      details: [
        "Consultation de la banque de cours",
        "Vérification dans les examens passés",
        "Validation avec le curriculum national",
      ],
      icon: HelpCircle,
    },
    {
      number: "04",
      title: "Recevez une réponse personnalisée",
      description: "En quelques secondes, vous recevez par SMS une réponse claire, adaptée à votre niveau et conforme au programme.",
      example: "Exemple : 'L'aire d'un triangle = (base × hauteur) ÷ 2. Pour un triangle de base 6cm et hauteur 4cm : (6×4)÷2 = 12 cm²'",
      icon: CheckCircle,
    },
  ];

  const faqs = [
    {
      question: "Combien coûte l'utilisation de Malloum ?",
      answer: "Seul le coût du SMS standard de votre opérateur est facturé. L'abonnement de Malloum lui-même coute 1000F/mois pour tous les élèves et d'autres utilisateurs.",
    },
    {
      question: "Quelles matières sont couvertes ?",
      answer: "Malloum couvre toutes les matières principales du secondaire : Mathématiques, Physique, Chimie,Informatique, SVT, Français, Anglais, Histoire-Géographie, et plus encore.",
    },
    {
      question: "Ai-je besoin d'Internet ?",
      answer: "Non ! Malloum fonctionne entièrement par SMS. Vous n'avez besoin que d'un téléphone portable basique et d'un crédit SMS.",
    },
    {
      question: "Combien de temps faut-il pour recevoir une réponse ?",
      answer: "La plupart des réponses sont envoyées en moins de 30 secondes. Dans de rares cas, cela peut prendre jusqu'à 2 minutes.",
    },
    {
      question: "Les réponses sont-elles conformes au programme camerounais ?",
      answer: "Oui, absolument. Toutes les réponses sont alignées sur le curriculum national et validées par des enseignants certifiés.",
    },
    {
      question: "Puis-je poser plusieurs questions ?",
      answer: "Oui, vous pouvez poser autant de questions que vous le souhaitez. Chaque question est traitée individuellement.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-white/20 text-white">Comment ça marche</Badge>
          <h1 className="text-5xl md:text-6xl font-bold">
            Simple, Rapide, Efficace
          </h1>
          <p className="text-xl text-blue-100">
            Découvrez comment utiliser Malloum en 4 étapes simples pour obtenir de l'aide dans vos études.
          </p>
        </div>
      </section>

      {/* Les 3 Étapes principales */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              En 3 Étapes Simples
            </h2>
            <p className="text-xl text-gray-600">
              Un système simple et efficace
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((step, index) => {
              const gradients = [
                'from-blue-600 to-indigo-600',
                'from-indigo-600 to-purple-600',
                'from-purple-600 to-pink-600',
              ];

              return (
                <div key={index} className="text-center space-y-4">
                  <div
                    className={`bg-gradient-to-r ${gradients[index]} w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-lg`}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Architecture de Malloum
            </h2>
            <p className="text-xl text-gray-600">
              Intégration de ChatGPT, Banque de Cours, Banque d'Examens et Machine Learning
            </p>
          </div>
          
          {/* Image du diagramme */}
          <div className="flex justify-center">
            <img 
              src="/images/malloum-architecture.png" 
              alt="Architecture de Malloum - Diagramme du fonctionnement"
              className="w-full max-w-3xl"
            />
          </div>
        </div>
      </section>

      {/* Processus Détaillé */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Processus Détaillé
            </h2>
            <p className="text-xl text-gray-600">
              Comment Malloum traite votre question en 4 étapes
            </p>
          </div>

          <div className="space-y-16">
            {detailedSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                        {step.number}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    {step.details && (
                      <ul className="space-y-2 mb-6">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {step.example && (
                      <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-600">
                        <p className="text-gray-700 italic">{step.example}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-12 flex items-center justify-center">
                      <Icon className="w-32 h-32 text-blue-600" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exemple Concret */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Exemple Concret
            </h2>
            <p className="text-xl text-gray-600">
              Voici un exemple réel d'interaction avec Malloum
            </p>
          </div>

          <div className="bg-transparent p-8">
            {/* Phone Mockup */}
            <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Phone Header */}
              <div className="bg-blue-600 px-4 py-4">
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-6 h-6 text-white" />
                  <span className="text-white font-semibold">Malloum</span>
                </div>
              </div>

              {/* Conversation */}
              <div className="p-6 space-y-4 bg-gray-50 h-96 overflow-y-auto">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
                    <p className="text-sm">Comment résoudre une équation du second degré ?</p>
                    <p className="text-xs text-blue-200 mt-1">10:23</p>
                  </div>
                </div>

                {/* Malloum Response */}
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs shadow">
                    <p className="text-sm text-gray-800">
                      Pour résoudre une équation du type ax² + bx + c = 0:
                      <br /><br />
                      1. Calculer le discriminant : Δ = b² - 4ac
                      <br /><br />
                      2. Si Δ &gt; 0 : deux solutions
                      <br />
                      x₁ = (-b + √Δ) / 2a
                      <br />
                      x₂ = (-b - √Δ) / 2a
                      <br /><br />
                      Exemple : x² - 5x + 6 = 0
                      <br />
                      Δ = 25 - 24 = 1
                      <br />
                      x₁ = 3, x₂ = 2
                    </p>
                    <p className="text-xs text-gray-400 mt-2">10:23</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur Malloum
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all"
              >
                <summary className="text-lg font-bold text-gray-900 list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-blue-600 text-2xl">+</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">
            Prêt à essayer Malloum ?
          </h2>
          <p className="text-xl text-blue-100">
            Commencez dès maintenant et bénéficiez d'un tuteur IA disponible 24/7.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all">
            Envoyer ma première question
          </button>
        </div>
      </section>
    </div>
  );
}