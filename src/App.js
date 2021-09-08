import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import img1 from "./assets/bg1.jpg"
import img2 from "./assets/bg2.jpg"

const App = () => {
  
  return (
   <>
    <Header title='Hello' descr='This is header'/>
    <Layout urlBg={img1} title='Section 1'/>
    <Layout colorBg='Red'/>
    <Layout urlBg={img2} descr='Description 3'/>
    <Footer/>
   </>
  );
}

export default App;
