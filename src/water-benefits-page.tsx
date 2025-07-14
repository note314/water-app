import { useState, useEffect } from 'react';
import { Droplets, Heart, Brain, Sparkles, Star, ArrowDown } from 'lucide-react';

export default function WaterBenefitsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBenefit, setCurrentBenefit] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentBenefit(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "健康促進",
      description: "血液循環を改善し、代謝を活性化"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "集中力向上",
      description: "脳の働きを活性化し、思考力をアップ"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "美肌効果",
      description: "肌の潤いを保ち、若々しさを維持"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-400 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <Droplets className="w-4 h-4 text-blue-200 opacity-30" />
          </div>
        ))}
      </div>

      {/* Glassmorphism Container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 max-w-4xl mx-auto border border-white/20 shadow-2xl">
          
          {/* Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Droplets className="w-20 h-20 text-cyan-300 animate-bounce" />
                <div className="absolute -top-2 -right-2">
                  <Star className="w-8 h-8 text-yellow-300 animate-spin" />
                </div>
              </div>
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4">
              飲水習慣
            </h1>
            <p className="text-2xl text-blue-100 font-light">
              毎日の水分補給がもたらす驚きの効果
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mb-12">
            <ArrowDown className="w-6 h-6 text-cyan-300 animate-bounce" />
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:bg-white/20 transition-all duration-300 text-center relative overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className={`text-cyan-300 mb-4 flex justify-center transform transition-transform duration-300 group-hover:scale-110 ${currentBenefit === index ? 'animate-pulse' : ''}`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-blue-100 text-lg leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-8 inline-block mb-6 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <Droplets className="w-16 h-16 text-white animate-pulse" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              今日から始めよう！
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              1日8杯の水分補給で、あなたの生活がより健康で美しく、活力に満ちたものになります。
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-12 space-x-2">
            {benefits.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentBenefit === index ? 'bg-cyan-300 scale-125' : 'bg-white/30'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
    </div>
  );
}