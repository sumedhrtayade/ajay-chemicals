import React from 'react'

const products = [
  {code:'AC-101', name:'Solvent A', pack:'Drum 200L', desc:'General-purpose solvent used in coatings.'},
  {code:'AC-202', name:'Surfactant B', pack:'IBC 1000L', desc:'Emulsifier for personal care formulations.'},
  {code:'AC-303', name:'Intermediate C', pack:'Bag 25kg', desc:'API intermediate for pharma manufacturing.'},
]

export default function Products(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Products</h1>
      <p className="text-slate-600 mt-2">Sample product listings (dummy data).</p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {products.map((p,idx)=>(
          <div className="card" key={idx}>
            <h3 className="font-semibold text-blue-700">{p.name}</h3>
            <div className="text-sm text-slate-500">{p.code} • {p.pack}</div>
            <p className="text-sm text-slate-600 mt-3">{p.desc}</p>
            <div className="mt-4"><button className="px-3 py-2 border rounded text-blue-700">Enquire</button></div>
          </div>
        ))}
      </div>
    </section>
  )
}
