import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='my-20'>
            <div className='text-center mb-10'>
                <h1 className='text-3xl'>Browse By Category</h1>
                <p>Aperiam the eaque ipsa quae abillo was inventore veritatis keret quasi aperiam architecto <br />
                    beatae explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <Tabs >
                <TabList>
                    <Tab>Web Development</Tab>
                    <Tab>Digital Marketing</Tab>
                    <Tab>Graphics Design</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>

            cdcd

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