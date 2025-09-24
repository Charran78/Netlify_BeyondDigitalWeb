// Componente principal migrado desde portafolio.jsx

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, User, Home } from 'lucide-react';

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
              ¿Tienes un proyecto interesante? ¡Hablemos!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
              <a
                href="https://github.com/Charran78"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 min-w-[140px] backdrop-blur-sm"
              >
                <Github size={40} className="text-gray-800 dark:text-gray-200" />
                <span className="font-medium text-gray-700 dark:text-gray-300">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/pedro-menc%C3%ADas-68223336b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 min-w-[140px] backdrop-blur-sm"
              >
                <Linkedin size={40} className="text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-gray-700 dark:text-gray-300">LinkedIn</span>
              </a>

              <a
                href="mailto:beyond.digital.web@gmail.com"
                className="flex flex-col items-center gap-3 p-6 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 min-w-[140px] backdrop-blur-sm"
              >
                <Mail size={40} className="text-red-500 dark:text-red-400" />
                <span className="font-medium text-gray-700 dark:text-gray-300">Email</span>
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
              Desarrollador autodidacta apasionado por crear soluciones de 
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
      <nav className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg rounded-full max-w-2xl w-full mx-auto mb-8 flex flex-wrap justify-around border border-gray-200 dark:border-gray-700 overflow-hidden">
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
      </nav>

      <main className="container mx-auto p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 min-h-[500px] transition-all duration-300">
        {renderContent()}
      </main>

      <footer className="text-center mt-12 pb-8">
        <p className="text-gray-600 dark:text-gray-400">
          Hecho con ❤️ por Pedro Mencías - {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};


export default App;
