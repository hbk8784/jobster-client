import React, { useState } from "react";
import { BarCharts, AreaCharts } from "../components";
import Wrapper from "../assets/wrapper/ChartsContainer";
import { useSelector } from "react-redux";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);

  return (
    <Wrapper>
      <h4>Monthly Applicatoin</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {/* {barChart ? <BarCharts data={data} /> : <AreaCharts data={data} />} */}
    </Wrapper>
  );
};

export default ChartsContainer;
