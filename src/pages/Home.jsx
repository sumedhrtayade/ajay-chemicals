import React from 'react'
import { Link } from 'react-router-dom'

const units = [
  {title:'Distribution', desc:'Pan-India distribution with global logistics partners.'},
  {title:'Contract Manufacturing', desc:'Custom formulation and toll manufacturing services.'},
  {title:'Research & QA', desc:'Quality assurance labs and R&D support.'}
]

const industries = ['Personal Care','Paints & Coatings','Pharma','Food & Nutrition','Water Treatment','Plastics']

export default function Home(){
  return (
    <main>
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">Chemicals · Solutions</span>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-4">Ajay Chemicals — Reliable chemical distribution & manufacturing</h1>
          <p className="mt-4 text-slate-600">Supplying specialty and commodity chemicals with an emphasis on compliance, quality, and timely delivery. This demo mirrors the structure of a corporate site while using placeholder content.</p>

          <div className="mt-6 flex gap-4">
            <Link to="/products" className="btn-primary">Our Products</Link>
            <Link to="/contact" className="px-4 py-2 border border-blue-600 text-blue-700 rounded-lg">Get in touch</Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="card text-center">
              <div className="text-2xl font-bold text-blue-700">100+</div>
              <div className="text-sm text-slate-600">Countries</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-bold text-blue-700">4000+</div>
              <div className="text-sm text-slate-600">Clients</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-bold text-blue-700">300k+</div>
              <div className="text-sm text-slate-600">MT handled</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <img src="https://picsum.photos/640/420?random=31" alt="plant" className="rounded-lg shadow"/>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/320/200?random=32" alt="" className="rounded-lg shadow"/>
            <img src="https://picsum.photos/320/200?random=33" alt="" className="rounded-lg shadow"/>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-slate-900">Business Units</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          {units.map((u,idx)=>(
            <div className="card" key={idx}>
              <h3 className="font-semibold text-blue-700">{u.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-slate-900">Industries we serve</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          {industries.map((it,idx)=>(
            <div className="card" key={idx}>
              <h3 className="font-semibold text-blue-700">{it}</h3>
              <p className="text-sm text-slate-600 mt-2">Support and products tailored for the {it} industry.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-slate-900">Latest updates</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="card">
            <h3 className="font-semibold text-blue-700">Ajay expands export reach</h3>
            <p className="text-sm text-slate-600 mt-2">Ajay Chemicals broadens its network to support new markets.</p>
            <div className="mt-3"><a href="#" className="text-blue-600 font-semibold">Read more →</a></div>
          </div>
          <div className="card">
            <h3 className="font-semibold text-blue-700">New QA lab inaugurated</h3>
            <p className="text-sm text-slate-600 mt-2">State-of-the-art quality labs to support product development.</p>
            <div className="mt-3"><a href="#" className="text-blue-600 font-semibold">Read more →</a></div>
          </div>
          <div className="card">
            <h3 className="font-semibold text-blue-700">Sustainability goals 2030</h3>
            <p className="text-sm text-slate-600 mt-2">Plans to reduce carbon intensity across operations.</p>
            <div className="mt-3"><a href="#" className="text-blue-600 font-semibold">Read more →</a></div>
          </div>
        </div>
      </section>
    </main>
  )
}
