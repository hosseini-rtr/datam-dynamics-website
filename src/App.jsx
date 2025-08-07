import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Blog,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  OurTeam,
  WhatWeDo,
} from "./components";
import {
  BlogDetail,
  Content,
  Create,
  Explore,
  HelpCenter,
  HowItWorks,
  JoinUs,
  Newsletters,
  Partners,
  Sponsor,
  Suggestions,
  TermsAndServices,
} from "./pages";
import styles from "./style";

const Home = () => (
  <>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <Business />
        <WhatWeDo />
        <CardDeal />
        <Blog limit={3} showMoreButton={true} />
        <OurTeam />
        <Clients />
        <CTA />
      </div>
    </div>
  </>
);

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/create" element={<Create />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/terms-and-services" element={<TermsAndServices />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/newsletters" element={<Newsletters />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/sponsor" element={<Sponsor />} />
      </Routes>

      <div className={`${styles.paddingX}`}>
        <Footer />
      </div>
    </div>
  </Router>
);

export default App;
