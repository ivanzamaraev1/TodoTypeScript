import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <div>
            <h1>About Page</h1>
            <p>Lorem ipsum dolo r sit, amet consectetur adipisicing elit. Vel commodi eligendi quam consequuntur exercitationem praesentium sint sequi corporis hic ut, non accusantium distinctio ex quis officia eos magnam? Id, quae?</p>
            <button className='btn' onClick={() => history.push('/')}>Go back</button>
        </div>
        
    )
}
