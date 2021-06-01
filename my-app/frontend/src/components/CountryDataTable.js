import './CountryDataTable.css';
import DataTable from 'react-data-table-component';
import React, { useState, useEffect } from 'react';

function CountryDataTable () {

  var fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - 1);
  
  var countries = ["portugal", "south-africa", "thailand", "uruguay", "argentina", "philippines", "bahamas", "jamaica", "taiwan", "greece", "cuba", "panama", "egypt", "norway", "dominican-republic", "guatemala", "south-korea", "venezuela", "israel"];
    
  // const dataFetch = async (country) => {
    
  //     await fetch('https://api.covid19api.com/live/country/' + country + '/status/confirmed?from='+ fromDate)
  //         .then(response => response.json())
  //         .then(data => 
  //             {   

  //                 const obj = {
  //                     active: [],
  //                     confirmed: [],
  //                     deaths: [],
  //                     recovered: [],
  //                     dates: [],
  //                     name: '',
  //                 };
                
  //                 data.forEach(e => {
  //                   obj.active.push(e.Active);
  //                   obj.confirmed.push(e.Confirmed);
  //                   obj.deaths.push(e.Deaths);
  //                   obj.recovered.push(e.Recovered);
  //                   obj.dates.push(e.Date.slice(0, 10) + '\n');
  //                   obj.name = e.Country;
  //                   }
  //               );
                      
  //               console.log('ACTIVE', obj.active);
  //               console.log('NAME', obj.name);
  //             });
  // };

  // useEffect(() => {
  //   countries.forEach(e => {
  //       dataFetch(e);
  //   });
  // }, []);

  const columns = [
    {
      name: 'Country',
      selector: 'country',
      sortable: true,
    },
    {
      name: 'Confirmed',
      selector: 'confirmed',
      sortable: true,
      right: true,
    },
    {
      name: 'Deaths',
      selector: 'deaths',
      sortable: true,
      right: true,
    },
    {
      name: 'Recovered',
      selector: 'recovered',
      sortable: true,
      right: true,
    },
    {
      name: 'Active',
      selector: 'active',
      sortable: true,
      right: true,
    },
  ];
  var data = [{ id: 1, country: '...', confirmed: 'knks', deaths: '10k', recovered: '20k', active: '3k'}, {id: 2, country: 'Brazil', confirmed: '3k', deaths: '10k', recovered: '20k', active: '3k'}];
  
  return <div className="table">
    <DataTable title="Summary of Totals" columns={columns} data={data}/></div>
}
export default CountryDataTable;