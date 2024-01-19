import React from 'react'
const information = [
  {
    sectionClass: 'Capabilities',
    title: 'Highlight the most crucial clauses in the documents'
  },
  {
    sectionClass: 'Capabilities',
    title: 'Highlight the most crucial clauses in the documents'
  },
  {
    sectionClass: 'Capabilities',
    title: 'Highlight the most crucial clauses in the documents'
  },
  {
    sectionClass: 'Limitations',
    title: 'Highlight the most crucial clauses in the documents'
  },
  {
    sectionClass: 'Limitations',
    title: 'Highlight the most crucial clauses in the documents'
  }
  ,
  {
    sectionClass: 'Examples',
    title: 'Highlight the most crucial clauses in the documents'
  },
  {
    sectionClass: 'Examples',
    title: 'Highlight the most crucial clauses in the documents'
  },
  {
    sectionClass: 'Examples',
    title: 'Highlight the most crucial clauses in the documents'
  }
]

const Item = ({ sectionClass }: { sectionClass: string }) => {
  return (
    <>
      {
        information.map(obj => {
          if (obj.sectionClass === `${sectionClass}`) {
            return (
              <div id='info'>
                <h4>{obj.title}</h4>
              </div>
            );
          };
        })
      }
    </>
  )
}

export default Item