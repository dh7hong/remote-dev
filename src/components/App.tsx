import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header, { HeaderTop } from "./Header";
import Logo from "./Logo";
import BookmarksButton from "./BookmarksButton";
import SearchForm from "./SearchForm";
import Sidebar, { SidebarTop } from "./Sidebar";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";
import { Toaster } from "react-hot-toast";
import JobListSearch from "./JobListSearch";
import JobDetailsContainer from "./JobDetailsContainer";
import OpenJobDetails from "./OpenJobDetails";

function App() {
  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>

        <SearchForm />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount />
            <SortingControls />
            <OpenJobDetails />
          </SidebarTop>
          <JobListSearch />
          {/* JobListSearch is a wrapper component for JobList */}
          <PaginationControls />
        </Sidebar>
        <JobDetailsContainer />
        {/* <JobItemContent /> */}
      </Container>
      <Footer />

      <Toaster position="top-right" />
    </>
  );
}

export default App;
