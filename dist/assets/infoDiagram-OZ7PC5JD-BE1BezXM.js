import{_ as e,l as s,E as n,k as i,F as p}from"./index-kwYZwkip.js";import{p as g}from"./gitGraph-YCYPL57B-B7yRvcPn.js";import"./_baseUniq-DuOfsaGk.js";import"./_basePickBy-BJEBYxCB.js";import"./clone-CLCg_GYl.js";var v={parse:e(async r=>{const a=await g("info",r);s.debug(a)},"parse")},d={version:p},m=e(()=>d.version,"getVersion"),c={getVersion:m},l=e((r,a,o)=>{s.debug(`rendering info diagram
`+r);const t=n(a);i(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${o}`)},"draw"),f={draw:l},E={parser:v,db:c,renderer:f};export{E as diagram};
