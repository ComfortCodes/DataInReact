import React from 'react';

// using predefined or hardcoded data : json.

const data =[
    {
        name : 'Chinhoyi University of Technology',
        web_url : 'www.cut.ac.zw',
        location : 'Mash West',
        speciality : 'Technology'
  },
  {
    name : 'Lupane State University',
    web_url : 'www.lsu.ac.zw',
    location : 'Mat South',
    speciality : 'Agriculture'
},
{
    name : 'Midlands State Univeristy',
    web_url : 'www.msu.ac.zw',
    location : 'Midlands',
    speciality : 'Management'
},
{
    name : 'University of Zimbabwe',
    web_url : 'www.uz.ac.zw',
    location : 'Harare',
    speciality : 'Biosciences'
},
];

function ReactData (props){
    return(
        <div className='container'>
            <h1> Universities in Zimbabwe</h1>
       
       <br/>
       {
           data.map(
              (item, index) =>(
                  <div key={index} className='container-items'>
                  <h2>{item.name}</h2>
                  <p>{item.location},
                  {item.speciality}</p>
                  <br/>
                  <a href={item.web_url}>Website</a>
                  </div>
              )
           )
            }
</div>
    );
        }
export default ReactData;
           
       
    
