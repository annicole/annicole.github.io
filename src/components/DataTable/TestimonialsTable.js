import React from "react";

export default function TestimonialsTable({ testimonials }) {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <tbody>
        {testimonials.map((row) => {
          return (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-12 h-8 px-2">
                <div className="flex items-center">
                  <img className="mx-2" src={row.track.icon_url} />
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {row.mentor.handle}
              </th>
              <td className="px-6 py-4">Sliver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
