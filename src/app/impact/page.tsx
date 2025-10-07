import React from 'react';
import { TrendingUp, Users, MapPin, Award, Heart, Target } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export default function ImpactPage() {
  const impactAreas = [
    {
      icon: Users,
      title: "Inclusion des Filles",
      description: "Malloum permet aux filles qui hésitent à participer en classe de poser librement leurs questions.",
      stats: "65% d'utilisatrices féminines",
      testimonial: {
        text: "Avant Malloum, j'avais peur de poser des questions devant mes camarades. Maintenant, j'ai un tuteur qui me répond sans me juger.",
        author: "Aïcha, 15 ans, Maroua",
      },
    },
    {
      icon: MapPin,
      title: "Zones Rurales",
      description: "Accès à l'éducation de qualité pour les élèves des régions éloignées où les ressources sont limitées.",
      stats: "70% d'utilisateurs en zones rurales",
      testimonial: {
        text: "Dans notre village, nous n'avons qu'un enseignant pour plusieurs matières. Malloum nous aide à combler ce manque.",
        author: "Ibrahim, 16 ans, Petté Maroua",
      },
    },
    {
      icon: Award,
      title: "Amélioration des Résultats",
      description: "Les élèves utilisant Malloum montrent une amélioration significative de leurs performances académiques.",
      stats: "Amélioration moyenne de 25%",
      testimonial: {
        text: "Mes notes en mathématiques sont passées de 8/20 à 14/20 grâce aux explications détaillées de Malloum.",
        author: "Marie, 14 ans, Garoua",
      },
    },
  ];

  const successStories = [
    {
      emoji: "🎓",
      title: "Réussite au BEPC",
      description: "85% des utilisateurs réguliers de Malloum ont réussi leur BEPC en 2024, contre 60% de moyenne nationale.",
    },
    {
      emoji: "📚",
      title: "Questions Répondues",
      description: "Plus de 50,000 questions ont été posées et répondues depuis le lancement de Malloum.",
    },
    {
      emoji: "🏫",
      title: "Écoles Partenaires",
      description: "Plus de 50 écoles au Cameroun utilisent Malloum comme outil complémentaire d'enseignement.",
    },
    {
      emoji: "⭐",
      title: "Satisfaction",
      description: "95% des élèves et 92% des enseignants recommandent Malloum à leurs pairs.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-white/20 text-white">Notre Impact</Badge>
          <h1 className="text-5xl md:text-6xl font-bold">
            Transformer l'Éducation au Cameroun
          </h1>
          <p className="text-xl text-blue-100">
            Découvrez comment Malloum change la vie de milliers d'élèves et contribue à réduire 
            les inégalités éducatives à travers le pays.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "10,000+", label: "Élèves Aidés", color: "from-blue-600 to-blue-400" },
              { value: "50+", label: "Écoles Partenaires", color: "from-indigo-600 to-indigo-400" },
              { value: "50,000+", label: "Questions Répondues", color: "from-purple-600 to-purple-400" },
              { value: "95%", label: "Satisfaction", color: "from-pink-600 to-pink-400" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-5xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Domaines d'Impact
            </h2>
            <p className="text-xl text-gray-600">
              Comment Malloum transforme l'éducation
            </p>
          </div>

          <div className="space-y-12">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-3xl shadow-xl overflow-hidden ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex flex-col md:flex`}
                >
                  <div className="flex-1 p-12">
                    <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{area.title}</h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">{area.description}</p>
                    <div className="bg-blue-50 rounded-xl p-4 inline-block">
                      <div className="text-2xl font-bold text-blue-600">{area.stats}</div>
                    </div>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 p-12 flex items-center">
                    <div className="space-y-4">
                      <div className="text-4xl">💬</div>
                      <p className="text-gray-700 italic text-lg leading-relaxed">
                        "{area.testimonial.text}"
                      </p>
                      <p className="text-gray-600 font-medium">— {area.testimonial.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Histoires de Réussite
            </h2>
            <p className="text-xl text-gray-600">
              Les résultats concrets de Malloum
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{story.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{story.title}</h3>
                <p className="text-gray-600 leading-relaxed">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-term Vision */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Notre Vision à Long Terme
            </h2>
            <p className="text-xl text-blue-100">
              Les objectifs que nous visons pour l'avenir
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Expansion Nationale",
                description: "Atteindre 100,000 élèves dans toutes les régions du Cameroun d'ici 2026.",
              },
              {
                icon: Heart,
                title: "Accessibilité Totale",
                description: "Rendre Malloum gratuit pour tous les élèves des zones défavorisées.",
              },
              {
                icon: TrendingUp,
                title: "Excellence Académique",
                description: "Contribuer à l'amélioration du taux de réussite national de 15%.",
              },
            ].map((goal, index) => {
              const Icon = goal.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                  <Icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{goal.title}</h3>
                  <p className="text-blue-100">{goal.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Rejoignez le Mouvement
          </h2>
          <p className="text-xl text-gray-600">
            Ensemble, construisons un avenir où chaque élève a accès à une éducation de qualité.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all">
            Découvrir Malloum
          </button>
        </div>
      </section>
    </div>
  );
}