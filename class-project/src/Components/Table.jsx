import React from 'react'

export default function Table() {
  return (
    <div className='flex flex-col justify-center items-center p-3'>
      <p className='text-2xl font-semibold'>Details: </p>
      <div className="">
        <table className=" border border-separate border-spacing-2 border-red-700">
          <thead>
            <tr>
              <th className="border border-slate-700">Company</th>
              <th className="border border-slate-700">Contact</th>
              <th className="border border-slate-700">Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700">Alfreds Fitterkiste</td>
              <td className="border border-slate-700">Maria Anders</td>
              <td className="border border-slate-700">Germany</td>
            </tr>
            <tr>
              <td className="border border-slate-700">Ankit</td>
              <td className="border border-slate-700">Fransico chang</td>
              <td className="border border-slate-700">India</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
