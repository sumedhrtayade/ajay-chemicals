import React, {useState} from 'react'

export default function Contact(){
  const [form,setForm]=useState({name:'',email:'',message:''})
  const [status,setStatus]=useState(null)
  function update(e){ setForm({...form,[e.target.name]:e.target.value}) }
  function submit(e){ e.preventDefault(); if(!form.name||!form.email||!form.message){ setStatus({type:'error',msg:'Please fill all fields'}); return } setStatus({type:'ok',msg:'Thanks — demo form received.'}); setForm({name:'',email:'',message:''}) }

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-slate-900">Contact Sales</h1>
      <p className="text-slate-600 mt-2">Use this demo form to capture enquiries (no backend attached).</p>

      <form onSubmit={submit} className="mt-6 grid gap-4">
        <input name="name" value={form.name} onChange={update} placeholder="Your name" className="p-3 border rounded" />
        <input name="email" value={form.email} onChange={update} placeholder="Email" className="p-3 border rounded" />
        <textarea name="message" value={form.message} onChange={update} placeholder="Message" className="p-3 border rounded h-36" />
        <div className="flex items-center gap-4">
          <button className="btn-primary" type="submit">Send enquiry</button>
          {status && <div className={status.type==='error'?'text-red-600':'text-green-600'}>{status.msg}</div>}
        </div>
      </form>
    </section>
  )
}
