
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WebDevCart from './WebDevCart';
// import { useState } from 'react';s

const Category = () => {
    // const [webCategory, setWebCategory] = useState([])
    // console.log(webCategory)
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='my-20'>
            <div className='text-center mb-10'>
                <h1 data-aos="fade-down" className='text-3xl font-bold'>Browse By <span className='text-[#63B916]'>Category</span></h1>
                <p data-aos="fade-right">Aperiam the eaque ipsa quae abillo was inventore veritatis keret quasi aperiam architecto <br />
                    beatae explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Web Development</Tab>
                    <Tab>Digital Marketing</Tab>
                    <Tab>Graphics Design</Tab>
                </TabList>

                <TabPanel>
                  

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            data?.filter(d => d.category === "web development").map((category, idx) => <WebDevCart key={idx} category={category}></WebDevCart>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                 

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            data?.filter(d => d.category === "digital marketing").map((category, idx) => <WebDevCart key={idx} category={category}></WebDevCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
 
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            data?.filter(d => d.category === "graphics design").map((category, idx) => <WebDevCart key={idx} category={category}></WebDevCart>)
                        }
                    </div>
                </TabPanel>
            </Tabs>



            {/*  */}
            {/* <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs> */}
            {/*  */}
        </div>
    );
};

export default Category;