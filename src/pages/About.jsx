import React from 'react'
export default function About(){
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">About Ajay Chemicals</h1>
      <p className="mt-4 text-slate-600">Ajay Chemicals is a fictional company used for demonstration purposes. Replace all content with your real company information when ready.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="font-semibold text-blue-700">Mission</h3>
          <p className="text-sm text-slate-600 mt-2">Deliver high-quality chemical products with safety and sustainability in focus.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold text-blue-700">Vision</h3>
          <p className="text-sm text-slate-600 mt-2">To be a trusted partner for manufacturers worldwide.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold text-blue-700">Values</h3>
          <p className="text-sm text-slate-600 mt-2">Integrity, Compliance, Customer Success.</p>
        </div>
      </div>
    </section>
  )
}
