import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeader";

const index = () => {
  return (
      <section id="resume" className="resume">
             <PageHeader
               headerText="My Resume"
               icon={<BsInfoCircleFill size={40} />}
             />
           </section>
  )
}

export default index
