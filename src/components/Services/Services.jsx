import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const serviceData = [
  {
    img: "https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1577544878400-NQJ4KVLAOTT9CG7T9YEC/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IT+services+and+solutions?format=500w",
    title: "IT SERVICES & SOLUTIONS",
    description: `With the rapid evolution of technology, organizations need to implement and support new business applications while at the same time maintaining and upgrading their existing legacy systems. To manage this, companies seek to expand development capacity, accelerate time to market. We provide our customers immediate and sustained value in Data Science, IoT, Big Data, Analytics, Information Technology strategy and execution.`,
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1577533619440-06GRB5O3ERQBLX4OEA4T/ke17ZwdGBToddI8pDm48kOggE0Ch6pMGalwtLMqzsSB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ufo5RWkg_J4of0jUNHaDHx6pZKBvpVYzidBWCapg0tuoMuEaB2HPGSYDV-11UTcW2g/business+application+development?format=500w",
    title: "BUSINESS APPLICATION DEVELOPMENT:",
    description: `Our consultants closely work with our client managers to provide them our competitive advantage. We have demonstrated strengths in enterprise software – SalesForce, Oracle and SAP. Our capabilities for Full Project life cycle Implementations and migrations have resulted in long-term relationship with our clients.We develop custom solutions on multiple platforms that are fully aligned with business goals.`,
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1582470234340-5ZY1YRXRZG9I830VMLAQ/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/cloud+application+development?format=500w",
    title: "WEB/MOBILE/CLOUD APPLICATION DEVELOPMENT:",
    description: `Our team of developers have experience in developing JavaScript/Jquery solutions using tool kits like GWT, Dojo and EXTJS, have experience in Adobe, HTML & CSS etc. We have deep experience on the .NET platform. Our software engineers and developers have experience in both front-end and  back-end and can rapidly design custom solutions and platforms.We understand virtualization of networking and virtualization of security. We have the skills and capabilities for development, deployment and migration to the cloud. Our cloud implementations are both seamless and scalable.
    
    Our mobile development applications teams have core competencies with HTML5, JavaScript & Windows technologies.

    This enables us to rapidly develop mobile apps that are consistent across devices for: <ul><li>iPhone apps</li><li>Android apps</li><li>Windows mobile apps</li><li>Application testing</li><ul>`,
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1582470320121-JU6NHGR8P2RRVYA19C7C/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/consulting+services?format=500w",
    title: "CONSULTING SERVICES",
    description: `The Emonics consulting services group has capabilities in: <ul><li>Technology Services Project Staffing</li><li>IT Implementation consulting</li><li>Big Data/BI Consulting</li><ul>`,
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1582470773155-QU9H7C3KHP288YS3QXHW/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/contract+Staffing+and+placement+services?format=500w",
    title:
      "TECHNOLOGY SERVICES AND PROJECT STAFFING – CONTRACT STAFFING AND PLACEMENT SERVICES",
    description: `Our consultants bring significant value to the projects at our clients due to having years of qualified experience.<ul><li>Designers and Developers</li><li>Front end, Back end, Application Developers, etc</li><li>Java, Programmers, Web Developers, Web Architects and Java Software Engineers</li><li>Application Developers with solid experience in C, C++, C #.Net and ASP.Net, SharePoint and Web Graphic designers</li><li>BI Architects,Data Modelers, Data Architects/Data Warehousing Architects, Data Warehouse developers, etc </li><ul>`,
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1582470900362-L415NZJ5GA0G96NBTKK0/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/custom+development+of+IT+solutions?format=500w",
    title:
      "IT – IMPLEMENTATION CONSULTING AND CUSTOM DEVELOPMENT OF IT SOLUTIONS",
    description: `Our consultants bring significant value to the projects at our clients due to having years of qualified experience.<ul><li>A clear understanding of business requirements, objectives and benefits</li><li>The most appropriate selection of software and hardware platforms</li><li>Integration with and use of any existing IT infrastructure (hardware and software)</li><liEase of knowledge management and sharing with internal and external partners</li><li>Ability to maintain the system, determined by its architecture and framework</li><ul>`,
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1582471084518-TCQYO7A41OOS7K31GBPZ/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/Big+data+and%C2%A0BI+consulting?format=500w",
    title:
      "IT – IMPLEMENTATION CONSULTING AND CUSTOM DEVELOPMENT OF IT SOLUTIONS",
    description: `Big data is a strategic focus area for Emonics. We have developed significant capabilities in big data. Today’s businesses access big data that’s growing in volume, variety, velocity and complexity. With more data coming from more sources faster than ever, the question is – What is your big data strategy? How are you combining new and existing data sources to make better decisions about your business? How could new data sources including social, sensors, location and video help improve your business performance? Will your big data remain dormant or will you make it work for you?
    As your partner, we will work to help you steamline the process of managing your big data. With proven expertise in mature technologies and thought leadership in those that are emerging, our team of senior consultants will help you implement the technologies you need to manage and understand your data allowing you to predict customer demand and make better decisions faster than ever before. Whatever your big data challenges are, we’ll provide you the strategic guidance you need to succeed. Our capabilities include:`,
  },
];

