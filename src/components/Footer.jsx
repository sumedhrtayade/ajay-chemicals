import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-slate-50 border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800">Ajay Chemicals</h3>
          <p className="text-sm text-slate-600 mt-2">A demo corporate site template. Replace with real company details and policies.</p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm text-slate-600 mt-2">Prism Road, Industrial Area<br/>Mumbai, India<br/>Phone: +91-22-0000-0000</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick links</h4>
          <ul className="text-sm text-slate-600 mt-2 space-y-2">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-slate-500">© {2025} Ajay Chemicals — Demo</div>
      </div>
    </footer>
  )
}
