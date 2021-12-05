import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import TablaFeed from './components/TablaFeed';
import DisplayTicketApuestas from './components/DisplayTicketApuestas';

function App() {
  return (
    <>
      <NavBar />
      <link href="/assets/css/TablaFeed.css" rel="stylesheet"/>
      <main id="main" className="main">
          <div className="pagetitle">
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="dashboard.html">Home</a></li>
                <li className="breadcrumb-item active"></li>
              </ol>
            </nav>
          </div>{/*{/*<!-- End Page Title -->*/}

          <section className="section dashboard">
            <div className="row">
              {/*{/*<!-- Left side columns -->*/}
              <div className="col-lg-8">
                <div className="row">  
                  <TablaFeed />
                </div>
              </div>{/*{/*<!-- End Left side columns -->*/}

              {/*{/*<!-- Right side columns -->*/}
              <div className="col-lg-4">
                <DisplayTicketApuestas />
              </div>{/*{/*<!-- End Right side columns -->*/}
            </div>
          </section>
        
      </main>{/*{/*<!-- End #main -->*/}
      <Footer />  
    </>
  );
}

export default App;
