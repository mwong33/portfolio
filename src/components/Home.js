import React from 'react'
import Space from '../images/space.jpg'

export default function Home() {
    return (
        <div id="home page-body">
            <div className="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <img alt="Space" src={Space} className="mh-100 mw-100"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
