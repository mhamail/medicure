import React from 'react'
import Href from '@/utils/theme/linkHref/Href'
import ScreenWidth from '@/utils/theme/screenWidth/ScreenWidth'
import Logo1 from '@/utils/theme/logo/Logo1'
import { languagesApi } from '@/utils/languagesApi'

const Footer = () => {
    const handleSelect = (e) => {
        console.log(e.target.value)
    }
    const data = (title, sub) => (
        <div>
            <h4 className='font-bold text-md'>
                {title}
            </h4>
            <div className='mt-2 space-y-2'>
                {sub.map((item, i) => (
                    <p className='text-gray-700 text-sm cursor-pointer hover:text-primaryBold hover:underline' key={i}>
                        {item}
                    </p>
                ))}
            </div>

        </div>
    )
    const footerEndLinks = (items) => (
        items.map((item, i) => (
            <Href to={item.link} key={i} className={`p-0 m-0 text-sm text-gray-600 hover:text-primaryBold hover:underline hover:font-bold w-1/2 md:w-auto`}>
                {item.name}
            </Href>
        ))
    )
    const selectLanguage = () => (
        <div className='w-1/2 md:w-auto'>
            <select className='p-1 m-0 text-sm text-gray-600 bg-white border-none outline-none '
                onChange={handleSelect} >
                <option selected="Languages" disabled hidden>
                    Languages
                </option>
                {languagesApi?.map((lang, i) => (
                    <option key={i}
                        value={lang}
                    >
                        {lang}
                    </option>
                ))}
            </select>
        </div>
    )
    const footerEnd = () => (
        <ScreenWidth>
            <div className='flex flex-wrap items-center justify-between p-4 bg-white gap-y-6'>
                <div className='w-1/2 md:w-auto flex text-primary items-center'>
                    <Logo1 sm /> &nbsp;
                    <span className='text-gray-600 text-xs'>
                        @ 2023
                    </span>
                </div>
                {footerEndLinks([
                    { name: "About", link: "#" },
                    { name: "Accessibility", link: "#" },
                    { name: "User Agreement", link: "#" },
                    { name: "Privacy Policy", link: "#" },
                    { name: "Cookie Policy", link: "#" },
                    { name: "Copyright Policy", link: "#" },
                ])}
                {selectLanguage()}
            </div>
        </ScreenWidth>
    )
    return (
        <div>
            <div className='bg-[#F3F2F0] py-5'>
                <ScreenWidth>
                    <div className={`flex flex-col md:flex-row `}>
                        <div className='w-4/12 '>
                            <Logo1 />
                        </div>
                        <div className='mt-6 md:mt-0 w-8/12 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0'>
                            {data("General", ["Signup", "Help Center", "About"])}
                            {data("Browse LinkedIn", ["Learning", "Jobs", "Salary", "Mobile", "Services", "Products"])}
                            {data("Business Solutions", ["Talent", "Marketing", "Sales", "Learning"])}
                            {data("Directories", ["Members", "Jobs", "Companies", "Featured", "Learning", "Posts", "Articles", "Schools", "News"])}
                        </div>
                    </div>
                </ScreenWidth>
            </div>
            {footerEnd()}
        </div>
    )
}

export default Footer