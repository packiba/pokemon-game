import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import img1 from "./assets/bg1.jpg"
import img2 from "./assets/bg2.jpg"

const App = () => {
  
  return (
   <>
    <Header title='Hello' descr='This is Header'/>
    <Layout title='Section 1' descr='This is Section 1' urlBg={img1}/>
    <Layout title='Section 2' descr='This is Section 2' colorBg='Red'/>
    <Layout title='Section 3' descr='This is Section 3' urlBg={img2}/>
    <Footer/>
   </>
  );
}

export default App;
