import React from 'react'
import Posts from '../components/Posts'

export default function Home() {
    return (
        <div className="row justify-content-between">
            <div className="col-lg-7">
                <Posts />
            </div>
            <div className="col-lg-4">
                following
            </div>
        </div>
    )
}
