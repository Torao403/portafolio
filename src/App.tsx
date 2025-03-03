import './App.css'
import Welcome from './componentes/bienvenida/welcome'
import ProjectCard from './componentes/projectCard/projectcard'
import { projects } from './componentes/projectCard/projects'
import { FaHtml5, FaCss3, FaReact} from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileCSharpFill } from "react-icons/pi";
import { FaGitAlt, FaGithub } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import perfil from './assets/imagenes/perfil.jpg'




function App() {

  return (
    <div className='App'>
      <div className='navbar'>
        <img className='foto' src={perfil} alt='Foto Perfil' />
        <div><a href='#inicio'>Inicio</a></div>
        <div><a href='#proyectos'>Proyectos</a></div>
      </div>
      <div id='inicio'>
        <Welcome />
      </div>
      <div id='proyectos' className='projectsContainer' >
        <section className='tecnologias'>
          <h1>Proyectos</h1>
          <div className='iconsTec'>
            <div className='icon'><FaHtml5 /></div>
            <div className='icon'><FaCss3 /></div>
            <div className='icon'><IoLogoJavascript /></div>
            <div className='icon'><FaReact /></div>
            <div className='icon'><PiFileCSharpFill /></div>
            <div className='icon'><SiVite /></div>
            <div className='icon'><FaGitAlt /></div>
            <div className='icon'><FaGithub /></div>
          </div>
        </section>
        <div className='projectsGrid'>
          {projects.map((projects) => (
            <ProjectCard
              title={projects.title}
              description={projects.description}
              imageUrl={projects.imageUrl}
              projectUrl={projects.projectUrl}
              githubUrl={projects.githubUrl}
            />
          ))}</div>
      </div>
      <footer><p>&copy; DaniDev. Todos los derechos reservados.</p>{new Date().getFullYear()}</footer>
    </div>
  );
};

export default App
