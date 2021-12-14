
import NavBar from '../components/General/NavBar';
import Footer from '../components/General/Footer';
import TablaFeed from '../components/General/TablaFeed';
import DisplayTicketApuestas from '../components/General/DisplayTicketApuestas';

function Feed() {
  return (
    <>
      <NavBar />
      <link href="/assets/css/styleMaicol.css" rel="stylesheet"/>
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

export default Feed;
