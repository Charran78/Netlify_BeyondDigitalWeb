// Componente principal migrado desde portafolio.jsx

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, User, Home } from 'lucide-react';

// SVG BuyMeACoffee
const BuyMeACoffee = ({ size = 40, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="16" fill="#FFDD00"/>
    <path d="M19 22h26l-2.5 20.5a7.5 7.5 0 01-7.5 6.5h-6a7.5 7.5 0 01-7.5-6.5L19 22z" stroke="#333" strokeWidth="2" fill="#fff"/>
    <ellipse cx="32" cy="28" rx="12" ry="4" fill="#FFDD00" stroke="#333" strokeWidth="2"/>
    <path d="M25 22a7 7 0 0114 0" stroke="#333" strokeWidth="2"/>
  </svg>
);
// Datos de proyectos 
const projectsData = [
  {
    id: 1,
    title: 'DocuBox - RAG 100% Local',
    description: 'Sistema de búsqueda semántica para documentos con IA integrada. Python, Streamlit, Ollama.',
    githubUrl: 'https://github.com/Charran78/docubox',
    technologies: ['Python', 'Streamlit', 'Ollama', 'SQLite'],
    imageUrl: 'https://raw.githubusercontent.com/Charran78/DocuBox/refs/heads/main/docbox6.gif' // ejemplo
  },
  {
    id: 2, 
    title: 'D&D Solo Adventure with AI',
    description: 'Motor de juego de rol con Dungeon Master por IA local. Python, Ollama, SQLite, Pygame.',
    githubUrl: 'https://github.com/Charran78/ROL',
    technologies: ['Python', 'Ollama', 'SQLite', 'Pygame', 'Gradio'],
    imageUrl: 'https://raw.githubusercontent.com/Charran78/ROL/refs/heads/main/demo.gif' // ejemplo
  },
  {
    id: 3,
    title: 'Asistente de IA Local',
    description: 'Interfaz creada en Gradio para la interacción con Modelos de LLM de Ollama',
    githubUrl: 'https://github.com/Charran78/asistente-ia-local/',
    technologies: ['Python', 'Gradio', 'Ollama'],
    imageUrl: 'https://raw.githubusercontent.com/Charran78/asistente-ia-local/refs/heads/main/demo.gif' // ejemplo
  },
  {
    id: 4,
    title: 'Q/A Curator',
    description: 'Aplicación en React para la creación de DataSets mediante validación, para Fine Tuning de Modelos personalizados.',
    githubUrl: 'https://github.com/Charran78/QA_Curator_Dataset_ML_IA_Creator_Espanol',
    technologies: ['React', 'GeminiApi', 'Ollama'],
    imageUrl: 'https://i.postimg.cc/B63y6D9d/qademo1.gif' // ejemplo
  },
];

// Configuración de fondos para cada pestaña
const backgroundConfig = {
  inicio: {
    light: 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
    dark: 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900'
  },
  proyectos: {
    light: 'bg-gradient-to-br from-green-50 via-white to-cyan-50',
    dark: 'bg-gradient-to-br from-gray-900 via-green-900 to-cyan-900'
  },
  bio: {
    light: 'bg-gradient-to-br from-orange-50 via-white to-red-50',
    dark: 'bg-gradient-to-br from-gray-900 via-orange-900 to-red-900'
  },
  contacto: {
    light: 'bg-gradient-to-br from-purple-50 via-white to-pink-50',
    dark: 'bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900'
  }
};

// Componente principal de la aplicación.
const App = () => {
  const [activeTab, setActiveTab] = useState('inicio');
  const [currentBackground, setCurrentBackground] = useState(backgroundConfig.inicio);

  // Efecto para cambiar el fondo cuando cambia la pestaña
  useEffect(() => {
    setCurrentBackground(backgroundConfig[activeTab]);
  }, [activeTab]);

  // Función para renderizar el contenido según la pestaña activa.
  const renderContent = () => {
    switch (activeTab) {
      case 'proyectos':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 text-center mb-8">
              Mis Proyectos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projectsData.map(project => (
                <div
                  key={project.id}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-6">
                    {/* Imagen del proyecto */}
                    {project.imageUrl && (
                      <img
                        src={project.imageUrl}
                        alt={`Imagen de ${project.title}`}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                      />
                    )}
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
                    >
                      <Github size={16} />
                      Ver en GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'bio':
        return (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Mi Historia
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            </div>

            <div className="bg-blue-50/80 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">
                🚀 Transformación Profesional
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Técnico en sistemas con más de 18 años de experiencia, reinventándome como desarrollador 
                especializado en IA local y soluciones prácticas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  💼 Experiencia
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4 bg-white/50 dark:bg-gray-800/50 p-3 rounded-r-lg">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Desarrollador Independiente</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2024 - Presente</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">
                      Desarrollo de herramientas de IA local y automatización de procesos.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4 bg-white/50 dark:bg-gray-800/50 p-3 rounded-r-lg">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Técnico de Sistemas</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">+18 años de experiencia</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">
                      Resolución de incidencias técnicas y soporte en entornos industriales.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  🛠️ Tecnologías
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Docker', 'React', 'Streamlit', 'Ollama', 'SQLite', 'FastAPI', 'Linux'].map((tech) => (
                    <span key={tech} className="px-3 py-2 bg-gray-800/90 dark:bg-gray-700/90 text-white rounded-lg text-sm backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                🏆 Certificaciones
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Certificaciones Recientes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
                  issuer: "Oracle University",
                  badgeImage: "https://i.postimg.cc/9M2SMT5K/GENAIPRO.gif",
                  url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=EE5B98B0A58BBD92899A5629FD22BBFE5F3CF33415D55CCFCDEF6B9C0FF50F11",
                  date: "November 2025"
                },
                {
                  id: 2,
                  title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
                  issuer: "Oracle University",
                  badgeImage: "https://i.postimg.cc/0Qv3QmR3/OCI25FA.gif",
                  url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=EE5B98B0A58BBD92899A5629FD22BBFE5F3CF33415D55CCFCDEF6B9C0FF50F11",
                  date: "October 2025"
                },
                {
                  id: 3,
                  title: "Python Avanzado",
                  issuer: "Cursa - FreeCodeCamp",
                  badgeImage: "https://i.postimg.cc/W3VK3rLH/PYY2.gif",
                  url: "https://cursa.app/es/mi-certificado/cert0b1d5b3b1ffa8d9fd26ae6bda3b73ae6",
                  date: "September 2025"
                }
              ].map((cert) => (
                <a
                  key={cert.id}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/70 dark:bg-gray-800/70 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 backdrop-blur-sm hover:scale-105"
                >
                  <div className="p-4">
                    <div className="flex justify-center mb-3">
                      <img 
                        src={cert.badgeImage} 
                        alt={`Badge ${cert.title}`}
                        className="w-20 h-20 object-contain transition-transform group-hover:scale-110"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-center mb-2 line-clamp-3">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-2">
                      {cert.date}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

            <div className="text-center pt-6">
              <a 
                href="https://github.com/Charran78" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/90 dark:bg-gray-700/90 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 backdrop-blur-sm"
              >
                <Github size={20} />
                Ver mi GitHub
              </a>
            </div>
          </div>
        );

      case 'contacto':
        return (
          <div className="space-y-8 text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Contáctame
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              ¿Tienes un proyecto? No me digas que es difícil, dime que es interesante
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
              <a
                href="https://github.com/Charran78"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white-300 dark:border-white-400 hover:bg-blue-50 dark:hover:bg-white-900"
              >
                <Github size={40} className="text-gray-800 dark:text-gray-200" />
                <span className="font-medium text-gray-700 dark:text-gray-300">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/pedro-menc%C3%ADas-68223336b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-300 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900"
              >
                <Linkedin size={40} className="text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-gray-700 dark:text-gray-300">LinkedIn</span>
              </a>

              <a
                href="mailto:beyond.digital.web@gmail.com"
                className="flex flex-col items-center gap-3 p-6 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-300 dark:border-red-400 hover:bg-red-50 dark:hover:bg-red-900"
              >
                <Mail size={40} className="text-red-500 dark:text-red-400" />
                <span className="font-medium text-gray-700 dark:text-gray-300">Email</span>
              </a>
              {/* Nuevo enlace BuyMeACoffee */}
              <a
                href="https://buymeacoffee.com/beyonddigiv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-300 dark:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900"
              >
                <BuyMeACoffee size={40} />
                <span className="font-medium text-gray-700 dark:text-gray-300">Buy Me a Coffee</span>
              </a>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center space-y-8 py-8">
            <div className="relative">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-gray-200 mb-6">
                Hola, soy <span className="text-blue-500">Pedro</span>
              </h1>
              <div className="w-32 h-1 bg-blue-500 mx-auto mb-8"></div>
              {/* Foto de perfil responsiva y animada */}
              <div className="flex justify-center mb-8">
                <img
                  src="https://i.postimg.cc/28W0fDTw/portfolio.png"
                  alt="Foto de Pedro Mencías"
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-blue-500 transition-transform duration-300 hover:scale-105"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              <span className="text-blue-500 font-semibold">.Oracle Cloud Infrastructure 2025 Generative AI Professional.</span>
              <br>Con experiencia práctica en LLMs, RAG, Arquitecturas IA Enterprise.</br>
              Apasionado por crear soluciones de
              <span className="text-blue-500 font-semibold"> IA local </span> 
              y herramientas prácticas. Transformando ideas en código funcional.
            </p>

            <div className="pt-8">
              <button
                onClick={() => setActiveTab('proyectos')}
                className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-semibold text-lg"
              >
                Ver mis proyectos
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ease-in-out ${currentBackground.light} dark:${currentBackground.dark} text-gray-800 dark:text-gray-200 font-sans p-4`}>
      <nav className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg rounded-full max-w-2xl w-full mx-auto mb-8 border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          <button
            onClick={() => setActiveTab('inicio')}
            className={`flex items-center gap-2 px-4 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'inicio' 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Home size={18} />
            Inicio
          </button>
          <button
            onClick={() => setActiveTab('proyectos')}
            className={`flex items-center gap-2 px-4 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'proyectos' 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Github size={18} />
            Proyectos
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveTab('bio')}
            className={`flex items-center gap-2 px-4 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'bio' 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <User size={18} />
            Bio
          </button>
          <button
            onClick={() => setActiveTab('contacto')}
            className={`flex items-center gap-2 px-4 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'contacto' 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Mail size={18} />
            Contacto
          </button>
        </div>
      </nav>

      <main className="container mx-auto p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 min-h-[500px] transition-all duration-300">
        {renderContent()}
      </main>

      <footer className="text-center mt-12 pb-8">
        <p className="text-blue-600 dark:text-blue-800">
          Hecho en Asturias, España. Con ❤️ y miles_de_errores por Pedro Mencías - {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};


export default App;
