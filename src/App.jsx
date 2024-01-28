
//estilos
import '../src/css/reset/reset.css';
import '../src/css/style.css';

import '../src/css/tools/root.css';
import BiographyDetail from './components/container/biography-detail';
//componentes
import SpecializationDetail from './components/container/specialization-detail';
import Footer from './components/pure/footer/footer';



//npm run dev
function App() {
  return (
    <div className='app'>
      <SpecializationDetail></SpecializationDetail>
      <BiographyDetail></BiographyDetail>
      <Footer></Footer>
    </div>
  )
}

export default App