const Services = () => {
  return (
    <section>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          width: "100%",
          height: "300px",
          background: `url("https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1579549330940-4KXBKLWZ263OXIROY57R/ke17ZwdGBToddI8pDm48kPLerjwc9T00S19UIx4D7DV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWQaL5Zc965r8V2AH38PHUO8HP8IE1QJFP1I8jNvddiftNpR-oeFwj2Ae_lbqFbpxA/office-1209640_1920.jpg?format=2500w")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      >
        <h2>Services</h2>
      </div>
      <Container fluid className="mt-5">
        <h3 className="mb-3 text-center">STAFFING</h3>
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1603124424683-FH6JZ9PDK6UCAR9UG9G5/ke17ZwdGBToddI8pDm48kOggE0Ch6pMGalwtLMqzsSB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ufo5RWkg_J4of0jUNHaDHx6pZKBvpVYzidBWCapg0tuoMuEaB2HPGSYDV-11UTcW2g/staffing-services.jpg?format=1000w"
            alt="office"
            className="img-fluid w-100"
          />
          <p style={{ lineHeight: 1.9 }}>
            Our recruiters become the equivalent of your corporate recruiting
            department. We continuously search for the qualified and right
            candidates to suit your business. We identify, interview, screen and
            present the best candidates for your consideration.
          </p>
          <p style={{ lineHeight: 1.9 }}>
            Our team assists you at each stage, whether you are crafting an
            initial recruiting structure, or simply correcting an ineffective
            process. Emonic’s cutting-edge applicant tracking system helps
            streamline your recruiting process so you can maintain the candidate
            pool and improve candidate experience.
          </p>
          <Button variant="outline-dark" className="d-block mx-auto p-3">
            <Link to="/contact" className="link_style">
              BUILD YOUR SOLUTION
            </Link>
          </Button>
        </div>
        <div className="container mt-5">
          <hr />
        </div>
        <Row className="mt-5">
          {serviceData.map((item) => {
            const { img, title, description } = item;
            return (
              <>
                <Col xs={12} sm={6} className="p-2">
                  <img className="img-fluid w-100" src={img} alt="l" />
                </Col>
                <Col xs={12} md={6} className="p-2">
                  <h3>{title}</h3>
                  <p
                    className="para"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></p>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
      <div className="row container para mx-auto">
        <div className="col-12 col-sm-4">
          <p>NoSQL Databases</p>
          <ul>
            <li>MarkLogic</li>
            <li>MongoDB</li>
            <li>Cassandra</li>
            <li>Solr</li>
          </ul>
        </div>
        <div className="col-12 col-sm-4">
          <p>Hadoop Ecosystem Technologies</p>
          <ul>
            <li>Cloudera</li>
            <li>Hadapt</li>
            <li>Hortonworks</li>
            <li>HBase</li>
            <li>Hive</li>
          </ul>
        </div>
        <div className="col-12 col-sm-4">
          <p>Our big data Consulting services include:</p>
          <ul>
            <li>Hadoop solutions designed by Hadoop-certified consultants</li>
            <li>Big Data Analytics</li>
            <li>Business-level big data strategy consulting</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
