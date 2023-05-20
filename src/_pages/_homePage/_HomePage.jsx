import React from 'react'
import FormBanner from '@/__pages-components/__home-page-component/formBanner/FormBanner'
import JobTags from '@/__pages-components/__home-page-component/jobTags/JobTags'
import PostJob from '@/__pages-components/__home-page-component/postJob/PostJob'
import VerticalSlide from '@/__pages-components/__home-page-component/verticalSlide/VerticalSlide'
import ConnectLearn from '@/__pages-components/__home-page-component/connectLearn/ConnectLearn'
import LinkedinFor from '@/__pages-components/__home-page-component/linkedinFor/LinkedinFor'
import Join from '@/__pages-components/__home-page-component/Join/Join'

const _HomePage = () => {
    return (
        <div className='space-y-10 pt-10'>
            <FormBanner />
            <div>
                <JobTags />
                <PostJob />
                <VerticalSlide />
                <ConnectLearn />
                <LinkedinFor />
            </div>
            <Join />
        </div>
    )
}

export default _HomePage