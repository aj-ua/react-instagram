import React from 'react'
import Posts from '../components/Posts'
import Following from '../components/Following'
import People from '../components/People'

export default function Home() {
    return (
        <div className="row justify-content-between">
            <div className="col-lg-7">
                <Posts />
            </div>
            <div className="col-lg-4">
                <Following />
                <People />
            </div>
        </div>
    )
}
