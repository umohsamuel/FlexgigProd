import React from 'react'
import imgref from "../../../components/imgref.tsx"

const BestMatches = () => {
  const matches = [
    {
      id: 1,
      title: "UI/UX Designer for macOS Notification App Mockup",
      circle: imgref.green,
      time: "3 hours ago",
      level: "Entry Level",
      description: "Tek Experts is looking for a UI Designer who will be a key player in our Product Development Outsourcing business. Our designers love to learn and have a passion for technology. They’re known for their expertise in solving the most complex UI challenges while having fun and being part of a dynamic and collaborative team.",
      locationIcon: imgref.location,
      location: "Egypt",
      price: '$25k',
      per: "/Fixed Price",
      verification: "Payment verified",
      verificationBar: imgref.verification,
      star: imgref.starshine,
      badge: imgref.badge,
      review: "125 reviews",
      proposal: 'Proposal: 2-5',
      jobType: ['Figma', 'Web design', "User experience", "Graphic design",]
    },
    {
      id: 2,
      title: "UI/UX Designer for macOS Notification App Mockup",
      circle: imgref.green,
      time: "3 hours ago",
      level: "Entry Level",
      description: "Tek Experts is looking for a UI Designer who will be a key player in our Product Development Outsourcing business. Our designers love to learn and have a passion for technology. They’re known for their expertise in solving the most complex UI challenges while having fun and being part of a dynamic and collaborative team.",
      locationIcon: imgref.location,
      location: "Egypt",
      price: '$25k',
      per: "/Fixed Price",
      verification: "Payment verified",
      verificationBar: imgref.verification,
      star: imgref.starshine,
      badge: imgref.badge,
      review: "125 reviews",
      proposal: 'Proposal: 2-5',
      jobType: ['Figma', 'Web design', "User experience", "Graphic design",]
    },
    {
      id: 3,
      title: "UI/UX Designer for macOS Notification App Mockup",
      circle: imgref.green,
      time: "3 hours ago",
      level: "Entry Level",
      description: "Tek Experts is looking for a UI Designer who will be a key player in our Product Development Outsourcing business. Our designers love to learn and have a passion for technology. They’re known for their expertise in solving the most complex UI challenges while having fun and being part of a dynamic and collaborative team.",
      locationIcon: imgref.location,
      location: "Egypt",
      price: '$25k',
      per: "/Fixed Price",
      verification: "Payment verified",
      verificationBar: imgref.verification,
      star: imgref.starshine,
      badge: imgref.badge,
      review: "125 reviews",
      proposal: 'Proposal: 2-5',
      jobType: ['Figma', 'Web design', "User experience", "Graphic design",]
    },
    {
      id: 4,
      title: "UI/UX Designer for macOS Notification App Mockup",
      circle: imgref.green,
      time: "3 hours ago",
      level: "Entry Level",
      description: "Tek Experts is looking for a UI Designer who will be a key player in our Product Development Outsourcing business. Our designers love to learn and have a passion for technology. They’re known for their expertise in solving the most complex UI challenges while having fun and being part of a dynamic and collaborative team.",
      locationIcon: imgref.location,
      location: "Egypt",
      price: '$25k',
      per: "/Fixed Price",
      verification: "Payment verified",
      verificationBar: imgref.verification,
      star: imgref.starshine,
      badge: imgref.badge,
      review: "125 reviews",
      proposal: 'Proposal: 2-5',
      jobType: ['Figma', 'Web design', "User experience", "Graphic design",]
    }
  ]
  const single = matches.map(match => (
    <div key={match.id} className='p-4 md:p-[22px] rounded-2xl md:rounded-lg border border-[#A6A6A8]'>
      <div className="flex justify-between mb-4 ">
        <div className='flex flex-col lg:flex-row gap-1 lg:w-[670px] '>
          <p className='text-[#292B30] font-medium text-lg'>{match.title}</p>
          <div className="flex flex-row gap-2 ">
            <span className='flex items-center gap-2 text-[#B2ADAD] font-normal text-sm '><img src={match.circle} alt="" />{match.time}</span>
            <span className='flex items-center gap-2 text-[#B2ADAD] font-normal text-sm '><img src={match.circle} alt="" />{match.level}</span>
          </div>

        </div>
        <div className='self-center'><img src={match.badge} alt="badge" /></div>
      </div>
      <div className="flex">
        <p className='w-full lg:w-[744px] text-[#646566] text-base font-normal pb-6 border-b md:border-[#CACFDC]'>{match.description}</p>
      </div>
      <div className="flex flex-row flex-wrap justify-between text-[#646566] items-center pt-3 md:pt-6">
        <p className='text-[#FF7A60] font-medium text-2xl pr-2 border-r border-[#646566]'>{match.price}<span className='text-lg'>{match.per}</span></p>
        <p className='flex flex-row  pr-2 border-r border-[#646566]'><img src={match.locationIcon} alt="location" />{match.location}</p>
        <p className="flex  pr-2 border-r border-[#646566]"><img src={match.verificationBar} alt="verificationBar" />{match.verification} </p>
        <p className="flex  pr-2 border-r border-[#646566]"><img src={match.star} alt="star" /><img src={match.star} alt="star" /><img src={match.star} alt="star" /><img src={match.star} alt="star" /><img src={match.star} alt="star" />{match.review}</p>
        <p>{match.proposal}</p>
      </div>
      <div className="flex  flex-row flex-wrap justify-between">
        {match.jobType.map(type =>(
          <div key={match.id} className=''>
            <p className='py-1 px-5 text-[#646566] text-sm font-normal bg-[#ECECEC] rounded-full'>{type}</p>
          </div>
        ))}
      </div>
    </div>
  ))
  return (
    <div className='space-y-8'> 
      {single}
    </div>
  )
}

export default BestMatches
