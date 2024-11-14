import React, { useState } from 'react';
import data from "./data.json"; // Adjust path to your JSON file
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

function Test() {
    // set the indexes you want open by default in the initial state
    const [visibleTableCollege, setVisibleTableCollege] = useState([0, 1, 2]);
    const [mainAccordion, setMainAccordion] = useState([0, 1, 2]);

    // toggle individual accordion open/close for main accordion
    const toggleMainAccordion = (index) => {
        setMainAccordion((prev) =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    // toggle individual accordion open/close for college data table
    const toggleCollegeAccordion = (index) => {
        setVisibleTableCollege((prev) =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <div className=' w-[80%]  md:container px-6 md:px-0 mx-auto mt-20 border'>
             {/* header static for all colleges */}
            <div className="px-6 md:px-0 overflow-x-auto  z-50 bg-gray-100 w-[74%] mx-auto md:container fixed top-0  scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-blue-500 scrollbar-track-gray-300">
                <div className=" !w-[74%] mx-auto md:w-[100%]   flex">
                    <div className="head-table flex">
                    <div className="f">대</div>
                    <div className="f">학</div>
                    <div className="f">교 </div>
                    <div className="f">(3)</div>
                    </div>
                    {data.Months.map((month) => (
                        <div key={month.number} className="flex px-9">
                            <div>{month.number}</div>
                            <div>{month.name}</div>
                        </div>
                    ))}
                </div>

            </div>
            {/* data  */}
            <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-black dark:bg-gray-800 text-white dark:text-white">
                {data.Colleges.map((college, customrIndex) => (
                    <div key={customrIndex} className='data-colluage'>
                        <div
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-b-0 rounded-t-xl 
                            dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 
                            dark:hover:bg-gray-800 gap-3"
                        >
                            <span className='text-[#309BF8] font-extrabold'>{college.name}</span>
                            <div
                                className={`rounded-full cursor-pointer ${mainAccordion.includes(customrIndex) ? "bg-black text-white" : ""}`}
                                onClick={() => toggleMainAccordion(customrIndex)}
                            >
                                {mainAccordion.includes(customrIndex)
                                    ? <ExpandCircleDownOutlinedIcon />
                                    : <ExpandCircleDownOutlinedIcon className='transform rotate-180' />}
                            </div>
                        </div>

                        {mainAccordion.includes(customrIndex) && (
                            <div>
                                <div className="p-0 dark:border-gray-700 dark:bg-gray-900 border-b-2 border-t-0">
                                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-3">
                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <thead key={customrIndex} className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                                {/* {customrIndex == 0 && (
                                                
                                                 
                                                    
                                                )} */}
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="w-[220px] flex items-center gap-2 py-3 !bg-white dark:bg-gray-800 cursor-pointer"
                                                        onClick={() => toggleCollegeAccordion(customrIndex)}
                                                    >
                                                        <span className='font-[600]'>연차료 납부대행000</span>
                                                        {visibleTableCollege.includes(customrIndex)
                                                            ? <ArrowDropDownIcon />
                                                            : <ArrowDropUpOutlinedIcon />}
                                                    </th>
                                                    {college.monthly_data.monthly.map((monthData, monthIndex) => (
                                                        <th
                                                            key={monthIndex}
                                                            scope="col"
                                                            className={` py-3 ${monthIndex % 2 === 1 ? "bg-[#F7F7F8]" : "bg-white"}`}
                                                        >
                                                            {monthData}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {visibleTableCollege.includes(customrIndex) && (
                                                    <>
                                                        {data.Colleges.map((college, rowIndex) => (
                                                            <tr key={rowIndex}>
                                                                <td className="relative td-styled px-9 ml-2 border-l-2 border-black py-0 !text-left font-extrabold">{college.TheadMonth}</td>
                                                                {college.monthly_data?.monthly?.map((monthData, monthIndex) => (
                                                                    <td key={monthIndex} className={`px-6 py-3 ${monthIndex % 2 === 1 ? "bg-[#F7F7F8]" : "bg-white"} dark:bg-gray-800`}>
                                                                        {monthData}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </>
                                                )}


                                                <tr className='border-b-2'>
                                                    <td className="px-6 !pl-[16px] py-0 !text-left font-extrabold">{college.TheadPackage}</td>
                                                    {college.package_data?.monthly?.map((monthData, monthIndex) => (
                                                        <td key={monthIndex} className={`px-6 py-3 ${monthIndex % 2 === 1 ? "bg-[#F7F7F8]" : "bg-white"} dark:bg-gray-800`}>
                                                            {monthData}
                                                        </td>
                                                    ))}
                                                </tr>

                                                {data.Colleges.map((college, rowIndex) => (
                                                    <tr key={rowIndex}>
                                                        <td className={`px-6 py-0 !text-left font-extrabold ${rowIndex === 1 ? 'text-red-600' : rowIndex === 2 ? 'text-[#00B51B]' : ''}`}>
                                                            {college.TheadMonth}
                                                        </td>
                                                        {college.sales?.monthly?.map((monthData, monthIndex) => (
                                                            <td key={monthIndex} className={`px-6 py-3 ${monthIndex} ${rowIndex === 1 ? 'text-red-600' : rowIndex === 2 ? 'text-[#00B51B]' : ''} ${monthIndex % 2 === 1 ? "bg-[#F7F7F8]" : "bg-white"} dark:bg-gray-800`}>
                                                                {monthData}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Test;
