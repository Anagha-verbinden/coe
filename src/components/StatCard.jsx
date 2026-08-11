import React from 'react'

const StatCard = ({icon:Icon,value,label}) => {
  return (
    <div className='stat-card'>
      <div className="stat-icon">
        <Icon size={40}/>
      </div>
      <div className="stat-context">
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
}

export default StatCard;
