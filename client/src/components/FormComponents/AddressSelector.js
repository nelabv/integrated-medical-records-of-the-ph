import React, { useEffect, useState } from 'react';
import { regions, provinces, cities, barangays } from "select-philippines-address";
import { v4 as uuidv4 } from "uuid";

function AddressSelector(props) {
	const { handleChange, houseNumberStreet, handleHouseNumberStreet } = props;

  const [regionData, setRegion] = useState([]);
  const [provinceData, setProvince] = useState([]);
  const [cityData, setCity] = useState([]);
  const [barangayData, setBarangay] = useState([]);

  const [regionAddr, setRegionAddr] = useState("");
  const [provinceAddr, setProvinceAddr] = useState("");
  const [cityAddr, setCityAddr] = useState("");
  const [barangayAddr, setBarangayAddr] = useState("");



  const region = () => {
      regions().then(response => {
          setRegion(response);
      });
  }

  const province = (e) => {
      setRegionAddr(e.target.selectedOptions[0].text);
      provinces(e.target.value).then(response => {
          setProvince(response);
          setCity([]);
          setBarangay([]);
      });

      handleChange(e, true)
  }

  const city = (e) => {
      setProvinceAddr(e.target.selectedOptions[0].text);
      cities(e.target.value).then(response => {
          setCity(response);
      });

      handleChange(e, true)
  }

  const barangay = (e) => {
      setCityAddr(e.target.selectedOptions[0].text);
      barangays(e.target.value).then(response => {
          setBarangay(response);
      });

      handleChange(e, true)
  }

  const brgy = (e) => {
      setBarangayAddr(e.target.selectedOptions[0].text);

      handleChange(e, true);
  }

  useEffect(() => {
      region()
  }, [])

  return (
    <div>
          <select onChange={province} onSelect={region} id="region" required>
              <option disabled>Select Region</option>
              { regionData && regionData.length > 0 && regionData.map((item) => <option
                      key={uuidv4()} value={item.region_code}>{item.region_name}</option>) }
          </select><br/>


          <select onChange={city} id="province" required>
              <option disabled>Select Province</option>
              { provinceData && provinceData.length > 0 && provinceData.map((item) => <option
                      key={uuidv4()} value={item.province_code}>{item.province_name}</option>) }
          </select><br/>

          <select onChange={barangay} id="city" required>
              <option disabled>Select City</option>
              { cityData && cityData.length > 0 && cityData.map((item) => <option
                      key={uuidv4()} value={item.city_code}>{item.city_name}</option>) }
          </select><br/>

          <select onChange={brgy} id="barangay" required>
              <option disabled>Select Barangay</option>
              { barangayData && barangayData.length > 0 && barangayData.map((item) => <option
                      key={uuidv4()} value={item.brgy_code}>{item.brgy_name}</option>) }
          </select>

          <label>House Number & Street Name</label>
          <input 
            type="text"
            value={houseNumberStreet}
            id="houseNumberStreet"
            style={{textTransform: "uppercase"}}
            onChange={handleHouseNumberStreet}
            required
          />

          <p>Address</p>
          {barangayAddr}, {cityAddr}, {provinceAddr}, {regionAddr}
    </div>
        );
      }

export default AddressSelector;
