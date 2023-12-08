import { useEffect, useState } from 'react';
import MetricCard from '../components/Home/MetricCard';
import PageTitle from '../utilities/PageTitle';

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('analytics.json');
            const data = await res.json();
            setData(data)
        }
        fetchData()
    }, [])




    return (
        <section className="main-content flex-1 mt-12 md:mt-2 pb-24 md:pb-5">
            <PageTitle title={ "Overview" } />
            <div className="flex flex-wrap">
                {
                    data && data.map((info, index) => <MetricCard key={ index } info={ info } />)
                }
            </div>
            <div className="flex flex-row flex-wrap flex-grow mt-2">
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    {/*Graph Card*/ }
                    <div className="bg-white border-transparent rounded-lg shadow-xl">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                            <h3 className="font-bold uppercase text-gray-600">Graph</h3>
                        </div>
                        <div className="p-5">
                            <canvas
                                id="chartjs-7"
                                className="chartjs"
                                width="undefined"
                                height="undefined"
                            />
                        </div>
                    </div>
                    {/*/Graph Card*/ }
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    {/*Graph Card*/ }
                    <div className="bg-white border-transparent rounded-lg shadow-xl">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                            <h2 className="font-bold uppercase text-gray-600">Graph</h2>
                        </div>
                        <div className="p-5">
                            <canvas
                                id="chartjs-0"
                                className="chartjs"
                                width="undefined"
                                height="undefined"
                            />
                        </div>
                    </div>
                    {/*/Graph Card*/ }
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    {/*Graph Card*/ }
                    <div className="bg-white border-transparent rounded-lg shadow-xl">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                            <h2 className="font-bold uppercase text-gray-600">Graph</h2>
                        </div>
                        <div className="p-5">
                            <canvas
                                id="chartjs-1"
                                className="chartjs"
                                width="undefined"
                                height="undefined"
                            />
                        </div>
                    </div>
                    {/*/Graph Card*/ }
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    {/*Graph Card*/ }
                    <div className="bg-white border-transparent rounded-lg shadow-xl">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                            <h5 className="font-bold uppercase text-gray-600">Graph</h5>
                        </div>
                        <div className="p-5">
                            <canvas
                                id="chartjs-4"
                                className="chartjs"
                                width="undefined"
                                height="undefined"
                            />
                        </div>
                    </div>
                    {/*/Graph Card*/ }
                </div>


            </div>

        </section>


    );
};

export default Home;
