import React, { useEffect, useRef } from "react";
import * as d3 from 'd3';

export const BarPlot = ({data, width = 600, height = 600}) => {
  const barPlotRef = useRef();

  const margin = { top:10, left:50, bottom: 40, right: 10};
  const iwidth = width - margin.left - margin.right;
  const iheight = height - margin.top - margin.bottom;

  useEffect(() => {
    const svg = d3
      .select(barPlotRef.current)
      .attr("width", width)
      .attr("height", height);

    let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([iheight, 0])

    const x = d3.scaleBand()
      .domain(data.map(d => d.name)) 
      .range([0, iwidth])
      .padding(0.1);

    const bars = g.selectAll("rect").data(data);

    bars.enter().append("rect")
      .attr("class", "bar")
      .style("fill", "steelblue")
      .attr("x", d => x(d.name))
      .attr("y", d => y(d.height))
      .attr("height", d => iheight - y(d.count))
      .attr("width", x.bandwidth())

    g.append("g")
      .classed("x--axis", true)
      .call(d3.axisBottom(x))
      .attr("transform", `translate(0, ${iheight})`);  
      
    g.append("g")
      .classed("y--axis", true)
      .call(d3.axisLeft(y));
  })

  return (
    <div id="barplot">
      <svg ref={barPlotRef} />
    </div>
  )
}