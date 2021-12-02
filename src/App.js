import './App.css';
import AdminNavbar from './components/AdminNavbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <AdminNavbar />
      <Sidebar />
      <main id="main" className="main">

          <div className="pagetitle">
            <h1>Dashboard</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="dashboard.html">Home</a></li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </nav>
          </div>{/*{/*<!-- End Page Title -->*/}

          <section className="section dashboard">
            <div className="row">

              {/*{/*<!-- Left side columns -->*/}
              <div className="col-lg-8">
                <div className="row">

                  {/*{/*<!-- Sales Card -->*/}
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card sales-card">

                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li><a className="dropdown-item" href="#">Today</a></li>
                          <li><a className="dropdown-item" href="#">This Month</a></li>
                          <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">Eventos Activos <span> | Hoy</span></h5>

                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-calendar4-event"></i>
                          </div>
                          <div className="ps-3">
                            <h6>145</h6>

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>{/*{/*<!-- End Sales Card -->*/}

                  {/*{/*<!-- Revenue Card -->*/}
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card revenue-card">

                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li><a className="dropdown-item" href="#">Today</a></li>
                          <li><a className="dropdown-item" href="#">This Month</a></li>
                          <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title"> Ganancias <span>| Actual</span></h5>

                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-currency-dollar"></i>
                          </div>
                          <div className="ps-3">
                            <h6>$3,264</h6>
                            <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">aumento</span>

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>{/*{/*<!-- End Revenue Card -->*/}

                  {/*{/*<!-- Customers Card -->*/}
                  <div className="col-xxl-4 col-xl-12">

                    <div className="card info-card customers-card">

                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li><a className="dropdown-item" href="#">Today</a></li>
                          <li><a className="dropdown-item" href="#">This Month</a></li>
                          <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">Clientes Activos <span>| Actual</span></h5>

                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-people"></i>
                          </div>
                          <div className="ps-3">
                            <h6>1244</h6>
                            <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">disminución</span>

                          </div>
                        </div>

                      </div>
                    </div>

                  </div>{/*{/*<!-- End Customers Card -->*/}

                  {/*{/*<!-- Reports -->*/}
                  <div className="col-12">
                    <div className="card">

                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li><a className="dropdown-item" href="#">Today</a></li>
                          <li><a className="dropdown-item" href="#">This Month</a></li>
                          <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">Reports <span>/Today</span></h5>

                        {/*{/*<!-- Line Chart -->*/}
                        <div id="reportsChart"></div>

                        {/*<!--<script>
                          document.addEventListener("DOMContentLoaded", () => {
                            new ApexCharts(document.querySelector("#reportsChart"), {
                              series: [{
                                name: 'Sales',
                                data: [31, 40, 28, 51, 42, 82, 56],
                              }, {
                                name: 'Revenue',
                                data: [11, 32, 45, 32, 34, 52, 41]
                              }, {
                                name: 'Customers',
                                data: [15, 11, 32, 18, 9, 24, 11]
                              }],
                              chart: {
                                height: 350,
                                type: 'area',
                                toolbar: {
                                  show: false
                                },
                              },
                              markers: {
                                size: 4
                              },
                              colors: ['#4154f1', '#2eca6a', '#ff771d'],
                              fill: {
                                type: "gradient",
                                gradient: {
                                  shadeIntensity: 1,
                                  opacityFrom: 0.3,
                                  opacityTo: 0.4,
                                  stops: [0, 90, 100]
                                }
                              },
                              dataLabels: {
                                enabled: false
                              },
                              stroke: {
                                curve: 'smooth',
                                width: 2
                              },
                              xaxis: {
                                type: 'datetime',
                                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                              },
                              tooltip: {
                                x: {
                                  format: 'dd/MM/yy HH:mm'
                                },
                              }
                            }).render();
                          });
                        </script>-->*/}
                        {/*<!-- End Line Chart -->*/}

                      </div>

                    </div>
                  </div>{/*{/*<!-- End Reports -->*/}

                  {/*{/*<!-- Recent Sales -->*/}
                  <div className="col-12">
                    <div className="card recent-sales">

                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li><a className="dropdown-item" href="#">Today</a></li>
                          <li><a className="dropdown-item" href="#">This Month</a></li>
                          <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">Recent Sales <span>| Today</span></h5>

                        <table className="table table-borderless datatable">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Customer</th>
                              <th scope="col">Product</th>
                              <th scope="col">Price</th>
                              <th scope="col">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row"><a href="#">#2457</a></th>
                              <td>Brandon Jacob</td>
                              <td><a href="#" className="text-primary">At praesentium minu</a></td>
                              <td>$64</td>
                              <td><span className="badge bg-success">Approved</span></td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#">#2147</a></th>
                              <td>Bridie Kessler</td>
                              <td><a href="#" className="text-primary">Blanditiis dolor omnis similique</a></td>
                              <td>$47</td>
                              <td><span className="badge bg-warning">Pending</span></td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#">#2049</a></th>
                              <td>Ashleigh Langosh</td>
                              <td><a href="#" className="text-primary">At recusandae consectetur</a></td>
                              <td>$147</td>
                              <td><span className="badge bg-success">Approved</span></td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#">#2644</a></th>
                              <td>Angus Grady</td>
                              <td><a href="#" className="text-primar">Ut voluptatem id earum et</a></td>
                              <td>$67</td>
                              <td><span className="badge bg-danger">Rejected</span></td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#">#2644</a></th>
                              <td>Raheem Lehner</td>
                              <td><a href="#" className="text-primary">Sunt similique distinctio</a></td>
                              <td>$165</td>
                              <td><span className="badge bg-success">Approved</span></td>
                            </tr>
                          </tbody>
                        </table>

                      </div>

                    </div>
                  </div>{/*{/*<!-- End Recent Sales -->*/}

                  {/*{/*<!-- Top Selling -->*/}
                  <div className="col-12">
                    <div className="card top-selling">

                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li><a className="dropdown-item" href="#">Today</a></li>
                          <li><a className="dropdown-item" href="#">This Month</a></li>
                          <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                      </div>

                      <div className="card-body pb-0">
                        <h5 className="card-title">Top Selling <span>| Today</span></h5>

                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th scope="col">Preview</th>
                              <th scope="col">Product</th>
                              <th scope="col">Price</th>
                              <th scope="col">Sold</th>
                              <th scope="col">Revenue</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row"><a href="#"><img src="assets/img/product-1.jpg" alt=""/></a></th>
                              <td><a href="#" className="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                              <td>$64</td>
                              <td className="fw-bold">124</td>
                              <td>$5,828</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#"><img src="assets/img/product-2.jpg" alt=""/></a></th>
                              <td><a href="#" className="text-primary fw-bold">Exercitationem similique doloremque</a></td>
                              <td>$46</td>
                              <td className="fw-bold">98</td>
                              <td>$4,508</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#"><img src="assets/img/product-3.jpg" alt=""/></a></th>
                              <td><a href="#" className="text-primary fw-bold">Doloribus nisi exercitationem</a></td>
                              <td>$59</td>
                              <td className="fw-bold">74</td>
                              <td>$4,366</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#"><img src="assets/img/product-4.jpg" alt=""/></a></th>
                              <td><a href="#" className="text-primary fw-bold">Officiis quaerat sint rerum error</a></td>
                              <td>$32</td>
                              <td className="fw-bold">63</td>
                              <td>$2,016</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#"><img src="assets/img/product-5.jpg" alt=""/></a></th>
                              <td><a href="#" className="text-primary fw-bold">Sit unde debitis delectus repellendus</a></td>
                              <td>$79</td>
                              <td className="fw-bold">41</td>
                              <td>$3,239</td>
                            </tr>
                          </tbody>
                        </table>

                      </div>

                    </div>
                  </div>{/*{/*<!-- End Top Selling -->*/}

                </div>
              </div>{/*{/*<!-- End Left side columns -->*/}

              {/*{/*<!-- Right side columns -->*/}
              <div className="col-lg-4">

                {/*{/*<!-- Recent Activity -->*/}
                <div className="card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a className="dropdown-item" href="#">Today</a></li>
                      <li><a className="dropdown-item" href="#">This Month</a></li>
                      <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">Recent Activity <span>| Today</span></h5>

                    <div className="activity">

                      <div className="activity-item d-flex">
                        <div className="activite-label">32 min</div>
                        <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                        <div className="activity-content">
                          Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
                        </div>
                      </div>{/*{/*<!-- End activity item-->*/}

                      <div className="activity-item d-flex">
                        <div className="activite-label">56 min</div>
                        <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                        <div className="activity-content">
                          Voluptatem blanditiis blanditiis eveniet
                        </div>
                      </div>{/*{/*<!-- End activity item-->*/}

                      <div className="activity-item d-flex">
                        <div className="activite-label">2 hrs</div>
                        <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                        <div className="activity-content">
                          Voluptates corrupti molestias voluptatem
                        </div>
                      </div>{/*{/*<!-- End activity item-->*/}

                      <div className="activity-item d-flex">
                        <div className="activite-label">1 day</div>
                        <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                        <div className="activity-content">
                          Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
                        </div>
                      </div>{/*{/*<!-- End activity item-->*/}

                      <div className="activity-item d-flex">
                        <div className="activite-label">2 days</div>
                        <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                        <div className="activity-content">
                          Est sit eum reiciendis exercitationem
                        </div>
                      </div>{/*{/*<!-- End activity item-->*/}

                      <div className="activity-item d-flex">
                        <div className="activite-label">4 weeks</div>
                        <i className='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                        <div className="activity-content">
                          Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                        </div>
                      </div>{/*{/*<!-- End activity item-->*/}

                    </div>

                  </div>
                </div>{/*{/*<!-- End Recent Activity -->*/}

                {/*{/*<!-- Budget Report -->*/}
                <div className="card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a className="dropdown-item" href="#">Today</a></li>
                      <li><a className="dropdown-item" href="#">This Month</a></li>
                      <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div className="card-body pb-0">
                    <h5 className="card-title">Budget Report <span>| This Month</span></h5>

                    <div id="budgetChart" className="echart" style={{height: '400px'}}>
                    </div>

                    {/*<!-- "budged report"<script>
                      document.addEventListener("DOMContentLoaded", () => {
                        var budgetChart = echarts.init(document.querySelector("#budgetChart")).setOption({
                          legend: {
                            data: ['Allocated Budget', 'Actual Spending']
                          },
                          radar: {
                            // shape: 'circle',
                            indicator: [{
                                name: 'Sales',
                                max: 6500
                              },
                              {
                                name: 'Administration',
                                max: 16000
                              },
                              {
                                name: 'Information Technology',
                                max: 30000
                              },
                              {
                                name: 'Customer Support',
                                max: 38000
                              },
                              {
                                name: 'Development',
                                max: 52000
                              },
                              {
                                name: 'Marketing',
                                max: 25000
                              }
                            ]
                          },
                          series: [{
                            name: 'Budget vs spending',
                            type: 'radar',
                            data: [{
                                value: [4200, 3000, 20000, 35000, 50000, 18000],
                                name: 'Allocated Budget'
                              },
                              {
                                value: [5000, 14000, 28000, 26000, 42000, 21000],
                                name: 'Actual Spending'
                              }
                            ]
                          }]
                        });
                      });
                    </script>-->*/}

                  </div>
                </div>{/*{/*<!-- End Budget Report -->*/}

                {/*{/*<!-- Website Traffic -->*/}
                <div className="card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a className="dropdown-item" href="#">Today</a></li>
                      <li><a className="dropdown-item" href="#">This Month</a></li>
                      <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div className="card-body pb-0">
                    <h5 className="card-title">Website Traffic <span>| Today</span></h5>

                    <div id="trafficChart" style={{height: '400px'}} className="echart"></div> {/*<!-- expresion real: style={{min-height: '400px'}}> -->*/}

                    {/*<!-- web trafict grafic <script>
                      document.addEventListener("DOMContentLoaded", () => {
                        echarts.init(document.querySelector("#trafficChart")).setOption({
                          tooltip: {
                            trigger: 'item'
                          },
                          legend: {
                            top: '5%',
                            left: 'center'
                          },
                          series: [{
                            name: 'Access From',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                              show: false,
                              position: 'center'
                            },
                            emphasis: {
                              label: {
                                show: true,
                                fontSize: '18',
                                fontWeight: 'bold'
                              }
                            },
                            labelLine: {
                              show: false
                            },
                            data: [{
                                value: 1048,
                                name: 'Search Engine'
                              },
                              {
                                value: 735,
                                name: 'Direct'
                              },
                              {
                                value: 580,
                                name: 'Email'
                              },
                              {
                                value: 484,
                                name: 'Union Ads'
                              },
                              {
                                value: 300,
                                name: 'Video Ads'
                              }
                            ]
                          }]
                        });
                      });
                    </script>-->*/}

                  </div>
                </div>{/*{/*<!-- End Website Traffic -->*/}

                {/*{/*<!-- News & Updates Traffic -->*/}
                <div className="card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a className="dropdown-item" href="#">Today</a></li>
                      <li><a className="dropdown-item" href="#">This Month</a></li>
                      <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div className="card-body pb-0">
                    <h5 className="card-title">News &amp; Updates <span>| Today</span></h5>

                    <div className="news">
                      <div className="post-item clearfix">
                        <img src="assets/img/news-1.jpg" alt=""/>
                        <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                        <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                      </div>

                      <div className="post-item clearfix">
                        <img src="assets/img/news-2.jpg" alt=""/>
                        <h4><a href="#">Quidem autem et impedit</a></h4>
                        <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                      </div>

                      <div className="post-item clearfix">
                        <img src="assets/img/news-3.jpg" alt=""/>
                        <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
                        <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                      </div>

                      <div className="post-item clearfix">
                        <img src="assets/img/news-4.jpg" alt=""/>
                        <h4><a href="#">Laborum corporis quo dara net para</a></h4>
                        <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                      </div>

                      <div className="post-item clearfix">
                        <img src="assets/img/news-5.jpg" alt=""/>
                        <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
                        <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
                      </div>

                    </div>{/*{/*<!-- End sidebar recent posts-->*/}

                  </div>
                </div>{/*{/*<!-- End News & Updates -->*/}

              </div>{/*{/*<!-- End Right side columns -->*/}

            </div>
          </section>

      </main>{/*{/*<!-- End #main -->*/}




      <Footer />
    </div>
  );
}

export default App;
