import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Globe, Smartphone, Shield, TrendingUp, Users, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
            <h1 className="text-2xl font-bold text-gray-900">Pensieve Gate LLC</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#solutions" className="text-gray-600 hover:text-blue-600 transition-colors">Шийдлүүд</a>
            <a href="#platform" className="text-gray-600 hover:text-blue-600 transition-colors">Платформ</a>
            <a href="#advantages" className="text-gray-600 hover:text-blue-600 transition-colors">Давуу тал</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Холбоо барих</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Монгол Улсын Сугалааны Зах Зээлд Зориулсан
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Дижитал Шийдэл ба
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Зөвлөх Үйлчилгээ</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Монгол Улсын сугалааны зах зээлд зориулсан дэвшилтэт технологи, 
            инновацийн шийдэл болон мэргэжлийн зөвлөх үйлчилгээ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
              Танилцуулга үзэх <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
              Холбоо барих
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Манай Шийдлүүд</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Сугалааны салбарт зориулсан иж бүрэн дижитал шийдлүүд
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Мобайл Аппликейшн</CardTitle>
                <CardDescription>
                  iOS болон Android платформд зориулсан хэрэглэгчдэд ээлтэй сугалааны апп
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Хялбар бүртгэл</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Аюулгүй төлбөр</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Шууд үр дүн</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Вэб Платформ</CardTitle>
                <CardDescription>
                  Бүх төхөөрөмжөөс хандах боломжтой дэвшилтэт вэб платформ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Responsive дизайн</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Хурдан ачаалал</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />SEO оновчтой</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Аюулгүй Байдал</CardTitle>
                <CardDescription>
                  Дэлхийн стандартын дагуу хамгаалагдсан системийн аюулгүй байдал
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />SSL шифрлэлт</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />2FA баталгаажуулалт</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Эрсдэлийн удирдлага</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Examples */}
      <section id="platform" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Платформын Жишээ</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              INFINITI Gaming Platform дээр суурилсан дэвшилтэт шийдлүүд
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Олон Төрлийн Тоглоом</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-lg">Лотто (Lotto) - Уламжлалт сугалаа</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="text-lg">Кено (Keno) - Хурдан тоглоом</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-lg">Бинго (Bingo) - Нийгмийн тоглоом</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="text-lg">Шуурхай тоглоом (Instant Games)</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="./images/lottery_gaming_1.jpeg" 
                alt="Сугалааны платформын интерфейс" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
            <div className="relative order-2 lg:order-1">
              <img 
                src="./images/lottery_gaming_2.jpeg" 
                alt="Мобайл аппликейшн" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Хэрэглэгчийн Данс Удирдлага</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-indigo-600" />
                  </div>
                  <span className="text-lg">Хувийн мэдээллийн удирдлага</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-pink-600" />
                  </div>
                  <span className="text-lg">Тоглоомын түүх хянах</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Zap className="h-5 w-5 text-yellow-600" />
                  </div>
                  <span className="text-lg">Шагналын систем</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                  <span className="text-lg">Хариуцлагатай тоглоом</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Манай Давуу Талууд</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Яагаад Pensieve Gate LLC-г сонгох ёстой вэ?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">10+ жилийн туршлага</h3>
              <p className="opacity-90">Сугалааны салбарт олон жилийн туршлагатай</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Аюулгүй</h3>
              <p className="opacity-90">Дэлхийн стандартын аюулгүй байдал</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Дэмжлэг</h3>
              <p className="opacity-90">Тасралтгүй техникийн дэмжлэг үйлчилгээ</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Хурдан Хөгжүүлэлт</h3>
              <p className="opacity-90">Богино хугацаанд бэлэн шийдэл</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Бидэнтэй Холбогдох</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Таны бизнест тохирсон шийдлийг хамтдаа бүтээцгээе
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
              Үнэгүй зөвлөгөө авах
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
              Демо харах
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">Вэб сайт</h3>
                <p className="text-gray-600">www.pensievegate.mn</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">Утас</h3>
                <p className="text-gray-600">+976 1234-5678</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold mb-2">И-мэйл</h3>
                <p className="text-gray-600">info@pensievegate.mn</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
                <h3 className="text-xl font-bold">Pensieve Gate LLC</h3>
              </div>
              <p className="text-gray-400">
                Монгол Улсын сугалааны зах зээлд зориулсан дэвшилтэт технологийн шийдэл
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Үйлчилгээ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Мобайл аппликейшн</li>
                <li>Вэб платформ</li>
                <li>Зөвлөх үйлчилгээ</li>
                <li>Техникийн дэмжлэг</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компани</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Бидний тухай</li>
                <li>Баг</li>
                <li>Карьер</li>
                <li>Мэдээ</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Холбоо барих</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+976 1234-5678</li>
                <li>info@pensievegate.mn</li>
                <li>Улаанбаатар, Монгол Улс</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Pensieve Gate LLC. Бүх эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;