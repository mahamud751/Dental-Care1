import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Members from '../Members/Members';
import './Team.css'

import image from '../../21.png'


const Team = () => {
    const [membersId, setMembersId] = useState([])
    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setMembersId(data))
    }, [])


    return (
        <div>
            <div className="mt-5">
                <h1>Team Members</h1>
                <img className="img-fluid" src={image} alt="" style={{ height: "500px" }} />
                <div>
                    <Row xs={1} md={4} className="g-4 p-4">
                        {
                            membersId.map(member => <Members
                                key={member.name}
                                member={member}
                            ></Members>)
                        }
                    </Row>
                </div>





            </div>


        </div>
    );
};

export default Team;