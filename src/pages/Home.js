import Header from "../components/Header";
import Background from "../components/Background";
import JobDetail from "../features/JobDetail";


const Home = () => {

    // const { category, state, numJobs } = props;

    // console.log("value of category from home " + category);


    return (
        <>
            {/* <Header category={category} state={state} numJobs={numJobs} /> */}
            <Header />
            <Background />
            <JobDetail />
        </>
    )
};

export default Home;