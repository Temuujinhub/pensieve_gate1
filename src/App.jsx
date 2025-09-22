const companyLogo = '/assets/company-logo.png';
import './App.css';


function App() {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="gradient-bg text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <img src={companyLogo} alt="Company Logo" className="mx-auto mb-8 animate-float" style={{width:'120px'}} />
            <h1 className="text-5xl font-extrabold mb-4 text-shadow">Pensieve Gate LLC</h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Монголын суглааны зах зээлд зориулсан дижитал шийдэл ба зөвлөх үйлчилгээ
            </p>
            <div className="flex justify-center space-x-4 text-6xl animate-float">
              <span>🎮</span>
              <span>💎</span>
              <span>🚀</span>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">🧩 Танилцуулга</h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Монголд суглааны тусгай зөвшөөрөлтэй компаниуд идэвхтэй үйл ажиллагаа явуулж байгаа бөгөөд эдгээр операторуудын онлайн суглаа, дижитал тоглоомын экосистемийг хөгжүүлэх хэрэгцээ өсөж нэмэгдэж байна.
              </p>
              <p className="text-lg text-gray-700">
                <b>Pensieve Gate LLC</b> нь технологийн зөвлөх үйлчилгээ, системийн интеграци, API ба SDK түвшний холболт бүхий харилцан ашигтай хамтын ажиллагааны шийдлүүдийг санал болгож байна.
              </p>
            </div>
            <div className="text-center">
              <img src="/assets/intro-screenshot.png" alt="Intro Screenshot" className="rounded-2xl shadow-lg mx-auto" style={{maxWidth:'400px'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">🔧 Бидний санал болгож буй шийдлүүд</h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <h3 className="text-xl font-bold mb-4">Зөвлөх үйлчилгээ</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Тоглоомын бүтэц, зохион байгуулалт</li>
                <li>Хууль эрхзүйн нийцэл</li>
                <li>Бизнес загвар, маркетинг стратеги</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <h3 className="text-xl font-bold mb-4">Системийн интеграци</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Онлайн суглааны платформ</li>
                <li>API, SDK түвшний холболт</li>
                <li>POS, мобайл, вэб, USSD</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <h3 className="text-xl font-bold mb-4">Тоглоомын төрөл</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Лото, бинго, кено, скратч</li>
                <li>Спортын суглаа, e-Instant</li>
                <li>Omni-channel шийдэл</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <h3 className="text-xl font-bold mb-4">Аналитик ба хяналт</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Хэрэглэгчийн мэдээлэл</li>
                <li>CRM, урамшуулал</li>
                <li>Хариуцлагатай тоглолт</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <h3 className="text-xl font-bold mb-4">Аюулгүй байдал</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>RNG баталгаажуулалт</li>
                <li>ISO стандарт</li>
                <li>Төлбөрийн систем хамгаалалт</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <h3 className="text-xl font-bold mb-4">Мобайл шийдэл</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Мобайл апп, платформ</li>
                <li>Omni-channel шийдэл</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">🤝 Хамтран ажиллах боломж</h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl card-hover">
              <h3 className="text-lg font-bold mb-2">Шууд хамтын ажиллагаа</h3>
              <p>Тусгай зөвшөөрөлтэй операторуудтай</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl card-hover">
              <h3 className="text-lg font-bold mb-2">Уян хатан хөгжүүлэлт</h3>
              <p>Бэлэн платформ + захиалгат шийдэл</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl card-hover">
              <h3 className="text-lg font-bold mb-2">Дизайн ба UX/UI</h3>
              <p>Тоглоомын дизайн, localization</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl card-hover">
              <h3 className="text-lg font-bold mb-2">Маркетинг кампанит ажил</h3>
              <p>Хэрэглэгчийн оролцооны стратеги</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Example Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">📌 Жишээ платформ - INFINITI Gaming Platform</h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-900 rounded-2xl p-8 mb-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-yellow-300">"True Omni-Channel, Omni-Gaming Platform"</h3>
                <ul className="list-disc pl-5 text-white">
                  <li>Retail, iGaming, Self-Service</li>
                  <li>Lotto, Keno, Bingo, Instant, Sports, Casino</li>
                  <li>Player Account Management, Risk Management</li>
                  <li>Loyalty & Rewards</li>
                  <li>API, SDK, Multilingual, Multicurrency</li>
                </ul>
              </div>
              <p className="text-lg text-white">
                Энэхүү платформын архитектур, тоглоомын төрөл, интеграциийн уян хатан байдал нь манай санал болгож буй шийдлүүдтэй төстэй бөгөөд Монголын зах зээлд локалчилсан хувилбар болгон нэвтрүүлэх боломжтой.
              </p>
            </div>
            <div className="text-center">
              <img src="/assets/platform-screenshot.png" alt="Platform Screenshot" className="rounded-2xl shadow-lg mx-auto" style={{maxWidth:'400px'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Бидэнтэй холбогдох</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            info@pensievegate.mn | +976-99112233
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <img src={companyLogo} alt="Company Logo" className="mx-auto mb-4" style={{width:'80px'}} />
            <h3 className="text-xl font-bold">Pensieve Gate LLC</h3>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-sm">&copy; {new Date().getFullYear()} Pensieve Gate LLC. Бүх эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
