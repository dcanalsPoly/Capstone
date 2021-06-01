import './CountryDataTable.css';
import DataTable from 'react-data-table-component';
import React, { useState, useEffect } from 'react';

function CountryDataTable () {

  var fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - 1);
  
  var countries = ["portugal", "south-africa", "thailand", "uruguay", "argentina", "philippines", "bahamas", "jamaica", "taiwan", "greece", "cuba", "panama", "egypt", "norway", "dominican-republic", "guatemala", "south-korea", "venezuela", "israel"];
  const [allData, setAllData] = useState(false);  


  const dataFetch = async () => {
    
      await fetch('https://api.covid19api.com/summary')
          .then(response => response.json())
          .then(data => 
              {   
                  var count = 1;
                  const countryArray = [
                  ];
                
                  data.Countries.forEach(e => {
                    countryArray.push({
                      id: count,
                      country: e.Country,
                      confirmed: e.TotalConfirmed,
                      deaths: e.TotalDeaths,
                      recovered: e.TotalRecovered
                    })
                    count++;
                  }
                );
                setAllData(countryArray);
              });
  };

  useEffect(() => {
      dataFetch();
  }, []);

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
    // {
    //   name: 'Active',
    //   selector: 'active',
    //   sortable: true,
    //   right: true,
    // },
  ];
  // var data = [{ id: 1, country: '...', confirmed: 'knks', deaths: '10k', recovered: '20k', active: '3k'}, {id: 2, country: 'Brazil', confirmed: '3k', deaths: '10k', recovered: '20k', active: '3k'}];
  
  return <div className="table">
    <DataTable title="Summary of Totals" columns={columns} data={allData}/></div>
}
export default CountryDataTable;