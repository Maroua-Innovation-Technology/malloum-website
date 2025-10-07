import React from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { COMPANY_NAME } from '@/lib/constants';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-white/20 text-white">À propos de Malloum</Badge>
          <h1 className="text-5xl md:text-6xl font-bold">
            Notre Mission
          </h1>
          <p className="text-xl text-blue-100">
            Démocratiser l'accès à l'éducation de qualité pour tous les élèves du Cameroun, 
            quelle que soit leur situation géographique ou économique.
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-15 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                L'histoire de Malloum
              </h2>
              <div className="space-y-2 text-gray-600 leading-relaxed">
                <p>
                  Malloum est né d'un constat simple mais alarmant : des milliers d'élèves au Cameroun, 
                  particulièrement dans les zones rurales, n'ont pas accès à un soutien éducatif de qualité. 
                  Les enseignants sont peu nombreux, les ressources limitées, et les disparités entre zones 
                  urbaines et rurales ne cessent de croître.
                </p>
                <p>
                  En 2023, l'équipe de {COMPANY_NAME} a imaginé une solution innovante : 
                  utiliser la technologie SMS, accessible à tous, pour créer un pont entre les élèves 
                  et l'intelligence artificielle. Ainsi est né Malloum, un tuteur IA accessible par SMS.
                  Cette solution a remporté le prix de 2 500 000 FCFA à la competition Y'ellow digital Challenge de la fondation MTN.
                </p>
                <p>
                  Aujourd'hui, Malloum aide plus de 10 000 élèves à travers le Cameroun, 
                  en leur offrant un accès instantané à des réponses pédagogiques personnalisées, 
                  alignées sur le curriculum national.
                </p>
              </div>
            </div>
             <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-12 flex flex-col items-center justify-center space-y-6">
              <img
                src="/images/malloum-architecture1.png"
                alt="Malloum AI interaction"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Valeurs */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Rendre l'éducation accessible à tous les élèves du Cameroun en utilisant 
                la technologie SMS et l'intelligence artificielle pour créer un écosystème 
                éducatif inclusif et équitable.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Devenir la référence en matière d'éducation inclusive en Afrique, 
                en prouvant qu'une technologie simple peut transformer l'accès à l'éducation 
                et réduire les inégalités.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nos Valeurs</h3>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li>✓ Inclusion et équité</li>
                <li>✓ Innovation responsable</li>
                <li>✓ Excellence pédagogique</li>
                <li>✓ Impact social</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Maroua Innovation Technology */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {COMPANY_NAME}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une startup camerounaise dédiée à l'innovation technologique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                {COMPANY_NAME} (MIT) est une startup innovante basée à Maroua, dans la région 
                de l'Extrême-Nord du Cameroun. Fondée par une équipe de passionnés de technologie ,
                MIT se donne pour mission de développer des solutions technologiques 
                adaptées aux réalités africaines.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre approche se distingue par sa simplicité et son efficacité. Plutôt que de 
                chercher des solutions high-tech inaccessibles, nous croyons en la puissance des 
                technologies low-tech pour créer un impact social massif.
              </p>
              <div className="bg-blue-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Nos domaines d'expertise :</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Intelligence Artificielle éducative</li>
                  <li>• Solutions SMS et technologies mobiles</li>
                  <li>• Machine Learning adaptatif</li>
                  <li>• Pédagogie numérique</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Users className="w-12 h-12" />
                  <div>
                    <div className="text-3xl font-bold">10+</div>
                    <div className="text-blue-200">Membres de l'équipe</div>
                  </div>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <div className="text-3xl font-bold mb-2">2023</div>
                  <div className="text-blue-200">Année de création</div>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <div className="text-3xl font-bold mb-2">Maroua</div>
                  <div className="text-blue-200">Siège social</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600">
              Des experts passionnés par l'éducation et la technologie
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Touza Isaac",
                role: "CEO",
                image: "images/isaac.jpg",
              },
              {
                name: "Sali Emmanuel",
                role: "Directeur Technique",
                image: "images/emma.jpg",
              },
              {
                name: "Mana T. Etienne",
                role: "Chef de projets",
                image: "images/mana.jpg",
              },
              {
                name: "Adawal Urbain",
                role: "Directeur des Ressources Humaines",
                image: "images/adawal.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}